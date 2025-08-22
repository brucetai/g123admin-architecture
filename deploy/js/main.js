// 標籤頁切換功能
function showTab(tabName) {
    // 隱藏所有標籤內容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有標籤按鈕的active狀態
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 顯示選中的標籤內容
    document.getElementById(tabName).classList.add('active');
    
    // 添加選中標籤按鈕的active狀態
    event.target.classList.add('active');
}

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 預設顯示第一個標籤
    showTab('architecture');
    
    // 添加模組卡片的懸停效果
    const moduleColumns = document.querySelectorAll('.module-column');
    moduleColumns.forEach(column => {
        column.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        column.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 添加分類項目的懸停效果
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // 添加統計項目的懸停效果
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// 平滑滾動到頂部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加返回頂部按鈕
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 300) {
        if (!document.getElementById('scrollToTopBtn')) {
            const scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTopBtn';
            scrollBtn.innerHTML = '↑';
            scrollBtn.style.cssText = `
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #667eea;
                color: white;
                border: none;
                cursor: pointer;
                font-size: 20px;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
                z-index: 1000;
            `;
            
            scrollBtn.addEventListener('click', scrollToTop);
            scrollBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
                this.style.background = '#5a6fd8';
            });
            scrollBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.background = '#667eea';
            });
            
            document.body.appendChild(scrollBtn);
        }
    } else {
        const scrollBtn = document.getElementById('scrollToTopBtn');
        if (scrollBtn) {
            scrollBtn.remove();
        }
    }
});

// 添加鍵盤導航支持
document.addEventListener('keydown', function(e) {
    // Alt + 1-3 切換標籤
    if (e.altKey) {
        switch(e.key) {
            case '1':
                showTab('architecture');
                break;
            case '2':
                showTab('comparison');
                break;
            case '3':
                showTab('analysis');
                break;
        }
    }
    
    // ESC 鍵返回頂部
    if (e.key === 'Escape') {
        scrollToTop();
    }
});

// 添加觸摸手勢支持（移動端）
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const currentTab = document.querySelector('.tab-content.active');
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // 向左滑動，切換到下一個標籤
        if (currentTab.id === 'architecture') {
            showTab('comparison');
        } else if (currentTab.id === 'comparison') {
            showTab('analysis');
        } else if (currentTab.id === 'analysis') {
            showTab('architecture');
        }
    } else if (touchEndX > touchStartX + swipeThreshold) {
        // 向右滑動，切換到上一個標籤
        if (currentTab.id === 'architecture') {
            showTab('analysis');
        } else if (currentTab.id === 'comparison') {
            showTab('architecture');
        } else if (currentTab.id === 'analysis') {
            showTab('comparison');
        }
    }
}
