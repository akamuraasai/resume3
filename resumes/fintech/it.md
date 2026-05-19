---
locale: it
version: fintech
name: Jonathan Cruz
title: Senior Backend & Payments Engineer
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brasile"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Backend & Payments Engineer*

- 📍 São Paulo, Brasile
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profilo {#profile}

"Senior software engineer con oltre 10 anni di esperienza nella costruzione di infrastrutture fintech e di pagamento. Profonda esperienza in Postgres transazionale, ledger a partita doppia, compliance KYC/EDD e integrazioni con provider bancari e di identità (Plaid, Treasury Prime). Solida competenza TypeScript su tutto lo stack con NestJS, Prisma e architetture event-driven progettate per fault tolerance, idempotenza e auditabilità."

## Esperienza Professionale {#experience}
*Ruoli e Contributi Selezionati*

### Ingegnere Software Full-Stack @ Sydecar
*Mag 2023 — Presente*
*Fintech per l'Amministrazione di Fondi VC · San Francisco, CA (Remoto)*

- **Ledger Partita Doppia | Postgres** — Ho contribuito a un motore proprietario di ledger a partita doppia (Fragment) con voci immutabili append-only, chiavi di idempotenza deterministiche (`{tipo}-{id-primario}-{contesto}`), saldi derivati (mai memorizzati come source of truth) e contabilità in interi di unità minima con arrotondamento bancario. Il flusso di registrazione è event-driven e completamente ricostruibile dagli eventi sorgente.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Ho lavorato sull'integrazione Plaid Link (createLinkToken → exchangePublicToken → access_token) con processor token per trasferimenti ACH tramite Treasury Prime. Ho costruito un mock banking engine per la sandbox locale con tracking dell'idempotenza per application/account ID.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Compliance** — Ho progettato e implementato il sistema Enhanced Due Diligence inclusi blocco funding LP, verifica UBO, integrazione FinCEN, conformità CTA e rivalidazione automatica KYC per investitori attivi. Ho costruito un flusso verify-identity resistente alle race condition con re-check dentro `$transaction` per gestire il caso "email-libera-al-blur → presa-al-submit" (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Idempotenza | Concorrenza** — Ho implementato la deduplicazione dei webhook tramite `IncomingWebhookEvent` (unique `(event_id, vendor)`) con macchina a stati PROCESSING/PROCESSED/REJECTED, e un interceptor di idempotenza a livello API con TTL di 48h scopato per `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Fault Tolerance | Outbox BullMQ** — Ho standardizzato la consegna di eventi usando BullMQ Pro con backoff esponenziale (5 retry / 3s base nel ledger; 20 retry / 10s base nel pubsub). Pattern outbox: prima persistere la resolution, poi accodare — i job sono idempotenti e sopravvivono a fallimenti di enqueue. Ordinamento globale per deal tramite contatori Redis INCR con lookup deterministico del predecessore (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Architettura** — Ho progettato (ADR) e implementato il sistema di billing V2 per fondi con scheduler trimestrale di commissioni, versioning dei modelli di fatturazione e pagina amministrativa di struttura delle fee.

> !ts-rest, Zod, NestJS

- **QuickBooks | Integrazione** — Ho costruito un motore di integrazione bidirezionale per la sincronizzazione di fatture con mock service per dev locale, validazione di stato, sync automatica in approvazione e suite completa di test E2E con Playwright e Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Contratti Type-safe** — Ho migrato controller legacy (auth, onboarding, admin) a contratti type-safe ts-rest con schemi Zod, migliorando la sicurezza dei tipi end-to-end.

> TypeScript, Zod, ts-rest

### Senior Software Engineer @ Zax
*Gen 2019 — Mag 2023*
*Pagamenti B2B & Ingrosso · San Paolo*

- **Pagamenti B2B | Mobile** — Ho sviluppato da zero un'app di ordini all'ingrosso con flussi di pagamento integrati e validazione del limite di credito per i partner commerciali, usando React Native, TypeScript e GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Ho distribuito un'infrastruttura cloud completa su AWS (EC2, ECS, S3, Lambda, VPC) con siti web serverless utilizzando React e Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automazione** — Ho configurato una pipeline di delivery end-to-end con GitHub Actions, Fastlane e Code Climate per il controllo qualità. Docker per lo sviluppo locale.

> GitHub Actions, Fastlane, Docker

### Senior Software Engineer @ Netlolo
*Set 2018 — Gen 2019*
*Fintech Cripto Consumer · San Paolo*

- **Wallet Cripto | Web3** — Ho creato un'app mobile e web di criptovalute per il pubblico generale con React Native e TypeScript, integrando smart contract Web3 su Ethereum per wallet self-custodial e transazioni on-chain.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Tempo Reale** — Ho sviluppato un SDK di chat per aziende usando React Native e React/Redux, alimentato da XMPP e backend Java per messaggistica in tempo reale.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Ho costruito automazioni CI/CD garantendo deploy continuo senza interruzioni di servizio. PostgreSQL con Hasura come layer GraphQL.

> PostgreSQL, Hasura, CI/CD

### Senior Software Engineer @ Escale
*Gen 2018 — Set 2018*
*Sanità Consumer · San Paolo*

- **Piattaforma Sanitaria | React** — Ho costruito le fondamenta del prodotto con React, Redux e un backend Node.js/TypeScript per servizi sanitari venduti via Google Ads, inclusa cattura lead, check di idoneità e matching dei provider.

> !React, Redux, Node.js, TypeScript

- **Mentorship | Tech Talks** — Ho guidato Tech Talks interni su design RESTful, Programmazione Funzionale e architettura a Microservizi. MySQL, PostgreSQL e MongoDB a seconda delle responsabilità di servizio.

> Microservizi, CircleCI, MongoDB

### Software Engineer @ PraValer
*Giu 2017 — Gen 2018*
*Fintech di Credito Studentesco · San Paolo*

- **Origine del Credito | Node** — Ho migrato una piattaforma legacy di origine del credito in PHP a un backend Node.js/Express per un prodotto di prestiti studenteschi con finanziamento governativo, gestendo ciclo di vita della richiesta, idoneità e flussi di erogazione.

> !Node.js, Express, Loans, PHP

- **Database | Ottimizzazione** — Ho ristrutturato tabelle PostgreSQL transazionali con schemi e indici ottimizzati per voci di ledger di prestito. MongoDB per richieste di prestito e log. Frontend con React e Redux.

> PostgreSQL, MongoDB, React, Redux

## Competenze {#skills}

- **Pagamenti & Fintech:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Ledger partita doppia, Idempotenza, Webhook
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Affidabilità:** BullMQ, Outbox pattern, Event ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Infrastruttura:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Formazione {#education}

### Anhanguera
*Laurea in Tecnologie dell'Informazione · Gen 2016 — Lug 2018*

## Lingue {#languages}

- **Portoghese:** Madrelingua
- **Inglese:** C1/C2
- **Italiano:** Base
