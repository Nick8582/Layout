let openMenu = document.querySelector('.header__menu-open');
let openNav = document.querySelector('.header__nav');
let headerOpen = document.querySelector('.header__bottom');

openMenu.addEventListener('click', function(e) {
  e.preventDefault;

  openMenu.classList.toggle('open');
  openNav.classList.toggle('open');
  headerOpen.classList.toggle('open');

})
