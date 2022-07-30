(() => {
  document.querySelectorAll('.js-tab-btn').forEach(function(artistTabs) {
    artistTabs.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.painter;

      document.querySelectorAll('.catalog__painter-info').forEach(function(tabs) {
        tabs.classList.remove('catalog__painter-info--open');
      });
      document.querySelector(`[data-painter-info="${path}"]`).classList.add('catalog__painter-info--open');
    });
  })

  document.querySelectorAll('.link--text-another').forEach(function(artistTabsBtn) {
    artistTabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.link--text-another').forEach(function(activeRemove) {
        activeRemove.classList.remove('tab-active')
      })
      event.currentTarget.classList.add('tab-active')
    })
  })

  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();