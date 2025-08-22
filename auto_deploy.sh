#!/bin/bash

echo "🚀 G123 Admin 自動部署腳本"
echo "================================"

# 檢查Git狀態
if [ ! -d ".git" ]; then
    echo "📁 初始化Git倉庫..."
    git init
    git add .
    git commit -m "Initial commit: G123 Admin UI Architecture"
    echo "✅ Git倉庫初始化完成"
else
    echo "📁 Git倉庫已存在"
fi

echo ""
echo "🌐 選擇部署方式："
echo "1) 創建新的GitHub倉庫並部署"
echo "2) 部署到現有GitHub倉庫"
echo "3) 查看當前Git狀態"

read -p "請選擇 (1-3): " choice

case $choice in
    1)
        echo "📚 創建新的GitHub倉庫..."
        echo ""
        echo "請按照以下步驟操作："
        echo "1. 訪問 https://github.com/new"
        echo "2. 輸入倉庫名稱（如：g123-admin-architecture）"
        echo "3. 選擇 Public 或 Private"
        echo "4. 點擊 'Create repository'"
        echo ""
        read -p "輸入你的GitHub用戶名: " username
        read -p "輸入倉庫名稱: " repo_name
        
        echo "🔗 設置遠程倉庫..."
        git remote add origin https://github.com/$username/$repo_name.git
        git branch -M main
        git push -u origin main
        
        echo ""
        echo "✅ 代碼已推送到GitHub！"
        echo "🌐 現在啟用GitHub Pages："
        echo "1. 訪問 https://github.com/$username/$repo_name"
        echo "2. 點擊 Settings"
        echo "3. 左側菜單點擊 Pages"
        echo "4. Source 選擇 'Deploy from a branch'"
        echo "5. Branch 選擇 'main'"
        echo "6. 點擊 Save"
        echo ""
        echo "⏱️ 等待幾分鐘後，你的網站將在以下地址可用："
        echo "https://$username.github.io/$repo_name/"
        ;;
    2)
        echo "📚 部署到現有GitHub倉庫..."
        read -p "輸入GitHub倉庫URL: " repo_url
        
        echo "🔗 設置遠程倉庫..."
        git remote add origin $repo_url
        git branch -M main
        git push -u origin main
        
        echo "✅ 代碼已推送到現有倉庫！"
        ;;
    3)
        echo "📊 當前Git狀態："
        git status
        echo ""
        echo "🔗 遠程倉庫："
        git remote -v
        ;;
    *)
        echo "❌ 無效選擇"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成！"
echo "📖 詳細說明請查看 README.md"
