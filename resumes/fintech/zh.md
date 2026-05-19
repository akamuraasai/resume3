---
locale: zh
version: fintech
name: Jonathan Cruz
title: 高级后端与支付工程师
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "圣保罗，巴西"
#photo: /resumes/photo.jpg
---

# Jonathan Cruz
*高级后端与支付工程师*

- 📍 圣保罗，巴西
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## 简介 {#profile}

"拥有超过 10 年金融科技与支付基础设施构建经验的高级软件工程师。在事务性 Postgres、复式记账、KYC/EDD 合规以及与银行和身份验证服务商（Plaid、Treasury Prime）的集成方面具备深厚专业能力。在全栈 TypeScript（NestJS、Prisma）以及面向容错性、幂等性和可审计性设计的事件驱动架构方面拥有扎实经验。"

## 工作经历 {#experience}
*精选职位与贡献*

### 全栈软件工程师 @ Sydecar
*2023 年 5 月 — 至今*
*面向 VC 基金管理的金融科技 · 旧金山，加州（远程）*

- **复式记账分类账 | Postgres** — 参与构建自研复式记账分类账引擎（Fragment），采用追加写入的不可变条目、确定性幂等键（`{条目类型}-{主 ID}-{上下文}`）、派生余额（绝不作为唯一可信源存储），并使用最小单位整数会计与银行家舍入。记账流程为事件驱动，可完全由源事件重建。

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | 银行** — 参与 Plaid Link 集成（createLinkToken → exchangePublicToken → access_token），通过 processor token 经由 Treasury Prime 实现 ACH 转账。构建用于本地沙箱的模拟银行引擎，基于 application/account ID 进行幂等性跟踪。

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | 合规** — 设计并实现增强尽职调查系统，包括 LP 资金阻断、UBO 核实、FinCEN 集成、CTA 合规以及对活跃投资者的 KYC 自动重新验证。构建在 `$transaction` 中进行复检的抗竞态 verify-identity 流程，以处理"blur 时空闲 → submit 时被占用"边界情况（409 EMAIL_NOW_EXISTS）。

> !Compliance, KYC, UBO, FinCEN

- **幂等性 | 并发** — 通过 `IncomingWebhookEvent`（unique `(event_id, vendor)`）实现 webhook 去重，并采用 PROCESSING/PROCESSED/REJECTED 状态机；以 `(api_user_id, route, idempotency_key)` 作用域、48 小时 TTL 实现 API 级别的幂等性拦截器。

> !Idempotency, Webhooks, Concurrency

- **容错 | BullMQ Outbox** — 使用 BullMQ Pro 及指数退避（ledger 5 次重试 / 3 秒基数；pubsub 20 次重试 / 10 秒基数）标准化事件投递。Outbox 模式：先持久化决议，再入队 — 作业幂等且可抵御入队失败。通过 Redis INCR 计数器和确定性的前驱查找（`order - 1`）实现按 deal 维度的全局排序。

> !BullMQ, Outbox, Redis, Fault-tolerance

- **Billing V2 | 架构** — 设计（ADR）并实现基金账单 V2 系统，包含季度费用调度器、账单模型版本管理以及管理费用结构页面。

> !ts-rest, Zod, NestJS

- **QuickBooks | 集成** — 构建双向发票同步引擎，配套本地开发模拟服务、状态校验、审批后自动同步以及使用 Playwright 和 Cucumber BDD 的完整 E2E 测试套件。

> QuickBooks API, Playwright, Cucumber

- **ts-rest | 类型安全契约** — 将遗留控制器（auth、onboarding、admin）迁移至基于 Zod schema 的类型安全 ts-rest 契约，端到端提升类型安全。

> TypeScript, Zod, ts-rest

### 高级软件工程师 @ Zax
*2019 年 1 月 — 2023 年 5 月*
*B2B 支付与批发 · 圣保罗*

- **B2B 支付 | 移动端** — 使用 React Native、TypeScript 和 GraphQL 从零构建批发订货移动应用，集成支付流程及商业伙伴信用额度校验。

> !React Native, TypeScript, GraphQL

- **Serverless | AWS** — 在 AWS（EC2、ECS、S3、Lambda、VPC）上部署完整云基础设施，使用 React 和 Next.js 构建无服务器网站。

> AWS, Next.js, Serverless

- **CI/CD | 自动化** — 使用 GitHub Actions、Fastlane 和 Code Climate 配置端到端的质量交付流水线。本地开发使用 Docker。

> GitHub Actions, Fastlane, Docker

### 高级软件工程师 @ Netlolo
*2018 年 9 月 — 2019 年 1 月*
*加密货币消费金融科技 · 圣保罗*

- **加密钱包 | Web3** — 使用 React Native 和 TypeScript 打造面向大众用户的加密货币移动与 Web 应用，集成以太坊上的 Web3 智能合约，实现自托管钱包与链上交易。

> !React Native, TypeScript, Web3, Ethereum

- **聊天 SDK | 实时** — 使用 React Native 和 React/Redux，结合 XMPP 与 Java 后端实时消息服务，开发面向企业的聊天 SDK。

> React, Redux, XMPP, Java

- **零 | 停机** — 构建 CI/CD 自动化，确保持续部署无服务中断。使用 PostgreSQL 配合 Hasura 作为 GraphQL 层。

> PostgreSQL, Hasura, CI/CD

### 高级软件工程师 @ Escale
*2018 年 1 月 — 2018 年 9 月*
*消费医疗 · 圣保罗*

- **医疗平台 | React** — 使用 React、Redux 和 Node.js/TypeScript 后端构建通过 Google Ads 销售的医疗服务产品基础，包含线索捕获、资格核验和服务商匹配。

> !React, Redux, Node.js, TypeScript

- **指导 | 技术分享** — 主导关于 RESTful 设计、函数式编程和微服务架构的内部技术分享。根据各服务职责使用 MySQL、PostgreSQL 和 MongoDB。

> Microservices, CircleCI, MongoDB

### 软件工程师 @ PraValer
*2017 年 6 月 — 2018 年 1 月*
*学生贷款金融科技 · 圣保罗*

- **贷款发起 | Node** — 将政府资助的学生贷款产品的遗留 PHP 发起平台迁移到 Node.js/Express 后端，处理贷款申请生命周期、资格审核与放款流程。

> !Node.js, Express, Loans, PHP

- **数据库 | 优化** — 为贷款分类账条目重构 PostgreSQL 事务表，优化 schema 与索引。使用 MongoDB 处理贷款申请与日志。前端使用 React 和 Redux。

> PostgreSQL, MongoDB, React, Redux

## 核心技能 {#skills}

- **支付与金融科技：** Plaid、Treasury Prime、ACH、KYC/EDD、FinCEN、复式记账、幂等性、Webhook
- **后端：** TypeScript、NestJS、Node.js、Prisma、PostgreSQL、ts-rest、Zod、GraphQL
- **可靠性：** BullMQ、Outbox 模式、Event ordering、Redis、Datadog
- **前端：** React、Next.js、React Native、TanStack Query
- **基础设施：** AWS、GCP、Docker、CI/CD、Nx Monorepo

## 教育 {#education}

### Anhanguera
*信息技术学士 · 2016 年 1 月 — 2018 年 7 月*

## 语言 {#languages}

- **葡萄牙语：** 母语
- **英语：** C1/C2
- **中文：** 初级
