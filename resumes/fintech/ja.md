---
locale: ja
version: fintech
name: Jonathan Cruz
title: シニアバックエンド・決済エンジニア
photo: /resumes/photo.jpg
birthDate: 1990年10月
nationality: ブラジル
contact:
  email: jonathan.willian.tod@gmail.com
  linkedin: https://www.linkedin.com/in/jonathan-w-916b2a73/
  github: https://github.com/akamuraasai
  website: https://akamuraasai.work
  location: "サンパウロ、ブラジル"
---

# Jonathan Cruz
*シニアバックエンド・決済エンジニア*

- 📍 サンパウロ、ブラジル
- 📧 jonathan.willian.tod@gmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/jonathan-w-916b2a73/)
- 💻 [GitHub](https://github.com/akamuraasai)
- 🌐 [akamuraasai.work](https://akamuraasai.work)

## プロフィール {#profile}

"フィンテックおよび決済インフラ構築において10年以上の経験を持つシニアソフトウェアエンジニア。トランザクショナルなPostgres、複式簿記台帳、KYC/EDDコンプライアンス、銀行・本人確認プロバイダー（Plaid、Treasury Prime）との統合に深い専門知識を有する。NestJS、Prismaを用いたフルスタックTypeScriptと、耐障害性・冪等性・監査可能性を重視したイベント駆動アーキテクチャの設計経験が豊富。"

## 職務経歴 {#experience}
*主要な役職と貢献*

### フルスタックソフトウェアエンジニア @ Sydecar
*2023年5月 — 現在*
*VCファンド管理向けフィンテック · サンフランシスコ、カリフォルニア（リモート）*

- **複式簿記台帳 | Postgres** — 自社開発の複式簿記台帳エンジン（Fragment）の構築に貢献。追記専用の不変エントリ、決定論的な冪等キー（`{エントリタイプ}-{主ID}-{コンテキスト}`）、派生残高（信頼できる情報源としては保存しない）、最小単位整数会計と銀行家丸めを採用。記帳フローはイベント駆動で、ソースイベントから完全に再構築可能。

> !Postgres, Ledger, Double-entry, Decimal

- **Plaid + Treasury Prime | バンキング** — Plaid Link統合（createLinkToken → exchangePublicToken → access_token）を担当し、processor tokenを通じてTreasury Prime経由のACH送金を実現。ローカルサンドボックス用のモックバンキングエンジンを構築し、application/account IDによる冪等性追跡を実装。

> !Plaid, Treasury Prime, ACH, Banking

- **KYC/EDD | コンプライアンス** — LP資金凍結、UBO確認、FinCEN統合、CTAコンプライアンス、アクティブ投資家の自動KYC再検証を含む強化デューデリジェンスシステムを設計・実装。`$transaction`内での再チェックにより「blur時に空き → submit時に取得済み」のエッジケース（409 EMAIL_NOW_EXISTS）に対応する競合耐性のあるverify-identityフローを構築。

> !Compliance, KYC, UBO, FinCEN

- **冪等性 | 並行性** — `IncomingWebhookEvent`（unique `(event_id, vendor)`）によるWebhook重複排除をPROCESSING/PROCESSED/REJECTED状態マシンとともに実装。APIレベルの冪等性インターセプターは48時間TTLで`(api_user_id, route, idempotency_key)`によりスコープ化。

> !Idempotency, Webhooks, Concurrency

- **耐障害性 | BullMQ Outbox** — BullMQ Proと指数バックオフ（ledgerで5回リトライ／3秒ベース、pubsubで20回リトライ／10秒ベース）によりイベント配信を標準化。Outboxパターン：先に解決を永続化し、後でキューに投入 — ジョブは冪等でenqueue失敗に耐性あり。Redis INCRカウンターと決定論的な先行者ルックアップ（`order - 1`）によるディール単位のグローバル順序保証。

> !BullMQ, Outbox, Redis, Fault-tolerance

- **請求V2 | アーキテクチャ** — 四半期手数料スケジューラー、請求モデルバージョニング、管理手数料構造管理ページを含むファンド請求V2を設計（ADR）・実装。

> !ts-rest, Zod, NestJS

- **QuickBooks | 統合** — ローカル開発用モックサービス、状態検証、承認時自動同期、PlaywrightおよびCucumber BDDによる完全なE2Eテストスイートを備えた双方向請求書同期統合エンジンを構築。

> QuickBooks API, Playwright, Cucumber

- **ts-rest | 型安全契約** — 既存のコントローラー（認証、オンボーディング、管理）をZodスキーマによる型安全なts-restコントラクトに移行し、エンドツーエンドの型安全性を向上。

> TypeScript, Zod, ts-rest

### シニアソフトウェアエンジニア @ Zax
*2019年1月 — 2023年5月*
*B2B決済・卸売 · サンパウロ*

- **B2B決済 | モバイル** — React Native、TypeScript、GraphQLを使用し、与信限度額検証と支払いフローを統合した卸売注文モバイルアプリをゼロから構築。

> !React Native, TypeScript, GraphQL

- **サーバーレス | AWS** — AWS上（EC2、ECS、S3、Lambda、VPC）にクラウドインフラ全体をデプロイし、ReactとNext.jsによるサーバーレスウェブサイトを構築。

> AWS, Next.js, Serverless

- **CI/CD | 自動化** — GitHub Actions、Fastlane、Code Climateを用いた品質管理のためのエンドツーエンドデリバリーパイプラインを構成。ローカル開発にDockerを使用。

> GitHub Actions, Fastlane, Docker

### シニアソフトウェアエンジニア @ Netlolo
*2018年9月 — 2019年1月*
*暗号資産コンシューマーフィンテック · サンパウロ*

- **暗号資産ウォレット | Web3** — React NativeとTypeScriptを使用し、Ethereum上のWeb3スマートコントラクトを統合した自己管理型ウォレットとオンチェーン取引による、暗号資産を一般ユーザーに届けるモバイル・Webアプリを開発。

> !React Native, TypeScript, Web3, Ethereum

- **チャットSDK | リアルタイム** — XMPPおよびJavaバックエンドによるリアルタイムメッセージング基盤上で、React NativeとReact/Reduxを用いた企業向けチャットSDKを開発。

> React, Redux, XMPP, Java

- **ゼロ | ダウンタイム** — サービス中断のない継続的デプロイメントを実現するCI/CD自動化を構築。GraphQLレイヤーとしてHasuraを用いたPostgreSQLを使用。

> PostgreSQL, Hasura, CI/CD

### シニアソフトウェアエンジニア @ Escale
*2018年1月 — 2018年9月*
*コンシューマーヘルスケア · サンパウロ*

- **ヘルスケアプラットフォーム | React** — Google Ads経由で販売される医療サービス向けに、React、Redux、Node.js/TypeScriptバックエンドでプロダクト基盤を構築。リード獲得、適格性チェック、プロバイダーマッチングを含む。

> !React, Redux, Node.js, TypeScript

- **メンタリング | 技術講演** — RESTful設計、関数型プログラミング、マイクロサービスアーキテクチャに関する社内技術講演を主導。各サービスの責務に応じてMySQL、PostgreSQL、MongoDBを使用。

> Microservices, CircleCI, MongoDB

### ソフトウェアエンジニア @ PraValer
*2017年6月 — 2018年1月*
*学生ローンフィンテック · サンパウロ*

- **ローン組成 | Node** — 政府助成による学生ローン製品のレガシーPHP組成プラットフォームをNode.js/Expressバックエンドに移行。ローン申請ライフサイクル、適格性、貸付実行フローを担当。

> !Node.js, Express, Loans, PHP

- **データベース | 最適化** — ローン台帳エントリ向けに、スキーマとインデックスを最適化したPostgreSQLトランザクションテーブルを再構築。ローン申請およびログにMongoDBを使用。ReactとReduxでフロントエンドを構築。

> PostgreSQL, MongoDB, React, Redux

## コアスキル {#skills}

- **決済 & フィンテック:** Plaid, Treasury Prime, ACH, KYC/EDD, FinCEN, 複式簿記台帳, 冪等性, Webhook
- **バックエンド:** TypeScript, NestJS, Node.js, Prisma, PostgreSQL, ts-rest, Zod, GraphQL
- **信頼性:** BullMQ, Outboxパターン, Event ordering, Redis, Datadog
- **フロントエンド:** React, Next.js, React Native, TanStack Query
- **インフラ:** AWS, GCP, Docker, CI/CD, Nx Monorepo

## 学歴 {#education}

### Anhanguera
*情報技術学士 · 2016年1月 — 2018年7月*

## 言語 {#languages}

- **ポルトガル語:** 母語
- **英語:** C1/C2
- **日本語:** 初級
