(() => {
  const eventsSlider = new Swiper(".js-events-slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,

    pagination: {
      el: ".js-events-pagination"
    },
    navigation: {
      nextEl: ".js-events-next",
      prevEl: ".js-events-prev",
      disabledClass: "nav-btn--disabled"
    },

    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 37
      },
      971: {
        slidesPerView: 3,
        spaceBetween: 27
      },
      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
})();