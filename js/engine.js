$(document).ready(function(){

	$('.proof-city .close').click(function(e){
		e.preventDefault();
		$('.proof-city').fadeOut('normal',function(){
			this.remove();
		});
	});

	$('.proof-city .open-city-select').click(function(e){
		e.preventDefault();
		$('.proof-city').remove();
	});

	$("#foo1").owlCarousel({
		items : 4,
		pagination : false,
		navigation : true,
		navigationText: ["", ""],
		itemsCustom:[[100, 1], [480, 2], [700, 2], [900, 3], [1183, 4]]
	});

	$("#foo2").owlCarousel({
		items : 5,
		pagination : false,
		navigation : true,
		navigationText: ["", ""],
		itemsCustom:[[100, 1], [480, 2], [700, 3], [900, 4], [1198, 4]]
	});	



	$("#gallery").owlCarousel({
		items : 4,
		pagination : false,
		navigation : true,
		navigationText: ["", ""],
		autoHeight  : true,
		itemsCustom:[[100, 1], [480, 2], [850, 2], [900, 3], [1198, 4]]
	});	


	$('.top_menu_flex').flexMenu({
		linkText: 'Еще',
		linkTitle : '',
		linkTextAll : 'Меню',
		cutoff : '1'
	});

	$( "#slider-speed" ).slider({
		range: true,
		min: 20,
		max: 150,
		values: [ 40, 120 ],
		slide: function( event, ui ) {
			$('#speed-from').val(ui.values[ 0 ]);
			$('#speed-to').val(ui.values[ 1 ]);
		}
	});

	$("#slider-cost").slider({
		range: true,
		min: 20,
		max: 150,
		values: [ 40, 120 ],
		slide: function( event, ui ) {
			$('#cost-from').val(ui.values[ 0 ]);
			$('#cost-to').val(ui.values[ 1 ]);
		}
	});

	$("#slider-tv").slider({
		range: true,
		min: 20,
		max: 150,
		values: [ 40, 120 ],
		slide: function( event, ui ) {
			$('#tv-from').val(ui.values[ 0 ]);
			$('#tv-to').val(ui.values[ 1 ]);
		}
	});	
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );



	// inputs
	$('.input-field').each(function(){
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}		
	})

	$('body').on('focusin', '.input-field', function(e) {
		return $(this).addClass('is-focused');
	})
	.on('focusout', '.input-field', function(e) {
		$(this).removeClass('is-focused');
		return $(this).removeClass('is-focused');
	})
	.on('change', '.input-field', function() {
		$(this).removeClass('is-charged');
		if ($(this).find('.form-control').val().length > 0) {
			return $(this).addClass('is-charged');
		}
	});




	$('.filter #internet').attr('checked',true);
	$('.filter #tv').attr('checked',false);
	$('.filter .filter_header input[type="checkbox"]').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			el = $this.attr('name');

		if (isChecked) {
			$('.filter .param').filter('[data-param=' + el + ']').slideDown()
		} else {
			$('.filter .param').filter('[data-param=' + el + ']').slideUp()			
		}
	});
	// #inputs


	// comparison
	$('#different').attr('checked',false);
	$('#different').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false;

		if (isChecked) {
			$('.comparison_cell').filter('[data-name="equal"]').slideUp();
			$('.comparison_column').each(function(){
				$(this).find('.comparison_cell[data-name="different"]:even').addClass('even');
			})

		} else {
			$('.comparison_cell').filter('[data-name="equal"]').slideDown()
			$('.comparison_cell.even').removeClass('even')
		}
	});

	$('.comparison_cell .tools .del').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.closest('.comparison_column').addClass('removeColumn').fadeOut('normal',function(){
			$this.closest('.comparison_column').remove();
		});
	})


	// интерактивный поиск в полее ввода
	$('#street').typeahead({
		items: 5, 
		ajax: { 
			url: '/address/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
		}
	});
	$('#house').typeahead({
		items: 5, 
		ajax: { 
			url: '/house/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
		}
	});
	

	$('#city-connect').typeahead({
		items: 5, 
		ajax: { 
			url: '/cities/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
			$('#city-connect').valid();
		}
	});	
	$('#address-connect').typeahead({
		items: 5, 
		ajax: { 
			url: '/address/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
			$('#address-connect').valid();
		}
	});
	$('#house-connect').typeahead({
		items: 5, 
		ajax: { 
			url: '/house/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
			$('#house-connect').valid();
		}
	});


	// #comparison


	// mask
	$('.tel').inputmask({
		mask: '+7(999)999-99-99',
		showMaskOnHover : false
	});
	// #mask


	// validate
    $.validator.addMethod("validphone", function(value){
        if (Inputmask.isValid(value, { mask: '+7(999)999-99-99'})) return true
        else return false;
    },"");


	$('#callback-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				validphone:true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#callback-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#callback-form .helper-field-tel').text('Заполните поле');
		}
	});

	$('#add-review-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				validphone:true
			},
			msg: {
				required:true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#add-review-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#add-review-form .helper-field-tel').text('Заполните поле');
			if (element.attr('name') == 'msg') $('#add-review-form .helper-field-msg').text('Заполните поле');
		}
	});

	$('#add-faq-form').validate({
		rules: {
			name:{
				required : true
			},
			tel: {
				validphone:true
			},
			msg: {
				required:true
			}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#add-faq-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#add-faq-form .helper-field-tel').text('Заполните поле');
			if (element.attr('name') == 'theme') $('#add-faq-form .helper-field-theme').text('Заполните поле');
			if (element.attr('name') == 'msg') $('#add-faq-form .helper-field-msg').text('Заполните поле');
		}
	});

	$('#connect-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true},
			city: {required:true},
			address: {required:true},
			house: {required:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#connect-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#connect-form .helper-field-tel').text('Заполните поле');
			if (element.attr('name') == 'city') $('#connect-form .helper-field-city').text('Заполните поле');
			if (element.attr('name') == 'address') $('#connect-form .helper-field-address').text('Заполните поле');
			if (element.attr('name') == 'house') $('#connect-form .helper-field-house').text('Заполните поле');
		}
	});	
	// #validate



	// popups
	$('.lightbox').lightBox({
		txtImage : 'Изображение',
		txtOf : 'из'
	});


	$('#connect').on('show.bs.modal', function (e) {
		// $('#connect .tarif-title span').text($(e.relatedTarget).prev('.ctitle').find('a').text())
		$('#connect .tarif-title span').text($(e.relatedTarget).closest('.tarif_item').find('.ctitle').find('a').text())
	})


	$("#compare-scroller").mCustomScrollbar({
		axis:"x",
		autoDraggerLength: false,
		scrollbarPosition:"outside",
		scrollButtons:{enable:true,scrollAmount: "35px"},
		advanced:{autoExpandHorizontalScroll:true},
		mouseWheel : false
	});


	// ОБРАБОТКА СПИСКОВ ГОРОДОВ
	// закрытие окна выбора городов
	$('.city-choose-popup a.close').click(function(e){
		e.preventDefault();
			$('.city-choose-popup').removeClass('in');
		$('.city-choose-popup').fadeOut('fast',function(){
			$('.open-city-select').removeClass('active');
		});
	});


	$('.open-city-select').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$elem = $('.city-choose-popup');

		$elem.fadeIn('fast').addClass('in');
	});

	$('.rating .header .open-city-select').click(function(e){
		e.preventDefault();
		var $this = $(this),
			$elem = $('.city-choose-popup');
			$win_top = $(window).scrollTop(),
			$pos_link = $this.offset().top,
			win_height = $(window).height(),
			height_block = $elem.height();		


		if (win_height>height_block){
			$elem.css("marginTop", Math.round($pos_link - $win_top)+35+"px");
		} else {
			$elem.css("marginTop", Math.round($pos_link)+120+"px");			
		}		
	});


	// faq
	$('.faq_item .toggle').click(function(e){
		e.preventDefault();
		var $this = $(this),
			item = $this.closest('.faq_item');
		item.find('.faq_item_answer').slideToggle('normal',function(){
			$this.toggleClass('toggle-collapse');
			item.toggleClass('faq_item-expand');
		})
	});



	// выбор города из ненумерованного списка
	$('.cities dd a').click(function(e){
		e.preventDefault();
		$this = $(this);
		// document.getElementById("myRegion").innerHTML = $this.text();
		$('.open-city-select span').text($this.text());
		$('.cities dd').removeClass('current');
		$('.searchCity input[type="text"]').val($this.text());
		$this.parent().addClass('current');

		$('.rating-actions-filter .open-city-select').text($this.text())
	})
	// интерактивный поиск в полее ввода
	$('.searchCity input[type="text"]').typeahead({
		ajax: { 
			url: '/cities/list',
			triggerLength: 1 
		},
		onSelect: function(item) {
			$('.cities dd').removeClass('current');
			$('.open-city-select span').text(item.text);
			$('.cities dd').filter(function(){
				return $(this).data('id') == item.value;
			}).addClass('current');

			$('.rating-actions-filter .open-city-select').text(item.text)
		}
	});		


	// избранные товары
	$('.list_fav .btn-del').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.closest('.tarif_item').addClass('remove').fadeOut('normal',function(){
			this.remove();
		})

	})


	// карточка провайдера
	$('.about-us, .how').find('.more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$this.parent().prev('.moretext').slideToggle();
		($this.hasClass('expand')) ?  $this.text('Показать продолжение').removeClass('expand') : $this.text('Свернуть').addClass('expand');
	});

	$('.reviewers_item_body .more a').click(function(e){
		e.preventDefault();
		var $this = $(this),
			el = $('.reviewers_item_body'),
			curHeight = el.height(),
			autoHeight = el.css('height', 'auto').height() + 60;

		if ($this.hasClass('expand')){
			$this.text('Показать продолжение').removeClass('expand');
			el.height(curHeight).animate({height: '193px'}, 500);
		} else {
			el.height(curHeight).animate({height: autoHeight}, 500);
			$this.text('Свернуть').addClass('expand')
		}

		$this.closest('.reviewers_item_body').toggleClass('reviewers_item_body-expand');
	});

	$('.like a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active'); // подсвечиваем иконку
	})


	// подгрузка отзывов в карточке провайдера
	$('.reviewers_more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		// тут должна быть
		$.ajax({
			url: "/reviewers/",
			cache: false,
			success: function(html){
				$("#reviewers_load").append(html);
			}
		});

	})

	// #карточка провайдера




	// mobile-menu
	$('.mobile-menu').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $this.find('.close'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				h = $(document).height()-50;
				$('body').addClass('o-menu');
				$('.mobile-menu').height(h);

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	



	$('.mobile-menu').hammer().on('panleft', function(){
		$('body').removeClass('o-menu');
	});



	// =заглушка для IE
	var browser = navigator.userAgent.indexOf("MSIE");
	var version = parseInt(navigator.userAgent.substr(browser + 5, 2));
	if (version !== -1) var IE = true;
	if (IE && version < 9) {
		var IEhelp = document.createElement("div");
		IEhelp.style.width = "100%";
		IEhelp.style.padding = "11px";
		IEhelp.style.backgroundColor = "#CC3333";
		IEhelp.style.color = "#FFFFFF";
		IEhelp.style.textAlign = "center";
		IEhelp.style.font = "normal 14px/1.2 Helvetica Neue, Tahoma, Verdana, Arial, sans-serif";
		IEhelp.innerHTML = 'Внимание! Вы используете устаревший браузер. <a href="/ie6/ie6.html" target="_blank" style="color: #FFFFFF; text-decoration: underline;">Подробнее &#187;</a>';
		if (document.body.firstChild) {
			document.body.insertBefore(IEhelp, document.body.firstChild);
		}
		else {
			document.body.appendChild(IEhelp);
		}
	}
	// =/заглушка для IE
})


function centerWin(win){
	var win_top = $(window).scrollTop(),
		win_height = $(window).height(),
		height_block = $(win).height();
	if (win_height>height_block){
		$(win).css("marginTop", Math.round(win_top+(win_height-height_block)/2)-40+"px");
	} else{
		$(win).css("marginTop", Math.round(win_top)+"px");
	}
}


// в сравнение / в избранное
$(document).on('click','.added-to-compare .close', function(e){
	e.preventDefault();
	$('.added-to-compare').fadeOut('normal',function(){
		this.remove();
	});
});

// в избранное
$(document).on('click','.to-fav', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = '<div class="added-to-compare"><div class="wrapper"><p>Товар добавлен <br> <a href="#">в избранное</a></p><button type="button" class="close" data-dismiss="modal"><img src="images/close.png" alt="" /></button></div></div>';
	$('body').append(msg);
	$this.removeClass('to-fav').addClass('btn-fav-in');

	var timerfav = window.setInterval(function(){
		$('.added-to-compare').fadeOut('normal',function(){
			this.remove();
		});
		window.clearInterval(timerfav);
	},2000);
});

// из избранного
$(document).on('click','.btn-fav-in', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.removeClass('btn-fav-in').addClass('to-fav');
});


// результат проверки адреса
$(document).on('click','.check_address .submit', function(e){
	e.preventDefault();
	msg = '<div class="result-check result-check-ok"><div class="wrapper"><p>Адрес обслуживается. Найдено <a href="http://ya.ru">5 провайдеров</a></p><a href="#" class="link">Посмотреть провайдеров</a></div></div>';
	// msg = '<div class="result-check result-check-error"><div class="wrapper"><p>Адрес не обслуживается провайдерами</div></div>';
	$('body').append(msg).addClass('blur');
});

$(document).on('click','.result-check', function(e){
	$('body.blur').removeClass('blur');
	$(this).fadeOut('normal',function(){
		this.remove();
	})
})

$(document).on('click','.result-check a', function(e){
	e.stopPropagation();
})
// =/результат проверки адреса





// в сравнение
$(document).on('click','.to-compare', function(e){
	e.preventDefault();
	var $this = $(this);
	msg = '<div class="added-to-compare"><div class="wrapper"><p>Товар добавлен <br> <a href="#">к сравнению</a></p><button type="button" class="close" data-dismiss="modal"><img src="images/close.png" alt="" /></button></div></div>';
	$('body').append(msg);
	$this.removeClass('to-compare').addClass('btn-compare-in');

	var timerfav = window.setInterval(function(){
		$('.added-to-compare').fadeOut('normal',function(){
			this.remove();
		});
		window.clearInterval(timerfav);
	},2000);
});

// из сравнения
$(document).on('click','.btn-compare-in', function(e){
	e.preventDefault();
	var $this = $(this);
	$this.removeClass('btn-compare-in').addClass('to-compare');
});




var timer;
var sec = 3;

function showTime(form){
	sec = sec-1;
	if (sec <=0) {
		stopClock();
		// $('.thank').fadeOut('normal',function(){
			// $('input.form-control, textarea').val('')
			// this.remove();
		// });
	}
}

function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 3;
}

function startClock(form){
	if (!timer)
	timer = window.setInterval("showTime('"+form+"')",1000);
}






/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU
 */
jQuery.extend(jQuery.validator.messages, {
        required: "Заполните поле",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        accept: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: jQuery.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: jQuery.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: jQuery.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: jQuery.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: jQuery.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: jQuery.validator.format("Пожалуйста, введите число, большее или равное {0}.")
});