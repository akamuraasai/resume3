---
locale: en
version: 6b105e2b-4b80-47e8-ad65-4e47cac7c79b
name: Jonathan Cruz
title: Senior Full-Stack Engineer · Internal Platform & DevEx
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Full-Stack Engineer · Internal Platform & DevEx*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior full-stack engineer with 10+ years building internal platforms, developer tooling, and stakeholder-facing dashboards that engineering teams trust day-to-day. Deep TypeScript across the stack — React, Next.js, NestJS, Postgres — with strong async/event-driven systems (BullMQ, outbox), REST APIs, and Datadog observability. Daily user of AI coding tools (Claude Code with sub-agents, custom skills, MCP integrations, hooks) — actively shaping how an engineering team adopts and operates AI workflows. Care about developer experience: clean APIs, predictable automation, and clear feedback loops."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Platform · San Francisco, CA (Remote)*

- **AI Engineering | Production Claude Code Usage** — Daily user of Claude Code with sub-agent orchestration, MCP server integrations, custom project skills, pre/post-tool hooks for guardrails, and project-level `CLAUDE.md` specifications. Apply spec-driven workflows for code generation, eval-style review, and automated testing. Shape how the team adopts AI tooling.

> !Claude Code, MCP, Sub-agents, AI tooling

- **Internal Tools & Dashboards | React + Next.js** — Built admin UIs, dashboards, and operational tools for internal stakeholders — Billing V2 admin (quarterly fee scheduler, billing model versioning), KYC/EDD revalidation flows, compliance dashboards. Worked across an Nx monorepo of dozens of NestJS libraries and React/Next.js apps.

> !React, Next.js, Internal tools, Dashboards

- **Async Workflows & Job Queuing | BullMQ + Outbox** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base; 20 retries / 10s base for pubsub). Outbox pattern: persist resolution first, enqueue after — jobs idempotent and survive enqueue failure. Global per-deal ordering via Redis INCR counters with deterministic predecessor lookup.

> !BullMQ, Outbox, Async, Job queuing

- **Clean REST APIs | Type-safe Contracts** — Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas, eliminating contract-mismatch bugs and giving consumer teams a predictable, self-documenting API surface. Same DevEx mindset transfers to internal platform APIs.

> !REST APIs, ts-rest, Zod, DevEx

- **Observability | Datadog + Audit Trails** — Integrated Datadog for tracing and alerting on critical paths. Designed audit-friendly state machines and append-only auxiliary tables with deterministic ordering for reproducible event chains. Same observability discipline applies to ML pipeline monitoring.

> Datadog, Observability, Audit

- **Quality & Validation | TDD + Cucumber BDD** — Built full E2E test suite for QuickBooks integration using Playwright and Cucumber BDD with mock services. Treated tests, evaluation, and validation as first-class delivery concerns — runs in CI on every PR.

> Playwright, Cucumber BDD, Validation

- **Cross-team Collaboration | Engineering-led Ownership** — Drove Billing V2 design and delivery end-to-end without a PM, partnering with compliance, finance, and product teams. Documented decisions via ADRs and project-level conventions. Acted as a supportive resource for engineers integrating with platform primitives (idempotency interceptor, webhook dedup, outbox).

> ADRs, Cross-functional, Documentation

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Cloud Platform · São Paulo*

- **Cloud Infrastructure | AWS Operations** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting high-availability workloads. Containerized services with Docker for consistent dev-to-prod parity. Owned operational health of production deployments end-to-end.

> AWS, ECS, Docker, Lambda

- **Full-Stack Product | React Native + Next.js + GraphQL** — Built from scratch a B2B wholesale ordering platform with React Native (mobile), React/Next.js (web), and GraphQL API layer.

> React Native, Next.js, GraphQL, TypeScript

- **Delivery Automation | CI/CD** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days by treating release-time toil as an engineering problem.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Real-time Platform · São Paulo*

- **Real-time Streaming | SDK Architecture** — Designed and shipped a chat SDK with React Native and React/Redux on top of XMPP and a Java backend — persistent connections, message ordering, low-latency delivery. Same primitives as modern streaming AI responses and real-time observability feeds.

> !XMPP, Real-time, SDK, Streaming

- **Crypto Consumer Product | React Native + Web3** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, TypeScript, Web3

- **Zero-downtime CI/CD** — Built CI/CD automations ensuring continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Mentorship | Tech Talks** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org — sharing knowledge generously to grow the team together.

> !Mentorship, Tech Talks, Microservices

- **Microservices | Multi-DB** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend. Selected MySQL, PostgreSQL, and MongoDB per service responsibility and drove DB design across teams.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Backend & Data · São Paulo*

- **Legacy Modernization | PHP → Node** — Led migration of legacy PHP origination platform to Node.js/Express for a student loans product, modernizing API surface while preserving downstream compatibility.

> !Node.js, Express, Legacy migration

- **Database Performance | Schema & Indexing** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs and request data.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Full-Stack:** TypeScript, React, Next.js, React Native, NestJS, Node.js, GraphQL, REST APIs, ts-rest, Zod
- **AI Engineering:** Claude Code (daily), Sub-agent orchestration, MCP servers, Custom skills/hooks, Spec-driven development, Prompt engineering, LLM workflows
- **Async & Job Queuing:** BullMQ, Outbox pattern, Redis, Event ordering, Idempotency, Webhook deduplication
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo
- **Data:** PostgreSQL (deep), MySQL, MongoDB, Prisma, Query optimization, Schema design
- **Observability:** Datadog, Structured logging, Audit trails, State-machine instrumentation
- **Quality:** TDD, Cucumber BDD, Playwright, E2E/unit/integration testing
- **DevEx & Collaboration:** Internal tooling, ADRs, Documentation, Mentorship, Cross-functional partnership

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
