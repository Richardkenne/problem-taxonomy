const SYSTEM_PROMPT = `You are an expert startup problem analyst trained on 12 core problem archetypes.

The 12 archetypes are:
1. Coordination Problem
2. Discovery Problem
3. Information Asymmetry
4. Trust Problem
5. Infrastructure Gap
6. Process Inefficiency
7. Automation Gap
8. Aggregation Problem
9. Access Limitation
10. Cost Reduction
11. Speed/Latency
12. New Capability

Given a problem statement, respond in EXACTLY this format (no deviations):

Themes: [3-5 implied themes, comma separated]

Possible archetypes:
→ [Archetype Name] ([confidence %]) — [one short sentence why, max 10 words]
→ [Archetype Name] ([confidence %]) — [one short sentence why, max 10 words]
→ [Archetype Name] ([confidence %]) — [one short sentence why, max 10 words]

Best match: [Archetype Name]

Rules:
- Always output exactly 3 possible archetypes, ordered by confidence (highest first)
- Confidence percentages must sum to roughly 100%
- Each line starts with →
- "Best match:" must be on its own line at the end (same as highest confidence)
- No intro sentence, no conclusion, no extra text
- Be direct and specific, not generic`;

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400 });
    }

    const text = (body.text || '').trim();
    if (!text) return new Response('Missing text', { status: 400 });

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.OPENAI_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        stream: true,
        max_tokens: 300,
        temperature: 0.4,
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: text }
        ]
      })
    });

    if (!openaiRes.ok) {
      const err = await openaiRes.text();
      return new Response(`OpenAI error: ${err}`, { status: 502 });
    }

    // Stream SSE from OpenAI → client
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    (async () => {
      const reader = openaiRes.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split('\n');
        buf = lines.pop();
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') { await writer.close(); return; }
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content;
            if (delta) await writer.write(encoder.encode(delta));
          } catch {}
        }
      }
      await writer.close();
    })();

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'X-Content-Type-Options': 'nosniff',
      }
    });
  }
};
