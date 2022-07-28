document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu-burger').classList.toggle('header__menu-burger-active');
        document.querySelector('#burger').classList.toggle('active-close');
    })
});
