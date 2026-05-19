---
locale: pt
version: fintech
name: Jonathan Cruz
title: Engenheiro de Backend & Pagamentos Sênior
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brasil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Engenheiro de Backend & Pagamentos Sênior*

- 📍 São Paulo, Brasil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Perfil {#profile}

"Engenheiro de software sênior com mais de 10 anos de experiência construindo infraestrutura de fintech e pagamentos. Especialista em Postgres transacional, ledgers double-entry, compliance KYC/EDD e integrações com provedores bancários e de identidade (Plaid, Treasury Prime). TypeScript em todo o stack com NestJS, Prisma e arquiteturas event-driven projetadas para tolerância a falhas, idempotência e auditabilidade."

## Experiência Profissional {#experience}
*Cargos & Contribuições Selecionadas*

### Engenheiro de Software Full-Stack @ Sydecar
*Mai 2023 — Atual*
*Fintech para Administração de Fundos de VC · San Francisco, CA (Remoto)*

- **Ledger Double-Entry | Postgres** — Contribuí para engine proprietária de ledger double-entry (Fragment) com entradas imutáveis append-only, chaves de idempotência determinísticas (`{tipo}-{id-primário}-{contexto}`), saldos derivados (nunca armazenados como source of truth) e contabilidade em inteiros de unidade mínima com banker's rounding. Fluxo de postagem é event-driven e totalmente reconstruível a partir dos eventos de origem.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Trabalhei na integração Plaid Link (createLinkToken → exchangePublicToken → access_token) com processor tokens para transferências ACH via Treasury Prime. Construí mock banking engine para sandbox local com tracking de idempotência por application/account IDs.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Compliance** — Projetei e implementei o sistema de Enhanced Due Diligence incluindo bloqueio de funding para LPs, verificação de UBOs, integração com FinCEN, conformidade CTA e revalidação automática de KYC para investidores ativos. Construí fluxo verify-identity resistente a race conditions com re-check dentro de `$transaction` para tratar o cenário "email-livre-no-blur → tomado-no-submit" (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Idempotência | Concorrência** — Implementei deduplicação de webhooks via `IncomingWebhookEvent` (unique `(event_id, vendor)`) com state machine PROCESSING/PROCESSED/REJECTED, e interceptor de idempotência a nível de API com TTL de 48h escopado por `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Tolerância a Falhas | Outbox BullMQ** — Padronizei delivery de eventos usando BullMQ Pro com backoff exponencial (5 retries / 3s base no ledger; 20 retries / 10s base no pubsub). Padrão outbox: persiste a resolução primeiro, enfileira depois — jobs são idempotentes e sobrevivem a falha de enqueue. Ordenação global por deal via contadores Redis INCR com lookup determinístico do predecessor (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Arquitetura** — Projetei (ADR) e implementei sistema de billing V2 para fundos com scheduler trimestral de fees, versionamento de modelos de cobrança e página administrativa de estrutura de fees.

> !ts-rest, Zod, NestJS

- **QuickBooks | Integração** — Construí engine de integração bidirecional para sincronização de invoices com mock service para dev local, validação de estado, sync automático em aprovação e suite completa de testes E2E com Playwright e Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Contratos Type-safe** — Migrei controllers legados (auth, onboarding, admin) para contratos type-safe ts-rest com schemas Zod, melhorando a segurança de tipos de ponta a ponta.

> TypeScript, Zod, ts-rest

### Engenheiro de Software Sênior @ Zax
*Jan 2019 — Mai 2023*
*Pagamentos B2B & Atacado · São Paulo*

- **Pagamentos B2B | Mobile** — Desenvolvi do zero um app de pedidos no atacado com fluxos de pagamento integrados e validação de limite de crédito para parceiros comerciais, usando React Native, TypeScript e GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Implantei infraestrutura cloud completa na AWS (EC2, ECS, S3, Lambda, VPCs) com sites serverless usando React e Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automação** — Configurei pipeline de entrega end-to-end com GitHub Actions, Fastlane e Code Climate para controle de qualidade. Docker para desenvolvimento local.

> GitHub Actions, Fastlane, Docker

### Engenheiro de Software Sênior @ Netlolo
*Set 2018 — Jan 2019*
*Fintech de Cripto para Consumidor · São Paulo*

- **Carteira Cripto | Web3** — Criei app mobile e web de criptomoedas para o público geral com React Native e TypeScript, integrando smart contracts Web3 na Ethereum para carteiras self-custodial e transações on-chain.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Tempo Real** — Desenvolvi SDK de chat para empresas usando React Native e React/Redux, com backend XMPP e Java para mensagens em tempo real.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Criei automações de CI/CD garantindo deploy contínuo sem interrupção de serviço. PostgreSQL com Hasura como camada GraphQL.

> PostgreSQL, Hasura, CI/CD

### Engenheiro de Software Sênior @ Escale
*Jan 2018 — Set 2018*
*Saúde para Consumidor · São Paulo*

- **Plataforma de Saúde | React** — Construí a fundação do produto com React, Redux e backend Node.js/TypeScript para serviços de saúde vendidos via Google Ads, incluindo captura de leads, checks de elegibilidade e matching de provedores.

> !React, Redux, Node.js, TypeScript

- **Mentoria | Tech Talks** — Liderei Tech Talks internas sobre design RESTful, Programação Funcional e arquitetura de Microsserviços. MySQL, PostgreSQL e MongoDB conforme responsabilidades de cada serviço.

> Microsserviços, CircleCI, MongoDB

### Engenheiro de Software Pleno @ PraValer
*Jun 2017 — Jan 2018*
*Fintech de Crédito Estudantil · São Paulo*

- **Originação de Crédito | Node** — Migrei plataforma legada de originação de crédito em PHP para backend Node.js/Express em produto de empréstimos estudantis com financiamento governamental, lidando com ciclo de vida da solicitação, elegibilidade e fluxos de desembolso.

> !Node.js, Express, Loans, PHP

- **Banco de Dados | Otimização** — Reestruturei tabelas transacionais PostgreSQL com schemas e índices otimizados para entradas de ledger de empréstimo. MongoDB para requisições de empréstimo e logs. Frontend com React e Redux.

> PostgreSQL, MongoDB, React, Redux

## Competências {#skills}

- **Pagamentos & Fintech:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Ledgers double-entry, Idempotência, Webhooks
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Confiabilidade:** BullMQ, Outbox pattern, Event ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Infraestrutura:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Formação {#education}

### Anhanguera
*Tecnólogo em Análise e Desenvolvimento de Sistemas · Jan 2016 — Jul 2018*

## Idiomas {#languages}

- **Português:** Nativo
- **Inglês:** C1/C2
