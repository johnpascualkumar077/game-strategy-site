// メインのJavaScriptファイル

// ページ読み込み完了時の処理
document.addEventListener('DOMContentLoaded', function() {
    // ナビゲーションバーのアクティブ状態の管理
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 検索機能の実装
    const searchBox = document.getElementById('searchBox');
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            const keyword = this.value.toLowerCase();
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const text = card.innerText.toLowerCase();
                if (text.includes(keyword)) {
                    card.parentElement.style.display = '';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        });
    }
});

// ページトップへ戻るボタンの実装（今後追加予定）