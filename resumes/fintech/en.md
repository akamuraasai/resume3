---
locale: en
version: fintech
name: Jonathan Cruz
title: Senior Backend & Payments Engineer
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Backend & Payments Engineer*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior software engineer with over 10 years of experience building fintech and payments infrastructure. Deep expertise in transactional Postgres, double-entry ledgers, KYC/EDD compliance, and integrations with banking and identity providers (Plaid, Treasury Prime). Strong TypeScript across the stack with NestJS, Prisma, and event-driven architectures designed for fault tolerance, idempotency, and auditability."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech for VC Fund Administration · San Francisco, CA (Remote)*

- **Double-Entry Ledger | Postgres** — Contributed to a proprietary double-entry ledger engine (Fragment) with append-only immutable entries, deterministic idempotency keys (`{entry-type}-{primary-id}-{context}`), derived balances (never stored as source of truth), and minor-unit integer accounting with banker's rounding. Posting flow is event-driven and fully reconstructable from source events.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Worked on Plaid Link integration (createLinkToken → exchangePublicToken → access_token) with processor tokens powering ACH transfers via Treasury Prime. Built a mock banking engine for the local sandbox with idempotency tracking by application/account IDs.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Compliance** — Designed and implemented Enhanced Due Diligence including LP funding blocks, UBO verification, FinCEN integration, CTA compliance, and automatic KYC revalidation for active investors. Built race-resistant verify-identity flow with re-check inside a `$transaction` to handle "email-free-at-blur → taken-at-submit" edge cases (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Webhook Idempotency | Concurrency** — Implemented webhook dedup via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with PROCESSING/PROCESSED/REJECTED state machine, and an API-level idempotency interceptor with 48h TTL scoped by `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Fault Tolerance | BullMQ Outbox** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base in ledger; 20 retries / 10s base in pubsub). Outbox pattern: persist resolution first, enqueue after — jobs are idempotent and survive enqueue failure. Global per-deal ordering via Redis INCR counters with deterministic predecessor lookup (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Architecture** — Designed (ADR) and implemented fund billing V2 with quarterly fee scheduler, billing model versioning, and administrative fee structure management.

> !ts-rest, Zod, NestJS

- **QuickBooks | Integration** — Built bidirectional invoice sync engine with mock service for local dev, state validation, auto-sync on approval, and full E2E test suite with Playwright and Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Type-safe Contracts** — Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas, improving type safety end-to-end.

> TypeScript, Zod, ts-rest

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Payments & Wholesale · São Paulo*

- **B2B Payments | Mobile** — Built from scratch a wholesale ordering app with integrated payment flows and credit-limit validation for business partners, using React Native, TypeScript, and GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Deployed full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) with serverless web apps using React and Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automation** — Configured end-to-end delivery pipeline with GitHub Actions, Fastlane, and Code Climate for quality control. Docker for local dev.

> GitHub Actions, Fastlane, Docker

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Crypto Consumer Fintech · São Paulo*

- **Crypto Wallet | Web3** — Built a mobile + web app bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum for self-custodial wallets and on-chain transactions.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Real-time** — Developed a chat SDK for businesses using React Native and React/Redux, powered by XMPP and a Java backend for real-time messaging.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Built CI/CD automations ensuring continuous deployment with no service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Consumer Healthcare · São Paulo*

- **Healthcare Platform | React** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend for healthcare services sold via Google Ads, including lead capture, eligibility checks, and provider matching.

> !React, Redux, Node.js, TypeScript

- **Mentorship | Tech Talks** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture. MySQL, PostgreSQL, and MongoDB depending on service responsibility.

> Microservices, CircleCI, MongoDB

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Student Loans Fintech · São Paulo*

- **Loan Origination | Node** — Migrated legacy PHP loan origination platform to a Node.js/Express backend for a student loans product with governmental funding, handling loan request lifecycle, eligibility, and disbursement flows.

> !Node.js, Express, Loans, PHP

- **Database | Optimization** — Restructured PostgreSQL transactional tables with improved schemas and indexes for loan ledger entries. MongoDB for loan requests and logs. Frontend with React and Redux.

> PostgreSQL, MongoDB, React, Redux

## Core Skills {#skills}

- **Payments & Fintech:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Double-entry ledgers, Idempotency, Webhooks
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Reliability:** BullMQ, Outbox pattern, Event ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Infrastructure:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
