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

На главной странице (homepage.html), в акциях (actions.html) - значок медальки в таблице сделан через css (на основании порядкового номера строчки). 

В каталоге провайдеров (providers.html) классы, отвечающие за направление значка сортировки в блоке sortbox, - это down и up

В карточке провайдера результат проверки адреса (card-provider.html) должен сопровождаться появленим класса result-ok или result-error в зависимости от результата

---------------------------------------------------------
__Используемые в проекте js плагины__
* Слайдер цен в фильтре [http://jqueryui.com/slider/#range](jquery slider)
* Карусель owl-carousel [http://owlgraphic.com/owlcarousel/#customizing](owlgraphic)
* Сворачивающееся меню [https://github.com/352Media/flexMenu](flexmenu)
* Автовыпадание подсказок при вводе в поле ввода символов [http://plugins.upbootstrap.com/bootstrap-ajax-typeahead](Typeahead)
* Горизонтальная прокрутка в сравнении тарифов (compare.html) [http://manos.malihu.gr/jquery-custom-content-scroller/?5](mCustomScrollbar)
* Валидация полей ввода в формах [http://jqueryvalidation.org/](jquery validation)
* Маска ввода в поле с телефоном [https://github.com/RobinHerbots/Inputmask](inputmask)
* Плагин эмуляции ajax ответов [http://github.com/appendto/jquery-mockjax](jquery.mockjax.js)
* Всплывающие окна [http://getbootstrap.com/javascript/#modals-methods](bootstrap modal)
* Сообщение для устаревших браузеров [https://github.com/burocratik/outdated-browser](Outdated Browser v1.1.3) [http://outdatedbrowser.com/ru](Демо)
* Лайтбокс [http://lokeshdhakar.com/projects/lightbox2/](lightbox)

---------------------------------------------------------