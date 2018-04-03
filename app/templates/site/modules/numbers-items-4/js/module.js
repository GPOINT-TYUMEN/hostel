$(function () {
	var numbersItems4 = $('.numbers-items-4 .items-wrapper'),
	    numbersItems4Html =  $(numbersItems4).html();
	var owlnumbersItems4 = numbersItems4,
	    owlnumbersItems4Options = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 4,
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

	            960:{
	                items: 3,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlowlnumbersItems4();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owlnumbersItems4.trigger('destroy.owl.carousel');
	        $(owlnumbersItems4).removeClass('owl-carousel');
	        $(numbersItems4).html(numbersItems4Html);
	    } else {
	        if (!$(owlnumbersItems4).hasClass("owl-carousel")) {
	            startOwlowlnumbersItems4();            
	        }
	    }
	}); 

	function startOwlowlnumbersItems4() {
	    $(owlnumbersItems4).addClass('owl-carousel');
	    owlnumbersItems4.owlCarousel(owlnumbersItems4Options);
	}
	//< SEC сonsequences-module-4
});