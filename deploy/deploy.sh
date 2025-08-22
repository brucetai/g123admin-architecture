#!/bin/bash

echo "🚀 G123 Admin 架構設計部署腳本"
echo "================================"

# 檢查是否安裝了必要的工具
if ! command -v git &> /dev/null; then
    echo "❌ 請先安裝 Git"
    exit 1
fi

echo "📁 當前目錄: $(pwd)"
echo "📋 文件列表:"
ls -la

echo ""
echo "🌐 選擇部署方式:"
echo "1) GitHub Pages (推薦)"
echo "2) Netlify"
echo "3) Vercel"
echo "4) 其他靜態託管"

read -p "請選擇 (1-4): " choice

case $choice in
    1)
        echo "📚 部署到 GitHub Pages..."
        echo "請按照以下步驟操作："
        echo "1. 在 GitHub 創建新倉庫"
        echo "2. 執行以下命令："
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit'"
        echo "   git branch -M main"
        echo "   git remote add origin https://github.com/你的用戶名/倉庫名.git"
        echo "   git push -u origin main"
        echo "3. 在倉庫設置中啟用 GitHub Pages"
        echo "   Settings > Pages > Source: Deploy from a branch > Branch: main"
        ;;
    2)
        echo "☁️ 部署到 Netlify..."
        echo "1. 訪問 https://netlify.com"
        echo "2. 拖拽整個 deploy 文件夾到部署區域"
        echo "3. 等待部署完成，獲得分享鏈接"
        ;;
    3)
        echo "⚡ 部署到 Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "安裝 Vercel CLI..."
            npm install -g vercel
        fi
        echo "執行部署..."
        vercel
        ;;
    4)
        echo "🔧 其他部署方式..."
        echo "將 deploy 文件夾內容上傳到你的靜態託管服務即可"
        ;;
    *)
        echo "❌ 無效選擇"
        exit 1
        ;;
esac

echo ""
echo "✅ 部署說明完成！"
echo "📖 詳細說明請查看 README.md"
