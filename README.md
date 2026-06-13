# amh0727.github.io

Minhyoung An — researcher portfolio (GitHub Pages).

## 論文の追加方法 / How to add a publication

すべての論文データは **`data.js`** で一元管理しています。
HTML を触る必要はありません。`data.js` の `publications` 配列の
**先頭**に次の形でオブジェクトを 1 つ足してください。

```js
{
  title:   "論文タイトル",
  authors: "**Minhyoung An**, Taro Yamada",  // 自分の名前を ** ** で囲むと太字になる。不要なら ""
  venue:   "ICDCN 2026 (Doctoral Symposium)",
  type:    "Full Paper",   // Full Paper / Short Paper / Workshop / Journal / Poster / Preprint
  year:    2026,            // フィルタ・バッジ・統計に使用
  date:    "2026年1月6日 ～ 1月9日",   // 任意
  location:"奈良、日本",                 // 任意
  doi:     "10.1145/xxxxx",            // 任意（あれば DOI バッジ + タイトルリンク）
  url:     "https://...",              // 任意（指定なしなら doi から自動生成）
  links:   [{ label: "PDF", url: "..." }, { label: "Code", url: "..." }],  // 任意
  featured: true,                      // 任意（★ 主要論文マーク）
}
```

保存して push すれば、年バッジ・種別バッジ・年フィルタ・統計が自動更新されます。

## その他の編集（すべて `data.js`）

- **プロフィール** … `profile` の名前・所属・紹介文・研究キーワード（`interests`）を編集。
- **リンク** … `profile.links` に Google Scholar / GitHub / Email / CV などの URL を入れると
  サイドバーにアイコン付きで表示されます（URL が空の項目は出ません）。
- **顔写真** … `profile.photo` に画像パス（例 `"me.jpg"`）を入れるとイニシャルの代わりに表示。
- **News（最近の活動）** … `news` 配列に `{ date, text }` を新しい順で追加。
- **学歴** … `education` 配列を編集。

## 機能

- ライト / ダークモード切替（右上のボタン、設定は記憶されます）
- サイドバー固定プロフィール + スクロール連動ハイライト
- 年フィルタ・統計（国際 / 国内自動集計）・著者名の自動強調

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `index.html` | 骨組みのみ（中身は JS が描画） |
| `index.css`  | デザイン |
| `data.js`    | **データ (DB)** — 論文・学歴・プロフィール |
| `render.js`  | `data.js` を読み込んで画面を組み立てる |

## ローカルプレビュー

`data.js` は `<script>` で読み込むため、`index.html` をブラウザで直接開くだけで確認できます。
（簡易サーバを使う場合は `python3 -m http.server` でも可）
