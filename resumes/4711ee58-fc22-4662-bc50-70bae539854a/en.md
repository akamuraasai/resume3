---
locale: en
version: 4711ee58-fc22-4662-bc50-70bae539854a
name: Jonathan Cruz
title: Senior Full-Stack Engineer · Technical Leadership
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brazil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Senior Full-Stack Engineer · Technical Leadership*

- 📍 São Paulo, Brazil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profile {#profile}

"Senior full-stack engineer with 10+ years building and leading production systems across web and mobile. Deep TypeScript across the stack (React, Next.js, NestJS, Node.js) with strong PostgreSQL, GraphQL, and REST API expertise. Player-coach mindset: drive technical direction via ADRs, code reviews, and mentorship while remaining hands-on in delivery. Track record of leading initiatives end-to-end in fast-paced environments — engineering-led ownership of complex features without a PM, partnering directly with Product and cross-functional stakeholders to translate requirements into scalable systems."

## Professional Experience {#experience}
*Selected Roles & Contributions*

### Full-Stack Software Engineer @ Sydecar
*May 2023 — Present*
*Fintech Platform · San Francisco, CA (Remote)*

- **Technical Leadership | Engineering-led Delivery** — Drove the design and delivery of Billing V2 end-to-end without a PM: wrote the ADR, ran stakeholder discovery with Product/compliance/finance, defined architecture, implemented, deployed, then validated adoption. Same pattern across KYC/EDD, ts-rest migration, and webhook standardization. Translated business needs into scalable technical solutions and communicated tradeoffs to technical and non-technical audiences.

> !Technical leadership, ADRs, End-to-end delivery

- **Mentorship & Code Reviews | Engineering Culture** — Mentor mid-to-senior engineers through pair sessions, code reviews, and architectural discussions. Contribute to engineering culture via shared patterns and documentation, raising the bar across the team. Review pull requests with constructive feedback and ensure consistent quality standards.

> !Mentorship, Code reviews, Engineering culture

- **Full-Stack TypeScript | React + NestJS + Prisma + Postgres** — Operate across an Nx monorepo of dozens of NestJS libraries and React/Next.js apps. Built admin dashboards, internal operational tools, and stakeholder-facing UIs backed by PostgreSQL via Prisma. Designed and scaled REST + ts-rest APIs in production, plus GraphQL services for internal data access.

> !TypeScript, React, NestJS, Prisma

- **Data Ingestion & Integration Pipelines** — Architected webhook ingestion via `IncomingWebhookEvent` (unique `(event_id, vendor)`) with a PROCESSING/PROCESSED/REJECTED state machine, plus the outbox pattern in the ledger console for reliable event-driven data integration. Standardized event delivery with BullMQ Pro using exponential backoff and Redis-based ordering — the same primitives used in ETL-style workflows.

> !Data ingestion, Outbox, ETL patterns, BullMQ

- **External Integrations | Salesforce-class APIs** — Built bidirectional QuickBooks invoice sync with OAuth 2.0, state validation, and auto-sync on approval. Worked on Plaid + Treasury Prime integrations with processor tokens powering ACH. Same patterns and discipline apply to CRM and SaaS platform integrations.

> QuickBooks, Plaid, OAuth 2.0, Integrations

- **Quality & Documentation | Testing + ADRs** — Built full E2E test suite for QuickBooks integration with Playwright and Cucumber BDD. Drive testing standards (unit, integration, E2E) and documentation through code reviews and shared CLAUDE.md project-level specifications.

> Playwright, Cucumber BDD, Documentation

### Sr Software Engineer @ Zax
*Jan 2019 — May 2023*
*B2B Full-Stack Platform · São Paulo*

- **Full-Stack Product Ownership | Mobile + Web** — Built from scratch a wholesale ordering platform with React Native (mobile), React/Next.js (web), and GraphQL API layer. Owned architecture decisions across mobile and web for 4 years of evolution. Integrated payment flows and credit-limit validation across the stack.

> !React Native, Next.js, GraphQL, TypeScript

- **Cloud Infrastructure | AWS End-to-end** — Deployed and operated full cloud infrastructure on AWS (EC2, ECS, S3, Lambda, VPCs) supporting high-availability B2B workloads. Containerized with Docker. Owned the path from local dev through CI/CD to production deploys.

> AWS, ECS, Docker, Lambda

- **Delivery Practices | CI/CD + Quality Gates** — Configured end-to-end pipeline with GitHub Actions, Fastlane, and Code Climate for automated quality gates. Reduced release cycle from weeks to days. Established CI/CD practices and team conventions adopted across the org.

> GitHub Actions, Fastlane, CI/CD

### Sr Software Engineer @ Netlolo
*Sep 2018 — Jan 2019*
*Consumer Full-Stack · São Paulo*

- **Real-time Architecture | SDK Design** — Designed and shipped a chat SDK with React Native and React/Redux on top of XMPP and a Java backend — persistent connections, message ordering, low-latency delivery for businesses embedding chat into their apps. System architecture decisions for distributed, multi-tenant use.

> !XMPP, Real-time, SDK, Distributed systems

- **Consumer Product | React Native + Web3** — Built a mobile and web product bringing cryptocurrency to mainstream users with React Native and TypeScript, integrating Web3 smart contracts on Ethereum.

> React Native, TypeScript, Web3

- **Zero-downtime CI/CD** — Built CI/CD automations ensuring continuous deployment without service interruption. PostgreSQL with Hasura as the GraphQL layer.

> PostgreSQL, Hasura, CI/CD

### Sr Software Engineer @ Escale
*Jan 2018 — Sep 2018*
*Microservices Platform · São Paulo*

- **Mentorship | Tech Talks Lead** — Led internal Tech Talks on RESTful design, Functional Programming, and Microservices architecture, coaching engineers across product teams. Established service-boundary and API-contract patterns adopted across the engineering org. Mentor mindset has carried into every team since.

> !Mentorship, Tech Talks, Microservices

- **Microservices Architecture | Multi-DB** — Built the product foundation with React, Redux, and Node.js/TypeScript backend across multiple microservices. Drove DB selection per service responsibility — MySQL, PostgreSQL, MongoDB — with hands-on operational ownership.

> React, Node.js, MongoDB, CircleCI

### Pl Software Engineer @ PraValer
*Jun 2017 — Jan 2018*
*Data & Backend · São Paulo*

- **Legacy Modernization | PHP → Node** — Led migration of legacy PHP origination platform to Node.js/Express for a student loans product. Modernized API surface while preserving downstream compatibility.

> !Node.js, Express, Legacy migration

- **Data Modeling | PostgreSQL Performance** — Restructured PostgreSQL transactional tables with improved schemas and indexes, eliminating N+1 queries and reducing query times by an order of magnitude. MongoDB for unstructured logs and request data — early experience with multi-store data design.

> PostgreSQL, MongoDB, Data modeling

## Core Skills {#skills}

- **Full-Stack:** TypeScript, React (hooks, context, Redux), Next.js, React Native, NestJS, Node.js, GraphQL, REST APIs, ts-rest, Zod
- **Data & APIs:** PostgreSQL (deep), MySQL, MongoDB, Prisma, Schema design, Query optimization, Data modeling
- **Pipelines & Integration:** Webhook ingestion, Outbox pattern, BullMQ, Event-driven workflows, OAuth 2.0, Enterprise/SaaS API integrations
- **Cloud & DevOps:** AWS (EC2/ECS/S3/Lambda/VPC), GCP, Docker, CI/CD (GitHub Actions, Fastlane, CircleCI), Nx Monorepo
- **Leadership:** Mentorship, ADRs, Engineering-led ownership, Code reviews, Cross-functional collaboration, Stakeholder discovery, Documentation standards
- **Quality:** TDD, Cucumber BDD, Playwright, Unit + Integration + E2E testing

## Education {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) in Information Technology · Jan 2016 — Jul 2018*

## Languages {#languages}

- **Portuguese:** Native
- **English:** C1/C2
