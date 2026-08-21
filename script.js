(() => {
  "use strict";

  const ui = {
    zh: {
      skip: "跳至主要內容", sidebarSummary: "申請資料與佐證文件索引", print: "列印",
      heroEyebrow: "APPLICATION RECORD INDEX", heroTitle: "申請資料索引",
      heroCopy: "需要填寫獎學金、補助或其他申請時，從這裡快速查找經歷、日期、正式名稱與相關佐證。",
      searchLabel: "搜尋申請資料", searchPlaceholder: "搜尋學校、證照、研究或年份…",
      vaultEyebrow: "OWNER-ONLY GOOGLE DRIVE", vaultTitle: "連結可以公開，文件仍然私人",
      vaultCopy: "每個 ↗ 圖示會開啟相關佐證。只有登入本人 Google 帳號時可以查看；其他訪客會看到權限要求。",
      privacyShort: "連結可見；文件僅本人可開啟", export: "下載 CSV",
      privateEvidence: "私人佐證", publicSource: "公開來源", missingDirect: "尚缺直接佐證", noResults: "找不到符合的紀錄",
      resultCount: count => `顯示 ${count} 筆`,
      footer: "本頁是申請資料索引；佐證連結可見，但 Google Drive 文件維持僅限本人存取。",
      newWindow: "在新視窗開啟"
    },
    en: {
      skip: "Skip to main content", sidebarSummary: "Application records and evidence index", print: "Print",
      heroEyebrow: "APPLICATION RECORD INDEX", heroTitle: "Application Record Index",
      heroCopy: "Use this index when preparing scholarship, grant, or other applications to quickly find dates, formal titles, experience details, and supporting evidence.",
      searchLabel: "Search application records", searchPlaceholder: "Search schools, credentials, research, or years…",
      vaultEyebrow: "OWNER-ONLY GOOGLE DRIVE", vaultTitle: "Links are visible; documents remain private",
      vaultCopy: "Each ↗ icon opens supporting evidence. Only the signed-in owner can view the file; other visitors will see an access request.",
      privacyShort: "Links are visible; files are owner-only", export: "Download CSV",
      privateEvidence: "Private evidence", publicSource: "Public source", missingDirect: "Direct evidence needed", noResults: "No matching records",
      resultCount: count => `${count} records shown`,
      footer: "This is an application record index. Evidence links are visible, while Google Drive files remain owner-only.",
      newWindow: "Open in a new window"
    }
  };

  const state = { language: localStorage.getItem("profile-language") || "zh", query: "" };
  const data = window.PROFILE_DATA;
  const navigation = document.getElementById("site-navigation");
  const sectionsRoot = document.getElementById("profile-sections");
  const languageButton = document.getElementById("language-toggle");
  const searchInput = document.getElementById("record-search");
  const resultCount = document.getElementById("result-count");

  const text = value => value?.[state.language] ?? value?.zh ?? "";
  const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  const allLanguageText = value => value && typeof value === "object" ? `${value.zh || ""} ${value.en || ""}` : String(value || "");

  function renderNavigation() {
    navigation.innerHTML = data.sections.map((section, index) => `
      <a href="#${section.id}">
        <span class="nav-number">${String(index + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(text(section.title))}</span>
      </a>`).join("");
  }

  function renderLinks(links, kind) {
    if (!links?.length) return "";
    const prefix = kind === "evidence" ? ui[state.language].privateEvidence : ui[state.language].publicSource;
    return links.map(link => `
      <a class="record-link ${kind}" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer"
         title="${escapeHtml(prefix)}：${escapeHtml(text(link.label))}"
         aria-label="${escapeHtml(prefix)}：${escapeHtml(text(link.label))} — ${ui[state.language].newWindow}">
        <span aria-hidden="true">↗</span><span>${escapeHtml(text(link.label))}</span>
      </a>`).join("");
  }

  function renderSections() {
    sectionsRoot.innerHTML = data.sections.map((section, sectionIndex) => `
      <section id="${section.id}" class="profile-section" aria-labelledby="${section.id}-title">
        <header class="section-header">
          <div class="section-title-wrap">
            <span class="section-number">${String(sectionIndex + 1).padStart(2, "0")}</span>
            <h2 id="${section.id}-title">${escapeHtml(text(section.title))}</h2>
          </div>
          <button class="export-button" type="button" data-export="${section.id}">${ui[state.language].export}</button>
        </header>
        <div class="record-list" role="list">
          ${section.items.map(item => {
            const searchText = [item.date, allLanguageText(item.title), allLanguageText(item.organization), allLanguageText(item.type)].join(" ").toLocaleLowerCase();
            return `<article class="record-row" role="listitem" data-search="${escapeHtml(searchText)}">
              <div class="record-date">${escapeHtml(item.date)}</div>
              <div class="record-content">
                <div class="record-heading"><h3>${escapeHtml(text(item.title))}</h3><span class="type-label">${escapeHtml(text(item.type))}</span></div>
                <p>${escapeHtml(text(item.organization))}</p>
              </div>
              <div class="record-actions">
                ${renderLinks(item.evidence, "evidence")}
                ${renderLinks(item.publicLinks, "public")}
                ${item.missingEvidence ? `<span class="missing-link">${ui[state.language].missingDirect}</span>` : ""}
              </div>
            </article>`;
          }).join("")}
        </div>
      </section>`).join("");
  }

  function applySearch() {
    const query = state.query.trim().toLocaleLowerCase();
    let visible = 0;
    document.querySelectorAll(".profile-section").forEach(section => {
      let sectionVisible = 0;
      section.querySelectorAll(".record-row").forEach(row => {
        const matches = !query || row.dataset.search.includes(query);
        row.hidden = !matches;
        if (matches) { visible += 1; sectionVisible += 1; }
      });
      section.hidden = sectionVisible === 0;
    });
    resultCount.textContent = visible ? ui[state.language].resultCount(visible) : ui[state.language].noResults;
  }

  function renderInterface() {
    document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = ui[state.language][element.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => { element.placeholder = ui[state.language][element.dataset.i18nPlaceholder]; });
    languageButton.textContent = state.language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切換為中文");
    renderNavigation();
    renderSections();
    applySearch();
  }

  function csvCell(value) { return `"${String(value ?? "").replaceAll('"', '""')}"`; }
  function exportSection(sectionId) {
    const section = data.sections.find(entry => entry.id === sectionId);
    if (!section) return;
    const header = state.language === "zh" ? ["年份", "項目", "機構／出處", "類型", "佐證名稱", "佐證連結", "公開來源"] : ["Year", "Item", "Organization / Source", "Type", "Evidence", "Evidence URL", "Public source"];
    const rows = section.items.map(item => [
      item.date, text(item.title), text(item.organization), text(item.type),
      item.missingEvidence ? ui[state.language].missingDirect : (item.evidence || []).map(link => text(link.label)).join("；"),
      (item.evidence || []).map(link => link.url).join("；"),
      (item.publicLinks || []).map(link => link.url).join("；")
    ]);
    const csv = "\uFEFF" + [header, ...rows].map(row => row.map(csvCell).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = Object.assign(document.createElement("a"), { href: url, download: `aria-chang-${section.id}-${state.language}.csv` });
    document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
  }

  languageButton.addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem("profile-language", state.language);
    renderInterface();
  });
  searchInput.addEventListener("input", event => { state.query = event.target.value; applySearch(); });
  document.getElementById("print-button").addEventListener("click", () => window.print());
  sectionsRoot.addEventListener("click", event => {
    const button = event.target.closest("[data-export]");
    if (button) exportSection(button.dataset.export);
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();
  renderInterface();
})();
