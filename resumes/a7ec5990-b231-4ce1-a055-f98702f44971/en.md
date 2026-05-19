---
locale: en
version: a7ec5990-b231-4ce1-a055-f98702f44971
name: Jonathan Cruz
title: Senior Backend Tech Lead · Platform & Infrastructure
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Backend Tech Lead · Platform & Infrastructure*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior backend engineer with 10+ years building and operating high-availability platforms across fintech, B2B SaaS, and consumer products. Player-coach with a track record of engineering-led ownership: writing ADRs, driving roadmaps without PMs, mentoring engineers, and shipping infrastructure primitives that other product teams depend on. Strong TypeScript across the stack (NestJS, Postgres, Nx monorepos) with deep experience in event-driven systems, idempotency, outbox patterns, and distributed reliability. Bias for action — prefer relentless execution over endless debate."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Platform · San Francisco, CA (Remote)*

- **Engineering-led Ownership | ADRs Without a PM** — Drove the design and delivery of Billing V2 end-to-end: wrote the ADR, aligned stakeholders across compliance, finance, and product engineering, defined the quarterly fee scheduler, billing model versioning, and admin fee structure UI — then shipped it. Same engineering-led pattern across KYC/EDD, ts-rest migration, and webhook standardization initiatives.

> !ADRs, Engineering-led, Cross-functional

- **Platform Primitives | Event-Driven Reliability at Scale** — Contributed to and extended platform-level patterns used across dozens of NestJS libraries: idempotency interceptor (48h TTL, scoped by `(api_user_id, route, idempotency_key)`), webhook deduplication via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with PROCESSING/PROCESSED/REJECTED state machine, and the outbox pattern in the ledger console (persist resolution first, enqueue after — jobs idempotent and survive enqueue failure).

> !Idempotency, Outbox, Event-driven, Platform

- **Distributed Coordination | BullMQ + Redis** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base in ledger; 20 retries / 10s base in pubsub) and global per-deal ordering via Redis INCR counters with deterministic predecessor lookup (`order - 1`). Patterns directly applicable to high-throughput control planes and event-driven microservices.

> !BullMQ, Redis, Distributed systems

- **Observability & Audit | Production-grade Tooling** — Designed audit-friendly state machines for compliance flows, built reproducible event chains via append-only auxiliary tables with deterministic ordering, and applied structured logging patterns across the platform. Integrated with Datadog for tracing and alerting on critical paths.

> Datadog, Audit logging, Observability

- **Type-safe Contracts | Cross-team Platform Migration** — Led the migration of legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas, eliminating an entire class of contract-mismatch bugs and unlocking faster integration across product teams. Operate inside an Nx monorepo spanning dozens of libraries — coordinated changes without blocking parallel workstreams.

> !ts-rest, Zod, Nx Monorepo

- **External Integrations | Cross-org Delivery** — Built bidirectional QuickBooks invoice sync engine with mock service for local dev, state validation, auto-sync on approval, and full E2E suite with Playwright and Cucumber BDD. Worked on Plaid Link integration with processor tokens powering ACH via Treasury Prime — including a mock banking engine for local sandbox.

> Plaid, Treasury Prime, QuickBooks, REST APIs

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Platform · São Paulo*

- **Cloud Infrastructure | End-to-end Ownership** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting B2B mobile and web workloads. Owned the path from local dev (Docker) through CI/CD (GitHub Actions, Fastlane, Code Climate) to production, with serverless React/Next.js apps.

> !AWS, ECS, Docker, Lambda

- **Mobile Platform | Cross-platform Foundation** — Built from scratch a wholesale ordering platform with integrated payment flows and credit-limit validation, delivering React Native + TypeScript + GraphQL infrastructure that other product engineers extended over four years.

> React Native, TypeScript, GraphQL

- **Delivery Pipeline | Reducing Toil** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days by eliminating manual coordination and treating release-time toil as an engineering problem.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Real-time Consumer Platform · São Paulo*

- **Real-time Messaging | SDK Architecture** — Designed and shipped a chat SDK consumed by multiple business clients, with React Native and React/Redux on top of XMPP and a Java backend — handling persistent connections, message ordering, and low-latency delivery for embedded use cases. Same architectural concerns as modern WebSocket platforms.

> !XMPP, Real-time, SDK, Persistent connections

- **Crypto Product | Web3 Integration** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, Web3, Ethereum

- **Zero-downtime Deploys | CI/CD** — Built CI/CD automations ensuring continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, Zero-downtime

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Raising the Bar | Tech Talks & Mentorship** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns that were adopted across the engineering org — acting as a technical force multiplier across multiple product teams.

> !Mentorship, Tech Talks, Microservices

- **Multi-DB Operations | Persistence Selection** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend. Drove DB selection per service responsibility — MySQL, PostgreSQL, MongoDB — with hands-on operational ownership for each.

> MySQL, PostgreSQL, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Legacy Modernization · São Paulo*

- **Platform Migration | PHP → Node** — Led migration of a legacy PHP origination platform to a Node.js/Express backend for a student loans product with governmental funding, modernizing the API surface while preserving downstream consumer compatibility.

> !Node.js, Express, Legacy migration

- **Database Performance | Query Optimization** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs and request tracing.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Platform & Distributed Systems:** Event-driven architectures, Outbox pattern, Idempotency, Webhook deduplication, BullMQ, Redis, Distributed ordering, Nx Monorepo, ADRs
- **Backend:** TypeScript, NestJS, Node.js, Prisma, ts-rest, Zod, GraphQL, REST APIs, Microservices
- **Databases:** PostgreSQL (deep), MySQL, MongoDB, Query optimization, Schema design
- **Infrastructure & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), GitOps-adjacent workflows
- **Observability:** Datadog, Structured logging, Audit trails, State-machine instrumentation
- **Leadership:** Engineering-led product ownership, Cross-functional collaboration, Mentorship, Stakeholder alignment without a PM

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
