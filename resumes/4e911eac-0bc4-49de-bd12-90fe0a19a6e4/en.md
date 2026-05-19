---
locale: en
version: 4e911eac-0bc4-49de-bd12-90fe0a19a6e4
name: Jonathan Cruz
title: Senior Software Developer · AI-Accelerated Engineering
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Software Developer · AI-Accelerated Engineering*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior developer with 10+ years across the full software lifecycle: design, prototyping, development, testing, deployment, and support. AI agent in my daily workflow for over a year — Claude Code with sub-agents, custom skills, MCP integrations, and project-level specifications applied to real production code. Strong React + TypeScript production UIs with concurrent and event-driven backend systems (Node.js, NestJS, PostgreSQL, Redis). Track record of mentoring engineers, leading code reviews, and shipping under real production traffic in regulated environments."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Platform · San Francisco, CA (Remote)*

- **AI-Accelerated Daily Workflow | Claude Code** — Daily user of Claude Code with sub-agent orchestration for parallel exploration and review, custom project skills for repeatable tasks, MCP server integrations, pre/post-tool hooks for guardrails, and project-level `CLAUDE.md` specifications. Apply AI to generate unit tests, draft PR summaries, compose migrations, and assist refactors — measurable impact on cycle time and PR throughput.

> !Claude Code, AI agents, MCP, Sub-agents

- **React + TypeScript Production UIs** — Build admin dashboards, internal operational tools, and stakeholder-facing UIs across an Nx monorepo of dozens of React/Next.js apps. Modern React patterns (hooks, context, Redux-style state), TanStack Query, Zod runtime validation, full TypeScript discipline end-to-end.

> !React, TypeScript, Next.js, Zod

- **Concurrency & Multi-threading | Race-resistant Flows** — Designed race-resistant verify-identity flow with re-check inside `$transaction` to handle "email-free-at-blur → taken-at-submit" edge case (409 EMAIL_NOW_EXISTS). Standardized webhook deduplication via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with PROCESSING/PROCESSED/REJECTED state machine, and API-level idempotency interceptor with 48h TTL.

> !Concurrency, Idempotency, Race conditions

- **Event-Driven Systems | BullMQ + Redis** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base in ledger; 20 retries / 10s base in pubsub). Outbox pattern: persist resolution first, enqueue after — jobs idempotent and survive enqueue failure. Global per-deal ordering via Redis INCR counters with deterministic predecessor lookup.

> !Event-driven, BullMQ, Redis, Outbox

- **SQL & Performance | PostgreSQL Deep** — Operate Postgres via Prisma with schema design, indexing, transaction isolation, and query performance tuning across dozens of microservices. Auxiliary tables with deterministic ordering, deep transactional consistency for compliance-critical writes.

> !PostgreSQL, Prisma, SQL, Transactions

- **Observability | Datadog + Structured Logging** — Integrated Datadog for tracing, metrics, and alerting on critical paths. Designed audit-friendly state machines and append-only auxiliary tables — reconstructable event chains for production debugging and compliance review.

> Datadog, Observability, Logging, Tracing

- **Security & PII | OAuth + Audit** — Implemented OAuth 2.0 flows with refresh-token handling and encrypted credential storage. PII-aware data handling across KYC/EDD, UBO verification, FinCEN integration. Production secure coding practices and OWASP-aligned reviews.

> OAuth 2.0, PII, Security, OWASP

- **Testing | Jest + Playwright + Cucumber BDD** — Built full E2E test suite (Playwright + Cucumber BDD) for QuickBooks integration with mock services. Unit, integration, and E2E tests integrated into CI on every PR.

> Jest, Playwright, Cucumber BDD, E2E

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Cloud Platform · São Paulo*

- **Full-Stack Product | React + Next.js + GraphQL** — Built from scratch a B2B wholesale ordering platform with React Native (mobile), React/Next.js (web), and a GraphQL API layer. Integrated payment flows and credit-limit validation across the stack.

> React Native, Next.js, GraphQL, TypeScript

- **Cloud Deployment | AWS + Docker** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) with serverless React/Next.js apps. Containerized services with Docker for consistent dev-to-prod parity.

> AWS, ECS, Docker, Lambda

- **CI/CD | GitHub Actions** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Real-time Platform · São Paulo*

- **Real-time SDK | Concurrent Connections** — Designed and shipped a chat SDK with React Native and React/Redux on top of XMPP and a Java backend — persistent connections, concurrent connection management, message ordering, low-latency delivery for embedded business use.

> XMPP, Real-time, SDK, Concurrency

- **Consumer Product | React Native + Web3** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, TypeScript, Web3

- **Zero-downtime CI/CD** — Built CI/CD automations ensuring continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Mentorship | Tech Talks Lead** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org.

> !Mentorship, Tech Talks, Microservices

- **Multi-DB Operations | Persistence Selection** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend. Selected MySQL, PostgreSQL, MongoDB per service responsibility with hands-on operational ownership.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Backend Modernization · São Paulo*

- **Legacy Modernization | PHP → Node** — Led migration of a legacy PHP origination platform to Node.js/Express for a student loans product. Modernized API surface while preserving downstream compatibility — same pattern applicable to modernizing legacy .NET Framework codebases.

> !Node.js, Express, Legacy modernization

- **SQL Performance Tuning** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **AI-Accelerated Development:** Claude Code (daily), Sub-agent orchestration, MCP servers, Custom skills/hooks, AI-generated tests, AI-assisted refactors, Prompt engineering, LLM API integration
- **Frontend:** React (hooks, context, Redux), TypeScript, Next.js, React Native, HTML5, CSS3, Web APIs, JSON, REST
- **Backend & APIs:** Node.js, NestJS, ts-rest, Zod, GraphQL, RESTful design, OAuth 2.0
- **Databases:** PostgreSQL (deep), MySQL, MongoDB, Redis, SQL performance tuning, Indexing, Transactions
- **Concurrency & Distributed:** Multi-threading concepts, Race-resistant flows, Idempotency, BullMQ, Outbox pattern, Event-driven workflows
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo
- **Observability & Security:** Datadog, Structured logging, Tracing, Audit trails, OAuth 2.0, PII handling, OWASP basics
- **Quality:** Jest, Playwright, Cucumber BDD, TDD, Unit + Integration + E2E

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
