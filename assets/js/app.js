window.addEventListener('scroll', function () {
  var header = document.getElementById('header');
  if (window.scrollY > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Espera 3 segundos antes de mostrar o conteúdo
setTimeout(function() {
  document.querySelector('.loading').style.display = 'none';
  document.querySelector('.body').style.display = 'block';
}, 1000);