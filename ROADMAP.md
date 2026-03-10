# Problem Taxonomy — ROADMAP

## Completato
- [x] 12 problem archetypes con definizioni, segnali, esempi
- [x] AI Classifier con streaming (Cloudflare Worker + OpenAI gpt-4o-mini)
- [x] Classifier mostra inferenza in tempo reale + 3 match con percentuali + barre animate
- [x] Card cliccabili (intera card, non solo bottone)
- [x] Startup Framework (doppio percorso VC/Founder con dropdowns interattivi)
- [x] Atlas — matrice visuale problem × solution × product
- [x] MVP Prompt generator (prompt.html) — copia/download/edit
- [x] Why page — saggio fondativo bilingue
- [x] Bilingual EN/IT support (localStorage toggle)
- [x] ~252 aziende uniche nel database (examples.csv + combos.js)
- [x] Bottone "Generate MVP Prompt →" in Framework concept card
- [x] Rimosso "Generate MVP Prompt" da problems.html (solo Proceed with Framework/Atlas)

## In Corso
- [ ] Aggiunta bottone "Generate MVP Prompt →" in Atlas
- [ ] Espansione database aziende (copertura più ampia per archetipo)
- [ ] Documentazione progetto (docs/)

## Problemi da Risolvere
- Atlas manca il bottone per generare MVP prompt dopo selezione
- Alcuni archetipi hanno pochi esempi rispetto ad altri (es. Automation, New Tech Capability)
- No analytics per tracciare l'uso del tool

## Prossimi Step (Prioritizzati)
1. **Atlas MVP prompt button** — completare il flusso end-to-end
2. **+50 aziende** — bilanciare copertura per archetipo, aggiungere 2024-2025 companies
3. **SEO & meta tags** — OG images, meta descriptions per condivisione
4. **Mobile polish** — responsive refinements su tutte le pagine
5. **Analytics** — Cloudflare Analytics o Plausible per usage tracking
6. **Sharing** — possibilità di condividere una combinazione specifica via URL
7. **Export PDF** — generare un one-pager dal prompt MVP
8. **API pubblica** — endpoint per classificare problemi programmaticamente

## Infrastruttura
- **Hosting**: Cloudflare Pages (static site)
- **API**: Cloudflare Workers (problem-classifier.richardbotsiokennedy.workers.dev)
- **AI**: OpenAI gpt-4o-mini (streaming, ~300 token/call, ~$0.001/call)
- **Domain**: TBD (attualmente servito da Cloudflare Pages default URL)
- **Cost**: ~$0/mese (tutto nel free tier Cloudflare + OpenAI usage minimo)
