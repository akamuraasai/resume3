---
locale: en
version: e17272fc-c993-410c-8774-de3bedddb726
name: Jonathan Cruz
title: Senior Software Engineer · Risk & Compliance Systems
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Software Engineer · Risk & Compliance Systems*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior software engineer with 10+ years building fintech and payments platforms with strong emphasis on risk, compliance, and transactional security. Deep hands-on experience with KYC/EDD systems, UBO verification, FinCEN/CTA compliance, idempotency, and audit-friendly event-driven architectures. Strong in microservices on Postgres + cloud (AWS, GCP), CI/CD automation, TDD/BDD, and platform-level patterns that scale across product teams. Mentor and tech lead — comfortable taking ownership of medium-to-large components end-to-end and shipping under hyper-growth conditions."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech for Fund Administration · San Francisco, CA (Remote)*

- **KYC/EDD | Anti-Fraud & Compliance Systems** — Designed and implemented the Enhanced Due Diligence system end-to-end: LP funding blocks, UBO (Ultimate Beneficial Owner) verification, FinCEN integration, CTA compliance, and automatic KYC revalidation for active investors. Built race-resistant verify-identity flow with re-check inside a `$transaction` to handle "email-free-at-blur → taken-at-submit" edge case (409 EMAIL_NOW_EXISTS).

> !KYC, EDD, FinCEN, Anti-fraud

- **Transactional Security | Idempotency at Scale** — Implemented webhook deduplication via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with a PROCESSING/PROCESSED/REJECTED state machine, and an API-level idempotency interceptor with 48h TTL scoped by `(api_user_id, route, idempotency_key)`. Patterns directly applicable to payment fraud detection and transactional integrity at scale.

> !Idempotency, Webhooks, Transactional security

- **Event-driven Architecture | BullMQ + Outbox** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base in ledger; 20 retries / 10s base in pubsub). Outbox pattern: persist resolution first, enqueue after — jobs idempotent and survive enqueue failure. Global per-deal ordering via Redis INCR counters with deterministic predecessor lookup, enabling auditable reconstructable event chains.

> !Event-driven, BullMQ, Outbox, Audit

- **Engineering-led Ownership | ADRs** — Drove Billing V2 design and delivery: wrote the ADR, aligned cross-functional stakeholders (compliance, finance, product), defined the quarterly fee scheduler and billing model versioning, then shipped. Same ownership pattern applied to ts-rest migration, KYC revalidation, and webhook standardization.

> !ADRs, Cross-functional, Tech Lead

- **External Integrations | TDD + BDD Workflows** — Built bidirectional QuickBooks invoice sync with mock service for local dev, state validation, auto-sync on approval, and full E2E suite using Playwright and Cucumber BDD. Worked on Plaid Link integration with processor tokens powering ACH via Treasury Prime — including mock banking engine for local sandbox.

> Cucumber BDD, Playwright, Plaid, Treasury Prime

- **Type-safe Microservices | NestJS Monorepo** — Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas across an Nx monorepo of dozens of NestJS libraries, eliminating contract-mismatch bugs at scale. Built and deployed cloud microservices integrated with Postgres (Prisma), Redis, and external SaaS providers.

> !NestJS, Prisma, Postgres, Redis

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Payments Platform · São Paulo*

- **B2B Payment Flows | Credit Risk Validation** — Built from scratch a wholesale ordering platform with integrated payment flows and per-buyer credit-limit validation, applied during order-to-cash to prevent over-extension. Built with React Native, TypeScript, and GraphQL.

> !React Native, TypeScript, GraphQL, Credit risk

- **Cloud Infrastructure | AWS Operations** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting high-availability B2B workloads. Containerized with Docker; built serverless React/Next.js apps. Owned the operational health of production deployments.

> AWS, ECS, Lambda, Docker

- **CI/CD | Automated Delivery** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Treated release-time toil as an engineering problem — reduced release cycle from weeks to days.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Crypto Consumer Fintech · São Paulo*

- **Crypto Wallet | Web3 Integration** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum. Same fraud/transactional-security mindset as traditional payments — protecting on-chain transactions and self-custodial keys.

> !React Native, TypeScript, Web3, Ethereum

- **Real-time SDK | High-availability Messaging** — Developed a chat SDK for businesses using React Native and React/Redux, powered by XMPP and a Java backend for low-latency real-time messaging across multiple client integrations.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Built CI/CD automations ensuring continuous deployment with no service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Consumer Microservices · São Paulo*

- **Microservices Architecture | Multi-DB Operations** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend across multiple microservices. Selected MySQL, PostgreSQL, or MongoDB per service responsibility and drove DB design decisions across product teams.

> !Microservices, MySQL, PostgreSQL, MongoDB

- **Mentorship | Tech Talks** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted org-wide. Mentor mindset carried into every team since.

> Mentorship, Tech Talks, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Lending Fintech · São Paulo*

- **Loan Origination | Legacy Modernization** — Migrated legacy PHP origination platform to a Node.js/Express backend for a student loans product with governmental funding. Converted manual, error-prone processes into automated, auditable loan request lifecycle, eligibility, and disbursement flows.

> !Node.js, Express, Loan origination

- **Data Layer | Performance Tuning** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for request logs and unstructured data — early experience with data pipelines and processing.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Risk & Compliance:** KYC/EDD, UBO verification, FinCEN, CTA compliance, Idempotency, Webhook deduplication, Audit trails, Transactional security
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL, REST APIs, Microservices
- **Event-Driven & Distributed:** BullMQ, Outbox pattern, Redis, Event ordering, State machines
- **Data & Databases:** PostgreSQL (deep), MySQL, MongoDB, SQL, Query optimization, Schema design
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), TDD, Cucumber BDD, Playwright
- **Leadership:** ADRs, Engineering-led ownership, Cross-functional collaboration, Mentorship, Tech Talks, Interview panels

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
