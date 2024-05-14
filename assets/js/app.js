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
}, 3000);


const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  // Mostrar o botão quando a página é rolada para baixo
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Rolar suavemente para o topo quando o botão é clicado
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para navegadores Chrome, Firefox, IE e Opera
});

