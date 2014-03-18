
jQuery('.tabs')
	.on('keydown', '.navigation li', function (e) {
		var $target = jQuery(e.target),
			$siblings = $target.parent().children(),
			index = $siblings.index($target);

		keyboardListener($siblings, index, e.which);
	})
	.on('click', '.navigation li', function (e) {
		// grab the target of the event
		var $target = jQuery(e.target);

		// find the panel that is now selected
		var panel = document.getElementById($target.data('panel'));

		// remove selected from previously selected tabs
		$target.closest('.tabs').find('.selected').removeClass('selected');

		// update selected class to newly selected tabs
		jQuery(panel).addClass('selected');
		$target.addClass('selected');

	});