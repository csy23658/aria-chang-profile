# 常守瑜 Aria Chang — Academic Profile

一個零建置依賴、可直接部署到 GitHub Pages 的雙語學術／專業資料網站。

## 隱私原則

- 公開 repository 只存放網站程式與公開摘要。
- 學位證書、成績單、證照、申請底稿及其他佐證均由 `.gitignore` 排除。
- 私人 Google Drive 的 folder ID、file ID 與檔案網址不寫入公開網站。
- 網站只標示「佐證已備妥」，需要時再由本人提供。

## 更新內容

公開紀錄集中在 `data/profile.js`。每筆資料可包含：

- `date`：年份或期間
- `title.zh` / `title.en`：中英文名稱
- `organization.zh` / `organization.en`：機構或出處
- `type.zh` / `type.en`：紀錄類型
- `evidence`：是否已有私人佐證
- `link`：選填；只放 DOI、論文典藏等原本就公開的連結

## 本機預覽

在此資料夾執行：

```powershell
python -m http.server 8000
```

然後開啟 `http://127.0.0.1:8000/`。

## GitHub Pages

此網站不需要 Node.js 或建置步驟。Repository 推上 GitHub 後，可在 **Settings → Pages** 選擇從 `main` branch 的 root (`/`) 部署。
