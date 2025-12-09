



function SwiperPlantas() {
    
  const swiperPlantasThumbs = new Swiper(".swiperPlantasThumbs", {
    spaceBetween: 10,
    slidesPerView: 2,
    /*freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideToClickedSlide: true,
    preloadImages: false,
    lazy: true, */

    // 🔹 Responsividade
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  const swiperPlantas = new Swiper(".swiperPlantas", {
    spaceBetween: 10,
    preloadImages: false,
    lazy: true,
    
    navigation: {
      nextEl: ".swiper-button-next-plantas",
      prevEl: ".swiper-button-prev-plantas",
    },
    thumbs: { swiper: swiperPlantasThumbs },
  });
}
SwiperPlantas();



function SwiperImplatacao() {
 
  const swiperImplatacao = new Swiper(".swiperImplatacao", {
    spaceBetween: 10,
    preloadImages: false,
    pagination: {
      el: ".swiper-pagination", // Seletor do elemento HTML
      clickable: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
SwiperImplatacao();





function SwiperLazer() {
 
  const swiperImplatacao = new Swiper(".swiperLazer", {
    spaceBetween: 10,
    preloadImages: false,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination-lazer", // Seletor do elemento HTML
      clickable: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next-lazer",
      prevEl: ".swiper-button-prev-lazer",
    },
  });
}
SwiperLazer();
