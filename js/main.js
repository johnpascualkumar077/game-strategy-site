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

    // 検索機能の実装（今後追加予定）
});

// ページトップへ戻るボタンの実装（今後追加予定）