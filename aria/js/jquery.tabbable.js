/*!
 * jQuery UI Core 1.11.0pre
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function () {

	function visible( element ) {
		return jQuery.expr.filters.visible( element ) &&
			!jQuery( element ).parents().addBack().filter(function() {
				return jQuery.css( this, "visibility" ) === "hidden";
			}).length;
	}

	function focusable( element, isTabIndexNotNaN ) {
		var map, mapName, img,
			nodeName = element.nodeName.toLowerCase();
		if ( "area" === nodeName ) {
			map = element.parentNode;
			mapName = map.name;
			if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
				return false;
			}
			img = jQuery( "img[usemap=#" + mapName + "]" )[0];
			return !!img && visible( img );
		}
		return ( /input|select|textarea|button|object/.test( nodeName ) ?
			!element.disabled :
			"a" === nodeName ?
				element.href || isTabIndexNotNaN :
				isTabIndexNotNaN) &&
			// the element and all of its ancestors must be visible
			visible( element );
	}

	jQuery.extend(jQuery.expr[ ":" ], {
		focusable: function( element ) {
			return focusable( element, !isNaN( jQuery.attr( element, "tabindex" ) ) );
		},
		tabbable: function( element ) {
			var tabIndex = jQuery.attr( element, "tabindex" ),
				isTabIndexNaN = isNaN( tabIndex );
			return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
		}
	});

}());