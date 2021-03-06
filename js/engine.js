$(document).ready(function(){
	$.fn.ForceNumericOnly =
	function(){
		return this.each(function()	{
			$(this).keydown(function(e){
				var key = e.charCode || e.keyCode || 0;
				// Разрешаем backspace, tab, delete, стрелки, обычные цифры и цифры на дополнительной клавиатуре
				return (
					key == 8 ||
					key == 9 ||
					key == 46 ||
					(key >= 37 && key <= 40) ||
					(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
			});
		});
	};


	// "действительно находитесь в городе""
	$('.proof-city .close').click(function(e){
		e.preventDefault();
		$('.proof-city').fadeOut('normal',function(){
			$('.proof-city').remove();
		});
	});

	$('.proof-city .open-city-select').click(function(e){
		e.preventDefault();
		$('.proof-city').remove();
	});


	// карусели
	$('#foo1').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:4,
		lazyLoad: true,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				stagePadding: 30
			},
			480:{
				items:2
			},
			700:{
				items:2
			},
			900:{
				items:3
			},
			1183:{
				items:4
			}
		}
	});

	$('#foo2').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:5,
		lazyLoad: true,
		navText: ["", ""],
		responsive:{
			0:{
				items:1,
				stagePadding: 30
			},
			480:{
				items:2
			},
			700:{
				items:3
			},
			900:{
				items:4
			},
			1198:{
				items:4
			}
		}
	});

	$('#foo3').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:5,
		lazyLoad: true,
		navText: ["", ""],
		autoplay: true,
		loop: true,
		responsive:{
			0:{
				items:1,
				stagePadding: 40
			},
			360:{
				items:1,
				stagePadding: 50
			},
			420:{
				items:1,
				stagePadding: 70
			},
			480:{
				items:2
			},
			767:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:5
			}
		}
	});

	$('#gallery').owlCarousel({
		loop:false,
		nav:true,
		dots: false,
		items:4,
		lazyLoad: true,
		margin: 1,
		navText: ["", ""],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			850:{
				items:2
			},
			900:{
				items:3
			},
			1198:{
				items:4
			}
		}
	});		

	$('#actions1').owlCarousel({
		loop:true,
		nav:false,
		dots: true,
		items:1,
		navText: ["", ""],
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		autoplay: true,
		autoplayTimeout: 4000
	});	

	$('#actions2').owlCarousel({
		loop:true,
		nav:false,
		dots: true,
		items:1,
		navText: ["", ""],
		animateOut: 'slideOutDown',
		animateIn: 'flipInX',
		autoplay: true,
		autoplayTimeout: 5000
	});



	$('.top_menu_flex').flexMenu({
		linkText: 'Еще',
		linkTitle : '',
		linkTextAll : 'Меню',
		cutoff : '1'
	});


	$('.slider_controls .param_control').ForceNumericOnly();


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



	$('.select-provaiders i').click(function(e){
		e.preventDefault();
		$('.select-provaiders').toggleClass('show');
	});

	$('.select-provaiders .checkbox').click(function(){
		var i = 0;
		$('.select-provaiders .checkbox').each(function(){
			if (this.checked) i++;
		});

		switch (i){
			case 1 :
				txt = ' провайдер'; 
				break;
			case 2:
			case 3:
			case 4:
				txt = ' провайдера';
				break;
			default:
			txt = ' провайдеров';
		}
		$('#count-provaiders').text(i + txt);
	});




	// чекбоксы фильтра в боковом меню + синхрон
	$('.filter #internet').prop('checked',true);
	$('.filter #tv').prop('checked',false);
	// чекбоксы в каталоге тарифов
	$('.filter #internet-sm').prop('checked',true);
	$('.filter #tv-sm').prop('checked',false);


	$('aside .filter .filter_header, .rating-actions-filter .filter_header').find('input[type="checkbox"]').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			el = $this.attr('name'),
			cellparam = $('.filter .param').filter('[data-param=' + el + ']').parent('.cell');
			cellparamsm = $('.filter-sm .param').filter('[data-param=' + el + ']');

		if (isChecked) {
			cellparam.slideDown('normal',function(){
				cellparamsm.parent().show();
			});
			$('.filter-sm').find('#' + el + '-sm').prop('checked', true);
		} else {
			cellparam.slideUp('normal', function(){
				cellparamsm.parent().hide();
			});
			$('.filter-sm').find('#' + el + '-sm').prop('checked', false);
		}
	});

	// клик по "интернет", "тв"
	$('.filter-sm .filter_header .toggle').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			el = $this.attr('name'),
			cellparam = $('.filter .param').filter('[data-param=' + el + ']');
			cellparamsm = $('.filter-sm .param').filter('[data-param=' + el + ']');

		if (isChecked) {
			$('aside .filter').find('#' + el).prop('checked', true);
			cellparamsm.parent().show();
			cellparam.slideDown();
		} else {
			$('aside .filter').find('#' + el).prop('checked', false);
			cellparamsm.parent().hide();
			cellparam.slideUp();
		}
	});


	// клик по "домой" или "в офис"
	$('aside input[name="place"]').on('click', function(){
		var $this = $(this),
			el = $this.data('place');
		$('.filter-sm input[name=place][data-place="' + el + '"]').prop('checked', true);
	});
	$('.filter-sm input[name="place"]').on('click', function(){
		var $this = $(this),
			el = $this.data('place');
		$('aside input[name=place][data-place="' + el + '"]').prop('checked', true);
	});

	// клик по доп.услугам в фильтре
	$('aside .services input[type=checkbox]').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			el = $this.data('service');
		if (isChecked) {
			$('.filter-sm .services input[data-service="' + el + '"]').prop('checked', true);
		} else {
			$('.filter-sm .services input[data-service="' + el + '"]').prop('checked', false);
		}
	});
	$('.filter-sm .services input[type=checkbox]').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			el = $this.data('service');
		if (isChecked) {
			$('aside .services input[data-service="' + el + '"]').prop('checked', true);
		} else {
			$('aside .services input[data-service="' + el + '"]').prop('checked', false);
		}
	});
	// #inputs


	//  клик по шапке фильтра в каталоге тарифов
	$('.filter-sm .filter_title').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$('.filter-sm').toggleClass('filter-sm-up')
		$('.filter-sm .filter_wrapper').slideToggle();
	})


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
	// $('#street, #check-street').typeahead({
	$('#check-street').typeahead({
		items: 5, 
		ajax: { 
			url: '/address/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
		}
	});

	// $('#house, #check-house').typeahead({
	$('#check-house').typeahead({
		items: 5, 
		ajax: { 
			url: '/house/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
		}
	});
	

	$('#city-connect, #city-connect_tarif').typeahead({
		items: 5, 
		ajax: { 
			url: '/cities/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
			$('#city-connect').valid();
		}
	});	
	$('#address-connect, #address-connect_tarif').typeahead({
		items: 5, 
		ajax: { 
			url: '/address/list',
			triggerLength: 1,
		},
		onSelect: function(item) {
			$('#address-connect').valid();
		}
	});
	$('#house-connect, #house-connect_tarif').typeahead({
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
	$('input.tel').inputmask({
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

	$('#connect_tarif-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true},
			city: {required:true},
			address: {required:true},
			house: {required:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#connect_tarif-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#connect_tarif-form .helper-field-tel').text('Заполните поле');
			if (element.attr('name') == 'city') $('#connect_tarif-form .helper-field-city').text('Заполните поле');
			if (element.attr('name') == 'address') $('#connect_tarif-form .helper-field-address').text('Заполните поле');
			if (element.attr('name') == 'house') $('#connect_tarif-form .helper-field-house').text('Заполните поле');
		}
	});	

	$('#add-opinion-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#add-opinion .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#add-opinion .helper-field-tel').text('Заполните поле');
		},
		submitHandler: function(form){
			$('#add-opinion').modal('hide');
			$problem = false;
			$(form).find('.estimate input[type=radio]:checked').each(function(){
				if ($(this).val() > 0 && $(this).val()<=5) $('#add-quality').modal('show');
			});

		}
	});	

	$('#add-quality-form').validate({
		rules: {
			name:{required : true},
			tel: {validphone:true}
		},
		errorPlacement: function(error, element) {
			if (element.attr('name') == 'name') $('#add-opinion .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#add-opinion .helper-field-tel').text('Заполните поле');
		},
		submitHandler: function(form){
		}
	});

	$('#add-faqtarif-form').validate({
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
			if (element.attr('name') == 'name') $('#add-faqtarif-form .helper-field-name').text('Заполните поле');
			if (element.attr('name') == 'tel') $('#add-faqtarif-form .helper-field-tel').text('Заполните поле');
			if (element.attr('name') == 'theme') $('#add-faqtarif-form .helper-field-theme').text('Заполните поле');
			if (element.attr('name') == 'msg') $('#add-faqtarif-form .helper-field-msg').text('Заполните поле');
		}
	});


	$('#add-quality').on('hidden.bs.modal', function (e) {
		$('body').css('padding-right', '0px');
	});
	// #validate


	$("#gallery a").tosrus({
		//	Default options
		caption		: {
			add			: true
		}
	}, {
		//	Desktop-only options
		buttons		: true,
		drag		: false
	}, {
		//	Touchscreen-only options
		buttons		: false,
		drag		: true
	});


	$('#connect').on('show.bs.modal', function (e) {
		$('#connect .tarif-title span').text($(e.relatedTarget).closest('.tarif_item').find('.ctitle').find('a').text())
	});


	$("#compare-scroller").mCustomScrollbar({
		axis:"x",
		autoDraggerLength: false,
		scrollbarPosition:"outside",
		scrollButtons:{enable:true,scrollAmount: "35px"},
		advanced:{autoExpandHorizontalScroll:true},
		mouseWheel : false
	});


	$("#scroll-provaiders").mCustomScrollbar({
		axis:"y",
		autoDraggerLength: "150px",
		scrollbarPosition:"outside",
		scrollButtons:{enable:false},
		mouseWheel : true
	});

	// ОБРАБОТКА СПИСКОВ ГОРОДОВ

	$('#opencity').on('shown.bs.modal', function (e) {
		$('body').addClass('modal-opencity');
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
	});


	// карточка провайдера
	$('.card_tarifs .filter_header input[type=checkbox]').on('click', function(){
		var $this = $(this),
			isChecked = ($this.is(':checked')) ? true : false,
			val = $this.data('service');

			console.log($this.val());

		if (isChecked) {
			$('.card_tarifs_list article[data-tarif=' + $this.val() + ']').removeClass('hide');
		} else {
			$('.card_tarifs_list article[data-tarif=' + $this.val() + ']').addClass('hide');
		}
	});	

	// проверка адреса
	$('#check-address .submit').click(function(e){
		e.preventDefault();
		$.ajax({
			url: "/check/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(result){
				if (result == 'ok'){
					html = '<div class="result result-ok">Адрес обслуживается <p class="text">Требуется уточнить у оператора возможность подключения в данном доме</p></div>';
				} else {
					html = '<div class="result result-error">Адрес не обслуживается</div>';
				};

				$('.card_tarifs .verify form').append(html);
			}
		});		
	});

	// scroll page
	$('.mainmenu a[href*=\\#]:not([href=\\#]), .graduate_info_box-experts a, .neck_card .graduate_info_box-users .title a').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-50
				}, 1000);
				return false;
			}
		}
	});	


	$('.about-us, .how, .expert_reviews_body').find('.more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$this.parent().prev('.moretext').slideToggle();
		($this.hasClass('expand')) ?  $this.text('Показать продолжение').removeClass('expand') : $this.text('Свернуть').addClass('expand');
	});


	$('.like a').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active'); // подсвечиваем иконку
	});


	// подгрузка тарифов в карточке провайдера
	$('.tarifs_more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$.ajax({
			url: "/tarifs/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('#tarifs_load').append('<div class="toggle">' + html + '</div>');
				$('#tarifs_load .toggle').slideDown('normal', function(){
					$('#tarifs_load .toggle').removeClass('toggle');
					$('.tarifs_more').remove();
				});	
			}
		});
	});	


	// подгрузка отзывов в карточке провайдера
	$('.reviewers_more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$.ajax({
			url: "/reviewers/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('#reviewers_load').append('<div class="toggle">' + html + '</div>');
				$('#reviewers_load .toggle').slideDown('normal', function(){
					$('#reviewers_load .toggle').removeClass('toggle');
				});
			}
		});
	});


	// подгрузка вопрос-ответов в карточке провайдера
	$('.faq_content-providers .faq_content_more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		// тут должна быть
		$.ajax({
			url: "/faq/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('#faq_providers_load').append('<div class="toggle">' + html + '</div>');
				$('#faq_providers_load .toggle').slideDown('normal', function(){
					$('#faq_providers_load .toggle').removeClass('toggle');
				});
			}
		});
	});

	// подгрузка новостей в карточке провайдера
	$('.others-company-news a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		// тут должна быть
		$.ajax({
			url: "/news/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('.others-company-news .others_wrapper').append(html);
				$('.news_item_toggle').animate({'opacity' : '1'}, 700).removeClass('news_item_toggle');
			}
		});
	});

	// подгрузка акций в карточке провайдера
	$('.others-company-actions a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		// тут должна быть
		$.ajax({
			url: "/actions/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('.others-company-actions .others_wrapper').append(html);
				$('.actions_item_toggle').animate({'opacity' : '1'}, 700);
			}
		});
	});	
	// #карточка провайдера


	// подгрузка вопрос-ответ в карточке тарифа
	$('.faq_content-tarif .faq_content_more a').click(function(e){
		e.preventDefault();
		var $this = $(this);

		$.ajax({
			url: "/faq-tarif/", // по url находится ajax эмулятор - mockajax
			cache: false,
			success: function(html){
				$('#faq_tarif_load').append('<div class="toggle">' + html + '</div>');
				$('#faq_tarif_load .toggle').slideDown('normal', function(){
					$('#faq_tarif_load .toggle').removeClass('toggle');
				});
			}
		});
	});

	// устанавливает все чекбоксы в карточке тарифа в выключенное состояние
	$('.services .item input[type=checkbox]').prop('checked', false);

	// клик по заголовку разворачивающегося блока
	$('.services .item .item_header').click(function(e){
		e.preventDefault();
		var $this = $(this),
			arrow = $this.find('.toggle'),
			checkbox = $this.find('input[type=checkbox]');
		arrow.toggleClass('toggle-up');
		checkbox.prop('checked', !checkbox.prop('checked'));
		$this.closest('.item').find('.item_body').slideToggle();
	})



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


	$('.connect_header').click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('connect_header-down');
		$('body').toggleClass('bodyConnectDown')
		$('.connect_wrapper').slideToggle('normal', function(){
		});
	})
})


// =заглушка для IE
//event listener: DOM ready
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
//call plugin function after DOM ready
addLoadEvent(function(){
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#ffffff',
        lowerThan: 'transform',
        languagePath: '/outdatedbrowser/lang/ru.html'
    })
});
// =/заглушка для IE



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
	msg = '<div class="result-check result-check-ok"><div class="wrapper"><p>Адрес обслуживается. Найдено <a href="http://ya.ru">5 провайдеров</a></p><a href="http://ya.ru" class="link">Посмотреть провайдеров</a></div></div>';
	// msg = '<div class="result-check result-check-error text-center"><div class="wrapper"><p>Адрес не обслуживается провайдерами</div></div>';
	$('body').append(msg).addClass('blur');
	$('.result-check').css('cursor','pointer');
});

$(document).on('click','.result-check', function(e){
	$('body.blur').removeClass('blur');
	$(this).fadeOut('normal',function(){
		this.remove();
	});
});

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


// карточка провайдера
$(document).on('click', '.reviewers_item_body .more a', function(e){
	e.preventDefault();
	var $this = $(this),
		el = $this.closest('.reviewers_item_body'),
		curHeight = el.height(),
		autoHeight = el.css('height', 'auto').height() + 60;

	if ($this.hasClass('expand')){
		$this.text('Показать продолжение').removeClass('expand');
		el.height(curHeight).animate({height: '193px'}, 300);
	} else {
		el.height(curHeight).animate({height: autoHeight}, 300);
		$this.text('Свернуть').addClass('expand')
	}

	$this.closest('.reviewers_item_body').toggleClass('reviewers_item_body-expand');
});



var timer;
var sec = 3;

function showTime(form){
	sec = sec-1;
	if (sec <=0) {
		stopClock();
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