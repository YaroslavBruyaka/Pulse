  
///настройка слайдера////
const slider = tns({
container: '.carousel__inner', //название класса слайдера
items: 1, //кол-во слайдов на странице
slideBy: 'page',
autoplay: false, //автоплей выкл
controls: false, //убираем верхние конпки (стандартные)
nav: false //убираем точки
});

//привязка кнопок к слайдеру
document.querySelector('.prev').addEventListener('click', () => { //получаем элемент с классом prev и вешаем обработчик событий
slider.goTo('prev');});

document.querySelector('.next').addEventListener('click', () => { //получаем элемент с классом next и вешаем обработчик событий
slider.goTo('next');});
