document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__btn-menu').addEventListener('click', function () {
    this.classList.toggle('header__btn-menu--active')
    document.querySelector('#header__nav').classList.toggle('header__nav--active')
  })
})
