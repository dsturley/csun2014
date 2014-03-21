function keyboardListener($collection, currentIndex, keyCode) {
	var result;
	switch (keyCode) {
	// find previous in collection, if less than 0, wrap to the last
	case KEYCODE.UP:
	case KEYCODE.LEFT:
		result = currentIndex - 1;
		if (result < 0) {
			result = $collection.length - 1;
		}

		break;
	// find next in collection, if greater than the number of tabs, wrap to the first
	case KEYCODE.DOWN:
	case KEYCODE.RIGHT:
		result = currentIndex + 1;
		if (result >= $collection.length) {
			result = 0;
		}
		break;
	// ensure
	case KEYCODE.ENTER:
	case KEYCODE.SPACE:
		$collection
			.attr('tabindex', -1)
			.eq(currentIndex).attr('tabindex', 0).click();
		break;
	}

	if (typeof result !== 'undefined') {
		$collection.eq(result).focus();
	}

}