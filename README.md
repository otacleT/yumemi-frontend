## 株式会社ゆめみ フロントエンド技術課題

### ローカル環境セットアップ

1. 依存関係のインストール、セットアップ

```
cp .env.example .env.local
pnpm install
```

2. RESAS APIの利用登録を行い、取得したAPI Keyを`.env.local`に設定してください

3. ローカル環境立ち上げ

```
pnpm run dev
```

### 開発ルール

1. 新しくコンポーネント作成する場合は、hygen を実行して作成すること

```
pnpm dlx hygen component new
```

2. コミットは、以下のコマンドを実行して行うこと

```
pnpm run commit
```

3. その他のスクリプト

```
// 各コンポーネント、フックのテスト実行
pnpm run test

// e2eテスト実行
pnpm run test:e2e
```

### 工夫した点

1. チーム開発を意識した開発
   - husky, lint-staged を使ってコミット時に eslint,prettier を実行することで、コードに統一性を持たせるようにした
   - commit-lint を使って、コミットメッセージに統一性を持たせるようにした
   - hygen を使って、ディレクトリ構成に則ったコンポーネントを対話式に作成できるようにした
   - PR 提出時に、Github Actions でビルドが成功するかの確認を行うようにした
   - 新規メンバーがスムーズに参加できるように、wiki,README の整理を行った
2. RESAS APIの利用にあたって
   - RESAS APIのリクエストに必要なAPI Keyを外部から見れないようにした
   - 静的な情報（都道府県一覧）は、SSG(Static Site Generation)によりリクエスト回数を減らすようにした
   - 利用規約に従い、出典を記載した  
     https://opendata.resas-portal.go.jp/terms.html
3. ステージング環境(developブランチ)の整備
   - 検索エンジンにインデックスさせないように HTTP ヘッダーを設定した
   - パスワードによるアクセス制御（ベーシック認証）を行った  
     https://yumemi-frontend-re-develop.vercel.app/

### 資料

**フロントエンドディレクトリ構成・規則**

https://github.com/otacleT/yumemi-frontend-re/wiki/%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E6%A7%8B%E6%88%90%E3%83%BB%E8%A6%8F%E5%89%87

**コミットメッセージ、ルールについて**

https://github.com/otacleT/yumemi-frontend-re/wiki/%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E3%80%81%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6

**Vercel ステージング環境のベーシック認証について**  
https://github.com/otacleT/yumemi-frontend-re/wiki/Vercel%E3%82%B9%E3%83%86%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E7%92%B0%E5%A2%83%E3%81%AE%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF%E8%AA%8D%E8%A8%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6
