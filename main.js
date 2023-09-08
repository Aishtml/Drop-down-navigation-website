const hamBurger = document.querySelector('.nav__menu');
const closeNav = document.querySelector('.menu__close');
const nav = document.querySelector('.menu');
const image = document.querySelector('#image');

hamBurger.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});

closeNav.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});

let changeImage = () => {
    if(window.innerWidth > 800) {
        image.src = 'images/image-hero-desktop.png';
    } else {
        image.src = 'images/image-hero-mobile.png';
    }
}

window.onload = changeImage;
window.onresize = changeImage;