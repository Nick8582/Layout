const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 6000,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


let gallerySlider = new Swiper(".slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery__right .gallery-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми 
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function() {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function() {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const editionsSlider = document.querySelector('.editions__swiper-container');

  let swiperPublication;
  const desctopSlider = () => {

    if (window.innerWidth >= 767 && editionsSlider.dataset.desktop == 'true') {
      swiperPublication = new Swiper(editionsSlider, {
        slideClass: ('editions__slide'),
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        pagination: {
          el: '.editions__swiper-pagination',
          type: 'fraction',
        },

        navigation: {
          nextEl: '.editions__swiper-button-next',
          prevEl: '.editions__swiper-button-prev',
        },

        breakpoints: {
          970: {
            slidesPerView: 2,
            spaceBetween: 50,
            slidesPerGroup: 1,
          },

          1500: {
            spaceBetween: 50,
            slidesPerView: 3,
            slidesPerGroup: 1,
          }
        }
      })

      editionsSlider.dataset.desktop == 'false'
    }

    if (window.innerWidth <= 767) {
      editionsSlider.dataset.mobile = 'false';

      if (editionsSlider.classList.contains('swiper-container-initialized')) {
        swiperPublication.destroy();
      }
    }
  }

  desctopSlider();

  window.addEventListener('resize', () => {
    desctopSlider();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.projects-partners__slider-container', {
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: false,
    navigation: {
      prevEl: '.projects-partners__btn--prev',
      nextEl: '.projects-partners__btn--next',
    },
  });
})