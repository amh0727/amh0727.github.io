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
  function escapeRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function authorMarkup(authors) {
    const html = escapeHtml(authors);
    // 明示的に **...** で囲まれている場合はそれを優先
    if (html.includes("**")) {
      return html.replace(/\*\*(.+?)\*\*/g, '<strong class="author-self">$1</strong>');
    }
    // それ以外は profile.authorAliases に一致した部分を自動で強調
    const aliases = ((data.profile && data.profile.authorAliases) || [])
      .filter(Boolean)
      .map(escapeHtml)
      .sort((a, b) => b.length - a.length);
    if (!aliases.length) return html;
    const re = new RegExp("(" + aliases.map(escapeRegExp).join("|") + ")", "g");
    return html.replace(re, '<strong class="author-self">$1</strong>');
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
    star:
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>',
  };

  /* ---- プロフィールリンク用アイコン ---- */
  const LINK_ICON = {
    orcid:
      '<svg width="16" height="16" viewBox="0 0 256 256"><path fill="#A6CE39" d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z"/><path fill="#fff" d="M86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-42.9-39.7h-24.5v79.4zM88.7 56.8c0 5.5-4.5 10.1-10.1 10.1s-10.1-4.6-10.1-10.1c0-5.6 4.5-10.1 10.1-10.1s10.1 4.6 10.1 10.1z"/></svg>',
    scholar:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.84 3.77A8 8 0 0 1 12 9a8 8 0 0 1 7.16 4.27L24 9.5z"/></svg>',
    github:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z"/></svg>',
    mail:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    cv:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></svg>',
    link:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
  };

  /* ---- メールアドレスのコピー（平文を埋め込まない難読化） ---- */
  function decodeEmail(enc) {
    try {
      return atob(enc).split("").reverse().join("");
    } catch (e) {
      return "";
    }
  }
  function wireEmailCopy(scope) {
    scope.querySelectorAll(".profile-link[data-copy]").forEach((btn) => {
      const labelSpan = btn.querySelector("span");
      const original = labelSpan ? labelSpan.textContent : "";
      btn.addEventListener("click", () => {
        const email = decodeEmail(btn.getAttribute("data-copy"));
        if (!email) return;
        const done = () => {
          if (!labelSpan) return;
          labelSpan.textContent = "Copied!";
          btn.classList.add("copied");
          setTimeout(() => {
            labelSpan.textContent = original;
            btn.classList.remove("copied");
          }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(email).then(done, done);
        } else {
          const ta = document.createElement("textarea");
          ta.value = email;
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand("copy"); } catch (e) {}
          document.body.removeChild(ta);
          done();
        }
      });
    });
  }

  /* ---- Hero / Profile ---- */
  function renderProfile() {
    const p = data.profile || {};
    // アバター（写真があれば写真、なければイニシャル）
    const avatar = document.querySelector(".hero-avatar");
    if (avatar && p.photo) {
      avatar.classList.add("has-photo");
      avatar.innerHTML = `<img src="${escapeHtml(p.photo)}" alt="${escapeHtml(p.name || "")}">`;
    } else if ($("hero-initials") && p.initials) {
      $("hero-initials").textContent = p.initials;
    }

    if ($("hero-greeting")) $("hero-greeting").textContent = p.greeting || "";
    if ($("hero-name")) $("hero-name").textContent = p.name || "";
    if ($("hero-affiliation")) $("hero-affiliation").textContent = p.affiliation || "";
    if ($("hero-program")) $("hero-program").textContent = p.program || "";
    if ($("hero-description")) $("hero-description").innerHTML = p.description || "";

    const interestsEl = $("hero-interests");
    if (interestsEl && Array.isArray(p.interests)) {
      interestsEl.innerHTML = p.interests
        .map((t) => `<span class="interest-tag">${escapeHtml(t)}</span>`)
        .join("");
    }

    // プロフィールリンク（url または copyEmail があるものだけ表示）
    const linksEl = $("profile-links");
    if (linksEl && Array.isArray(p.links)) {
      linksEl.innerHTML = p.links
        .filter((l) => l && (l.url || l.copyEmail))
        .map((l) => {
          const icon = LINK_ICON[l.icon] || LINK_ICON.link;
          const label = `${icon}<span>${escapeHtml(l.label)}</span>`;
          // メールはコピー専用ボタン（アドレスを平文で埋め込まない）
          if (l.copyEmail) {
            return `<button type="button" class="profile-link" data-copy="${escapeHtml(l.copyEmail)}">${label}</button>`;
          }
          const isMail = /^mailto:/i.test(l.url);
          const attrs = isMail ? "" : ' target="_blank" rel="noopener noreferrer"';
          return `<a class="profile-link" href="${escapeHtml(l.url)}"${attrs}>${label}</a>`;
        })
        .join("");
      wireEmailCopy(linksEl);
    }

    if ($("footer-name")) $("footer-name").textContent = p.name || "";
    if ($("footer-year")) {
      const years = (data.publications || []).map((x) => x.year).filter(Boolean);
      $("footer-year").textContent = years.length ? Math.max(...years) : "";
    }
  }

  /* ---- News ---- */
  function renderNews() {
    const list = $("news-list");
    const section = $("news");
    const items = data.news || [];
    if (!list) return;
    if (!items.length) {
      if (section) section.style.display = "none";
      return;
    }
    list.innerHTML = items
      .map(
        (n) => `
      <li class="news-item">
        <span class="news-date">${escapeHtml(n.date || "")}</span>
        <span class="news-text">${escapeHtml(n.text || "")}</span>
      </li>`
      )
      .join("");
  }

  /* ---- Education ---- */
  function renderEducation() {
    const list = $("edu-list");
    if (!list) return;
    list.innerHTML = (data.education || [])
      .map((e) => {
        const meta = [e.date, e.location].filter(Boolean).map(escapeHtml).join("  ·  ");
        return `
      <div class="edu-item">
        <h3 class="edu-school">${escapeHtml(e.school)}</h3>
        ${e.dept ? `<p class="edu-dept">${escapeHtml(e.dept)}</p>` : ""}
        ${meta ? `<p class="edu-line">${meta}</p>` : ""}
      </div>`;
      })
      .join("");
  }

  /* ---- Publications ---- */
  function pubCard(pub) {
    const url = pub.url || (pub.doi ? `https://doi.org/${pub.doi}` : null);
    const titleInner = escapeHtml(pub.title);
    const title = url
      ? `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${titleInner}</a>`
      : titleInner;

    // 会議名 · 日付 · 場所 を 1 行に
    const venueLine = [pub.venue, pub.date, pub.location]
      .filter(Boolean)
      .map(escapeHtml)
      .join("  ·  ");

    // リンク（DOI + 追加リンク）をテキストリンクとして並べる
    const linkParts = [];
    if (pub.doi) {
      linkParts.push(
        `<a class="pub-link" href="https://doi.org/${escapeHtml(pub.doi)}" target="_blank" rel="noopener noreferrer">DOI</a>`
      );
    }
    (pub.links || []).forEach((l) => {
      if (l && l.url) {
        linkParts.push(
          `<a class="pub-link" href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)}</a>`
        );
      }
    });

    return `
      <article class="pub-item" data-year="${pub.year}">
        <div class="pub-year-col">
          <span class="pub-year">${escapeHtml(String(pub.year || ""))}</span>
          ${pub.type ? `<span class="pub-type pub-type-${typeClass(pub.type)}">${escapeHtml(pub.type)}</span>` : ""}
        </div>
        <div class="pub-body">
          <h3 class="pub-title">${pub.featured ? `<span class="pub-star" title="主要論文">${ICON.star}</span>` : ""}${title}</h3>
          ${pub.authors ? `<p class="pub-authors">${authorMarkup(pub.authors)}</p>` : ""}
          ${venueLine ? `<p class="pub-venue-line">${venueLine}</p>` : ""}
          ${linkParts.length ? `<div class="pub-links">${linkParts.join("")}</div>` : ""}
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
      // 種別に日本語が含まれていれば国内発表、そうでなければ国際発表とみなす
      const hasJa = (s) => /[\u3040-\u30ff\u4e00-\u9fff]/.test(s || "");
      const domestic = pubs.filter((p) => hasJa(p.type)).length;
      const intl = pubs.length - domestic;
      const sep = `<span style="opacity:.45"> \u30fb </span>`;
      statsEl.innerHTML =
        `\u5168 <b>${pubs.length}</b> \u4ef6${sep}\u56fd\u969b <b>${intl}</b>${sep}\u56fd\u5185 <b>${domestic}</b>`;
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

  /* ---- Scroll animations & sidebar scrollspy ---- */
  function setupInteractions() {
    // フェードイン
    const fade = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fade.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".pub-item, .edu-item, .section-header")
      .forEach((el) => fade.observe(el));

    // サイドバーのナビゲーションを現在のセクションに合わせてハイライト
    const navLinks = Array.from(document.querySelectorAll(".side-nav a"));
    const sections = navLinks
      .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
      .filter(Boolean);
    if (sections.length) {
      const spy = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((a) =>
              a.classList.toggle(
                "active",
                a.getAttribute("href") === "#" + entry.target.id
              )
            );
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      sections.forEach((s) => spy.observe(s));
    }
  }

  /* ---- Dark / Light theme toggle ---- */
  function setupTheme() {
    const btn = $("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      const next = isDark ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
    });
  }

  /* ---- Boot ---- */
  renderProfile();
  renderNews();
  renderEducation();
  renderPublications();
  setupInteractions();
  setupTheme();
})();
