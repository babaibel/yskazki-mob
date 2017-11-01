var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body');

	$(function(){

	function qty(val){
		pqty = $('#prdqty').val();
		if (val == "plus") {
		      var newVal = parseFloat(pqty) + 1;
		    } else {
		    if (pqty > 1) {
		      var newVal = parseFloat(pqty) - 1;
		    } else {
		      newVal = 1;
		    }
		}
		$('#prdqty').val(newVal);
	}

});

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

<<<<<<< HEAD
$(function(){
	var $jsTabsWr = $('.js-tabs-wr ');
	if(!$jsTabsWr.length) return;

	var $jsTabs = $jsTabsWr.find('.js-tabs a'),
		$jsTabCont = $jsTabsWr.find('.js-tab-cont > div');

    $jsTabs.click(function(){
	    $jsTabCont.addClass('hide');
	    $jsTabs.parent().removeClass('active');
	    
	    var id = $(this).attr('href');
	    $(id).removeClass('hide');
	    $(this).parent().addClass('active');
	    return false;
  });
=======
$(function() {

	$('.js-popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		showCloseBtn: false,
		mainClass: 'popup-modal-overlay'
	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});

$(function() {

	$('.js-submenu-btn').click(function(){
		$(this).toggleClass('_open');
		return false;
	});

});

$(function() {

	var $catalogWr = $('.js-catalog-wr');
	if(!$catalogWr.length) return;

	var $catalog = $catalogWr.find('.js-catalog'),
		$catalogViewLinks = $catalogWr.find('.js-catalog-view a');

	$catalogViewLinks.click(function(){
		var $this = $(this),
			thisView = $this.data('view');

		$catalogViewLinks.not(this).removeClass('_active');
		$this.addClass('_active');
		if(thisView == "list"){
			$catalog.removeClass('catalog--tile');
		} else{
			$catalog.addClass('catalog--tile');
		}
	});

>>>>>>> aecc1ca2450838954b3f98b5adf29e8562aa05f0
});

