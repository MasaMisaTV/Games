// スムーズスクロール設定
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// YouTube動画の自動再生（ページ読み込み時）
document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector('iframe');
  if (video) {
    video.src += "?autoplay=1&mute=1";
  }
});