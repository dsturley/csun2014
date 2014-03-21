jQuery('.tabs').each(function (_, tab) {
	var $tab = jQuery(tab),
		$tabpanels = $tab.find('[role="tabpanel"]'),
		$tabs = $tab.find('[role="tab"]');

	$tabs.on('click', function (e) {
		// grab the target of the event
		var $target = jQuery(e.target);

		// find the panel that is now selected
		var panel = document.getElementById($target.attr('aria-controls'));

		// remove selected from previously selected tabs and tab panels
		$tabs.attr({
			'aria-selected': 'false',
			tabindex: -1
		});
		$tabpanels.attr({
			'aria-hidden': 'true',
			'aria-expanded': 'false'
		});


		// update selected class to newly selected tabs
		jQuery(panel).attr({
			'aria-hidden': 'false',
			'aria-expanded': 'true'
		});
		$target.attr({
			'aria-selected': 'true',
			tabindex: 0
		});

	});

	$tab.on('keydown', function (e) {
		var currentIndex = $tabs.index(e.target);
		keyboardListener($tabs, currentIndex, e.which);
		
	});

});