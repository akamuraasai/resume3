---
locale: en
version: 2e8dc467-ff0f-496b-8c18-3289ac07cc98
name: Jonathan Cruz
title: Senior Software Engineer · Full-Stack & Customer Platforms
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Software Engineer · Full-Stack & Customer Platforms*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior full-stack engineer with 10+ years building consumer and B2B products across web and mobile. Strong in TypeScript end-to-end — React, React Native, NestJS, Postgres — with deep experience in microservices, REST API design, event-driven architecture, and automated testing (TDD, Cucumber BDD, Playwright). Comfortable partnering with non-engineering stakeholders to translate operational pain into shipped tools. Daily user of AI coding tools (Claude Code with sub-agents and skills) — actively exploring opportunities to apply LLMs to internal-ops and customer-facing workflows."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Platform · San Francisco, CA (Remote)*

- **AI Engineering | Claude Code in Production** — Daily user of Claude Code with sub-agent orchestration, custom skills, project-level CLAUDE.md specifications, and pre/post-tool hooks for guardrails. Apply LLMs for code generation, automated review, and test scaffolding. Actively exploring applying agent-based workflows to internal-ops tooling.

> !Claude Code, Agentic workflows, LLM, AI

- **Internal Tools | Cross-team Partnership** — Designed and shipped admin UIs and operational tools for compliance and finance teams: Billing V2 admin (quarterly fee scheduler, billing model versioning), KYC/EDD revalidation flows, and the QuickBooks bidirectional invoice sync engine. Partnered directly with non-technical stakeholders through structured discovery and ADRs — same pattern as building tools for a Community Support org.

> !Internal tools, ADRs, Cross-functional

- **Full-Stack TypeScript | NestJS + React** — Operate across an Nx monorepo of dozens of NestJS libraries and React/Next.js apps. Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas — eliminating contract-mismatch bugs and improving end-to-end developer experience.

> !TypeScript, NestJS, React, ts-rest

- **Automated Testing | TDD + Cucumber BDD** — Built full E2E test suite for QuickBooks integration using Playwright and Cucumber BDD with mock services for local dev, plus a mock banking engine for Plaid + Treasury Prime ACH flows. Tests run in CI on every PR.

> !Playwright, Cucumber BDD, E2E testing, CI

- **Event-driven Reliability | BullMQ + Outbox** — Standardized event delivery using BullMQ Pro with exponential backoff and the outbox pattern (persist resolution first, enqueue after). Implemented webhook deduplication and an API-level idempotency interceptor used by all teams in the monorepo.

> BullMQ, Outbox, Idempotency, Redis

- **External Integrations | SaaS APIs** — Built and maintained bidirectional integrations with third-party SaaS providers (QuickBooks, Plaid, Treasury Prime) — including state validation, auto-sync on approval, and mock services for local sandbox. Transferable to integrating Contact Center, Knowledge Base, and Voice platforms.

> QuickBooks, Plaid, Treasury Prime, REST APIs

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Customer-facing Platform · São Paulo*

- **Consumer Mobile + Web | Full-Stack** — Built from scratch a wholesale ordering platform with React Native, TypeScript, and GraphQL, including integrated payment flows and credit-limit validation for thousands of business partners. Customer-facing scale across mobile and web.

> !React Native, TypeScript, GraphQL

- **AWS Infrastructure | Operational Ownership** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) with serverless React/Next.js apps. Containerized services with Docker. Owned the operational health of customer-facing production deployments.

> AWS, ECS, Docker, Lambda

- **CI/CD | Reducing Toil** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Treated release-time toil as an engineering problem — reduced release cycle from weeks to days.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Consumer Real-time Platform · São Paulo*

- **Real-time Messaging SDK | Embedded Use Cases** — Designed and shipped a chat SDK with React Native and React/Redux on top of XMPP and a Java backend — handling persistent connections, message ordering, and low-latency delivery for businesses embedding chat into their own apps. Same architectural concerns as community/support messaging platforms.

> !XMPP, Real-time, SDK, Persistent connections

- **Crypto Consumer Product | React Native + Web3** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, TypeScript, Web3

- **Zero-downtime Deploys | CI/CD** — Built CI/CD automations ensuring continuous deployment with no service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Consumer Microservices · São Paulo*

- **Mentorship | Leading by Example** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org.

> !Mentorship, Tech Talks, Microservices

- **Microservices | Multi-DB** — Built the consumer-healthcare product foundation with React, Redux, and Node.js/TypeScript backend. Selected MySQL, PostgreSQL, MongoDB per service responsibility and drove DB design across teams.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Legacy Modernization · São Paulo*

- **PHP → Node | Platform Migration** — Migrated legacy PHP loan origination platform to Node.js/Express backend for a student loans product with governmental funding, modernizing API surface while preserving downstream compatibility.

> !Node.js, Express, Legacy migration

- **Database Performance | Schema & Indexing** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for request logs and unstructured data.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Full-Stack:** TypeScript, React, React Native, Next.js, NestJS, Node.js, GraphQL, REST APIs, ts-rest, Zod
- **Testing & Quality:** TDD, Cucumber BDD, Playwright, Unit + Integration + E2E, Code reviews
- **AI Engineering:** Claude Code, Sub-agent orchestration, Agentic workflows, LLM-based code review and testing, Spec-driven development
- **Backend & Data:** PostgreSQL, MySQL, MongoDB, Prisma, Microservices, Event-driven, BullMQ, Redis, Outbox pattern, Idempotency
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo
- **Real-time:** Chat SDK, XMPP, Persistent connections, Hasura GraphQL subscriptions
- **Leadership:** Cross-functional collaboration, ADRs, Mentorship, Tech Talks, Stakeholder discovery

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
