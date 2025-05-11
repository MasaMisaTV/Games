// スムーズスクロール
document.querySelector('.btn').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#games').scrollIntoView({
    behavior: 'smooth'
  });
});