---
locale: ko
version: fintech
name: Jonathan Cruz
title: 시니어 백엔드 및 결제 엔지니어
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "상파울루, 브라질"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*시니어 백엔드 및 결제 엔지니어*

- 📍 상파울루, 브라질
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## 프로필 {#profile}

"핀테크 및 결제 인프라 구축 분야에서 10년 이상의 경력을 가진 시니어 소프트웨어 엔지니어. 트랜잭션 Postgres, 복식 부기 원장, KYC/EDD 컴플라이언스, 은행 및 신원 확인 제공자(Plaid, Treasury Prime) 통합에 대한 깊은 전문성을 보유. NestJS와 Prisma를 활용한 풀스택 TypeScript와, 결함 허용성·멱등성·감사 가능성을 위해 설계된 이벤트 기반 아키텍처에 능숙."

## 경력 {#experience}
*주요 직책 및 기여*

### 풀스택 소프트웨어 엔지니어 @ Sydecar
*2023년 5월 — 현재*
*VC 펀드 관리 핀테크 · 샌프란시스코, CA (원격)*

- **복식 부기 원장 | Postgres** — 자체 개발 복식 부기 원장 엔진(Fragment) 구축에 기여. 추가 전용 불변 항목, 결정론적 멱등 키(`{항목유형}-{기본ID}-{컨텍스트}`), 파생 잔액(절대 source of truth로 저장하지 않음), 뱅커스 라운딩을 사용한 최소 단위 정수 회계를 채택. 기록 흐름은 이벤트 기반이며 소스 이벤트로부터 완전히 재구성 가능.

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | 뱅킹** — Plaid Link 통합(createLinkToken → exchangePublicToken → access_token) 작업과 processor token을 통한 Treasury Prime의 ACH 송금 구현. application/account ID 기반 멱등성 추적이 포함된 로컬 샌드박스용 모의 뱅킹 엔진 구축.

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | 컴플라이언스** — LP 자금 차단, UBO 검증, FinCEN 통합, CTA 준수, 활성 투자자에 대한 자동 KYC 재검증을 포함하는 Enhanced Due Diligence 시스템 설계 및 구현. `$transaction` 내 재확인을 통해 "blur 시 사용 가능 → submit 시 점유됨" 엣지 케이스(409 EMAIL_NOW_EXISTS)를 처리하는 경합 내성 verify-identity 플로우 구축.

> !Compliance, KYC, UBO, FinCEN

- **멱등성 | 동시성** — PROCESSING/PROCESSED/REJECTED 상태 머신과 함께 `IncomingWebhookEvent`(unique `(event_id, vendor)`)를 통한 웹훅 중복 제거 구현. `(api_user_id, route, idempotency_key)`로 스코프된 48시간 TTL의 API 레벨 멱등성 인터셉터 구현.

> !Idempotency, Webhooks, Concurrency

- **결함 허용 | BullMQ Outbox** — BullMQ Pro와 지수 백오프(ledger 5회 재시도/3초 기본, pubsub 20회 재시도/10초 기본)를 사용한 이벤트 전달 표준화. Outbox 패턴: 먼저 resolution을 영속화하고 이후 큐에 추가 — 작업은 멱등하며 enqueue 실패에도 견딤. Redis INCR 카운터와 결정론적 선행자 조회(`order - 1`)를 통한 딜 단위 글로벌 순서 보장.

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | 아키텍처** — 분기별 수수료 스케줄러, 빌링 모델 버전 관리, 관리 수수료 구조 페이지를 포함하는 펀드 빌링 V2 설계(ADR) 및 구현.

> !ts-rest, Zod, NestJS

- **QuickBooks | 통합** — 로컬 개발용 모의 서비스, 상태 검증, 승인 시 자동 동기화, Playwright 및 Cucumber BDD를 활용한 완전한 E2E 테스트 스위트를 갖춘 양방향 인보이스 동기화 엔진 구축.

> QuickBooks API, Playwright, Cucumber

- **ts-rest | 타입 안전 계약** — 레거시 컨트롤러(auth, onboarding, admin)를 Zod 스키마를 사용한 타입 안전 ts-rest 계약으로 마이그레이션하여 엔드투엔드 타입 안전성 향상.

> TypeScript, Zod, ts-rest

### 시니어 소프트웨어 엔지니어 @ Zax
*2019년 1월 — 2023년 5월*
*B2B 결제 및 도매 · 상파울루*

- **B2B 결제 | 모바일** — React Native, TypeScript, GraphQL을 사용하여 통합된 결제 흐름과 비즈니스 파트너용 신용 한도 검증이 포함된 도매 주문 모바일 앱을 처음부터 구축.

> !React Native, TypeScript, GraphQL

- **서버리스 | AWS** — AWS (EC2, ECS, S3, Lambda, VPCs)에 완전한 클라우드 인프라를 배포하고 React 및 Next.js를 사용한 서버리스 웹사이트 구축.

> AWS, Next.js, Serverless

- **CI/CD | 자동화** — GitHub Actions, Fastlane, Code Climate를 사용한 품질 관리를 위한 엔드투엔드 딜리버리 파이프라인 구성. 로컬 개발에 Docker 사용.

> GitHub Actions, Fastlane, Docker

### 시니어 소프트웨어 엔지니어 @ Netlolo
*2018년 9월 — 2019년 1월*
*암호화폐 소비자 핀테크 · 상파울루*

- **암호화폐 지갑 | Web3** — React Native와 TypeScript를 사용하여 일반 사용자에게 암호화폐를 제공하는 모바일 및 웹 앱을 제작하고, 자기 수탁형 지갑과 온체인 거래를 위한 이더리움 기반 Web3 스마트 컨트랙트를 통합.

> !React Native, TypeScript, Web3, Ethereum

- **채팅 SDK | 실시간** — XMPP와 자바 백엔드를 활용한 실시간 메시징 기반 위에 React Native와 React/Redux를 사용하여 비즈니스용 채팅 SDK 개발.

> React, Redux, XMPP, Java

- **제로 | 다운타임** — 서비스 중단 없는 지속적 배포를 보장하는 CI/CD 자동화 구축. GraphQL 레이어로 Hasura를 사용한 PostgreSQL 사용.

> PostgreSQL, Hasura, CI/CD

### 시니어 소프트웨어 엔지니어 @ Escale
*2018년 1월 — 2018년 9월*
*소비자 헬스케어 · 상파울루*

- **헬스케어 플랫폼 | React** — Google Ads를 통해 판매되는 헬스케어 서비스를 위해 React, Redux 및 Node.js/TypeScript 백엔드로 제품 기반을 구축. 리드 캡처, 적격성 확인, 제공자 매칭을 포함.

> !React, Redux, Node.js, TypeScript

- **멘토링 | 기술 강연** — RESTful 설계, 함수형 프로그래밍, 마이크로서비스 아키텍처에 관한 사내 기술 강연 주도. 서비스 책임에 따라 MySQL, PostgreSQL, MongoDB 사용.

> Microservices, CircleCI, MongoDB

### 소프트웨어 엔지니어 @ PraValer
*2017년 6월 — 2018년 1월*
*학자금 대출 핀테크 · 상파울루*

- **대출 오리지네이션 | Node** — 정부 자금 지원을 받는 학자금 대출 제품을 위해 레거시 PHP 대출 오리지네이션 플랫폼을 Node.js/Express 백엔드로 마이그레이션. 대출 요청 라이프사이클, 적격성, 지급 흐름을 처리.

> !Node.js, Express, Loans, PHP

- **데이터베이스 | 최적화** — 대출 원장 항목을 위해 개선된 스키마와 인덱스로 PostgreSQL 트랜잭션 테이블을 재구성. 대출 요청 및 로그에 MongoDB 사용. React와 Redux로 프론트엔드 구축.

> PostgreSQL, MongoDB, React, Redux

## 핵심 역량 {#skills}

- **결제 & 핀테크:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, 복식 부기 원장, 멱등성, 웹훅
- **백엔드:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **신뢰성:** BullMQ, Outbox 패턴, Event ordering, Redis, Datadog
- **프론트엔드:** React, Next.js, React Native, TanStack Query
- **인프라:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## 학력 {#education}

### Anhanguera
*정보 기술 학사 · 2016년 1월 — 2018년 7월*

## 언어 {#languages}

- **포르투갈어:** 원어민
- **영어:** C1/C2
- **한국어:** 초급
