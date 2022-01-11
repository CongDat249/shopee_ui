const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$('.header__search-input').onfocus = () => {
   $('.header__search-history').style.display = 'block'
}

$('.header__search-input').onblur = () => {
   $('.header__search-history').style.display = 'none'
}
