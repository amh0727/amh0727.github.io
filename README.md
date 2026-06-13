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
  links:   [{ label: "PDF", url: "https://..." }],  // 任意の追加リンク
}
```

保存して push すれば、年バッジ・種別バッジ・年フィルタ・統計が自動更新されます。

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
