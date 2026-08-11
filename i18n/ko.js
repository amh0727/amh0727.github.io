/* =====================================================================
   한국어 텍스트 (i18n)
   ---------------------------------------------------------------------
   한국어로 표시될 문구를 여기서 편집합니다.
   ja.js / en.js 와 같은 구조·같은 순서로 유지하세요.
   (논문 목록은 언어 공통이라 data.js 에서 관리합니다.)
   ===================================================================== */
window.SITE_I18N = window.SITE_I18N || {};
window.SITE_I18N.ko = {

  ui: {
    secEducation: "학력",
    secPublications: "주요 논문·발표",
    secAwards: "수상 경력",
    navEducation: "학력",
    navPublications: "논문·발표",
    navAwards: "수상 경력",
    awardTag: "수상",
    filterAll: "전체",
    // {total} {intl} {domestic} 가 건수로 치환됩니다
    summary: "총 {total}건　·　국제 {intl}　·　국내 {domestic}",
    copied: "복사됨",
    copyBibtex: "복사",
    copiedBibtex: "복사됨",
    researchInterests: "연구 분야",
  },

  profile: {
    greeting: "석사과정 연구자",
    affiliation: "나라첨단과학기술대학원대학",
    program: "석사과정",
    description:
      "기기 안에서 동작하는 소형 언어모델(SLM)을 이용해, 데이터를 외부로 내보내지 않고 사용자의 행동·상황을 추정하는 연구를 하고 있습니다.",
  },

  education: [
    {
      school: "나라첨단과학기술대학원대학 (NAIST)",
      dept: "첨단과학기술연구과 석사과정",
      date: "2025.10 – 2027.03",
      location: "나라, 일본",
    },
    {
      school: "나라첨단과학기술대학원대학 (NAIST)",
      dept: "첨단과학기술연구과 연구생",
      date: "2025.04 – 2025.09",
      location: "나라, 일본",
    },
  ],
};
