var menu_btn = document.querySelector('.menu-btn');
menu_btn.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});