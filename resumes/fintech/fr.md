---
locale: fr
version: fintech
name: Jonathan Cruz
title: Ingénieur Backend & Paiements Senior
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "São Paulo, Brésil"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*Ingénieur Backend & Paiements Senior*

- 📍 São Paulo, Brésil
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## Profil {#profile}

"Ingénieur logiciel senior avec plus de 10 ans d'expérience dans la construction d'infrastructures fintech et de paiements. Expertise approfondie en Postgres transactionnel, ledgers en partie double, conformité KYC/EDD et intégrations avec des fournisseurs bancaires et d'identité (Plaid, Treasury Prime). Maîtrise complète de TypeScript sur l'ensemble de la stack avec NestJS, Prisma et des architectures event-driven conçues pour la tolérance aux pannes, l'idempotence et l'auditabilité."

## Expérience Professionnelle {#experience}
*Postes et Contributions Sélectionnés*

### Ingénieur Logiciel Full-Stack @ Sydecar
*Mai 2023 — Présent*
*Fintech pour l'Administration de Fonds VC · San Francisco, CA (Remote)*

- **Ledger en Partie Double | Postgres** — Contribution à un moteur propriétaire de ledger en partie double (Fragment) avec entrées append-only immuables, clés d'idempotence déterministes (`{type}-{id-primaire}-{contexte}`), soldes dérivés (jamais stockés comme source de vérité) et comptabilité en entiers d'unité minimale avec arrondi du banquier. Flux de comptabilisation event-driven entièrement reconstructible à partir des événements source.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | Banking** — Travail sur l'intégration Plaid Link (createLinkToken → exchangePublicToken → access_token) avec processor tokens pour les virements ACH via Treasury Prime. Construction d'un mock banking engine pour la sandbox locale avec suivi d'idempotence par application/account IDs.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | Conformité** — Conception et implémentation du système Enhanced Due Diligence comprenant le blocage de funding LP, la vérification des UBO, l'intégration FinCEN, la conformité CTA et la revalidation automatique KYC pour les investisseurs actifs. Construction d'un flux verify-identity résistant aux race conditions avec re-check dans une `$transaction` pour gérer le cas "email-libre-au-blur → pris-au-submit" (409 EMAIL_NOW_EXISTS).

> !Compliance, KYC, UBO, FinCEN

- **Idempotence | Concurrence** — Implémentation de la déduplication des webhooks via `IncomingWebhookEvent` (unique `(event_id, vendor)`) avec une machine d'état PROCESSING/PROCESSED/REJECTED, et d'un intercepteur d'idempotence au niveau de l'API avec TTL de 48h scopé par `(api_user_id, route, idempotency_key)`.

> !Idempotency, Webhooks, Concurrency

- **Tolérance aux Pannes | Outbox BullMQ** — Standardisation de la livraison d'événements via BullMQ Pro avec backoff exponentiel (5 retries / 3s base dans le ledger ; 20 retries / 10s base dans pubsub). Pattern outbox : persister la résolution d'abord, enqueuer ensuite — les jobs sont idempotents et survivent à un échec d'enqueue. Ordonnancement global par deal via des compteurs Redis INCR avec lookup déterministe du prédécesseur (`order - 1`).

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | Architecture** — Conception (ADR) et implémentation du système de facturation V2 pour les fonds avec planificateur trimestriel de frais, versioning des modèles de facturation et page d'administration de la structure des frais.

> !ts-rest, Zod, NestJS

- **QuickBooks | Intégration** — Construction d'un moteur d'intégration bidirectionnel pour la synchronisation des factures avec mock service pour le dev local, validation d'état, sync automatique à l'approbation et suite complète de tests E2E avec Playwright et Cucumber BDD.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | Contrats Type-safe** — Migration des controllers legacy (auth, onboarding, admin) vers des contrats type-safe ts-rest avec schémas Zod, améliorant la sécurité des types de bout en bout.

> TypeScript, Zod, ts-rest

### Ingénieur Logiciel Senior @ Zax
*Jan 2019 — Mai 2023*
*Paiements B2B & Vente en Gros · São Paulo*

- **Paiements B2B | Mobile** — Développement à partir de zéro d'une application de commandes en gros avec flux de paiement intégrés et validation des limites de crédit pour les partenaires commerciaux, avec React Native, TypeScript et GraphQL.

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — Déploiement d'une infrastructure cloud complète sur AWS (EC2, ECS, S3, Lambda, VPCs) avec des sites web serverless utilisant React et Next.js.

> AWS, Next.js, Serverless

- **CI/CD | Automatisation** — Configuration d'un pipeline de livraison de bout en bout avec GitHub Actions, Fastlane et Code Climate pour le contrôle qualité. Docker pour le dev local.

> GitHub Actions, Fastlane, Docker

### Ingénieur Logiciel Senior @ Netlolo
*Sep 2018 — Jan 2019*
*Fintech Crypto Grand Public · São Paulo*

- **Wallet Crypto | Web3** — Création d'une application mobile et web de cryptomonnaies pour le grand public avec React Native et TypeScript, intégrant des smart contracts Web3 sur Ethereum pour des wallets self-custodial et des transactions on-chain.

> !React Native, TypeScript, Web3, Ethereum

- **Chat SDK | Temps Réel** — Développement d'un SDK de chat pour entreprises avec React Native et React/Redux, alimenté par XMPP et un backend Java pour la messagerie en temps réel.

> React, Redux, XMPP, Java

- **Zero | Downtime** — Construction d'automatisations CI/CD garantissant un déploiement continu sans interruption de service. PostgreSQL avec Hasura comme couche GraphQL.

> PostgreSQL, Hasura, CI/CD

### Ingénieur Logiciel Senior @ Escale
*Jan 2018 — Sep 2018*
*Santé Grand Public · São Paulo*

- **Plateforme Santé | React** — Construction des fondations produit avec React, Redux et un backend Node.js/TypeScript pour des services de santé vendus via Google Ads, incluant la capture de leads, les checks d'éligibilité et le matching de prestataires.

> !React, Redux, Node.js, TypeScript

- **Mentorat | Tech Talks** — Animation de Tech Talks internes sur le design RESTful, la Programmation Fonctionnelle et l'architecture Microservices. MySQL, PostgreSQL et MongoDB selon les responsabilités de chaque service.

> Microservices, CircleCI, MongoDB

### Ingénieur Logiciel Confirmé @ PraValer
*Juin 2017 — Jan 2018*
*Fintech de Crédit Étudiant · São Paulo*

- **Octroi de Crédit | Node** — Migration d'une plateforme legacy d'octroi de crédit en PHP vers un backend Node.js/Express pour un produit de prêts étudiants avec financement gouvernemental, gérant le cycle de vie des demandes, l'éligibilité et les flux de décaissement.

> !Node.js, Express, Loans, PHP

- **Base de Données | Optimisation** — Restructuration des tables transactionnelles PostgreSQL avec schémas et index optimisés pour les entrées de ledger de prêt. MongoDB pour les demandes de prêt et les logs. Frontend avec React et Redux.

> PostgreSQL, MongoDB, React, Redux

## Compétences Clés {#skills}

- **Paiements & Fintech :** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, Ledgers en partie double, Idempotence, Webhooks
- **Backend :** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **Fiabilité :** BullMQ, Outbox pattern, Event ordering, Redis, Datadog
- **Frontend :** React, Next.js, React Native, TanStack Query
- **Infrastructure :** AWS, GCP, Docker, CI/CD, Nx Monorepo

## Formation {#education}

### Anhanguera
*Bachelor of Technology (B.Tech.) en Technologies de l'Information · Jan 2016 — Jul 2018*

## Langues {#languages}

- **Portugais :** Langue maternelle
- **Anglais :** C1/C2
- **Français :** Notions
