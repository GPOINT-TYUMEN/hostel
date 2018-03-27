$(function () {
	var catalogSlider = $('.catalog-slider .owl-carousel');

	catalogSlider.owlCarousel({
		loop:true,
		margin: 20,
		nav: false,
		items: 1,
		lazyLoad: true,
		responsive:{
			 0:{
				items:1,
				nav: false,
			},


			524: {
				items: 2,
				nav: false
			},

			748:{
				items: 3,
				nav: false,
			}
		}        
	});
		
});