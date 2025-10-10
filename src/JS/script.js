window.addEventListener('DOMContentLoaded', () => {
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

//ТАБЫ//

    const tabs = document.querySelectorAll('.catalog__tab'), // выбираем все табы по классу (меню переключалки)
            tabsContent = document.querySelectorAll('.catalog__content'), //выбираем весь контент таба по классу (все что меняться будет)
            tabsParent = document.querySelector('.catalog__tabs'); //выбираем родителя табов по классу, т.е. тег внутри которого список табов

    function hideTapContent (){  //функция скрывает контент
        tabsContent.forEach (item => { //переберем все элементы с классом tabcontent
            item.classList.remove('catalog__content_active'); //удаляем класс show, т.о. скрываем контент и убираем анимацию
        });
        tabs.forEach(item => { //переберем все элементы с классом tabheader__item
            item.classList.remove('catalog__tab_active');//находим и удаляем класс активности tabheader__item_active
        });
    }
    function showTapContent (i = 0){// функция показывает табы по номеру элемента, по умолчанию ставим 0, т.е. первый.
        tabsContent[i].classList.add('catalog__content_active'); //добавляем show и fade анимацию
        tabs[i].classList.add('catalog__tab_active');//добавляем класс активности tabheader__item_active к tads элементу
    }
    hideTapContent();//вызов этих функций
    showTapContent();//вызов этих функций

    tabsParent.addEventListener('click', event => { //обработчик событий слушает клик у всех потомков родителя
        const target = event.target; //Свойство event.target содержит ссылку на объект, на котором сработало событие. 
        if (target && target.classList.contains('catalog__tab')){ //если произошло событие и это событие был на объекте с классом tabheader__item
            tabs.forEach((item, i) => { //тогда переберираем табы чтобы узнать на какой таб был совершен клик, передаем элемент и индекс
                if (target == item){ // если клик совершен на элемент который перебрался, то...
                    hideTapContent(); //скрываем весь контент
                    showTapContent(i); //и открывем контент под номером i
                }
            });
        }
    });

////переключалка

    const link = document.querySelectorAll('.catalog-item__link'),
        back = document.querySelectorAll('.catalog-item__back'),
        content = document.querySelectorAll('.catalog-item__content'),
        list = document.querySelectorAll('.catalog-item__list');

    link.forEach((item, i) => {
        toggleSwitch(item, i);
    });

    back.forEach((item, i) => {
        toggleSwitch(item, i);
    });

    function toggleSwitch (item, i) {
            item.addEventListener('click', event => {
            event.preventDefault();
            content[i].classList.toggle('catalog-item__content_active');
            list[i].classList.toggle('catalog-item__list_active');
        });
    }
});
