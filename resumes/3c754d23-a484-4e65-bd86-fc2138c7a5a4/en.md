---
locale: en
version: 3c754d23-a484-4e65-bd86-fc2138c7a5a4
name: Jonathan Cruz
title: Senior Software Engineer · Full-Stack Cloud Platforms
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Software Engineer · Full-Stack Cloud Platforms*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior software engineer with 10+ years designing and delivering large-scale cloud-based platforms end-to-end. Full-stack expertise in TypeScript across the stack — Node.js, NestJS, React, React Native — with deep experience in REST API design, OAuth 2.0/JWT, microservices, PostgreSQL (and MySQL/MongoDB/Redis), Docker, CI/CD, and APM with Datadog. Active practitioner of LLM-powered workflows in production using Claude Code. Mentor and tech lead who has guided engineers from junior to senior, set technical direction across cross-functional squads, and consistently shipped complex features end-to-end."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Cloud Platform · San Francisco, CA (Remote)*

- **LLM-powered Workflows | Claude Code in Production** — Daily user of Claude Code with sub-agent orchestration, custom skills, project-level CLAUDE.md specifications, and pre/post-tool hooks for guardrails. Integrated LLM-powered review, test scaffolding, and code generation into the development workflow — production-ready prompt engineering and AI-feature integration.

> !LLM, AI integration, Prompt engineering

- **Microservices Architecture | NestJS + REST + OAuth/JWT** — Operate across an Nx monorepo of dozens of NestJS microservices and React/Next.js apps. Designed and delivered the Enhanced Due Diligence system (KYC, UBO, FinCEN, CTA) end-to-end and led Billing V2 architecture via ADRs without a PM. Built type-safe ts-rest + Zod contracts across services. JWT-based auth and API key authentication.

> !NestJS, REST, OAuth/JWT, Microservices

- **Cloud-based Platform | Prisma + Postgres at Scale** — Built and operated platform services on PostgreSQL with Prisma — schema design, indexing, query optimization, transactional consistency. Auxiliary tables with deterministic ordering via Redis INCR counters. Datadog for tracing and alerting on critical paths.

> !PostgreSQL, Prisma, Redis, Datadog

- **Reliability & Performance | Event-driven Patterns** — Standardized event delivery using BullMQ Pro with exponential backoff and the outbox pattern (persist resolution first, enqueue after — jobs idempotent, survive enqueue failure). Webhook deduplication via state machines and API-level idempotency interceptor (48h TTL).

> BullMQ, Outbox, Idempotency, Reliability

- **Mentorship & Technical Direction | Cross-functional Squads** — Mentor mid-to-entry engineers through code reviews, ADRs, and pair sessions. Drove cross-functional alignment with compliance, finance, and product teams without a PM — communicating architectural tradeoffs to technical and non-technical audiences.

> !Mentorship, ADRs, Cross-functional

- **Quality & Automation | TDD + Cucumber BDD + Playwright** — Built full E2E test suite for QuickBooks integration using Playwright and Cucumber BDD with mock services. Integrated unit, integration, and E2E tests into CI/CD running on every PR. Treated quality as a first-class delivery concern.

> Playwright, Cucumber BDD, CI/CD

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Cloud Platform · São Paulo*

- **Cloud Hosting | AWS Production Operations** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting high-availability B2B workloads. Containerized services with Docker; built serverless React/Next.js apps. Owned the operational health of production deployments.

> !AWS, ECS, Docker, Lambda

- **Full-Stack Product | React Native + TypeScript + GraphQL** — Built from scratch a wholesale ordering platform with integrated payment flows and credit-limit validation for business partners. React Native for mobile, React/Next.js for web, GraphQL API layer.

> React Native, TypeScript, GraphQL

- **CI/CD & Build Automation | Quality Gates** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days. Static code analysis integrated into every PR.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Consumer Cloud Product · São Paulo*

- **Real-time SDK | Multi-tenant Embedded Use** — Designed and shipped a chat SDK for businesses to embed in their apps using React Native, React/Redux, XMPP, and a Java backend. Handled persistent connections, message ordering, and low-latency delivery. Same architectural concerns as customer-facing real-time platforms.

> !XMPP, Real-time, SDK, Persistent connections

- **Crypto Consumer Product | Web3** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, TypeScript, Web3

- **Zero-downtime Deploys | CI/CD** — Built CI/CD automations ensuring continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Mentorship | Tech Talks** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org.

> !Mentorship, Tech Talks, Microservices

- **Multi-DB Operations | Persistence Selection** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend. Drove DB selection per service — MySQL, PostgreSQL, MongoDB — with hands-on operational ownership for each.

> MySQL, PostgreSQL, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Backend Platform · São Paulo*

- **Legacy Modernization | PHP → Node** — Led migration of legacy PHP origination platform to Node.js/Express backend for a student loans product with governmental funding. Modernized API surface while preserving downstream compatibility.

> !Node.js, Express, Legacy migration

- **Database Performance | Schema & Indexing** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Full-Stack:** TypeScript, Node.js, NestJS, React (hooks, context, Redux), Next.js, React Native, GraphQL
- **APIs & Auth:** REST API design, OAuth 2.0, JWT, ts-rest, Zod, Microservices patterns
- **Databases:** PostgreSQL (deep), MySQL, MongoDB, Redis, Query optimization, Schema design
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo, Git
- **AI Engineering:** Claude Code, LLM API integration, Prompt engineering, Sub-agent orchestration, Agentic workflows
- **Observability & Performance:** Datadog, Structured logging, Debugging multi-tier systems
- **Quality:** TDD, Cucumber BDD, Playwright, Unit + Integration + E2E testing
- **Leadership:** Mentorship, ADRs, Cross-functional squads, Technical direction, Code reviews

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
