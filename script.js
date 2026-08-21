(() => {
  "use strict";

  const ui = {
    zh: {
      skip: "跳至主要內容",
      sidebarSummary: "高齡科技、照護創新與數位轉型",
      print: "列印",
      heroEyebrow: "個人學術與專業紀錄",
      heroTitle: "把跨領域經驗，轉化為可落地的照護創新。",
      heroCopy: "具資訊科學、高齡福祉科技與數位轉型背景，研究關注高齡照護、失智症教育、送餐服務與數位健康工具。",
      tag1: "高齡科技", tag2: "照護創新", tag3: "數位健康", tag4: "科技教育",
      vaultEyebrow: "PRIVATE EVIDENCE VAULT",
      vaultTitle: "申請所需佐證已分類歸檔",
      vaultCopy: "學位證書、成績單、證照與研究倫理證明皆保存於私人資料庫，不在公開網站揭露；可依申請需求提供。",
      privacyShort: "佐證文件私人保存，依需求提供",
      evidence: "佐證已備妥",
      export: "下載 CSV",
      footer: "本頁為公開專業摘要；私人識別資料與佐證文件未公開。",
      newWindow: "在新視窗開啟"
    },
    en: {
      skip: "Skip to main content",
      sidebarSummary: "Gerontechnology, care innovation, and digital transformation",
      print: "Print",
      heroEyebrow: "ACADEMIC & PROFESSIONAL RECORD",
      heroTitle: "Turning interdisciplinary experience into practical care innovation.",
      heroCopy: "With backgrounds in computer science, gerontechnology, and digital transformation, my work focuses on aging care, dementia education, meal-delivery services, and digital health tools.",
      tag1: "Gerontechnology", tag2: "Care Innovation", tag3: "Digital Health", tag4: "Technology Education",
      vaultEyebrow: "PRIVATE EVIDENCE VAULT",
      vaultTitle: "Supporting documents are organized and ready",
      vaultCopy: "Degrees, transcripts, certificates, and research-ethics records are maintained in a private archive rather than published here. They are available when required.",
      privacyShort: "Evidence is archived privately and available on request",
      evidence: "Evidence archived",
      export: "Download CSV",
      footer: "This page is a public professional summary. Personal identifiers and supporting documents are not published.",
      newWindow: "Open in a new window"
    }
  };

  const state = { language: localStorage.getItem("profile-language") || "zh" };
  const data = window.PROFILE_DATA;
  const navigation = document.getElementById("site-navigation");
  const sectionsRoot = document.getElementById("profile-sections");
  const languageButton = document.getElementById("language-toggle");

  function text(value) {
    return value?.[state.language] ?? value?.zh ?? "";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
  }

  function renderNavigation() {
    navigation.innerHTML = data.sections.map((section, index) => `
      <a href="#${section.id}">
        <span class="nav-number">${String(index + 1).padStart(2, "0")}</span>
        <span>${escapeHtml(text(section.title))}</span>
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
        <div class="cards">
          ${section.items.map(item => `
            <article class="record-card">
              <div class="record-date">${escapeHtml(item.date)}</div>
              <div class="record-main">
                <h3>${escapeHtml(text(item.title))}</h3>
                <p>${escapeHtml(text(item.organization))}</p>
                <div class="record-meta">
                  <span class="type-badge">${escapeHtml(text(item.type))}</span>
                  ${item.evidence ? `<span class="status-badge">${ui[state.language].evidence}</span>` : ""}
                  ${item.link ? `<a class="record-link" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(text(item.linkLabel))} — ${ui[state.language].newWindow}">${escapeHtml(text(item.linkLabel))} ↗</a>` : ""}
                </div>
              </div>
            </article>`).join("")}
        </div>
      </section>`).join("");
  }

  function renderInterface() {
    document.documentElement.lang = state.language === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = ui[state.language][element.dataset.i18n];
    });
    languageButton.textContent = state.language === "zh" ? "EN" : "中文";
    languageButton.setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切換為中文");
    renderNavigation();
    renderSections();
  }

  function csvCell(value) {
    return `"${String(value ?? "").replaceAll('"', '""')}"`;
  }

  function exportSection(sectionId) {
    const section = data.sections.find(entry => entry.id === sectionId);
    if (!section) return;
    const header = state.language === "zh" ? ["年份", "項目", "機構／出處", "類型", "佐證狀態", "公開連結"] : ["Year", "Item", "Organization / Source", "Type", "Evidence status", "Public link"];
    const rows = section.items.map(item => [item.date, text(item.title), text(item.organization), text(item.type), item.evidence ? ui[state.language].evidence : "", item.link || ""]);
    const csv = "\uFEFF" + [header, ...rows].map(row => row.map(csvCell).join(",")).join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `aria-chang-${section.id}-${state.language}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  languageButton.addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem("profile-language", state.language);
    renderInterface();
  });

  document.getElementById("print-button").addEventListener("click", () => window.print());
  sectionsRoot.addEventListener("click", event => {
    const button = event.target.closest("[data-export]");
    if (button) exportSection(button.dataset.export);
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();
  renderInterface();
})();
