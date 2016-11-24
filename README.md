Провайдеры
================

Верстка расположена по адресу [http://provaiders.proverstka.com.ua/](http://provaiders.proverstka.com.ua)

Все комментарии вроде "InstanceBegin, InstanceBeginEditable, InstanceEndEditable" из кода при программировании убирать! Такие комментарии оставляет шаблонизатор dreamweaver.


---------------------------------------------------------

**Каталог тарифов** (cat-tarifs.html)


На странице 2 фильтра - один в боковой колонке, другой скрыт в основной части. При ширине экрана в 991px и меньше, боковая колонка скрывается, и показывается фильтр в основной части. Позиции инпутов в фильтрах взаимодействуют между собой через js (см. engine.js)

---------------------------------------------------------


В самом низу html файлов есть раздел <!-- =temp JS --> - все файлы в нем удалять и соответствнно убрать эти строки при программировании.  В tmp.js прописаны эмуляции ответов от ajax запросов 

За всплывающее окно при заходе на сайт отвечает класс ".proof-city" (сейчас он в состоянии display:none)

!!Т.к. верстка сайта построена на современных css-техниках, то она не поддерживается в версиях Internet Explorer версии 8 и ниже. В Internet Explorer 9 поддержка частичная.

Папка Templates при программировании не нужна - это шаблон для верстки

На главной странице (homepage.html), в акциях (actions.html) - значок медальки в таблице сделан через css (на основании порядкового номера строчки).  Результат проверки адреса прописан в файле engine.js - $(document).on('click','.check_address .submit', function(e){

В каталоге провайдеров (providers.html) классы, отвечающие за направление значка сортировки в блоке sortbox, - это down и up

В карточке провайдера результат проверки адреса (card-provider.html) должен сопровождаться появленим класса result-ok или result-error в зависимости от результата

Файлы (ymaps.js / searchmap.js) для Яндекс-карт будет правильнее подключать только на страницах, где они нужны - главная, карточка провайдера, контакты

---------------------------------------------------------
__Используемые в проекте js плагины__
* Слайдер цен в фильтре [http://jqueryui.com/slider/#range](http://jqueryui.com/slider/#range)
* Карусель owl-carousel [http://www.owlcarousel.owlgraphic.com/](http://www.owlcarousel.owlgraphic.com/)
* Сворачивающееся меню [https://github.com/352Media/flexMenu](https://github.com/352Media/flexMenu)
* Автовыпадание подсказок при вводе в поле ввода символов Typeahead [http://plugins.upbootstrap.com/bootstrap-ajax-typeahead](http://plugins.upbootstrap.com/bootstrap-ajax-typeahead)
* Горизонтальная прокрутка в сравнении тарифов (compare.html) mCustomScrollbar [http://manos.malihu.gr/jquery-custom-content-scroller/?5](http://manos.malihu.gr/jquery-custom-content-scroller/?5)
* Валидация полей ввода в формах jquery validation [http://jqueryvalidation.org/](http://jqueryvalidation.org/)
* Маска ввода в поле с телефоном inputmask [https://github.com/RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)
* Плагин эмуляции ajax ответов jquery.mockjax.js[http://github.com/appendto/jquery-mockjax](http://github.com/appendto/jquery-mockjax)
* Всплывающие окна bootstrap modal[http://getbootstrap.com/javascript/#modals-methods](http://getbootstrap.com/javascript/#modals-methods)
* Сообщение для устаревших браузеров Outdated Browser v1.1.3[https://github.com/burocratik/outdated-browser](https://github.com/burocratik/outdated-browser) [Демо](http://outdatedbrowser.com/ru)
* Лайтбокс - touch, adaptive[http://tosrus.frebsite.nl/](http://tosrus.frebsite.nl/)

---------------------------------------------------------