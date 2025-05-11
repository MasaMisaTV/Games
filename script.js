// スムーズスクロール
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  const target = e.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({
    behavior: 'smooth'
  });
});