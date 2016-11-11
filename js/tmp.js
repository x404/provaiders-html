// При интеграции этот файл подлежит удалению
// Предназначен для показа сообщений после отправки

$(document).ready(function(){
	// $('body').on('submit','#consultation form, #registration form',function(e){
	// 	e.preventDefault();
	// 	$(this).closest('.popup').fadeOut(300,function(){
	// 		$('.overlay').remove();
	// 		$('#success').show();
	// 		centerWin('#success');
	// 		startClock('success');
	// 	});		
	// });


	// Mock an AJAX request
	$.mockjax({ // эмулятор ajax ответов
		url: '/cities/list',
		response: function() {
			this.responseText = [
{id: 1, name: 'Абакан'},
{id: 2, name: 'Адлер'},
{id: 3, name: 'Ангарск'},
{id: 4, name: 'Апатиты '},
{id: 5, name: 'Архангельск'},
{id: 6, name: 'Астрахань'},
{id: 7, name: 'Ачинск'},
{id: 8, name: 'Балаково'},
{id: 9, name: 'Барнаул'},
{id: 10, name: 'Белгород '},
{id: 11, name: 'Бийск'},
{id: 12, name: 'Благовещенск'},
{id: 13, name: 'Братск'},
{id: 14, name: 'Брянск'},
{id: 15, name: 'Бугульма'},
{id: 16, name: 'Великие Луки'},
{id: 17, name: 'Великий Новгород'},
{id: 18, name: 'Владивосток'},
{id: 19, name: 'Владимир'},
{id: 20, name: 'Волгоград'},
{id: 21, name: 'Волгодонск'},
{id: 22, name: 'Волжский'},
{id: 23, name: 'Вологда'},
{id: 24, name: 'Воронеж'},
{id: 25, name: 'Дзержинск'},
{id: 26, name: 'Димитровград'},
{id: 27, name: 'Екатеринбург'},
{id: 28, name: 'Железнодорожный'},
{id: 29, name: 'Забайкальск '},
{id: 30, name: 'Зеленоград'},
{id: 31, name: 'Иваново'},
{id: 32, name: 'Ижевск'},
{id: 33, name: 'Иркутск'},
{id: 34, name: 'Казань'},
{id: 35, name: 'Калининград'},
{id: 36, name: 'Калуга'},
{id: 37, name: 'Каменск-Уральский'},
{id: 38, name: 'Камышин'},
{id: 39, name: 'Кемерово'},
{id: 40, name: 'Киров'},
{id: 41, name: 'Клин'},
{id: 42, name: 'Коломна'},
{id: 43, name: 'Комсомольск-на-Амуре'},
{id: 44, name: 'Кострома'},
{id: 45, name: 'Котлас'},
{id: 46, name: 'Краснодар'},
{id: 47, name: 'Красноярск'},
{id: 48, name: 'Курган'},
{id: 49, name: 'Курск'},
{id: 50, name: 'Липецк'},
{id: 51, name: 'Магнитогорск'},
{id: 52, name: 'Миасс'},
{id: 53, name: 'Москва'},
{id: 54, name: 'Мурманск'},
{id: 55, name: 'Муром'},
{id: 56, name: 'Мытищи'},
{id: 57, name: 'Набережные Челны'},
{id: 58, name: 'Нижневартовск'},
{id: 59, name: 'Нижнекамск'},
{id: 60, name: 'Нижний Новгород'},
{id: 61, name: 'Нижний Тагил'},
{id: 62, name: 'Новокузнецк'},
{id: 63, name: 'Новомосковск'},
{id: 64, name: 'Новороссийск'},
{id: 65, name: 'Новосибирск'},
{id: 66, name: 'Ногинск'},
{id: 67, name: 'Обнинск'},
{id: 68, name: 'Омск'},
{id: 69, name: 'Орел'},
{id: 70, name: 'Оренбург'},
{id: 71, name: 'Орск'},
{id: 72, name: 'Пенза'},
{id: 73, name: 'Первоуральск '},
{id: 74, name: 'Пермь'},
{id: 75, name: 'Петрозаводск'},
{id: 76, name: 'Подольск'},
{id: 77, name: 'Псков'},
{id: 78, name: 'Пушкино'},
{id: 79, name: 'Пятигорск'},
{id: 80, name: 'Ростов-на-Дону'},
{id: 81, name: 'Рыбинск'},
{id: 82, name: 'Рязань'},
{id: 83, name: 'Самара'},
{id: 84, name: 'Санкт-Петербург'},
{id: 85, name: 'Саранск'},
{id: 86, name: 'Саратов'},
{id: 87, name: 'Севастополь'},
{id: 88, name: 'Северодвинск'},
{id: 89, name: 'Серов'},
{id: 90, name: 'Серпухов'},
{id: 91, name: 'Симферополь'},
{id: 92, name: 'Смоленск'},
{id: 93, name: 'Солнечногорск'},
{id: 94, name: 'Сочи'},
{id: 95, name: 'Ставрополь'},
{id: 96, name: 'Старый Оскол'},
{id: 97, name: 'Стерлитамак'},
{id: 98, name: 'Ступино'},
{id: 99, name: 'Сургут'},
{id: 100, name: 'Сызрань'},
{id: 101, name: 'Сыктывкар'},
{id: 102, name: 'Таганрог'},
{id: 103, name: 'Тамбов'},
{id: 104, name: 'Тверь'},
{id: 105, name: 'Тольятти'},
{id: 106, name: 'Томилино'},
{id: 107, name: 'Томск'},
{id: 108, name: 'Тула'},
{id: 109, name: 'Тюмень'},
{id: 110, name: 'Улан-Удэ'},
{id: 111, name: 'Ульяновск'},
{id: 112, name: 'Уфа'},
{id: 113, name: 'Ухта'},
{id: 114, name: 'Хабаровск'},
{id: 115, name: 'Ханты-Мансийск'},
{id: 116, name: 'Чебоксары'},
{id: 117, name: 'Челябинск'},
{id: 118, name: 'Череповец'},
{id: 119, name: 'Чита'},
{id: 120, name: 'Энгельс'},
{id: 121, name: 'Ярославль'}
			];
		}
	});


	$.mockjax({ // эмулятор ajax ответов
		url: '/address/list',
		response: function() {
			this.responseText = [
				{id: 1, name: 'ул. Маерчака'},
				{id: 2, name: 'ул. Матезалки'},
				{id: 3, name: 'Ул. Матросова'},
				{id: 4, name: 'ул. Карла Маркса '},
				{id: 5, name: 'ул. Дмитрия Мартынова'},
				{id: 6, name: 'ул. Толстого'},
				];
		}
	});


	$.mockjax({ // эмулятор ajax ответов
		url: '/house/list',
		response: function() {
			this.responseText = [
				{id: 1, name: '1'},
				{id: 2, name: '1а'},
				{id: 3, name: '2'},
				{id: 4, name: '3'},
				{id: 5, name: '4'},
				{id: 6, name: '50'},
				];
		}
	});


	$.mockjax({ // эмулятор ajax ответов для отзывов
		url: '/reviewers/',
		response: function() {
			this.responseText = '<div class="row"> <div class="col-md-6"> <div class="reviewers_item"> <!-- top --> <div class="reviewers_item_top"> <div class="name-rating"> <div class="left"> <p class="name">Переверзев Владислав</p> <p class="date dateicon">16 октября 2016, в 22:00</p> </div> <div class="ranking right"> <div class="rank rank-avg green">4.9</div> <div class="rank green"> <span class="cifr">5</span> <div class="tooltip"><span>Качество связи</span></div> </div> <div class="rank green"> <span class="cifr">4</span> <div class="tooltip"><span>Качество       </span></div> </div> <div class="rank yellow"> <span class="cifr">3</span> <div class="tooltip"><span>Качество связи связи</span></div> </div> <div class="rank brown"> <span class="cifr">2</span> <div class="tooltip"><span>Качество связи</span></div> </div> <div class="rank red"> <span class="cifr">1</span> <div class="tooltip"><span>Качество связи</span></div> </div> </div> <div class="clearfix"></div> <div class="length">Пользуюсь услугами более 3х месяцев</div> </div> </div> <!-- body --> <div class="reviewers_item_body"> <p class="title">Достоинства:</p> <div class="text">Цена, Дисплей, Работает при очень низком давлении воды, Розжиг электронный, Индикатор заряда батарей, Мощность с запасом.</div> <p class="title">Недостатки:</p> <div class="text">Их нет. Электролюкс за такие деньги - супер.</div> <p class="title">Комментарий</p> <div class="text">Колонка хорошая. Я устанавливаю и ремонтирую колонки с 2002 года.</div> <p class="more"> <a href="#" class="">Показать продолжение</a> </p> </div> <!-- bottom --> <div class="reviewers_item_bottom like"> <a href="#" class="up">15</a> <a href="#" class="down">3</a> </div> </div> </div> <div class="col-md-6"> <div class="reviewers_item"> <!-- top --> <div class="reviewers_item_top"> <div class="name-rating"> <div class="left"> <p class="name">Переверзев Владислав</p> <p class="date dateicon">16 октября 2016, в 22:00</p> </div> <div class="ranking right"> <div class="rank rank-avg green">4.9</div> <div class="rank green"> <span class="cifr">5</span> <div class="tooltip"><span>Качество связи</span></div> </div> <div class="rank green"> <span class="cifr">4</span> <div class="tooltip"><span>Качество       </span></div> </div> <div class="rank yellow"> <span class="cifr">3</span> <div class="tooltip"><span>Качество связи связи</span></div> </div> <div class="rank brown"> <span class="cifr">2</span> <div class="tooltip"><span>Качество связи</span></div> </div> <div class="rank red"> <span class="cifr">1</span> <div class="tooltip"><span>Качество связи</span></div> </div> </div> <div class="clearfix"></div> <div class="length">Пользуюсь услугами более 3х месяцев</div> </div> </div> <!-- body --> <div class="reviewers_item_body"> <p class="title">Достоинства:</p> <div class="text">Цена, Дисплей, Работает при очень низком давлении воды, Розжиг электронный, Индикатор заряда батарей, Мощность с запасом.</div> <p class="title">Недостатки:</p> <div class="text">Их нет. Электролюкс за такие деньги - супер.</div> <p class="title">Комментарий</p> <div class="text">Колонка хорошая. Я устанавливаю и ремонтирую колонки с 2002 года.</div> <p class="more"> <a href="#" class="">Показать продолжение</a> </p> </div> <!-- bottom --> <div class="reviewers_item_bottom like"> <a href="#" class="up">15</a> <a href="#" class="down">3</a> </div> </div> </div> </div> ';
		}
	});


	$.mockjax({ // эмулятор ajax ответов для вопросов-ответов
		url: '/faq/',
		response: function() {
			this.responseText = '<article class="faq_item"> <div class="faq_item_wrapper"> <div class="faq_item_top"> <p class="name">Саша <span class="date dateicon">16 октября 2016, в 22:00</span></p> </div> <div class="faq_item_body"> <div class="text"> <p>Есть ли возможность подключения по моему адресу?</p> </div> <div class="faq_item_answer"> <p class="answer_name">Ответ от Beeline</p> <div class="answer_text"> <p>Проверить существует ли возможность подключения к вашему дому Вы можете на нашем сайте. Также Вы можете оформить на сайте заявку на подключение.</p> </div> </div> </div> </div> </article>';
		} 
	});

	$.mockjax({ // эмулятор ajax ответов для вопросов-ответов
		url: '/news/',
		response: function() {
			this.responseText = '<div class="others_item news_item news_item_toggle"> <div class="news_item_wrapper"> <div class="news_item_pic"> <img src="tmp/new-3.jpg" alt="" class="img-responsive" /> </div> <div class="news_item_desc"> <div class="date dateicon">16 октября 2016</div> <a href="new.html" title="" class="news_item_link">Акция «5% за оплату картой «Билайн» на АЗС, в ресторанах и аптеках» продлена</a> </div> </div> </div><div class="others_item news_item news_item_toggle"> <div class="news_item_wrapper"> <div class="news_item_pic"> <img src="tmp/new-3.jpg" alt="" class="img-responsive" /> </div> <div class="news_item_desc"> <div class="date dateicon">16 октября 2016</div> <a href="new.html" title="" class="news_item_link">Акция «5% за оплату картой «Билайн» на АЗС, в ресторанах и аптеках» продлена</a> </div> </div> </div><div class="others_item news_item news_item_toggle"> <div class="news_item_wrapper"> <div class="news_item_pic"> <img src="tmp/new-3.jpg" alt="" class="img-responsive" /> </div> <div class="news_item_desc"> <div class="date dateicon">16 октября 2016</div> <a href="new.html" title="" class="news_item_link">Акция «5% за оплату картой «Билайн» на АЗС, в ресторанах и аптеках» продлена</a> </div> </div> </div><div class="others_item news_item news_item_toggle"> <div class="news_item_wrapper"> <div class="news_item_pic"> <img src="tmp/new-3.jpg" alt="" class="img-responsive" /> </div> <div class="news_item_desc"> <div class="date dateicon">16 октября 2016</div> <a href="new.html" title="" class="news_item_link">Акция «5% за оплату картой «Билайн» на АЗС, в ресторанах и аптеках» продлена</a> </div> </div> </div>';
		} 
	});



	$.mockjax({ // эмулятор ajax ответов для вопросов-ответов
		url: '/actions/',
		response: function() {
			this.responseText = '<div class="others_item actions_item actions_item_toggle"> <div class="actions_item_wrapper"> <div class="pic"> <img src="tmp/big-action-4.jpg" alt="" class="img-responsive" /> </div> <div class="info"> <div class="row"> <span class="stroke-1">До завершения 11 дней</span> <a href="#" class="label">% Акция</a> </div> <h3><a href="#" title="">Подключи три услуги и получи в подарок телефон</a></h3> </div> </div> </div> <div class="others_item actions_item actions_item_toggle"> <div class="actions_item_wrapper"> <div class="pic"> <img src="tmp/big-action-2.jpg" alt="" class="img-responsive" /> </div> <div class="info"> <div class="row"> <span class="stroke-1">До завершения 11 дней</span> <a href="#" class="label">% Акция</a> </div> <h3><a href="#" title="">Подключи три услуги и получи в подарок телефон</a></h3> </div> </div> </div> <div class="others_item actions_item actions_item_toggle"> <div class="actions_item_wrapper"> <div class="pic"> <img src="tmp/big-action-3.jpg" alt="" class="img-responsive" /> </div> <div class="info"> <div class="row"> <span class="stroke-1">До завершения 11 дней</span> <a href="#" class="label">% Акция</a> </div> <h3><a href="#" title="">Позаботьтесь о здоровье вашего компьютера по выгодной цене!</a></h3> </div> </div> </div>'
		}
	});
})
