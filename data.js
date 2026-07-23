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

   多言語: venue / type / date / location などの表示テキストは、文字列の代わりに
     { ja: "…", en: "…", ko: "…" } と書くと言語別に表示されます。
     title と authors は原文のまま（翻訳しない）を推奨します。
   ===================================================================== */

window.SITE_DATA = {

  // 既定の言語。右上のボタンで en / ja / ko を切替できます（選択は記憶されます）。
  // UI ラベル・自己紹介・News・学歴の各言語テキストは i18n/ja.js · en.js · ko.js にあります。
  defaultLang: "ja",

  profile: {
    initials: "MA",
    // 顔写真を使う場合はパス/URL を入れてください（例: "me.jpg"）。空ならイニシャル表示。
    photo: "",
    name: "Minhyoung An",
    // 研究キーワード（Hero に表示されるタグ）
    interests: [
      "On-Device Language Models",
      "Privacy-Preserving HAR",
      "Contextual Inference",
      "Energy Efficiency",
    ],
    // プロフィール下に並ぶリンク。icon は orcid/scholar/github/mail/cv/link から選択。
    // url を入れた項目だけ表示されます（空のものは出ません）。
    // メールは url ではなく copyEmail を使うと「クリックでコピー」ボタンになり、
    // ソース上にアドレスが平文で残らないためボットに収集されません。
    //   copyEmail の作り方: アドレスを逆順にして base64 した文字列を入れる。
    //   例) node -e 'console.log(Buffer.from("you@x.com".split("").reverse().join("")).toString("base64"))'
    links: [
      { label: "ORCID", icon: "orcid", url: "https://orcid.org/0009-0007-5153-4554" },
      { label: "Google Scholar", icon: "scholar", url: "" },
      { label: "GitHub", icon: "github", url: "https://github.com/amh0727/" },
      { label: "Email", icon: "mail", copyEmail: "cGouY2EudHNpYW5ANGthLmdudW95aG5pbS5uYQ==" },
      { label: "CV", icon: "cv", url: "" },             // 例: "cv.pdf"
    ],
    // 著者リスト中でこれらの表記に一致した部分は自動的に太字（本人強調）になります
    authorAliases: ["An Minhyoung", "Minhyoung An"],
  },

  // ▼▼▼ 論文を追加する場所（新しい順に上から）▼▼▼
  publications: [
    {
      // タイトルと著者は原文のまま。date/location/type などは { ja, en, ko } で言語別に。
      title:
        "行動認識のための住宅間データ転移に向けた言語を用いた空間意味情報推定手法の提案",
      authors: "An Minhyoung, 菊池尊勝, 庭本眞太郎, 新明勇翔, 竹田圭汰, Liu Yuexiao, 松井智一, 安本慶一",
      venue: "DICOMO 2026",
      type: { ja: "国内学会", en: "Domestic Conf.", ko: "국내 학회" },
      year: 2026,
      date: { ja: "2026年6月24日 ～ 6月26日", en: "Jun 24–26, 2026", ko: "2026년 6월 24일 ~ 26일" },
      location: { ja: "福岡、日本", en: "Fukuoka, Japan", ko: "후쿠오카, 일본" },
    },
    {
      title:
        "混練過程における生地状態変化のマルチモーダルセンシングに関する検討",
      authors: "An Minhyoung, 佐々木航, 松井智一, 安本慶一, 太田茂之",
      venue: {
        ja: "第90回ユビキタスコンピューティングシステム研究会(UBI)",
        en: "90th Ubiquitous Computing System Workshop (IPSJ)",
        ko: "제90회 유비쿼터스 컴퓨팅 시스템 연구회",
      },
      type: { ja: "国内学会", en: "Domestic Conf.", ko: "국내 학회" },
      year: 2026,
      date: { ja: "2026年5月27日 ～ 5月28日", en: "May 27–28, 2026", ko: "2026년 5월 27일 ~ 28일" },
      location: { ja: "奈良、日本", en: "Nara, Japan", ko: "나라, 일본" },
    },
    {
      title:
        "Toward Semantically Aligned and Energy-Efficient On-Device Contextual Inference in Real-World Environments",
      authors: "Minhyoung An, Wataru Sasaki, Hirohiko Suwa, Keiichi Yasumoto",
      venue: "ICDCN 2026 (Doctoral Symposium, Short Paper)",
      type: "Short Paper",
      year: 2026,
      date: { ja: "2026年1月6日 ～ 1月9日", en: "Jan 6–9, 2026", ko: "2026년 1월 6일 ~ 9일" },
      location: { ja: "奈良、日本", en: "Nara, Japan", ko: "나라, 일본" },
      doi: "10.1145/3737611.3776950",
    },
    {
      title:
        "Small Language Model for Real-World HAR: Zero-Shot Performance and Energy Feasibility of On-Device Privacy-Preserving Contextual Inference",
      authors: "Minhyoung An, Wataru Sasaki, Hirohiko Suwa, Keiichi Yasumoto",
      venue: "IEEE AIoT 2025",
      type: "Full Paper",
      year: 2025,
      date: { ja: "2025年12月3日 ～ 12月5日", en: "Dec 3–5, 2025", ko: "2025년 12월 3일 ~ 5일" },
      location: { ja: "大阪、日本", en: "Osaka, Japan", ko: "오사카, 일본" },
      doi: "10.1109/AIoT66900.2025.00063",
      featured: true,
    },
    {
      title:
        "Privacy-Preserving Real-Time Human Activity Recognition Using On-Device Small Language Models",
      authors: "Minhyoung An, Wataru Sasaki, Keiichi Yasumoto",
      venue: "Wellcomp 2025 — UbiComp / ISWC 2025 Workshop",
      type: "Workshop",
      year: 2025,
      date: { ja: "2025年10月12日 ～ 10月16日", en: "Oct 12–16, 2025", ko: "2025년 10월 12일 ~ 16일" },
      location: { ja: "エスポー、フィンランド", en: "Espoo, Finland", ko: "에스포, 핀란드" },
      doi: "10.1145/3714394.3756346",
    },
  ],

  // ▲▲▲ 論文を追加する場所 ▲▲▲

  // ▼▼▼ 受賞歴を追加する場所（新しい順に上から）▼▼▼
  // フィールド: title(受賞名) / venue(学会名) / work(対象研究・任意) /
  //             year / date / location  — いずれも { ja, en, ko } で言語別に書けます。
  awards: [
    {
      title: { ja: "学生奨励賞", en: "Student Encouragement Award", ko: "학생장려상" },
      venue: {
        ja: "第90回ユビキタスコンピューティングシステム研究会(UBI)",
        en: "90th Ubiquitous Computing System Workshop (IPSJ)",
        ko: "제90회 유비쿼터스 컴퓨팅 시스템 연구회",
      },
      // 対象研究（任意）
      work: "混練過程における生地状態変化のマルチモーダルセンシングに関する検討",
      year: 2026,
      date: { ja: "2026年5月", en: "May 2026", ko: "2026년 5월" },
      location: { ja: "奈良、日本", en: "Nara, Japan", ko: "나라, 일본" },
    },
  ],
  // ▲▲▲ 受賞歴を追加する場所 ▲▲▲
};
