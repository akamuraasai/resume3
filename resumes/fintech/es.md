---
locale: es
version: fintech
name: Jonathan Cruz
title: Ingeniero Backend & Pagos Sénior
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brasil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Ingeniero Backend & Pagos Sénior*

- 📍 São Paulo, Brasil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Perfil {#profile}

"Ingeniero de software sénior con más de 10 años de experiencia construyendo infraestructura de fintech y pagos. Especialista en Postgres transaccional, ledgers de partida doble, cumplimiento KYC/EDD e integraciones con proveedores bancarios y de identidad (Plaid, Treasury Prime). TypeScript en todo el stack con NestJS, Prisma y arquitecturas event-driven diseñadas para tolerancia a fallos, idempotencia y auditabilidad."

## Experiencia Profesional {#experience}
*Puestos y Contribuciones Destacadas*

### Ingeniero de Software Full-Stack @ Sydecar
*May 2023 — Actualidad*
*Fintech para Administración de Fondos VC · San Francisco, CA (Remoto)*

- **Ledger Partida Doble | Postgres** — Contribuí a un motor propietario de ledger de partida doble (Fragment) con entradas inmutables append-only, claves de idempotencia deterministas (`{tipo}-{id-primario}-{contexto}`), saldos derivados (nunca almacenados como fuente de verdad) y contabilidad en enteros de unidad mínima con redondeo bancario. Flujo de registro event-driven y totalmente reconstruible a partir de eventos de origen.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Trabajé en la integración Plaid Link (createLinkToken → exchangePublicToken → access_token) con processor tokens para transferencias ACH vía Treasury Prime. Construí un mock banking engine para sandbox local con tracking de idempotencia por application/account IDs.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Compliance** — Diseñé e implementé Enhanced Due Diligence incluyendo bloqueo de financiación para LPs, verificación de UBOs, integración con FinCEN, conformidad CTA y revalidación automática de KYC para inversores activos. Construí flujo verify-identity resistente a race conditions con re-check dentro de `$transaction` para manejar el caso "email-libre-en-blur → tomado-en-submit" (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Idempotencia | Concurrencia** — Implementé deduplicación de webhooks vía `IncomingWebhookEvent` (unique `(event_id, vendor)`) con máquina de estados PROCESSING/PROCESSED/REJECTED, e interceptor de idempotencia a nivel de API con TTL de 48h escopado por `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Tolerancia a Fallos | Outbox BullMQ** — Estandaricé la entrega de eventos usando BullMQ Pro con backoff exponencial (5 reintentos / 3s base en ledger; 20 reintentos / 10s base en pubsub). Patrón outbox: persistir resolución primero, encolar después — los jobs son idempotentes y sobreviven a fallos de enqueue. Ordenación global por deal vía contadores Redis INCR con búsqueda determinista del predecesor (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Arquitectura** — Diseñé (ADR) e implementé sistema de facturación V2 para fondos con planificador trimestral de comisiones, versionado de modelos de cobro y página administrativa de estructura de tarifas.

> !ts-rest, Zod, NestJS

- **QuickBooks | Integración** — Construí un motor de integración bidireccional para sincronización de facturas con mock service para desarrollo local, validación de estado, sincronización automática en aprobación y suite completa de tests E2E con Playwright y Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Contratos Type-safe** — Migré controladores heredados (auth, onboarding, admin) a contratos type-safe ts-rest con esquemas Zod, mejorando la seguridad de tipos de extremo a extremo.

> TypeScript, Zod, ts-rest

### Ingeniero de Software Sénior @ Zax
*Ene 2019 — May 2023*
*Pagos B2B & Mayorista · São Paulo*

- **Pagos B2B | Móvil** — Desarrollé desde cero una aplicación de pedidos mayoristas con flujos de pago integrados y validación de límite de crédito para socios comerciales, usando React Native, TypeScript y GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Desplegué infraestructura cloud completa en AWS (EC2, ECS, S3, Lambda, VPCs) con sitios web serverless usando React y Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automatización** — Configuré pipeline de entrega completo con GitHub Actions, Fastlane y Code Climate para control de calidad. Docker para desarrollo local.

> GitHub Actions, Fastlane, Docker

### Ingeniero de Software Sénior @ Netlolo
*Sep 2018 — Ene 2019*
*Fintech Cripto para Consumidor · São Paulo*

- **Cartera Cripto | Web3** — Creé una aplicación móvil y web de criptomonedas para público general con React Native y TypeScript, integrando smart contracts Web3 en Ethereum para carteras self-custodial y transacciones on-chain.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Tiempo Real** — Desarrollé un SDK de chat para empresas usando React Native y React/Redux, con backend XMPP y Java para mensajería en tiempo real.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Construí automatizaciones de CI/CD garantizando despliegue continuo sin interrupción del servicio. PostgreSQL con Hasura como capa GraphQL.

> PostgreSQL, Hasura, CI/CD

### Ingeniero de Software Sénior @ Escale
*Ene 2018 — Sep 2018*
*Sanidad para Consumidor · São Paulo*

- **Plataforma Sanitaria | React** — Construí la base del producto con React, Redux y backend Node.js/TypeScript para servicios sanitarios vendidos vía Google Ads, incluyendo captura de leads, comprobaciones de elegibilidad y matching de proveedores.

> !React, Redux, Node.js, TypeScript

- **Mentoría | Tech Talks** — Lideré Tech Talks internas sobre diseño RESTful, Programación Funcional y arquitectura de Microservicios. MySQL, PostgreSQL y MongoDB según las responsabilidades de cada servicio.

> Microservicios, CircleCI, MongoDB

### Ingeniero de Software Semi-Sénior @ PraValer
*Jun 2017 — Ene 2018*
*Fintech de Crédito Estudiantil · São Paulo*

- **Originación de Crédito | Node** — Migré plataforma legada de originación de crédito en PHP a backend Node.js/Express en producto de préstamos estudiantiles con financiación gubernamental, gestionando ciclo de vida de solicitudes, elegibilidad y flujos de desembolso.

> !Node.js, Express, Loans, PHP

- **Base de Datos | Optimización** — Reestructuré tablas transaccionales PostgreSQL con esquemas e índices optimizados para entradas de ledger de préstamo. MongoDB para solicitudes y logs. Frontend con React y Redux.

> PostgreSQL, MongoDB, React, Redux

## Competencias Clave {#skills}

- **Pagos & Fintech:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Ledgers de partida doble, Idempotencia, Webhooks
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Fiabilidad:** BullMQ, Outbox pattern, Event ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Infraestructura:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Formación {#education}

### Anhanguera
*Grado en Tecnología de la Información · Ene 2016 — Jul 2018*

## Idiomas {#languages}

- **Portugués:** Nativo
- **Inglés:** C1/C2
- **Español:** Básico
