/* =====================================================================
   サイトデータ (DB)
   ---------------------------------------------------------------------
   論文を追加するには、下の `publications` 配列の先頭に新しい
   オブジェクトを 1 つ追加するだけです。HTML を編集する必要はありません。

   How to add a paper:
     publications 配列に下記の形でオブジェクトを足してください。
     新しい順（年が新しいもの）に上から並べると見栄えが良いです。

   フィールド説明:
     title    : 論文タイトル（必須）
     authors  : 著者リスト。自分の名前は **MARK** で囲むと強調表示されます。
                例: "**Minhyoung An**, Taro Yamada, Hanako Sato"
                （空文字 "" にすると著者行は表示されません）
     venue    : 学会・ジャーナル名（必須）
     type     : "Full Paper" | "Short Paper" | "Workshop" |
                "Poster" | "Journal" | "Preprint"  など（バッジ表示）
     year     : 年（数値）。フィルタとバッジに使用（必須）
     date     : 開催日など表示用の文字列（任意）
     location : 開催地（任意）
     doi      : DOI（任意。あれば DOI バッジを表示）
     url      : クリック先 URL（任意。なければ DOI から自動生成）
     links    : 追加リンク [{ label: "PDF", url: "..." }, { label: "Code", url: "..." }] （任意）
     featured : true にすると「主要論文」マーク（★）が付きます（任意）
   ===================================================================== */

window.SITE_DATA = {

  profile: {
    initials: "MA",
    // 顔写真を使う場合はパス/URL を入れてください（例: "me.jpg"）。空ならイニシャル表示。
    photo: "",
    greeting: "こんにちは、私は",
    name: "Minhyoung An",
    affiliation: "奈良先端科学技術大学院大学",
    program: "博士前期課程",
    description:
      "オンデバイス SLM によりプライバシに考慮した<br class='hide-mobile'>" +
      "ユーザのコンテキストを推定する研究をしています",
    // 研究キーワード（Hero に表示されるタグ）
    interests: [
      "On-Device Language Models",
      "Privacy-Preserving HAR",
      "Contextual Inference",
      "Energy Efficiency",
    ],
    // プロフィール下に並ぶリンク。icon は orcid/scholar/github/mail/cv/link から選択。
    // URL を入れた項目だけ表示されます（空のものは出ません）。
    links: [
      { label: "ORCID", icon: "orcid", url: "https://orcid.org/0009-0007-5153-4554" },
      { label: "Google Scholar", icon: "scholar", url: "" },
      { label: "GitHub", icon: "github", url: "" },
      { label: "Email", icon: "mail", url: "an.minhyoung.ak4(at.mark)naist.ac.jp" },        // 例: "mailto:you@example.com"
      { label: "CV", icon: "cv", url: "" },             // 例: "cv.pdf"
    ],
    // 著者リスト中でこれらの表記に一致した部分は自動的に太字（本人強調）になります
    authorAliases: ["An Minhyoung", "Minhyoung An"],
  },

  // 最近の活動（新しい順）。論文の採択・受賞・入学などを書きます。任意。
  news: [
    { date: "2026.06", text: "DICOMO 2026（福岡）で口頭発表します．" },
    { date: "2026.05", text: "第90回ユビキタスコンピューティングシステム研究会で発表しました．" },
    { date: "2026.01", text: "ICDCN 2026 Doctoral Symposium（奈良）で発表しました．" },
    { date: "2025.12", text: "IEEE AIoT 2025（大阪）でフルペーパーを発表しました．" },
    { date: "2025.10", text: "NAIST 博士前期課程に秋入学．Wellcomp 2025（フィンランド）で発表しました．" },
  ],

  education: [
    {
      school: "奈良先端科学技術大学院大学 (NAIST)",
      dept: "先端科学技術研究科 研究生",
      date: "2025年4月 – 2027年10月",
      location: "奈良、日本",
    },
    {
      school: "奈良先端科学技術大学院大学 (NAIST)",
      dept: "先端科学技術研究科 博士前期課程",
      date: "2025年10月 – 2027年3月",
      location: "奈良、日本",
    },
  ],

  // ▼▼▼ 論文を追加する場所（新しい順に上から）▼▼▼
  publications: [
    {
        title:
      "行動認識のための住宅間データ転移に向けた言語を用いた空間意味情報推定手法の提案",
      authors: "An Minhyoung, 菊池尊勝, 庭本眞太郎, 新明勇翔, 竹田圭汰, Liu Yuexiao, 松井智一, 安本慶一",
      venue: "DICOMO 2026",
      type: "国内学会",
      year: 2026,
      date: "2026年6月24日 ～ 6月26日",
      location: "福岡、日本",
    },
    {
        title:
      "混練過程における生地状態変化のマルチモーダルセンシングに関する検討",
      authors: "An Minhyoung, 佐々木航, 松井智一, 安本慶一, 太田茂之",
      venue: "第90回ユビキタスコンピューティングシステム研究会",
      type: "国内研究会",
      year: 2026,
      date: "2026年5月27日 ～ 5月28日",
      location: "奈良、日本",
    },
    {
      title:
        "Toward Semantically Aligned and Energy-Efficient On-Device Contextual Inference in Real-World Environments",
      authors: "",
      venue: "ICDCN 2026 (Doctoral Symposium, Short Paper)",
      type: "Short Paper",
      year: 2026,
      date: "2026年1月6日 ～ 1月9日",
      location: "奈良、日本",
      doi: "10.1145/3737611.3776950",
    },
    {
      title:
        "Small Language Model for Real-World HAR: Zero-Shot Performance and Energy Feasibility of On-Device Privacy-Preserving Contextual Inference",
      authors: "",
      venue: "IEEE AIoT 2025",
      type: "Full Paper",
      year: 2025,
      date: "2025年12月3日 ～ 12月5日",
      location: "大阪、日本",
      doi: "10.1109/AIoT66900.2025.00063",
      featured: true,
    },
    {
      title:
        "Privacy-Preserving Real-Time Human Activity Recognition Using On-Device Small Language Models",
      authors: "",
      venue: "Wellcomp 2025 — UbiComp / ISWC 2025 Workshop",
      type: "Workshop",
      year: 2025,
      date: "2025年10月12日 ～ 10月16日",
      location: "エスポー、フィンランド",
      doi: "10.1145/3714394.3756346",
    },
  ],

  // ▲▲▲ 論文を追加する場所 ▲▲▲
};
