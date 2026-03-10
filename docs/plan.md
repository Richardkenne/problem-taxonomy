# Problem Taxonomy — Plan

## Cosa Stiamo Costruendo
Un framework interattivo web che mappa 12 archetipi di problema startup → modelli di soluzione → forme di prodotto → aziende reali. Include AI classifier per analisi automatica.

## Perché
I fondatori perdono tempo a cercare idee nel modo sbagliato. Questo tool trasforma la scoperta di opportunità da brainstorming casuale a processo sistematico basato su pattern empirici.

## Decisioni Chiave

### Architettura
- **Vanilla JS, no framework** — massima semplicità, zero build step, caricamento istantaneo
- **Static-first** — tutto il contenuto è client-side, l'unica API è il classifier
- **Cloudflare stack** — Pages + Workers, tutto nel free tier

### Design
- **Minimal, Apple-like** — font system-ui, colori neutri, blue accent (#1e5ad7)
- **Progressive disclosure** — prima i 12 problemi, poi drill-down, poi prompt alla fine
- **Bilingual** — EN default, IT toggle, nessuna libreria i18n (inline JS objects)

### Data
- **CSV + JS statico** — no database, no backend, dati committed nel repo
- **~250 aziende** — reali, verificate, mix di classic (Uber, Stripe) e modern (Cursor, Perplexity)
- **Combo lookup** — chiave composita `problem-solution-product` per lookup O(1)

### AI
- **OpenAI gpt-4o-mini** — buon rapporto qualità/costo per classificazione
- **Streaming** — mostra l'inferenza in tempo reale per UX migliore
- **Percentuali** — confidence score per ogni match, somma ~100%

## Fase Attuale
Fase 2 (Enhancement) — le feature core sono tutte funzionanti. Ora si lavora su:
- Completare il flusso Atlas → Prompt
- Espandere il database aziende
- Polish UX + documentazione
