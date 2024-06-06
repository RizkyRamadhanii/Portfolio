const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden')
});


window.onscroll = () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.add('fixed-top');
    } else {
        header.classList.remove('navbar-fixed');
    }
};
