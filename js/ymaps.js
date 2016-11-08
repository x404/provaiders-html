ymaps.ready(function() {
	var myMap = new ymaps.Map('map', {
		center: [56.042285,92.902513],
		zoom: 17,
		controls: ['zoomControl'],
	}, {
            searchControlProvider: 'yandex#search'
        }),
	myPlacemark = new ymaps.Placemark(
		[56.042285,92.903063],
		{
			hintContent: 'Providers',
			balloonContent: 'Россия, г. Красноярск, ул. Молокова, д. 52, оф. 215'
		}, 
		{
			// http://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/option.presetStorage.xml
			// preset: 'islands#darkGreenDotIcon'
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.
			iconImageHref: 'images/ymap-icon.png',
			// Размеры метки.
			iconImageSize: [127, 111],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-60, -80]
		},{
	});
	myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
});	