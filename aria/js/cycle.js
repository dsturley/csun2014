/*exported keyboardListener */
/*global KEYCODE */

function keyboardListener($collection, currentIndex, keyCode) {
	var result;
	switch (keyCode) {
	case KEYCODE.UP:
	case KEYCODE.LEFT:
		// find previous in collection
		result = currentIndex - 1;
		if (result < 0) {
			result = $collection.length - 1;
		}

		break;
	case KEYCODE.DOWN:
	case KEYCODE.RIGHT:
		result = currentIndex + 1;
		if (result >= $collection.length) {
			result = 0;
		}
		break;
	case KEYCODE.ENTER:
	case KEYCODE.SPACE:
		$collection.eq(result).click();
	}

	if (typeof result !== 'undefined') {
		$collection.eq(result).focus().click();
	}

}