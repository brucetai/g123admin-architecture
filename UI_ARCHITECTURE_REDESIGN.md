# G123 Admin UI 架構重設計

## 設計理念
基於遊戲生命週期（上線前、中、後）來重新組織管理介面，提供更直觀、邏輯性強的用戶體驗。

## 當前架構分析
### 現有問題
1. 功能分散，缺乏邏輯關聯
2. 導航層級混亂
3. 用戶需要多次點擊才能找到目標功能
4. 缺乏清晰的工作流程指引

### 現有功能分類
- ゲーム (Game) - 遊戲管理
- 事前登録 (Pre-registration) - 預註冊
- 固定ページ (Fixed Page) - 靜態頁面
- 表示管理 (Display Management) - 顯示管理
- SEO - 搜尋引擎優化
- 課金 (Billing) - 付費系統
- ゲームユーザー (Game User) - 遊戲用戶
- 設定 (Settings) - 系統設定

## 新架構設計

### 1. 遊戲生命週期管理 (Game Lifecycle Management)
```
🎮 遊戲生命週期管理
├── 📋 遊戲規劃 (Game Planning)
│   ├── 遊戲一覧 (Game List)
│   ├── 遊戲新增 (Add Game)
│   └── 遊戲設定 (Game Settings)
├── 🚀 上線準備 (Pre-Launch)
│   ├── 遊戲預覽 (Game Preview)
│   ├── CBT管理 (CBT Management)
│   ├── 事前登録管理 (Pre-registration Management)
│   ├── 事前登録用戶 (Pre-registration Users)
│   └── 遊戲公開管理 (Game Release Management)
└── 📊 上線後管理 (Post-Launch)
    ├── 遊戲監控 (Game Monitoring)
    ├── 用戶管理 (User Management)
    └── 數據分析 (Analytics)
```

### 2. 內容管理 (Content Management)
```
📝 內容管理
├── 🎨 視覺內容 (Visual Content)
│   ├── 圖片管理 (Image Management)
│   ├── 介紹橫幅 (Introduction Banner)
│   ├── 評級圖片 (Rating Images)
│   └── 遊戲素材 (Game Assets)
├── 📰 文字內容 (Text Content)
│   ├── 固定頁面 (Fixed Pages)
│   ├── 固定頁面CSS (Fixed Page CSS)
│   ├── 新聞管理 (News Management)
│   └── 短縮URL (Shortened URL)
└── 🏷️ 分類管理 (Category Management)
    ├── 顯示設定 (Display Settings)
    ├── 類型標籤 (Genre/Tags)
    └── 語言管理 (Language Management)
```

### 3. 用戶與營運 (User & Operations)
```
👥 用戶與營運
├── 👤 用戶管理 (User Management)
│   ├── 遊戲用戶 (Game Users)
│   ├── 系統用戶 (System Users)
│   ├── 黑名單 (Blacklist)
│   ├── 帳戶恢復 (Account Recovery)
│   └── 用戶國際化設定 (User Internationalization)
├── 💰 付費系統 (Payment System)
│   ├── 付費搜尋 (Payment Search)
│   ├── 退款申請歷史 (Refund Applications)
│   ├── 退款歷史 (Refund History)
│   ├── 卡片詐欺檢測 (Card Fraud Detection)
│   └── 付費方式暫停 (Payment Method Suspension)
└── 🔗 第三方整合 (Third-party Integration)
    ├── IM連攜變更 (IM Linkage Change)
    ├── OIDC認證資訊 (OIDC Authentication)
    └── PSP通知URL (PSP NotifyUrl)
```

### 4. 技術管理 (Technical Management)
```
⚙️ 技術管理
├── 🔍 SEO優化 (SEO Optimization)
│   ├── G123 Meta設定 (G123 Meta Settings)
│   ├── H5 Meta設定 (H5 Meta Settings)
│   └── G123 重定向設定 (G123 Redirect Settings)
├── 🛡️ 安全設定 (Security Settings)
│   ├── 風險IP設定 (Risk IP Settings)
│   └── 安全配置 (Security Configuration)
└── 🔧 系統維護 (System Maintenance)
    ├── 快取管理 (Cache Management)
    ├── 系統監控 (System Monitoring)
    └── CTW News
```

## 架構優勢

### 1. 邏輯性強
- 基於遊戲生命週期組織功能
- 相關功能集中管理
- 減少用戶認知負擔

### 2. 工作流程優化
- 上線前：規劃 → 準備 → 預覽
- 上線中：監控 → 用戶管理 → 內容更新
- 上線後：數據分析 → 優化 → 維護

### 3. 用戶體驗提升
- 減少導航層級
- 相關功能就近放置
- 清晰的視覺層級

### 4. 擴展性
- 新功能容易歸類
- 模組化設計
- 便於維護和更新

## 實施建議

### 階段一：核心重組
1. 重新組織主要導航結構
2. 調整功能分組
3. 更新導航標籤

### 階段二：細節優化
1. 優化子功能分組
2. 調整權限結構
3. 更新用戶指引

### 階段三：體驗提升
1. 添加工作流程指引
2. 優化搜尋功能
3. 增加快捷操作

## 技術實現要點

### 1. 保持現有UI樣式
- 不改變視覺設計
- 保持品牌一致性
- 維持用戶熟悉度

### 2. 漸進式遷移
- 分階段實施
- 提供切換選項
- 收集用戶反饋

### 3. 數據遷移
- 保持數據完整性
- 更新權限映射
- 確保功能正常

這個新架構將為g123 admin提供更清晰、更直觀的管理體驗，同時保持現有的視覺設計和功能完整性。
