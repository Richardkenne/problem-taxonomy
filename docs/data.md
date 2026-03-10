# Problem Taxonomy — Data Sources

## Fonti Dati Interne

| File | Tipo | Entries | Descrizione |
|------|------|---------|-------------|
| `examples.csv` | CSV | 168 | Company database: perspective, company, market, submarket, problem, solution, product |
| `combos.js` | JS | 397 | Lookup table per combo key (problem-solution-product) con nome, URL, descrizione |
| `archetypes-keywords.js` | JS | ~1200 | ~100 keywords per ciascuno dei 12 archetipi |

## API Esterne

| Servizio | Endpoint | Uso | Costo |
|----------|----------|-----|-------|
| OpenAI | `api.openai.com/v1/chat/completions` | Classificazione problemi (gpt-4o-mini, streaming) | ~$0.001/call |

## Copertura Aziende per Archetipo

| Archetipo | # Aziende (approx) | Copertura |
|-----------|-------------------|-----------|
| Coordination | 30+ | Buona |
| Discovery | 25+ | Buona |
| Information Asymmetry | 20+ | Buona |
| Trust | 15+ | Media |
| Infrastructure Gap | 25+ | Buona |
| Process Inefficiency | 30+ | Buona |
| Automation | 10+ | Da espandere |
| Aggregation | 15+ | Media |
| Access Limitation | 25+ | Buona |
| Cost Reduction | 10+ | Da espandere |
| Speed | 15+ | Media |
| New Tech Capability | 10+ | Da espandere |

## Fonti Esterne Consultate
- Crunchbase (struttura dati aziende, round di funding)
- Y Combinator directory (startup per batch e settore)
- a16z portfolio (pattern di investimento per tesi)
- Product Hunt (nuove aziende AI-native 2024-2025)
