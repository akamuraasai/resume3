---
locale: en
version: 8b73c1d9-ee79-491d-9dc8-5dfca7fb6024
name: Jonathan Cruz
title: Senior Full-Stack Developer · Enterprise & Compliance Applications
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Full-Stack Developer · Enterprise & Compliance Applications*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior full-stack developer with 10+ years building enterprise-scale applications across compliance-critical, multi-stakeholder environments. Deep expertise in React/Redux, Node.js, PostgreSQL with Prisma ORM, and REST API design — with proven experience migrating legacy platforms to modern stacks, integrating with shared services (auth, data exchange), and rigorous security/audit practices. Track record of partnering with subject matter experts to translate regulatory requirements (KYC/EDD, FinCEN, CTA) into shipped systems. Active practitioner of AI-augmented development with Claude Code, and a long-standing mentor across product teams."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Compliance Platform · San Francisco, CA (Remote)*

- **Compliance & Regulatory Implementation | KYC/EDD/FinCEN** — Designed and implemented Enhanced Due Diligence end-to-end: LP funding blocks, UBO verification, FinCEN integration, CTA compliance, automatic KYC revalidation. Worked directly with compliance SMEs to translate regulatory requirements into reliable, audit-friendly software. Built race-resistant verify-identity flows with re-check inside transactions (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, FinCEN, Regulatory

- **Full-Stack TypeScript | React + Node.js + PostgreSQL** — Operate across an Nx monorepo of dozens of NestJS (Node.js) libraries and React/Next.js apps. Built admin dashboards, internal operational tools, and stakeholder-facing UIs backed by PostgreSQL via Prisma ORM. Modern React patterns (hooks, Redux-style state, TanStack Query, Zod validation).

> !React, Node.js, PostgreSQL, Prisma

- **REST API Design | Type-safe Contracts** — Migrated legacy controllers (auth, onboarding, admin) to type-safe ts-rest contracts with Zod schemas across NestJS microservices. Designed and shipped REST APIs for KYC/EDD, Billing V2, and webhook ingestion with strong contract guarantees and structured errors.

> !REST APIs, ts-rest, Zod, Microservices

- **Security & Audit | Idempotency + State Machines** — Implemented webhook deduplication via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with PROCESSING/PROCESSED/REJECTED state machine. API-level idempotency interceptor (48h TTL). Audit-friendly append-only auxiliary tables with deterministic ordering — reconstructable event chains for compliance review.

> !Security, Idempotency, Audit, OAuth 2.0

- **Cloud & Integration | OAuth + Shared Services** — Built bidirectional QuickBooks invoice sync (OAuth 2.0 flow, refresh tokens, encrypted credentials). Worked on Plaid Link + Treasury Prime integrations. Same patterns transfer to integrating with agency shared services (authentication, data exchange).

> Plaid, Treasury Prime, QuickBooks, OAuth

- **AI-augmented Development | Claude Code Daily** — Daily user of Claude Code with sub-agent orchestration, custom skills, MCP integrations, hooks, and project-level CLAUDE.md specifications. Apply AI for code generation, automated review, and test scaffolding — staying at the forefront of AI-augmented engineering practices.

> Claude Code, AI tooling, Sub-agents

- **Agile Delivery | Scrum + Documentation** — Engineering-led ownership of complex features (Billing V2, KYC revalidation) without a PM. Drive ADRs, technical specs, and architectural documentation. Cross-functional collaboration with compliance, finance, product, and QE teams.

> Scrum, ADRs, Documentation, Cross-functional

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*Enterprise Cloud Applications · São Paulo*

- **Cloud Infrastructure | AWS End-to-end** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting high-availability B2B workloads. Containerized services with Docker; built serverless React/Next.js apps. Owned operational health of production deployments.

> !AWS, ECS, Docker, Lambda

- **Full-Stack Product | React + Next.js + GraphQL** — Built from scratch a wholesale ordering platform with React Native (mobile), React/Next.js (web), and a GraphQL API layer. Integrated payment flows and credit-limit validation.

> React Native, Next.js, GraphQL, TypeScript

- **CI/CD | GitHub Actions** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Consumer Platform · São Paulo*

- **Consumer Product | React Native + TypeScript** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> !React Native, TypeScript, Web3

- **Real-time SDK | XMPP** — Developed a chat SDK for businesses using React Native and React/Redux, powered by XMPP and a Java backend for real-time messaging across embedded integrations.

> React, Redux, XMPP, Java

- **Zero-downtime CI/CD** — Built CI/CD automations ensuring continuous deployment with no service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Mentorship | Tech Talks Lead** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org. Continuous learning and mentoring mindset has carried into every team since.

> !Mentorship, Tech Talks, Microservices

- **Multi-DB Operations** — Built the product foundation with React, Redux, and Node.js/TypeScript backend. Selected MySQL, PostgreSQL, MongoDB per service responsibility and drove DB design across teams.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Legacy Modernization · São Paulo*

- **Legacy Migration | PHP → Node** — Led migration of a legacy PHP loan origination platform to a Node.js/Express backend for a student loans product with governmental funding. Modernized API surface while preserving downstream consumer compatibility — direct experience with legacy-to-modern migrations in regulated environments.

> !Legacy migration, Node.js, Express, Government

- **Database Performance | PostgreSQL** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs.

> PostgreSQL, MongoDB, Query optimization

## Core Skills {#skills}

- **Full-Stack:** TypeScript, React (hooks, Redux), Next.js, React Native, Node.js, NestJS, REST APIs, ts-rest, Zod, GraphQL
- **Databases & ORM:** PostgreSQL (deep), MySQL, MongoDB, Prisma (similar to Hibernate/TypeORM/Entity Framework), Schema design, Query optimization
- **Compliance & Security:** KYC/EDD, FinCEN, CTA, OAuth 2.0, JWT, Idempotency, Audit trails, Secure credential management
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo
- **AI Engineering:** Claude Code, Sub-agent orchestration, MCP servers, Custom skills, Prompt engineering, LLM-assisted development
- **Quality:** TDD, Cucumber BDD, Playwright, Jest, Unit + Integration + E2E testing, Datadog
- **Process & Leadership:** Agile/Scrum, Jira-class tools, ADRs, Code reviews, Mentorship, Cross-functional collaboration

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
