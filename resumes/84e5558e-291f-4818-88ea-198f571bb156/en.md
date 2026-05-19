---
locale: en
version: 84e5558e-291f-4818-88ea-198f571bb156
name: Jonathan Cruz
title: Senior Forward Deployed Engineer · AI Agents & Automation
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Forward Deployed Engineer · AI Agents & Automation*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior engineer with 10+ years shipping consumer and B2B fintech products end-to-end. Daily practitioner of agentic AI engineering — Claude Code with sub-agent orchestration, custom skills, hooks, and project-level specifications — applied to real production codebases. Strong TypeScript across the stack (NestJS, React/React Native, Postgres) with deep experience in fintech compliance, payments, and event-driven systems. Comfortable embedding with non-technical stakeholders to translate manual processes into reliable automated workflows, and partnering across org lines to ship outcomes rather than tickets."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Consumer Fintech · San Francisco, CA (Remote)*

- **Agentic AI Engineering | Claude Code in Production** — Daily user of Claude Code with sub-agent orchestration for parallel exploration and review, custom skills for repeatable workflows, pre/post-tool hooks for guardrails, and project-level `CLAUDE.md` specifications encoding architectural rules. Apply spec-driven development for code generation, regression-style review, and test scaffolding — pairing LLM execution with knowledge-centric project context to keep iteration speed high without sacrificing quality.

> !Claude Code, Agentic workflows, Sub-agents, Spec-driven

- **Cross-functional Discovery | Translating Manual Processes** — Partnered directly with compliance officers to translate manual KYC/EDD workflows into reliable automated systems: LP funding blocks, UBO verification, FinCEN integration, CTA compliance, automatic KYC revalidation. Led discovery sessions, produced technical scopes (ADRs), and embedded with non-technical SMEs from requirements through production deployment.

> !Compliance, KYC, ADRs, Discovery

- **AI-driven Reliability | Eval & Guardrails Patterns** — Built race-resistant verify-identity flow with re-check inside `$transaction` to handle "email-free-at-blur → taken-at-submit" edge case (409 EMAIL_NOW_EXISTS). Standardized webhook idempotency via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with PROCESSING/PROCESSED/REJECTED state machine. Apply the same discipline — invariants, retries, audit-friendly state machines — to AI-driven flows.

> !Idempotency, Concurrency, Audit logging

- **Event-driven Systems | Outbox + BullMQ** — Standardized event delivery using BullMQ Pro with exponential backoff (5 retries / 3s base in ledger; 20 retries / 10s base in pubsub). Outbox pattern: persist resolution first, enqueue after — jobs idempotent and survive enqueue failure. Global per-deal ordering via Redis INCR with deterministic predecessor lookup. Patterns directly applicable to agentic pipelines requiring resilience and auditability.

> !BullMQ, Outbox, Redis, Event-driven

- **External Integrations | SaaS APIs** — Built bidirectional QuickBooks invoice sync engine with state validation, auto-sync on approval, and full E2E suite (Playwright, Cucumber BDD). Worked on Plaid Link integration with processor tokens powering ACH via Treasury Prime, including a mock banking engine for local sandbox. Comfortable owning end-to-end integration with third-party SaaS stacks.

> Plaid, Treasury Prime, QuickBooks, REST APIs

- **Type-safe Architecture | NestJS Monorepo** — Designed (ADR) and implemented Billing V2 with quarterly fee scheduler and billing model versioning. Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas. Operate inside an Nx monorepo with dozens of NestJS libraries — same stack profile as modern microservice-oriented orgs.

> !NestJS, Nx, ts-rest, Zod

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Embedded Commerce · São Paulo*

- **Embedded Financial Workflows | Mobile + Web** — Built from scratch a wholesale ordering app with integrated payment flows and credit-limit validation for business partners, delivering embedded financial services to thousands of frontline B2B users with React Native, TypeScript, and GraphQL.

> !React Native, TypeScript, GraphQL

- **Cloud Infrastructure | AWS** — Deployed full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) with serverless React/Next.js apps. Containerized services with Docker for consistent dev-to-prod parity.

> AWS, Next.js, Docker, Serverless

- **Delivery Excellence | CI/CD** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days.

> GitHub Actions, Fastlane, Docker

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Consumer Mobile Fintech · São Paulo*

- **Consumer Mobile Product | React Native** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum. Shipped to non-technical end users with attention to onboarding and trust.

> !React Native, TypeScript, Web3

- **Real-time Systems | SDK** — Developed a chat SDK for businesses using React Native and React/Redux, powered by XMPP and a Java backend. Designed for embedding into other teams' apps — same force-multiplier mindset as forward-deployed work.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Built CI/CD automations for continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Consumer Healthcare · São Paulo*

- **Empowering Other Engineers | Tech Talks** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the org — acting as a technical force multiplier inside a non-engineering-led environment.

> !Mentorship, Tech Talks, Microservices

- **Microservices | Multi-DB** — Built the product foundation with React, Redux, and a Node.js/TypeScript backend. Selected appropriate persistence per service responsibility (MySQL, PostgreSQL, MongoDB) and drove DB design decisions across teams.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Consumer Lending Fintech · São Paulo*

- **Process Automation | Legacy Modernization** — Migrated legacy PHP loan origination platform to a Node.js/Express backend for a student loans product with governmental funding. Converted manual, error-prone steps into automated, auditable flows for loan request lifecycle, eligibility, and disbursement.

> !Node.js, Express, Process automation

- **Database | Performance Tuning** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for request logs and unstructured data.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **AI Engineering:** Claude Code, Sub-agent orchestration, Agentic workflows, Spec-driven development, LLM-based code review and testing, Prompt engineering, Project-level skills/hooks
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, REST APIs, ts-rest, Zod, GraphQL, Microservices
- **Mobile & Web:** React, Next.js, React Native, TanStack Query
- **Reliability:** BullMQ, Outbox pattern, Idempotency, Redis, Audit logging, Datadog
- **Cloud & Infra:** AWS, GCP, Docker, CI/CD, Nx Monorepo, Git
- **Collaboration:** ADRs, Cross-functional discovery, Stakeholder workshops, Mentorship

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
