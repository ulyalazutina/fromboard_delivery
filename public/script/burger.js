const buttonElement = document.querySelector('.header__btn-burger');
const navElements = document.querySelector('.header__wrapper');
const iconBurger = document.querySelector('.header__btn-burger-icon');
const iconClose = document.querySelector('.header__btn-close');
const infoElement = document.querySelector('.header__tablet');

buttonElement.addEventListener('click', () => {
    iconBurger.classList.toggle('none');
    iconClose.classList.toggle('none');
    navElements.classList.toggle('active');
    infoElement.classList.toggle('active');
})