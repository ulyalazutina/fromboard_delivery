const buttonElement = document.querySelector('.header__btn-burger');
const navElements = document.querySelector('.header__wrapper');
const iconBurger = document.querySelector('.header__btn-burger-icon');
const iconClose = document.querySelector('.header__btn-close');

buttonElement.addEventListener('click', () => {   
    iconBurger.classList.toggle('none');
    iconClose.classList.toggle('none');
    navElements.classList.toggle('active');
})