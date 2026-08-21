# 常守瑜 Aria Chang — Academic Profile

一個零建置依賴、可直接部署到 GitHub Pages 的雙語申請資料與佐證索引。

## 隱私原則

- 公開 repository 只存放網站程式與公開摘要。
- 學位證書、成績單、證照、申請底稿及其他佐證均由 `.gitignore` 排除。
- 網站可保存 owner-only Google Drive 檔案的檢視網址，方便本人快速開啟佐證。
- 檔案網址雖可從公開原始碼看見，但文件本身維持 `not_shared`；不得為了網站功能放寬 Drive 權限。
- 新增或更換佐證時，先確認檔案仍為 owner-only，再更新 `data/profile.js`。

## 更新內容

公開紀錄集中在 `data/profile.js`。每筆資料可包含：

- `date`：年份或期間
- `title.zh` / `title.en`：中英文名稱
- `organization.zh` / `organization.en`：機構或出處
- `type.zh` / `type.en`：紀錄類型
- `evidence`：私人佐證的名稱與 owner-only Drive URL，可有多筆
- `publicLinks`：選填；放 DOI、論文典藏等原本就公開的來源

## 本機預覽

在此資料夾執行：

```powershell
python -m http.server 8000
```

然後開啟 `http://127.0.0.1:8000/`。

## GitHub Pages

此網站不需要 Node.js 或建置步驟。Repository 推上 GitHub 後，可在 **Settings → Pages** 選擇從 `main` branch 的 root (`/`) 部署。
