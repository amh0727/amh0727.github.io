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
  doi:     "10.1145/xxxxx",            // 任意（あればタイトルリンクに使用）
  url:     "https://...",              // 任意（指定なしなら doi から自動生成）
  links:   [{ label: "PDF", url: "..." }, { label: "Code", url: "..." }],  // 任意
  featured: true,                      // 任意（★ 主要論文マーク）
}
```

保存して push すれば、年バッジ・種別バッジ・年フィルタ・統計が自動更新されます。

論文タイトルは原語のまま表示します（言語を切り替えても翻訳されません）。
言語ごとに変えたい場合は、その項目を `{ ja: "…", en: "…", ko: "…" }` と書けます。

## 多言語（EN / 日本語 / 한국어）

UI ラベル・自己紹介・学歴などの**翻訳文は言語ファイルに分けて**管理します。

| ファイル | 内容 |
|---------|------|
| `i18n/ja.js` | 日本語のテキスト |
| `i18n/en.js` | English text |
| `i18n/ko.js` | 한국어 텍스트 |

- 3 ファイルは**同じ構造・同じ順序**にしてください（学歴は配列の順番で対応）。
- 既定言語は `data.js` の `defaultLang`。閲覧者は右上のボタンで切替でき、選択は記憶されます。

## その他の編集

- **論文** … `data.js` の `publications`（言語共通の唯一の場所）。
- **プロフィール（名前・写真・リンク・キーワード）** … `data.js` の `profile`。
  - `profile.links` に Google Scholar / GitHub / Email / CV の URL を入れると表示。
  - メールは `copyEmail`（逆順 base64）でクリックコピー、平文非公開。
  - `profile.photo` に画像パスを入れるとイニシャルの代わりに顔写真。
- **自己紹介の文章・所属・学歴** … `i18n/<言語>.js`。

## 機能

- 言語切替（EN / 日本語 / 한국어）＋ ライト / ダークモード切替（右上、設定は記憶）
- 左寄せのサイドバー固定プロフィール + スクロール連動ハイライト
- 年フィルタ・統計（国際 / 国内自動集計）・著者名の自動強調

## ファイル構成

| ファイル | 役割 |
|---------|------|
| `index.html` | 骨組みのみ（中身は JS が描画） |
| `index.css`  | デザイン |
| `data.js`    | 言語中立データ — **論文リスト**・プロフィール識別子・リンク |
| `i18n/*.js`  | 各言語のテキスト（UI・自己紹介・学歴） |
| `render.js`  | データと言語ファイルを読み込んで画面を組み立てる |

## ローカルプレビュー

`index.html` をブラウザで直接開くだけで確認できます。
（簡易サーバを使う場合は `python3 -m http.server` でも可）
