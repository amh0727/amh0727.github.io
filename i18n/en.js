/* =====================================================================
   English text (i18n)
   ---------------------------------------------------------------------
   Edit the text shown in English here.
   Keep the same structure / order as ja.js and ko.js.
   (The publication list is shared across languages — managed in data.js.)
   ===================================================================== */
window.SITE_I18N = window.SITE_I18N || {};
window.SITE_I18N.en = {

  ui: {
    secEducation: "Education",
    secPublications: "Publications",
    navEducation: "Education",
    navPublications: "Publications",
    filterAll: "All",
    // {total} {intl} {domestic} are replaced with counts
    summary: "{total} total　·　{intl} international　·　{domestic} domestic",
    copied: "Copied!",
  },

  profile: {
    greeting: "Researcher @ NAIST",
    affiliation: "Nara Institute of Science and Technology",
    program: "Master's Program",
    description:
      "I research on-device small language models (SLMs) that infer a user's activity and context without ever sending data off the device.",
  },

  education: [
    {
      school: "Nara Institute of Science and Technology (NAIST)",
      dept: "Graduate School of Science and Technology — Master's Program",
      date: "2025.10 – 2027.03",
      location: "Nara, Japan",
    },
    {
      school: "Nara Institute of Science and Technology (NAIST)",
      dept: "Graduate School of Science and Technology — Research Student",
      date: "2025.04 – 2025.09",
      location: "Nara, Japan",
    },
  ],
};
