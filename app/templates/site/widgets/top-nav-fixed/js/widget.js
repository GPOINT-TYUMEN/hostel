$(function () {

	$('.left-nav-fixed .nav').mCustomScrollbar();

	//CLOSE NAV
	$('.left-nav-fixed').on('click', function (event) {
		var elem = event.target;

		if ($(elem).attr('self') === 'widget_sec') {
			var burger = $('.top-nav-fixed .burger');
				nav    = $('.left-nav-fixed');

			 $(burger).attr('check', 'false'); 
			 $(nav).fadeOut(200, function () {
				$(nav).removeClass('active');
			});	
		} 
	});

	$('.left-nav-fixed .burger').on('click', function () {
		var burger = $('.top-nav-fixed .burger');
			nav    = $('.left-nav-fixed');

		 $(burger).attr('check', 'false'); 
		 $(nav).fadeOut(200, function () {
			$(nav).removeClass('active');
		});		 
	});

	//NAV SLIDE
	$('body').on('click', '.top-nav-fixed .burger', function () {
		if ($(this).attr('check') === 'false') {
			
			$(this).attr('check', 'true'); 

			 $('.left-nav-fixed').fadeIn(200, function () {
				$('.left-nav-fixed').addClass('active');
			}); 
		} else {
			 $(this).attr('check', 'false'); 

			 $('.left-nav-fixed').fadeOut(200, function () {
				$('.left-nav-fixed').removeClass('active');
			});			
		}
	});

	//NAV SLIDE
	$('body').on('click', '.left-nav-fixed', function (event) {
		var elem = event.target;

		if ($(elem).attr('self') === 'left-nav-fixed') {
			$('.left-body-content .burger').trigger('click');
		}
	});
});