var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body');

$(function() {

	var slideout = new Slideout({
		'panel': document.getElementById('layout'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	$('.js-mob-btn').click(function(){
		slideout.toggle();
	});

});