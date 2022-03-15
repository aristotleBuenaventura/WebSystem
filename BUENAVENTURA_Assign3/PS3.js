// For Drop down list animation
(function($) { "use strict";		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
  })(jQuery); 


// For responsive header  
$(document).ready(function(){

$('.header').height($(window).height(500));

$( "#test" ).on( "click", function( event ) {
	alert("Test");
});
})

$( function() {
	$( "#accordion1" ).accordion();
} );
$( function() {
	$( "#accordion2" ).accordion();
} );
$( function() {
	$( "#accordion3" ).accordion();
} );

