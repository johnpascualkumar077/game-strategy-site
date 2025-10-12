<!--
Short, actionable guidance for AI coding agents working on this repository.
Focus: quick orientation, edit/run patterns, file structure, and examples from code.
-->

# Copilot instructions — game-strategy-site

目的: このリポジトリは静的なシングルページの攻略サイトです。AIエージェントは変更を小さく、局所的に行い、ページの構造（HTML）、スタイル（css/style.css）、振る舞い（js/main.js）という分離を守ってください。

重要ファイル
- `index.html` — ページの骨格。Bootstrap 5 CDN を利用したカードレイアウト（.card、.card-img-top）。新ページを追加する際はナビにリンクを追加すること。
- `css/style.css` — カスタムの上書きとレスポンシブ調整。カードの hover 効果や `.card-img-top { object-fit: cover; }` を守る。
- `js/main.js` — DOM 操作の全て。現在は `DOMContentLoaded` ハンドラでナビリンクの `.active` 管理を行っている。新しいスクリプトはここに統合する（インラインスクリプトは避ける）。

アーキテクチャ（大局）
- 完全な静的サイト。外部依存: Bootstrap（CSS/JS）を CDN で読み込んでいる。画像は `images/` に格納する想定だが、現状は外部プレースホルダを使用。
- サービス境界: フロントエンドのみ。バックエンドやビルドツール（webpack/node/npm scripts）は存在しないため、変更はブラウザ表示を基準に確認する。

ローカル確認手順（優先順）
1. VS Code の Live Server 拡張で `index.html` を開く（推奨）。
2. 代替: PowerShell で簡易 HTTP サーバを立てる

```powershell
# Python がある場合
py -3 -m http.server 8000
# または
python -m http.server 8000

# node があり http-server を使う場合
npx http-server -p 8000
```

変更の方針とルール（厳守）
- 影響範囲は最小に: 既存のマークアップ／クラス名（Bootstrap の class）を壊さない。
- 新しい UI 挙動は `js/main.js` に集約。既存の `DOMContentLoaded` パターンに合わせ、イベントデリゲーションを多用する。
- 画像は `images/` に配置し、`index.html` の `<img src="images/…">` を使用する。カード画像は 300x200 を想定。

見つかったパターンの具体例
- ナビの active 切替: `js/main.js` の `navLinks.forEach(link => { link.addEventListener('click', ... ) })`。
- カードレイアウト: `index.html` の `.row-cols-md-3` と各 `.card`。
- CSS のレスポンシブ調整: `css/style.css` の `@media (max-width: 768px)` セクション。

注意点・制約
- ビルド/テスト用のスクリプトや CI 設定が見つかりません。CI や自動テストを追加する場合は `package.json` と簡易の `npm test` を導入してください（現状は手動確認ベース）。
- 外部 CDN に依存しているため、オフラインでの完全な表示確認は難しい。重要な変更の確認時はネットワーク接続を確保する。

改善候補（提案、実装は別タスク）
- 画像をリポジトリ内に追加してプレースホルダ依存を削除
- 開発用の `package.json` を追加し、`live-server` や `http-server` を devDependency に入れる

最後に
変更を行ったら簡単な手動チェックを行ってください: ナビのアクティブ化、カードの表示/画像切り取り（object-fit）、モバイル幅でのレイアウト崩れ確認。質問や不明点があれば具体的なファイルと変更を示してフィードバックを求めてください。
