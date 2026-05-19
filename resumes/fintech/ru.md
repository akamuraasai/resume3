---
locale: ru
version: fintech
name: Jonathan Cruz
title: Старший Backend и Payments Инженер
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "Сан-Паулу, Бразилия"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Старший Backend и Payments Инженер*

- 📍 Сан-Паулу, Бразилия
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Профиль {#profile}

"Старший software engineer с более чем 10-летним опытом построения финтех- и платёжной инфраструктуры. Глубокая экспертиза в транзакционном Postgres, бухгалтерских книгах двойной записи, KYC/EDD-комплаенсе и интеграциях с банковскими и identity-провайдерами (Plaid, Treasury Prime). Уверенное владение TypeScript по всему стеку с NestJS, Prisma и event-driven архитектурами, спроектированными с упором на отказоустойчивость, идемпотентность и аудируемость."

## Опыт работы {#experience}
*Избранные роли и вклад*

### Full-Stack Software Engineer @ Sydecar
*Май 2023 — настоящее время*
*Финтех для администрирования венчурных фондов · Сан-Франциско, CA (удалённо)*

- **Двойная бухгалтерская запись | Postgres** — Внёс вклад в проприетарный движок двойной записи (Fragment) с неизменяемыми append-only записями, детерминированными ключами идемпотентности (`{тип-записи}-{первичный-id}-{контекст}`), производными балансами (никогда не хранящимися как источник истины) и учётом в целых минимальных единицах с банковским округлением. Поток проводок event-driven и полностью восстанавливается из исходных событий.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Работал над интеграцией Plaid Link (createLinkToken → exchangePublicToken → access_token) с processor token-ами для ACH-переводов через Treasury Prime. Реализовал mock banking engine для локальной песочницы с отслеживанием идемпотентности по application/account ID.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Комплаенс** — Спроектировал и реализовал систему Enhanced Due Diligence, включая блокировку фандинга для LP, верификацию UBO, интеграцию с FinCEN, соответствие CTA и автоматическую KYC-ревалидацию активных инвесторов. Построил устойчивый к гонкам verify-identity flow с повторной проверкой внутри `$transaction` для обработки случая «email-свободен-на-blur → занят-на-submit» (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Идемпотентность | Конкурентность** — Реализовал дедупликацию webhook-ов через `IncomingWebhookEvent` (unique `(event_id, vendor)`) с конечным автоматом PROCESSING/PROCESSED/REJECTED и interceptor идемпотентности на уровне API с TTL 48 часов в области `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Отказоустойчивость | BullMQ Outbox** — Стандартизовал доставку событий с помощью BullMQ Pro и экспоненциального backoff (5 retry / 3 с база в ledger; 20 retry / 10 с база в pubsub). Паттерн outbox: сначала персистим resolution, затем enqueue — задания идемпотентны и переживают сбой enqueue. Глобальная упорядоченность по deal через Redis INCR-счётчики с детерминированным поиском предшественника (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Архитектура** — Спроектировал (ADR) и реализовал систему биллинга V2 для фондов с квартальным планировщиком комиссий, версионированием биллинг-моделей и административной страницей структуры комиссий.

> !ts-rest, Zod, NestJS

- **QuickBooks | Интеграция** — Построил движок двунаправленной синхронизации инвойсов с mock-сервисом для локальной разработки, валидацией состояний, авто-синхронизацией при approve и полным набором E2E-тестов на Playwright и Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Type-safe контракты** — Мигрировал legacy-контроллеры (auth, onboarding, admin) на type-safe ts-rest контракты с Zod-схемами, улучшив типобезопасность end-to-end.

> TypeScript, Zod, ts-rest

### Senior Software Engineer @ Zax
*Янв 2019 — Май 2023*
*B2B-платежи и оптовая торговля · Сан-Паулу*

- **B2B-платежи | Mobile** — С нуля разработал приложение для оптовых заказов с интегрированными платёжными потоками и валидацией кредитного лимита бизнес-партнёров на React Native, TypeScript и GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Развернул полную облачную инфраструктуру в AWS (EC2, ECS, S3, Lambda, VPC) и собрал serverless-сайты на React и Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Автоматизация** — Сконфигурировал end-to-end pipeline доставки на GitHub Actions, Fastlane и Code Climate с контролем качества. Docker для локальной разработки.

> GitHub Actions, Fastlane, Docker

### Senior Software Engineer @ Netlolo
*Сен 2018 — Янв 2019*
*Крипто-финтех для розничных пользователей · Сан-Паулу*

- **Крипто-кошелёк | Web3** — Создал мобильное и веб-приложение, делающее криптовалюту доступной массовому пользователю, на React Native и TypeScript, с интеграцией Web3 смарт-контрактов на Ethereum для self-custodial кошельков и on-chain транзакций.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Реальное время** — Разработал chat SDK для бизнеса на React Native и React/Redux поверх XMPP и Java-бэкенда для real-time мессенджинга.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Реализовал CI/CD-автоматизации, обеспечивающие непрерывное развёртывание без простоев. PostgreSQL с Hasura в качестве GraphQL-слоя.

> PostgreSQL, Hasura, CI/CD

### Senior Software Engineer @ Escale
*Янв 2018 — Сен 2018*
*Потребительское здравоохранение · Сан-Паулу*

- **Платформа здравоохранения | React** — Построил продуктовую базу на React, Redux и Node.js/TypeScript-бэкенде для услуг здравоохранения, продаваемых через Google Ads, включая сбор лидов, проверку eligibility и подбор провайдеров.

> !React, Redux, Node.js, TypeScript

- **Менторство | Tech Talks** — Вёл внутренние Tech Talks о RESTful-дизайне, функциональном программировании и архитектуре микросервисов. MySQL, PostgreSQL и MongoDB в зависимости от зоны ответственности сервиса.

> Microservices, CircleCI, MongoDB

### Software Engineer @ PraValer
*Июн 2017 — Янв 2018*
*Финтех студенческих кредитов · Сан-Паулу*

- **Выдача кредитов | Node** — Мигрировал legacy-платформу выдачи кредитов с PHP на Node.js/Express-бэкенд для продукта студенческих кредитов с государственным финансированием, обрабатывая жизненный цикл заявки, eligibility и потоки выплат.

> !Node.js, Express, Loans, PHP

- **БД | Оптимизация** — Перестроил транзакционные таблицы PostgreSQL с улучшенными схемами и индексами для записей кредитного ledger. MongoDB для заявок на кредит и логов. Фронтенд на React и Redux.

> PostgreSQL, MongoDB, React, Redux

## Ключевые навыки {#skills}

- **Платежи и финтех:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Бухгалтерские книги двойной записи, Идемпотентность, Webhook-и
- **Backend:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Надёжность:** BullMQ, Outbox-паттерн, Event ordering, Redis, Datadog
- **Frontend:** React, Next.js, React Native, TanStack Query
- **Инфраструктура:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Образование {#education}

### Anhanguera
*Бакалавр технологий в области информационных технологий · Янв 2016 — Июл 2018*

## Языки {#languages}

- **Португальский:** Родной
- **Английский:** C1/C2
- **Русский:** Начальный
