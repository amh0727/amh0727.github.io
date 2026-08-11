/* =====================================================================
   日本語テキスト (i18n)
   ---------------------------------------------------------------------
   この言語で表示される文章をここで編集します。
   en.js / ko.js と同じ構造・同じ順序にしてください。
   （論文リストは言語共通なので data.js で管理します）
   ===================================================================== */
window.SITE_I18N = window.SITE_I18N || {};
window.SITE_I18N.ja = {

  // セクション見出し・ナビ・サマリなどの UI ラベル
  ui: {
    secEducation: "学歴",
    secPublications: "主な論文・発表",
    secAwards: "受賞歴",
    navEducation: "学歴",
    navPublications: "論文・発表",
    navAwards: "受賞歴",
    awardTag: "受賞",
    filterAll: "すべて",
    // {total} {intl} {domestic} が件数に置き換わります
    summary: "全 {total} 件　・　国際 {intl}　・　国内 {domestic}",
    copied: "コピーしました",
    copyBibtex: "コピー",
    copiedBibtex: "コピーしました",
    researchInterests: "研究分野",
  },

  // 自己紹介（サイドバー）
  profile: {
    greeting: "修士課程・研究者",
    affiliation: "奈良先端科学技術大学院大学",
    program: "博士前期課程",
    description:
      "センサデータと小規模言語モデルを用いて、プライバシーと消費電力に配慮した実世界の行動・状況認識を研究しています。",
  },

  // 学歴（新しい順）
  education: [
    {
      school: "奈良先端科学技術大学院大学 (NAIST)",
      dept: "先端科学技術研究科 博士前期課程",
      date: "2025.10 – 2027.03",
      location: "奈良、日本",
    },
    {
      school: "奈良先端科学技術大学院大学 (NAIST)",
      dept: "先端科学技術研究科 研究生",
      date: "2025.04 – 2025.09",
      location: "奈良、日本",
    },
  ],
};
