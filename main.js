//creo una funcion que se ejecutara cuando hago click en el boton
function muestra_oculta(id) {
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
    let div = document.getElementById(id);
    //uso el condicional IF para saber si el DIV esta oculto (Display: none) o si esta visible 
    if (div.style.display == "none"){ 
      div.style.display = "flex";
    } 
    else {
      div.style.display = "none";
    }
}
 // botón de ir a arriba cuando se hace scroll hacia abajo
 $(document).ready(function() {
  // Ocultar el botón al cargar la página
  $('#backToTop').hide();

  // Mostrar el botón cuando se hace scroll hacia abajo
  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#backToTop').fadeIn();
      } else {
          $('#backToTop').fadeOut();
      }
  });

  // Volver arriba cuando se hace clic en el botón
  $('#backToTop').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 400, 'swing');
      return false;
  });
});
document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.crossfade-slide');

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
  }

  // Inicializar la primera diapositiva como activa
  slides[currentSlide].classList.add('active');

  // Hacer que la función showSlide esté disponible globalmente
  window.showSlide = showSlide;

  // Agregar evento de clic a cada diapositiva
  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      const nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    });
  });
});

