const burgerBtn = document.querySelector('.nav__btn')
const navList = document.querySelector('.nav__items')
const btnMenu = document.querySelector('.nav__btn-menu')
const btnMenuClose = document.querySelector('.nav__btn-menu-close')

const shadow = document.querySelector('.shadow')
 
const handleMenu = () => {
    navList.classList.toggle('nav__items--active')
    btnMenu.classList.toggle('nav__btn--hidden')
    btnMenuClose.classList.toggle('nav__btn--hidden')
    shadow.classList.toggle('shadow-site')
}

burgerBtn.addEventListener('click', handleMenu)