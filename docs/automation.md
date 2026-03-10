# Problem Taxonomy — Automazioni

## Attive

| Automazione | Frequenza | Script/Endpoint | Cosa fa | Costo |
|-------------|-----------|-----------------|---------|-------|
| Cloudflare Worker | On-demand | `worker.js` → `problem-classifier.richardbotsiokennedy.workers.dev` | Classifica problema via OpenAI streaming | ~$0.001/call (OpenAI) |
| Cloudflare Pages | On git push | Auto-deploy su push a `main` | Deploy sito statico | $0 (free tier) |

## Da Implementare

- [ ] GitHub Action per validare CSV/JS data integrity su PR
- [ ] Cron job per controllare che le URL aziendali in combos.js siano ancora raggiungibili
- [ ] Analytics tracking (Plausible o CF Analytics)
