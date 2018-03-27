$(function () {
	var wrapperNmbItems3= $('.number-items-3 .content-numbers-wrapper');
	    htmlNmbItems3  = $(wrapperNmbItems3).html();
	    owlNmbItems3	= $(wrapperNmbItems3),
	    owlOptionsNmbItems3 = {
	        loop:true,
	        margin: 0,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
	        autoHeight: true,
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
	                items: 4,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlNmbItems3();
	}

	$(window).resize(function () {
	    if ($(window).width() >= 960) {
	         owlNmbItems3.trigger('destroy.owl.carousel');
	        $(owlNmbItems3).removeClass('owl-carousel');
	        $(wrapperNmbItems3).html(htmlNmbItems3);
	    } else {
	        if (!$(wrapperNmbItems3).hasClass("owl-carousel")) {
	            startOwlNmbItems3();            
	        }
	    }
	}); 

	function startOwlNmbItems3() {
	    $(wrapperNmbItems3).addClass('owl-carousel');
	     owlNmbItems3.owlCarousel(owlOptionsNmbItems3);
	}
});
