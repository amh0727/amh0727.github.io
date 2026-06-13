/* =====================================================================
   render.js — data.js の内容を読み込んで画面を組み立てる
   通常ここを編集する必要はありません。論文の追加は data.js で行います。
   ===================================================================== */
(function () {
  "use strict";

  const data = window.SITE_DATA || {};
  const $ = (id) => document.getElementById(id);

  /* ---- 小さなヘルパ ---- */
  // **text** を <strong> に変換（著者名の強調用）。HTML エスケープ込み。
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function authorMarkup(authors) {
    return escapeHtml(authors).replace(
      /\*\*(.+?)\*\*/g,
      '<strong class="author-self">$1</strong>'
    );
  }
  // type 名 → CSS クラスのサフィックス
  function typeClass(type) {
    const t = (type || "").toLowerCase();
    if (t.includes("full")) return "full";
    if (t.includes("short")) return "short";
    if (t.includes("workshop")) return "workshop";
    if (t.includes("journal")) return "journal";
    if (t.includes("poster")) return "poster";
    if (t.includes("preprint")) return "preprint";
    return "default";
  }

  /* ---- SVG アイコン ---- */
  const ICON = {
    calendar:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    pin:
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    book:
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    cap:
      '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>',
    link:
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  };

  /* ---- Hero / Profile ---- */
  function renderProfile() {
    const p = data.profile || {};
    if (p.initials) {
      $("hero-initials").textContent = p.initials;
      const logo = document.querySelector(".nav-logo");
      if (logo) logo.textContent = p.initials;
    }
    if ($("hero-greeting")) $("hero-greeting").textContent = p.greeting || "";
    if ($("hero-name")) $("hero-name").textContent = p.name || "";
    if ($("hero-affiliation")) $("hero-affiliation").textContent = p.affiliation || "";
    if ($("hero-program")) $("hero-program").textContent = p.program || "";
    if ($("hero-description")) $("hero-description").innerHTML = p.description || "";
    if ($("hero-orcid")) $("hero-orcid").href = p.orcid || "#";

    const interestsEl = $("hero-interests");
    if (interestsEl && Array.isArray(p.interests)) {
      interestsEl.innerHTML = p.interests
        .map((t) => `<span class="interest-tag">${escapeHtml(t)}</span>`)
        .join("");
    }

    if ($("footer-name")) $("footer-name").textContent = p.name || "";
    if ($("footer-year")) {
      const years = (data.publications || []).map((x) => x.year).filter(Boolean);
      $("footer-year").textContent = years.length ? Math.max(...years) : "";
    }
  }

  /* ---- Education ---- */
  function renderEducation() {
    const list = $("edu-list");
    if (!list) return;
    list.innerHTML = (data.education || [])
      .map(
        (e) => `
      <div class="edu-card">
        <div class="edu-icon">${ICON.cap}</div>
        <div class="edu-content">
          <h3>${escapeHtml(e.school)}</h3>
          ${e.dept ? `<p class="edu-dept">${escapeHtml(e.dept)}</p>` : ""}
          <div class="edu-meta">
            ${e.date ? `<span class="edu-date">${ICON.calendar}${escapeHtml(e.date)}</span>` : ""}
            ${e.location ? `<span class="edu-location">${ICON.pin}${escapeHtml(e.location)}</span>` : ""}
          </div>
        </div>
      </div>`
      )
      .join("");
  }

  /* ---- Publications ---- */
  function pubCard(pub) {
    const url = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : null);
    const titleInner = escapeHtml(pub.title);
    const title = url
      ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${titleInner}</a>`
      : titleInner;

    const links = (pub.links || [])
      .map(
        (l) =>
          `<a class="pub-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${ICON.link}${escapeHtml(l.label)}</a>`
      )
      .join("");

    return `
      <article class="pub-card" data-year="${pub.year}">
        <div class="pub-side">
          <div class="pub-year-badge">${escapeHtml(String(pub.year || ""))}</div>
          ${pub.type ? `<div class="pub-type pub-type-${typeClass(pub.type)}">${escapeHtml(pub.type)}</div>` : ""}
        </div>
        <div class="pub-content">
          <h3 class="pub-title">${title}</h3>
          ${pub.authors ? `<p class="pub-authors">${authorMarkup(pub.authors)}</p>` : ""}
          <div class="pub-venue">${ICON.book}<span>${escapeHtml(pub.venue || "")}</span></div>
          <div class="pub-meta">
            ${pub.date ? `<span>${ICON.calendar}${escapeHtml(pub.date)}</span>` : ""}
            ${pub.location ? `<span>${ICON.pin}${escapeHtml(pub.location)}</span>` : ""}
          </div>
          <div class="pub-footer">
            ${pub.doi ? `<span class="pub-doi">DOI: ${escapeHtml(pub.doi)}</span>` : ""}
            ${links}
          </div>
        </div>
      </article>`;
  }

  function renderPublications() {
    const list = $("pub-list");
    if (!list) return;
    const pubs = (data.publications || []).slice();

    // Stats
    const statsEl = $("pub-stats");
    if (statsEl) {
      const years = pubs.map((p) => p.year).filter(Boolean);
      const stats = [
        { num: pubs.length, label: "Publications" },
        { num: new Set(pubs.map((p) => p.type).filter(Boolean)).size, label: "Venues" },
        {
          num: years.length ? `${Math.min(...years)}–${Math.max(...years)}` : "—",
          label: "Active Years",
        },
      ];
      statsEl.innerHTML = stats
        .map(
          (s) =>
            `<div class="stat"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`
        )
        .join("");
    }

    // Year filter chips
    const filtersEl = $("pub-filters");
    const years = Array.from(new Set(pubs.map((p) => p.year).filter(Boolean))).sort(
      (a, b) => b - a
    );
    if (filtersEl && years.length > 1) {
      filtersEl.innerHTML =
        `<button class="filter-chip active" data-filter="all">All</button>` +
        years
          .map((y) => `<button class="filter-chip" data-filter="${y}">${y}</button>`)
          .join("");
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;
        filtersEl.querySelectorAll(".filter-chip").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const f = btn.dataset.filter;
        list.querySelectorAll(".pub-card").forEach((card) => {
          const show = f === "all" || card.dataset.year === f;
          card.classList.toggle("hidden", !show);
        });
      });
    }

    list.innerHTML = pubs.map(pubCard).join("");
  }

  /* ---- Scroll animations & nav ---- */
  function setupInteractions() {
    const nav = $("nav");
    if (nav) {
      window.addEventListener("scroll", () => {
        nav.classList.toggle("nav-scrolled", window.scrollY > 20);
      });
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".pub-card, .edu-card, .section-header")
      .forEach((el) => observer.observe(el));
  }

  /* ---- Boot ---- */
  renderProfile();
  renderEducation();
  renderPublications();
  setupInteractions();
})();
