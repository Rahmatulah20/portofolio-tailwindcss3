// navbarfixed

window.onscroll = function(){

    const header = document.querySelector('header');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}


// humburger

 const humburger = document.querySelector ('#humburger');
 const navmenu = document.querySelector ('#nav-menu');

 humburger.addEventListener('click', function () {
    humburger.classList.toggle ('humburger-active');
    navmenu.classList.toggle ('hidden');
 });