var $W = $(window),
	$D = $(document),
	$H = $('html'),
	$B = $('body');

(function ($) {
	$.fn.count = function () {

		$(this).each(function () {
			var $countMinus = $(this).find('.js-count-minus'),
				$countPluse = $(this).find('.js-count-pluse'),
				$countText = $(this).find('.js-count-text'),
				countVal;

			$countMinus.click(function(){
				countVal = $countText.val();
				if(countVal <= 1){
					countVal = 1;
					$countText.val(countVal);
				} else{
					countVal = --countVal;
					$countText.val(countVal);
				}
				return false;
			});

			$countPluse.click(function(){
				countVal = $countText.val();
				countVal = ++countVal;
				$countText.val(countVal);
				return false;
			});

		})
	};
})(jQuery);

$(function () {
	var $count = $('.js-count');
	if(!$count.length) return;

	$count.count({});
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
	var $TabsWr = $('.js-tabs-wr ');
	if(!$TabsWr.length) return;

	var $Tabs = $TabsWr.find('.js-tabs a'),
		$TabCont = $TabsWr.find('.js-tab-cont > div');

		$Tabs.click(function(){
			$TabCont.addClass('hide');
			$Tabs.parent().removeClass('active');

			var id = $(this).attr('href');
			$(id).removeClass('hide');
			$(this).parent().addClass('active');
			return false;
	});
});

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

});

$(function() {
	$('.js-order-form-close').click(function(){
		$('.js-order-form').removeClass('_open');
		return false;
	});

	// for markup only. Delete or change after test
	$('.js-catalog .catalog-item__btn .btn').click(function(){
		$('.js-order-form').addClass('_open');
		return false;
	});

	$('.js-count-minus, .js-count-pluse').click(function(){
		$(this).closest('.table-form__row').siblings('.table-form__row').addClass('_disabled');
		$('.js-order-form-cart').addClass('_open');
		return false;
	});

	$('.js-catalog-item-del').click(function(){
		$(this).closest('.catalog-item').slideUp();
		return false;
	});

});

(function ($) {
	$.fn.inputEdit = function () {

		$(this).each(function () {
			var $inputEditBtn = $(this).find('.js-input-edit-btn'),
				$inputEditLabel = $(this).find('.js-input-edit-label'),
				$inputEditLabelField = $inputEditLabel.find('input'),
				$inputEditLabelText = $inputEditLabel.find('span'),
				inputEditVal;

			$inputEditBtn.click(function(){
				if ($inputEditLabel.hasClass('_edit')){
					inputEditVal = $inputEditLabelField.val();
					$inputEditLabelText.text(inputEditVal);
					$inputEditLabel.removeClass('_edit');
				} else{
					$inputEditLabel.addClass('_edit');
				}
				return false;
			});

		})
	};
})(jQuery);

$(function () {
	var $inputEdit = $('.js-input-edit');
	if(!$inputEdit.length) return;

	$inputEdit.inputEdit({});
});