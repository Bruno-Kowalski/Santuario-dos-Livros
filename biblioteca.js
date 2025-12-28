document.addEventListener('DOMContentLoaded', () => {
  
  const titleEl = document.getElementById('display-title');
  const authorEl = document.getElementById('display-author');
  const starEl = document.getElementById('display-stars');

  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,  
    slidesPerView: "auto", 
    loop: true,
    initialSlide: 1, 

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      //reverseDirection: true,
    },
    
    speed: 800,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    on: {
      init: function() {
        atualizarTexto(this);
      },
      slideChange: function () {
        atualizarTexto(this);
      }
    }
  });

  function atualizarTexto(swiperInstance) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    
    if (activeSlide) {
        const img = activeSlide.querySelector('img');
        
        if(img && titleEl) {
           titleEl.innerText = img.getAttribute('data-titulo');
           authorEl.innerText = img.getAttribute('data-autor');
           starEl.innerText = img.getAttribute('data-stars');
           
           titleEl.style.opacity = 0.3;
           setTimeout(() => { titleEl.style.opacity = 1; }, 150);
        }
    }
  }
});