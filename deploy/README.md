# G123 Admin UI 架構重設計

## 項目概述
這是一個基於遊戲生命週期的邏輯性架構重組設計，將原本分散的8個模組重組為4個邏輯性強的模組。

## 功能特色
- 🏗️ **架構設計**：完整的四模組架構展示
- 🔄 **重構對比**：重構前後對比和統計數據
- 📊 **分析報告**：詳細的重構分析和優勢說明
- 📱 **響應式設計**：支持各種設備和螢幕尺寸
- 🎨 **現代化UI**：美觀的漸變色彩和動畫效果

## 部署方式

### 1. GitHub Pages (推薦)
```bash
# 克隆或創建倉庫
git clone https://github.com/你的用戶名/g123-admin-architecture.git
cd g123-admin-architecture

# 上傳文件
git add .
git commit -m "Initial commit"
git push origin main

# 在GitHub設置中啟用Pages
# Settings > Pages > Source: Deploy from a branch > Branch: main
```

### 2. Netlify
- 直接拖拽 `deploy` 文件夾到 Netlify 部署區域
- 或連接GitHub倉庫自動部署

### 3. Vercel
```bash
npm i -g vercel
vercel
```

### 4. 其他靜態託管服務
- 上傳 `deploy` 文件夾內容到任何靜態託管服務
- 支持 Apache、Nginx 等 Web 服務器

## 文件結構
```
deploy/
├── index.html          # 主頁面
├── css/
│   └── style.css      # 樣式文件
├── js/
│   └── main.js        # 交互腳本
└── README.md          # 說明文檔
```

## 使用說明
1. 打開 `index.html` 即可查看完整架構
2. 使用標籤頁切換不同內容區域
3. 支持鍵盤快捷鍵：Alt+1/2/3 切換標籤
4. 移動端支持滑動手勢切換標籤

## 技術特點
- **純前端實現**：無需後端服務器
- **現代化CSS**：使用Grid、Flexbox、CSS變量
- **響應式設計**：適配各種設備
- **交互體驗**：懸停效果、動畫過渡
- **無障礙支持**：鍵盤導航、語義化標籤

## 瀏覽器兼容性
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 授權
MIT License - 可自由使用和修改

## 聯繫方式
如有問題或建議，請提交 Issue 或 Pull Request。
