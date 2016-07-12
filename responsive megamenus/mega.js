/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

//Select only the li with ul
//$( '#nav li:has(ul)' ).doubleTapToGo();

$( document ).ready(function() {

	$('.sandwich').click(function(e){

		e.preventDefault();

		$(' #nav ').toggle();


	});
});

;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{	

		

		//Si no es un mobile device stop script
		//Other devices or ise modernizer
		//focus on touch NOT on mobile

		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

		//por cada submenu
		this.each( function()
		{
			var curItem = false;

			$( this ).on( 'click', function( e )
			{
				var item = $( this );

				$(".feedback").html(item);


				if( item[ 0 ] != curItem[ 0 ] )
				{
					
					e.preventDefault();
					curItem = item;
				}
			});


			// Click on window.document
			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();

				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;

				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};

})( jQuery, window, document );