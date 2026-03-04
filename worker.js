const SYSTEM_PROMPT = `You are an expert startup problem analyst trained on 12 core problem archetypes.

The 12 archetypes are:
1. Coordination Problem — people/parties can't coordinate or align (scheduling, matching, network effects)
2. Discovery Problem — people can't find what they need (search, recommendations, visibility)
3. Information Asymmetry — one side knows more than the other (opacity, hidden data, insider advantage)
4. Trust Problem — parties willing to transact are blocked by lack of trust (verification, reputation, fraud)
5. Infrastructure Gap — the underlying system/network doesn't exist yet (pipes, rails, standards)
6. Process Inefficiency — existing workflow works but is too slow/manual/fragmented (ops, admin, bureaucracy)
7. Automation Gap — repetitive human work that could be automated (data entry, scheduling, reporting)
8. Aggregation Problem — value is fragmented across many sources and needs consolidating (comparison, marketplaces)
9. Access Limitation — something valuable exists but most people can't reach it (cost, geography, credentials)
10. Cost Reduction — the solution exists but is 10x too expensive (pricing, efficiency, commoditization)
11. Speed/Latency — the solution exists but is too slow (real-time, instant, on-demand)
12. New Capability — something was impossible before and now is possible (new tech enables new behavior)

When given a problem statement, reason through it like this:
- What themes and implications does this statement carry? (go beyond the literal words — infer context, causes, consequences)
- Which archetypes could plausibly apply, and why? (consider at least 3-4, even unexpected ones)
- Which is the strongest fit and why?

Format your response as plain text, conversational but analytical. Use → to indicate archetype names.
Keep it to 6-8 lines max. No markdown headers. No bullet points. Just flowing reasoning.
End with a clear "Best match: [Archetype Name]" on its own line.`;

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
