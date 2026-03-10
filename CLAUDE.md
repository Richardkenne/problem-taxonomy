# Problem Taxonomy — Project Context

## What
Interactive web framework that maps 12 universal startup problem archetypes to real companies, solution models, and product forms. Helps founders systematically discover startup opportunities instead of guessing.

## Stack
- **Frontend**: Vanilla HTML/CSS/JS (no frameworks, no build step)
- **Data**: Static CSV (`examples.csv`) + JS objects (`combos.js`)
- **AI Classification**: OpenAI gpt-4o-mini via Cloudflare Worker (`worker.js`)
- **Deploy**: Cloudflare Pages (static) + Cloudflare Workers (API)
- **Languages**: English + Italian (localStorage toggle)

## Key Files
| File | Role |
|------|------|
| `problems.html` | Main page: 12 archetypes grid + AI classifier + examples |
| `startup-framework.html` | Interactive VC/Founder flow with dropdowns |
| `atlas.html` | Visual matrix: problem × solution × product |
| `prompt.html` | MVP prompt generator (last step in pipeline) |
| `why.html` | Foundational essay on the two discovery models |
| `examples.csv` | ~168 company entries (perspective, market, problem, solution, product) |
| `combos.js` | ~400 entries lookup by combo key `problem-solution-product` |
| `archetypes-keywords.js` | ~100 keywords per archetype for classification |
| `worker.js` | Cloudflare Worker — streams AI classification response |
| `wrangler.toml` | Worker deploy config |

## Data Model
- **12 Problems** (indices 0-11): Coordination, Discovery, Information Asymmetry, Trust, Infrastructure Gap, Process Inefficiency, Automation, Aggregation, Access, Cost, Speed, New Tech
- **6 Solutions** (indices 12-17): Marketplace, SaaS, Platform, Infrastructure, Automation, DataNetwork
- **6 Products** (indices 18-23): Mobile App, Web App, API, AI Tool, Platform, Hardware
- **Combo key**: `problemIdx-solutionIdx-productIdx` (e.g. `0-12-18` = Coordination+Marketplace+MobileApp)

## User Flow
`problems.html` → explore archetypes / AI classify → `startup-framework.html` or `atlas.html` → `prompt.html` (MVP prompt generation, always last)

## Deploy
```bash
# Worker
npx wrangler deploy worker.js

# Static site — push to main, Cloudflare Pages auto-deploys
git push origin main
```

## Rules
- Keep vanilla JS — no frameworks, no build tools
- All company data lives in `examples.csv` + `combos.js` — keep them in sync
- Worker uses `OPENAI_KEY` secret (set via `wrangler secret put OPENAI_KEY`)
- Bilingual: every UI string needs EN + IT version
- prompt.html is always the LAST page in the pipeline
