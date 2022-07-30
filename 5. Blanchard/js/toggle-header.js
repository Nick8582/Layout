(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`);
    const links = menu.querySelectorAll(`.${params.linksClass}`);

    function onBtnClick() {
      btn.classList.toggle(params.activeClass);

      if (!menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-label', 'Закрыть главное меню');
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.classList.toggle(params.hiddenClass);
        btn.setAttribute('aria-label', 'Открыть главное меню');
      }
    }

    menu.addEventListener("animationend", function() {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 500));

    links.forEach((link) => {
      link.addEventListener("click", window.debounce(onBtnClick, 500))
    });
  }

  setBurger({
    btnClass: "js-burger",
    menuClass: "js-menu-wrap",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    linksClass: "js-scroll-link"
  });

  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function(evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function(evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function(evt) {
      this.disabled = true;
      this.style.opacity = 0;

      if (!search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function() {
      openBtn.disabled = false;
      openBtn.style.opacity = '';
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function(evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        openBtn.style.opacity = '';
        search.classList.add(params.hiddenClass);
      }
    });
  }

  setSearch({
    openBtnClass: "js-open-search",
    closeBtnClass: "js-close-search",
    searchClass: "js-search-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
  });
})();