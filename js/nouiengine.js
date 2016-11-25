var minslider = 20,
	maxslider = 150,
	handlesSlider1 = document.getElementById('slider-speed'),
	handlesSlider2 = document.getElementById('slider-cost'),
	handlesSlider3 = document.getElementById('slider-tv'),
	handlesSlider11 = document.getElementById('slider-speed-sm'),
	handlesSlider22 = document.getElementById('slider-cost-sm'),
	handlesSlider33 = document.getElementById('slider-tv-sm'),
	speedfrom = document.getElementById('speed-from'),
	speedto = document.getElementById('speed-to'),
	costfrom = document.getElementById('cost-from'),
	costto = document.getElementById('cost-to'),
	tvfrom = document.getElementById('tv-from'),
	tvto = document.getElementById('tv-to'),
	speedfromsm = document.getElementById('speed-from-sm'),
	speedtosm = document.getElementById('speed-to-sm'),
	costfromsm = document.getElementById('cost-from-sm'),
	costtosm = document.getElementById('cost-to-sm'),
	tvfromsm = document.getElementById('tv-from-sm'),
	tvtosm = document.getElementById('tv-to-sm');

// SPEED
noUiSlider.create(handlesSlider1, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
noUiSlider.create(handlesSlider11, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
// speed aside
handlesSlider1.noUiSlider.on('update', function(values, handle){
	speedfrom.value = parseInt(values[0]);
	speedto.value = parseInt(values[1]);
});
handlesSlider1.noUiSlider.on('change', function(values, handle){
	handlesSlider11.noUiSlider.set([speedfrom.value, speedto.value]);
});
speedfrom.addEventListener('change', function ( ) {
	handlesSlider1.noUiSlider.set([this.value, null]);
	speedfromsm.value = this.value;
	handlesSlider11.noUiSlider.set([this.value, null]);
});
speedto.addEventListener('change', function ( ) {
	handlesSlider1.noUiSlider.set([null, this.value]);
	speedtosm.value = this.value;
	handlesSlider11.noUiSlider.set([null, this.value]);
});

// speed sm
handlesSlider11.noUiSlider.on('update', function(values, handle){
	speedfromsm.value = parseInt(values[0]);
	speedtosm.value = parseInt(values[1]);
});
handlesSlider11.noUiSlider.on('change', function(values, handle){
	handlesSlider1.noUiSlider.set([speedfromsm.value, speedtosm.value]);
});
speedfromsm.addEventListener('change', function ( ) {
	handlesSlider11.noUiSlider.set([this.value, null]);
	speedfrom.value = this.value;
	handlesSlider1.noUiSlider.set([speedfromsm.value, null]);
});
speedtosm.addEventListener('change', function ( ) {
	handlesSlider11.noUiSlider.set([null, this.value]);
	speedto.value = this.value;
	handlesSlider1.noUiSlider.set([null,speedtosm.value,]);
});



// COST
noUiSlider.create(handlesSlider2, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
noUiSlider.create(handlesSlider22, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
// cost aside
handlesSlider2.noUiSlider.on('update', function(values, handle){
	costfrom.value = parseInt(values[0]);
	costto.value = parseInt(values[1]);
});
handlesSlider2.noUiSlider.on('change', function(values, handle){
	handlesSlider22.noUiSlider.set([costfrom.value, costto.value]);
});
costfrom.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([this.value, null]);
	costfromsm.value = this.value;
	handlesSlider22.noUiSlider.set([this.value, null]);
});
costto.addEventListener('change', function ( ) {
	handlesSlider2.noUiSlider.set([null, this.value]);
	costtosm.value = this.value;
	handlesSlider22.noUiSlider.set([null, this.value]);
});

// cost sm
handlesSlider22.noUiSlider.on('update', function(values, handle){
	costfromsm.value = parseInt(values[0]);
	costtosm.value = parseInt(values[1]);
});
handlesSlider22.noUiSlider.on('change', function(values, handle){
	handlesSlider2.noUiSlider.set([costfromsm.value, costtosm.value]);
});
costfromsm.addEventListener('change', function ( ) {
	handlesSlider22.noUiSlider.set([this.value, null]);
	costfrom.value = this.value;
	handlesSlider2.noUiSlider.set([costfromsm.value, null]);
});
costtosm.addEventListener('change', function ( ) {
	handlesSlider22.noUiSlider.set([null, this.value]);
	costto.value = this.value;
	handlesSlider2.noUiSlider.set([null,costtosm.value,]);
});



// TV
noUiSlider.create(handlesSlider3, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
noUiSlider.create(handlesSlider33, {
	start: [ 40, 120 ],
	connect: true,
	range: {
		'min': minslider,
		'max': maxslider
	}
});
// tv aside
handlesSlider3.noUiSlider.on('update', function(values, handle){
	tvfrom.value = parseInt(values[0]);
	tvto.value = parseInt(values[1]);
});
handlesSlider3.noUiSlider.on('change', function(values, handle){
	handlesSlider33.noUiSlider.set([tvfrom.value, tvto.value]);
});
tvfrom.addEventListener('change', function ( ) {
	handlesSlider3.noUiSlider.set([this.value, null]);
	tvfromsm.value = this.value;
	handlesSlider33.noUiSlider.set([this.value, null]);
});
tvto.addEventListener('change', function ( ) {
	handlesSlider3.noUiSlider.set([null, this.value]);
	tvtosm.value = this.value;
	handlesSlider33.noUiSlider.set([null, this.value]);
});

// tv sm
handlesSlider33.noUiSlider.on('update', function(values, handle){
	tvfromsm.value = parseInt(values[0]);
	tvtosm.value = parseInt(values[1]);
});
handlesSlider33.noUiSlider.on('change', function(values, handle){
	handlesSlider3.noUiSlider.set([tvfromsm.value, tvtosm.value]);
});
tvfromsm.addEventListener('change', function ( ) {
	handlesSlider33.noUiSlider.set([this.value, null]);
	tvfrom.value = this.value;
	handlesSlider3.noUiSlider.set([tvfromsm.value, null]);
});
tvtosm.addEventListener('change', function ( ) {
	handlesSlider33.noUiSlider.set([null, this.value]);
	tvto.value = this.value;
	handlesSlider3.noUiSlider.set([null,tvtosm.value,]);
});