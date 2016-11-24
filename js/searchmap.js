$(document).ready(function(){
	ymaps.ready(init);
});


function init() {
	var myPlacemark,
		myMap = new ymaps.Map('mapYandex', {
			center: [55.753994, 37.622093],
			zoom: 16,
			controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'geolocationControl']
		}, {
			searchControlProvider: 'yandex#search'
		});

	// Слушаем клик на карте.
	myMap.events.add('click', function (e) {
		var coords = e.get('coords');

		// Если метка уже создана – просто передвигаем ее.
		if (myPlacemark) {
			myPlacemark.geometry.setCoordinates(coords);
		}
		// Если нет – создаем.
		else {
			myPlacemark = createPlacemark(coords);
			myMap.geoObjects.add(myPlacemark);
			// Слушаем событие окончания перетаскивания на метке.
			myPlacemark.events.add('dragend', function () {
				getAddress(myPlacemark.geometry.getCoordinates());
			});
		}
		getAddress(coords);
	});

	// Создание метки.
	function createPlacemark(coords) {
		var squareLayout = ymaps.templateLayoutFactory.createClass('<div class="iconcaption"> {{properties.iconCaption}} </div>');

		myPlacemark =  new ymaps.Placemark(coords, {
			iconCaption: 'поиск...'
		}, {
			iconLayout: squareLayout,
			iconImageHref: '/images/placemark.png',
			iconImageSize: [55, 48],
			iconImageOffset: [-125, -135],
			draggable: true,
		});
		return myPlacemark;
	}

	// Определяем адрес по координатам (обратное геокодирование).
	function getAddress(coords) {
		myPlacemark.properties.set('iconCaption', 'поиск...');
		ymaps.geocode(coords).then(function (res) {
			var firstGeoObject = res.geoObjects.get(0),
				house = '',
				street = '';

			if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.Locality) == 'undefined'){
				if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.Locality) != 'undefined') {
					if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.Locality.Thoroughfare) == 'undefined') {
						street = adr;
					} else {
						street = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.Locality.Thoroughfare.ThoroughfareName;
						if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.Locality.Thoroughfare.Premise) == 'undefined') {
							house = ''
						} else {
							house = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.Locality.Thoroughfare.Premise.PremiseNumber;
						};
					};
				} else {
					if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality) != 'undefined') {
						if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare) == 'undefined') {
							street = adr;
						} else {
							street = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.ThoroughfareName;
							if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.Premise) == 'undefined') {
								house = ''
							} else {
								house = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.Thoroughfare.Premise.PremiseNumber;
							};
						};
					} else{
						street = adr;
					}
				}
			} else {
				if (typeof(res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.Locality) != 'undefined'){
					street = res.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.AddressDetails.Country.Locality.Premise.PremiseName;
				};
			};

			// console.log(street);
			// console.log(house);

			document.getElementById('street').value = street;
			document.getElementById('house').value = house;
			myPlacemark.properties
				.set({
					iconCaption: firstGeoObject.properties.get('name'),
					balloonContent: firstGeoObject.properties.get('text')
				});
		});
	}
}