const REVIEW_DOC = "https://docs.google.com/document/d/1Qootz2URHyhRHaJOYVqKBuT_82H1DXHx/edit?usp=drivesdk";

window.PROFILE_DATA = {
  sections: [
    {
      id: "application-kit",
      title: { zh: "申請工作檔", en: "Application Working Files" },
      items: [
        {
          date: "更新中", title: { zh: "申請工作底稿", en: "Application Working Draft" },
          organization: { zh: "含個人資料與歷次申請內容的私人工作檔", en: "Private working file containing personal details and prior application content" }, type: { zh: "工作底稿", en: "Working file" },
          evidence: [{ label: { zh: "工作底稿 PPTX", en: "Working draft PPTX" }, url: "https://docs.google.com/presentation/d/1mvpHjaI9Ied_wUPDVgpfDwQs2qo0aQmz/edit?usp=drivesdk" }]
        },
        {
          date: "2025", title: { zh: "其他有助審查資料", en: "Additional Review Materials" },
          organization: { zh: "研究著作、計畫、研討會與獎項彙整", en: "Consolidated research outputs, projects, conferences, and awards" }, type: { zh: "審查資料", en: "Review materials" },
          evidence: [{ label: { zh: "審查資料 DOCX", en: "Review materials DOCX" }, url: REVIEW_DOC }]
        }
      ]
    },
    {
      id: "education",
      title: { zh: "學歷、學位證書與成績單", en: "Education, Degrees & Transcripts" },
      items: [
        {
          date: "2022", title: { zh: "高齡福祉科技碩士", en: "Master’s Degree in Gerontechnology" },
          organization: { zh: "馬偕醫學院 高齡福祉科技研究所", en: "Graduate Institute of Gerontechnology, Mackay Medical College" }, type: { zh: "學位", en: "Degree" },
          evidence: [
            { label: { zh: "中文學位證書", en: "Chinese degree certificate" }, url: "https://drive.google.com/file/d/19VjkgohfKpTx4qqGuH8n3By9up40sIxk/view" },
            { label: { zh: "英文學位證書", en: "English degree certificate" }, url: "https://drive.google.com/file/d/1rVxXuCibIZ6NPGi1IfmBGSSlhiE-sHkU/view" },
            { label: { zh: "畢業成績單", en: "Graduate transcript" }, url: "https://drive.google.com/file/d/1Bt5fHc0mUZbBPTR4wqr42QYDatSDTBHY/view" }
          ]
        },
        {
          date: "1990", title: { zh: "理學士（電腦科學）", en: "Bachelor of Science (Computer Science)" },
          organization: { zh: "加拿大多倫多大學", en: "University of Toronto, Canada" }, type: { zh: "學位", en: "Degree" },
          evidence: [
            { label: { zh: "畢業證書", en: "Degree certificate" }, url: "https://drive.google.com/file/d/1SUb1oG51Pje4tPT3BsbyUeZ3Efmt8_eN/view" },
            { label: { zh: "正式成績單", en: "Official transcript" }, url: "https://drive.google.com/file/d/137qUjLeXoxw7UtootVu9oTueFP1ddzpg/view" },
            { label: { zh: "畢業證書中譯本", en: "Chinese translation of degree" }, url: "https://docs.google.com/presentation/d/1n3pmoEeNTMH1trK-Pc4-X8X4b7GXKZnM/edit?usp=drivesdk" }
          ]
        }
      ]
    },
    {
      id: "credentials",
      title: { zh: "專業訓練與證照", en: "Professional Credentials" },
      items: [
        { date: "2026–2029", title: { zh: "Gemini 認證教育家", en: "Gemini Certified Educator" }, organization: { zh: "Google for Education", en: "Google for Education" }, type: { zh: "專業認證", en: "Certification" }, evidence: [{ label: { zh: "認證證書", en: "Certificate" }, url: "https://drive.google.com/file/d/1hGG2UGNPwSYBCAfT7l_NIPygxgeuS1rE/view" }] },
        { date: "2019", title: { zh: "數位轉型：領導人才、資料與科技", en: "Digital Transformation: Leading People, Data & Technology" }, organization: { zh: "UC Berkeley Executive Education", en: "UC Berkeley Executive Education" }, type: { zh: "專業進修", en: "Executive education" }, evidence: [{ label: { zh: "結業證書", en: "Certificate" }, url: "https://drive.google.com/file/d/1GQDBM8fOqeU9NaXZNeTvDejFDX32bmL9/view" }] },
        { date: "2019", title: { zh: "醫療口譯人員（中文／英文）", en: "Medical Interpreter Training (Mandarin Chinese / English)" }, organization: { zh: "中華民國職業訓練研究發展中心", en: "Research & Development Institute for Vocational Training, Taiwan" }, type: { zh: "結訓證書", en: "Training certificate" }, evidence: [{ label: { zh: "結訓證書", en: "Certificate" }, url: "https://drive.google.com/file/d/1qgmKBRFvjqbeod7DnS06U1jJuhJokve_/view" }] },
        { date: "2017", title: { zh: "資料科學：從資料到洞見", en: "Data Science: Data to Insights" }, organization: { zh: "MIT Professional Education", en: "MIT Professional Education" }, type: { zh: "專業進修", en: "Professional education" }, evidence: [{ label: { zh: "結業證書", en: "Certificate" }, url: "https://drive.google.com/file/d/15JGj5b4aPLqqY5f1PEj6Stt6KBP3qbt1/view" }] }
      ]
    },
    {
      id: "research",
      title: { zh: "研究與著作", en: "Research & Publications" },
      items: [
        { date: "2025", title: { zh: "以虛擬實境提升機構失智照護者之同理與能力：先驅研究", en: "Enhancing Formal Caregiver Empathy and Competence in Institutional Dementia Care Through Virtual Reality: A Pilot Study" }, organization: { zh: "11th Asian Conference on Aging & Gerontology，日本東京（與 Yi-Heng Chen 合著）", en: "11th Asian Conference on Aging & Gerontology, Tokyo (with Yi-Heng Chen)" }, type: { zh: "壁報發表", en: "Poster" }, missingEvidence: true },
        { date: "2023", title: { zh: "以科技強化獨居長者送餐服務之照護焦點取向", en: "Technology-enhanced care focus approach to meal delivery for solitary seniors" }, organization: { zh: "2023 高齡科技研討會，台北", en: "2023 Conference on Gerontechnology, Taipei" }, type: { zh: "口頭發表", en: "Oral presentation" }, evidence: [{ label: { zh: "發表資料 PDF", en: "Presentation record PDF" }, url: "https://drive.google.com/file/d/1eGEXbN65czn-IoWgSTzUeNpfaifwynYS/view" }, { label: { zh: "發表簡報 PPTX", en: "Presentation PPTX" }, url: "https://docs.google.com/presentation/d/1vzHaG3kOXpiwxOa86W2v6MeMKzTuHwAz/edit?usp=drivesdk" }] },
        { date: "2022", title: { zh: "獨居老人送餐服務：為送餐員需求架構的行動應用與資訊平台設計", en: "Meal Delivery Services for Elderly People Living Alone: Designing a Mobile Application and Information Platform for Delivery Workers" }, organization: { zh: "馬偕醫學院高齡福祉科技研究所碩士論文", en: "Master’s thesis, Graduate Institute of Gerontechnology, Mackay Medical College" }, type: { zh: "碩士論文", en: "Master’s thesis" }, evidence: [{ label: { zh: "論文全文 PDF", en: "Full thesis PDF" }, url: "https://drive.google.com/file/d/1qitky15-DzB3SvdUF7balEFsRaSU5BTb/view" }], publicLinks: [{ label: { zh: "論文典藏", en: "Thesis record" }, url: "https://hdl.handle.net/11296/s93fu3" }] },
        { date: "2022", title: { zh: "偏鄉獨居長者送餐服務科技：送餐員行動應用設計", en: "Technology for home-delivered meal service for rural seniors living alone: Designing a mobile app for meal delivery workers" }, organization: { zh: "ISG 2022，韓國大邱；Gerontechnology 21(s):755", en: "ISG 2022, Daegu; Gerontechnology 21(s):755" }, type: { zh: "口頭發表／摘要", en: "Oral presentation / Abstract" }, evidence: [{ label: { zh: "ISG 發表簡報", en: "ISG presentation" }, url: "https://docs.google.com/presentation/d/1n9LIeQnnYV-s2rOyab3etZWbHoSEznfs/edit?usp=drivesdk" }], publicLinks: [{ label: { zh: "DOI", en: "DOI" }, url: "https://doi.org/10.4017/gt.2022.21.s.755.opp1" }] },
        { date: "2022", title: { zh: "以社會支持架構發展育齡乳癌女性之網路生育保存工具", en: "Developing a web-based oncofertility tool for reproductive-age women with breast cancer based on a social support framework" }, organization: { zh: "Supportive Care in Cancer 30:6195–6204（共同作者）", en: "Supportive Care in Cancer 30:6195–6204 (co-author)" }, type: { zh: "期刊論文", en: "Journal article" }, publicLinks: [{ label: { zh: "期刊 DOI", en: "Journal DOI" }, url: "https://doi.org/10.1007/s00520-022-07046-x" }] },
        { date: "2021", title: { zh: "育齡乳癌女性生育保存決策支持工具研究", en: "Decision-support research for oncofertility among reproductive-age women with breast cancer" }, organization: { zh: "Taipei International Breast Cancer Symposium", en: "Taipei International Breast Cancer Symposium" }, type: { zh: "壁報發表", en: "Poster" }, missingEvidence: true }
      ]
    },
    {
      id: "projects",
      title: { zh: "研究計畫", en: "Research Projects" },
      items: [
        { date: "2022–2025", title: { zh: "虛擬實境情境模擬訓練與失智症行為心理症狀未滿足需求管理", en: "Virtual-reality simulation training and unmet-needs management for behavioral and psychological symptoms of dementia" }, organization: { zh: "國科會三年期研究計畫；計畫主持人：陳怡亨教授", en: "Three-year NSTC project; Principal Investigator: Prof. Yi-Heng Chen" }, type: { zh: "研究參與", en: "Research collaboration" }, missingEvidence: true },
        { date: "2020–2021", title: { zh: "以社會支持架構建置育齡乳癌女性生育保存決策之行動工具", en: "A social-support-based mobile tool for oncofertility decision support among reproductive-age women with breast cancer" }, organization: { zh: "科技部研究計畫；計畫主持人：黃聖妙教授", en: "MOST project; Principal Investigator: Prof. Sheng-Miauh Huang" }, type: { zh: "研究參與", en: "Research collaboration" }, missingEvidence: true }
      ]
    },
    {
      id: "conferences", title: { zh: "研討會發表", en: "Conference Presentations" },
      items: [
        { date: "2025", title: { zh: "11th Asian Conference on Aging & Gerontology", en: "11th Asian Conference on Aging & Gerontology" }, organization: { zh: "日本東京", en: "Tokyo, Japan" }, type: { zh: "壁報發表", en: "Poster" } },
        { date: "2023", title: { zh: "Conference on Gerontechnology", en: "Conference on Gerontechnology" }, organization: { zh: "台北", en: "Taipei, Taiwan" }, type: { zh: "口頭發表", en: "Oral presentation" } },
        { date: "2022", title: { zh: "高齡福祉科技研討會", en: "Conference on Gerontechnology and Welfare Technology" }, organization: { zh: "台北", en: "Taipei, Taiwan" }, type: { zh: "口頭發表", en: "Oral presentation" } },
        { date: "2022", title: { zh: "ISG 2022", en: "ISG 2022" }, organization: { zh: "韓國大邱", en: "Daegu, Republic of Korea" }, type: { zh: "口頭發表", en: "Oral presentation" } }
      ].map((item, index) => index === 1 ? ({ ...item, evidence: [{ label: { zh: "發表資料 PDF", en: "Presentation record PDF" }, url: "https://drive.google.com/file/d/1eGEXbN65czn-IoWgSTzUeNpfaifwynYS/view" }, { label: { zh: "發表簡報 PPTX", en: "Presentation PPTX" }, url: "https://docs.google.com/presentation/d/1vzHaG3kOXpiwxOa86W2v6MeMKzTuHwAz/edit?usp=drivesdk" }] }) : index === 3 ? ({ ...item, evidence: [{ label: { zh: "ISG 發表簡報", en: "ISG presentation" }, url: "https://docs.google.com/presentation/d/1n9LIeQnnYV-s2rOyab3etZWbHoSEznfs/edit?usp=drivesdk" }] }) : ({ ...item, missingEvidence: true }))
    },
    {
      id: "awards", title: { zh: "獎項", en: "Awards" },
      items: [
        { date: "2021", title: { zh: "高齡福祉科技研討會論文發表佳作獎", en: "Merit Award, Conference Paper Presentation" }, organization: { zh: "高齡福祉科技研討會", en: "Conference on Gerontechnology and Welfare Technology" }, type: { zh: "獎項", en: "Award" } },
        { date: "2021", title: { zh: "研究生壁報競賽佳作獎", en: "Merit Award, Graduate Student Poster Competition" }, organization: { zh: "馬偕醫學院", en: "Mackay Medical College" }, type: { zh: "獎項", en: "Award" } },
        { date: "2021", title: { zh: "圖書館整合查詢館際三冠王活動第三名", en: "Third Place, Library Integrated Discovery Challenge" }, organization: { zh: "馬偕醫學院圖書館", en: "Mackay Medical College Library" }, type: { zh: "獎項", en: "Award" } }
      ].map((item, index) => index === 0 ? ({ ...item, evidence: [{ label: { zh: "獲獎紀錄 PDF", en: "Award record PDF" }, url: "https://drive.google.com/file/d/1rtT_UCY8LEaty1QtDqdfQuidNAJ-z_JI/view" }] }) : index === 1 ? ({ ...item, evidence: [{ label: { zh: "獲獎紀錄 PDF", en: "Award record PDF" }, url: "https://drive.google.com/file/d/1-eZ6YdQeuPAwnHSQ2ZnXm1MFPVng45vL/view" }] }) : ({ ...item, missingEvidence: true }))
    },
    {
      id: "assurance", title: { zh: "語言與研究規範", en: "Language & Research Compliance" },
      items: [
        { date: "2025", title: { zh: "學術研究倫理教育課程（12 小時）", en: "Academic Research Ethics Education (12 hours)" }, organization: { zh: "臺灣學術倫理教育資源中心", en: "Center for Taiwan Academic Research Ethics Education" }, type: { zh: "研究倫理", en: "Research ethics" }, evidence: [{ label: { zh: "修課證明", en: "Course certificate" }, url: "https://drive.google.com/file/d/1uXvAEGEeTtrkzLzp7DNlAmw1wRC-v-ON/view" }] },
        { date: "1990", title: { zh: "英語授課學位證明", en: "English-medium Degree Verification" }, organization: { zh: "加拿大多倫多大學", en: "University of Toronto, Canada" }, type: { zh: "英文能力佐證", en: "English proficiency evidence" }, evidence: [{ label: { zh: "校方證明信", en: "University letter" }, url: "https://drive.google.com/file/d/1q3mj-SC4avuaEx3kJIZ3wqWTLNsc5gre/view" }] }
      ]
    },
    {
      id: "bundles", title: { zh: "翻譯與整併檔", en: "Translations & Bundled Files" },
      items: [
        { date: "彙整", title: { zh: "畢業與結業證書（中文註）", en: "Degrees and Certificates with Chinese Notes" }, organization: { zh: "申請用 PDF 彙整", en: "PDF bundle for applications" }, type: { zh: "整併檔", en: "Bundle" }, evidence: [{ label: { zh: "中文註 PDF", en: "Annotated PDF" }, url: "https://drive.google.com/file/d/1MZ1pKCkwRiS52aBwY8FahsCBB0H3a9nj/view" }] },
        { date: "彙整", title: { zh: "畢業與結業證書（英文版）", en: "Degrees and Certificates — English Set" }, organization: { zh: "申請用 PPTX 彙整", en: "PPTX bundle for applications" }, type: { zh: "整併檔", en: "Bundle" }, evidence: [{ label: { zh: "英文版 PPTX", en: "English bundle PPTX" }, url: "https://docs.google.com/presentation/d/1Z20xa9M7Zn4BTgp_9u2bMtAU9MCVP_YU/edit?usp=drivesdk" }] },
        { date: "彙整", title: { zh: "畢業與結業證書（原始彙整）", en: "Degrees and Certificates — Source Set" }, organization: { zh: "申請用 PPTX 彙整", en: "PPTX bundle for applications" }, type: { zh: "整併檔", en: "Bundle" }, evidence: [{ label: { zh: "原始彙整 PPTX", en: "Source bundle PPTX" }, url: "https://docs.google.com/presentation/d/19vB_zBVCoYpuIbL5kT-eFKzErcRY0Kk9/edit?usp=drivesdk" }] }
      ]
    }
  ]
};
