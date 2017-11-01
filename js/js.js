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
});

