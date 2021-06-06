function irArriba(){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        /*console.log(scroll);*/
        var botonArriba = document.getElementById('botonArriba');

        if(scroll > 300){
            botonArriba.style.right = 10 + "px";
        }
        else{
            botonArriba.style.right = -100 + "px";
        }
    })
}

irArriba();


document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
  ScrollReveal().reveal('.social', { delay: 500 });
  ScrollReveal().reveal('.nosotros', { delay: 500 });
  ScrollReveal().reveal('.footer-links', { delay: 500 });