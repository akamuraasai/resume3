---
locale: de
version: fintech
name: Jonathan Cruz
title: Senior Backend & Payments Engineer
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brasilien"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Backend & Payments Engineer*

- 📍 São Paulo, Brasilien
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profil {#profile}

"Senior Software Engineer mit über 10 Jahren Erfahrung im Aufbau von Fintech- und Payments-Infrastruktur. Tiefgreifende Expertise in transaktionalem Postgres, Double-Entry-Ledgern, KYC/EDD-Compliance und Integrationen mit Banking- und Identitätsanbietern (Plaid, Treasury Prime). Starke TypeScript-Kenntnisse über den gesamten Stack mit NestJS, Prisma und event-getriebenen Architekturen, ausgelegt auf Fehlertoleranz, Idempotenz und Auditierbarkeit."

## Berufserfahrung {#experience}
*Ausgewählte Positionen & Beiträge*

### Full-Stack Software Engineer @ Sydecar
*Mai 2023 — Heute*
*Fintech für VC-Fondsverwaltung · San Francisco, CA (Remote)*

- **Double-Entry Ledger | Postgres** — Beteiligung an einer proprietären Double-Entry-Ledger-Engine (Fragment) mit append-only unveränderlichen Einträgen, deterministischen Idempotenzschlüsseln (`{eintragstyp}-{primär-id}-{kontext}`), abgeleiteten Salden (nie als Source of Truth gespeichert) und Buchhaltung in Ganzzahlen kleinster Einheit mit Banker's Rounding. Buchungsablauf ist event-getrieben und vollständig aus Quellereignissen rekonstruierbar.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Arbeit an der Plaid-Link-Integration (createLinkToken → exchangePublicToken → access_token) mit Processor Tokens für ACH-Überweisungen via Treasury Prime. Aufbau einer Mock-Banking-Engine für die lokale Sandbox mit Idempotenz-Tracking über Application/Account IDs.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Compliance** — Entwurf und Implementierung des Enhanced-Due-Diligence-Systems inklusive LP-Funding-Blocks, UBO-Verifizierung, FinCEN-Integration, CTA-Compliance und automatischer KYC-Revalidierung für aktive Investoren. Race-resistenter Verify-Identity-Flow mit Re-Check innerhalb einer `$transaction` für den Fall "E-Mail-frei-bei-blur → genommen-bei-submit" (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Idempotenz | Nebenläufigkeit** — Implementierung der Webhook-Deduplizierung via `IncomingWebhookEvent` (unique `(event_id, vendor)`) mit Zustandsautomat PROCESSING/PROCESSED/REJECTED sowie eines Idempotenz-Interceptors auf API-Ebene mit 48h-TTL, gescoped per `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Fehlertoleranz | BullMQ-Outbox** — Standardisierung der Event-Zustellung mit BullMQ Pro und exponentiellem Backoff (5 Retries / 3s Basis im Ledger; 20 Retries / 10s Basis im Pubsub). Outbox-Muster: Resolution zuerst persistieren, dann enqueuen — Jobs sind idempotent und überstehen Enqueue-Fehler. Globale Ordnung pro Deal über Redis-INCR-Counter mit deterministischem Predecessor-Lookup (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Architektur** — Entwurf (ADR) und Implementierung von Fund-Billing V2 mit quartalsweisem Fee-Scheduler, Versionierung von Billing-Modellen und administrativer Gebührenstrukturverwaltung.

> !ts-rest, Zod, NestJS

- **QuickBooks | Integration** — Aufbau einer bidirektionalen Invoice-Sync-Engine mit Mock-Service für lokale Entwicklung, Zustandsvalidierung, Auto-Sync bei Freigabe und vollständiger E2E-Testsuite mit Playwright und Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Type-safe Verträge** — Migration von Legacy-Controllern (auth, onboarding, admin) zu type-safe ts-rest-Verträgen mit Zod-Schemas und End-to-End-Typsicherheit.

> TypeScript, Zod, ts-rest

### Senior Software Engineer @ Zax
*Jan 2019 — Mai 2023*
*B2B-Payments & Großhandel · São Paulo*

- **B2B Payments | Mobile** — Eigenständige Entwicklung einer Großhandels-App mit integrierten Zahlungsflüssen und Kreditlimit-Validierung für Geschäftspartner mit React Native, TypeScript und GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Bereitstellung der vollständigen Cloud-Infrastruktur auf AWS (EC2, ECS, S3, Lambda, VPCs) mit serverlosen Web-Apps unter React und Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automatisierung** — Konfiguration einer End-to-End-Delivery-Pipeline mit GitHub Actions, Fastlane und Code Climate für Qualitätssicherung. Docker für die lokale Entwicklung.

> GitHub Actions, Fastlane, Docker

### Senior Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Krypto Consumer-Fintech · São Paulo*

- **Krypto-Wallet | Web3** — Mobile- und Web-App, die Kryptowährungen für ein breites Publikum zugänglich macht, mit React Native und TypeScript sowie Web3-Smart-Contracts auf Ethereum für selbstverwahrende Wallets und On-Chain-Transaktionen.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Echtzeit** — Entwicklung eines Chat-SDKs für Unternehmen mit React Native und React/Redux, gestützt auf XMPP und ein Java-Backend für Echtzeit-Messaging.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Aufbau von CI/CD-Automatisierungen für unterbrechungsfreie Deployments. PostgreSQL mit Hasura als GraphQL-Schicht.

> PostgreSQL, Hasura, CI/CD

### Senior Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Consumer Healthcare · São Paulo*

- **Healthcare-Plattform | React** — Aufbau der Produktbasis mit React, Redux und einem Node.js/TypeScript-Backend für Gesundheitsdienste, die über Google Ads vertrieben wurden, inklusive Lead-Erfassung, Eligibility-Checks und Provider-Matching.

> !React, Redux, Node.js, TypeScript

- **Mentoring | Tech Talks** — Leitung interner Tech Talks zu RESTful Design, Funktionaler Programmierung und Microservices-Architektur. MySQL, PostgreSQL und MongoDB je nach Service-Verantwortlichkeit.

> Microservices, CircleCI, MongoDB

### Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Fintech für Studienkredite · São Paulo*

- **Kreditvergabe | Node** — Migration einer Legacy-PHP-Plattform zur Kreditvergabe auf ein Node.js/Express-Backend für ein Studienkredit-Produkt mit staatlicher Förderung, inklusive Lifecycle, Bonitätsprüfung und Auszahlungsflüssen.

> !Node.js, Express, Loans, PHP

- **Datenbank | Optimierung** — Restrukturierung der transaktionalen PostgreSQL-Tabellen mit verbesserten Schemata und Indizes für Kredit-Ledger-Einträge. MongoDB für Kreditanträge und Logs. Frontend mit React und Redux.

> PostgreSQL, MongoDB, React, Redux

## Kernkompetenzen {#skills}

- **Payments & Fintech:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Double-Entry-Ledger, Idempotenz, Webhooks
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Zuverlässigkeit:** BullMQ, Outbox-Pattern, Event Ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Infrastruktur:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Ausbildung {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Informationstechnologie · Jan 2016 — Jul 2018*

## Sprachen {#languages}

- **Portugiesisch:** Muttersprache
- **Englisch:** C1/C2
- **Deutsch:** Grundkenntnisse
