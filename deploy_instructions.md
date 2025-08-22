# G123 Admin 架構設計部署指南

## 部署選項

### 1. GitHub Pages (免費，推薦)
```bash
# 創建新的GitHub倉庫
git init
git add .
git commit -m "Initial commit: G123 Admin UI Architecture"
git branch -M main
git remote add origin https://github.com/你的用戶名/g123-admin-architecture.git
git push -u origin main

# 在GitHub設置中啟用GitHub Pages
# Settings > Pages > Source: Deploy from a branch > Branch: main
```

### 2. Netlify (免費，自動部署)
```bash
# 拖拽整個文件夾到 Netlify 的部署區域
# 或連接GitHub倉庫自動部署
```

### 3. Vercel (免費，自動部署)
```bash
# 安裝Vercel CLI
npm i -g vercel

# 部署
vercel
```

## 文件結構
```
g123-admin-architecture/
├── index.html (主頁)
├── architecture.html (架構圖)
├── comparison.html (對比頁)
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 快速部署腳本
