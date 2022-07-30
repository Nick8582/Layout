(() => {
  const galleryChoicesSelect = document.querySelector('.js-gallery-choices');
  const galleryChoices = new Choices(galleryChoicesSelect, {
    shouldSort: false,
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'fillter-choices',
      containerInner: 'fillter-choices__inner',
      input: 'fillter-choices__input',
      inputCloned: 'fillter-choices__input--cloned',
      list: 'fillter-choices__list',
      listItems: 'fillter-choices__list--multiple',
      listSingle: 'fillter-choices__list--single',
      listDropdown: 'fillter-choices__list--dropdown',
      item: 'fillter-choices__item',
      itemSelectable: 'fillter-choices__item--selectable',
      itemDisabled: 'fillter-choices__item--disabled',
      itemChoice: 'fillter-choices__item--choice',
      placeholder: 'fillter-choices__placeholder',
      group: 'fillter-choices__group',
      groupHeading: 'fillter-choices__heading',
      button: 'fillter-choices__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-fillter-choices'
    },
  });

  const gallerySlider = new Swiper(".js-gallery-slider", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".js-gallery-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".js-gallery-next",
      prevEl: ".js-gallery-prev",
      disabledClass: "nav-btn--disabled"
    },

    breakpoints: {
      421: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 30
      },

      1281: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: true,
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
})();