## Skills Icons ✨

技術スタックをきれいでカスタマイズ可能なアイコンで紹介しましょう。使っている技術をカンマ区切りで並べるだけです。

### 例 💡

![Banner Dark](../../.github/example-dark.png#gh-dark-mode-only)
![Banner Light](../../.github/example-light.png#gh-light-mode-only)

### 利用可能な言語 🌐

- 🇬🇧 [English](../../README.md)
- 🇨🇳 [中文 (Chinese)](../zh/README.md)
- 🇪🇸 [Español (Spanish)](../es/README.md)
- 🇪🇸 [Català (Catalan 🇨🇹)](../ca/README.md)
- 🇮🇹 [Italiano (Italian)](../it/README.md)
- 🇷🇺 [Русский (Russian)](../ru/README.md)
- 🇹🇷 [Türkçe (Turkish)](../tr/README.md)
- 🇵🇹 [Português (Portuguese)](../pt/README.md)
- 🇩🇪 [Deutsch (German)](../de/README.md)
- 🇰🇷 [한국어 (Korean)](../ko/README.md)
- 🇯🇵 日本語 (Japanese) ⬅
- 🇮🇳 [हिन्दी (Hindi)](../hin/README.md)
- 🇮🇳 [മലയാളം (Malayalam)](../ml/README.md)
- 🇬🇷 [Ελληνικά (Greek)](../el/README.md)
- 🇧🇷 [Português Brasileiro (Brazilian Portuguese)](../pt-BR/README.md)

> [!IMPORTANT]
> リポジトリにスターを付けていただけると大変助かります！
> プロジェクトの可視性向上と支援につながります。

#### メイン URL 🔗

- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

### 設定オプション 🛠️

| パラメータ | 説明 | 必須 | デフォルト |
| ---------- | ---- | ---- | ---------- |
| `i` | カンマ区切りのアイコン名一覧 | はい | / |
| `perline` | 1行あたりのアイコン数 | いいえ | 15 |
| `radius` | アイコンの角丸（25〜85の値） | いいえ | 40 |

### ダーク / ライトモード 🌗

`Skills Icons` は自動テーマ検出に対応しています。アイコンは、パラメータや手動設定なしで、システムのダーク 🌙 またはライト ☀️ モードに自動的に適応します。

この動作は、現在のテーマ設定を検出する CSS 組み込みメディアクエリ `prefers-color-scheme` によって実現されています。

### 利用可能なアイコン 🎨

利用可能なすべてのアイコンを見るには、[URL Builder](https://builder.syvixor.com) をご覧ください。アイコンを簡単に閲覧、検索、カスタマイズできます。

### コントリビューション 🎖️

私たちは、誰でも貢献を歓迎します。支援したい場合は、[CONTRIBUTING.md](./CONTRIBUTING.md) の詳細なガイドラインに従ってください。

#### 貢献の方法

- 新しいアイコンを追加する: PR を作成してアイコン集を拡張する
- バグ修正: 問題を特定して修正する
- ドキュメント: ドキュメントの改善に協力する

#### 開発環境のセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/syvixor/skills-icons.git

# 依存関係をインストール
pnpm install # または npm install

# 開発サーバーを起動
pnpm dev # または npm run dev
```

詳しい開始方法については、[CONTRIBUTING.md](./CONTRIBUTING.md) のガイドラインをご確認ください。

### Docker での利用 🐳

このセクションでは、Docker を使って `Skills Icons` プロジェクトを構築・実行する手順を説明します。以下の手順に従って、アプリケーションを簡単にコンテナ化・管理できます。

#### 前提条件

開始する前に、以下がインストールされていることを確認してください。

- Docker (バージョン 18.09 以上)

#### Docker イメージのビルド

`Skills Icons` の Docker イメージをビルドするには、次の手順に従ってください。

1. ターミナルを開き、ディレクトリに移動します。
2. 次のコマンドを実行してイメージをビルドします。

```bash
docker build -t skills-icons .
# または
sudo docker build -t skills-icons .
```

#### Docker コンテナの実行

イメージがビルドできたら、コンテナで実行できます。

1. 次のコマンドを実行します。

```bash
docker run -p 3000:3000 skills-icons
# または
sudo docker run -p 3000:3000 skills-icons
```

このコマンドは、ホストマシンの 3000 番ポートをコンテナの 3000 番ポートにマッピングし、http://localhost:3000 で `Skills Icons` にアクセスできるようにします。

### アイコン削除依頼 🚫

私たちは、すべてのブランドガイドラインと知的財産を尊重するよう努めています。もしあなたが企業の代表者で、プロジェクトに含まれているアイコンの削除を希望する場合、または当該アイコンの利用がブランドガイドラインに違反していると考える場合は、リポジトリに issue を作成して依頼内容を詳しくお知らせください。確認後、迅速に対応いたします。ご理解とご協力をお願いいたします。

### サポート 💝

このプロジェクトが役に立った場合は、次のことをご検討ください。

- リポジトリにスターを付ける
- 他の人と共有する
- 開発に貢献する

### すべてのコントリビューターに感謝 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

### Powered By 🛟

このプロジェクトは [Vercel](https://vercel.com) を使用してデプロイ・ホスティングされています。

### ライセンス 📝

このプロジェクトは [MIT License](../../LICENSE) のライセンスの下で提供されています。
