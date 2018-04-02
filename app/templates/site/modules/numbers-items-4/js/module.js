$(function () {
	var numbersItems1 = $('.numbers-items-1 .items-wrapper'),
	    numbersItems1Html =  $(numbersItems1).html();
	var owlnumbersItems1 = numbersItems1,
	    owlnumbersItems1Options = {
	        loop:true,
	        margin: 0,
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
	            },

	            960:{
	                items: 3,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 620) {
	    startOwlowlnumbersItems1();
	}

	$(window).resize(function () {
	    if ($(window).width() > 620) {
	        owlnumbersItems1.trigger('destroy.owl.carousel');
	        $(owlnumbersItems1).removeClass('owl-carousel');
	        $(numbersItems1).html(numbersItems1Html);
	    } else {
	        if (!$(owlnumbersItems1).hasClass("owl-carousel")) {
	            startOwlowlnumbersItems1();            
	        }
	    }
	}); 

	function startOwlowlnumbersItems1() {
	    $(owlnumbersItems1).addClass('owl-carousel');
	    owlnumbersItems1.owlCarousel(owlnumbersItems1Options);
	}
	//< SEC сonsequences-module-1
});