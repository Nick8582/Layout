const openSearch = document.querySelector("#btnSearch");
const openInput = document.querySelector("#openInput");
let iconSearch = document.querySelector('.header__icon');


openSearch.addEventListener("click", function(e) {
  e.preventDefault;
  openInput.classList.toggle("open");

  btnTransform();
})

function btnTransform() {
  if (openInput.classList.contains("open")) {
    iconSearch.classList.add('open');

    iconSearch.innerHTML = `<use xlink:href="./images/sprite.svg#close"></use>`;
  } else {
    iconSearch.classList.remove('open');

    iconSearch.innerHTML = `<use xlink:href="./images/sprite.svg#search"></use>`;
  }
}
