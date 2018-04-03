$(function () {
	var catalog2 = $('.catalog-2 .catalog-wrapper'),
	    catalog2Html =  $(catalog2).html();
	var owlcatalog2 = catalog2,
	    owlcatalog2Options = {
	        loop:true,
	        margin: 10,
	        nav: false,
	        items: 1,
	        lazyLoad: true,
	        responsive:{
	             0:{
	                items:1,
	                nav: false,
	            },


	            524: {
	                items: 1,
	                nav: false
	            },

	            748:{
	                items: 2,
	                nav: false,
	            },

	            960:{
	                items: 2,
	                nav: false,
	            }
	        }        
	    }; 
	        
	if ($(window).width() < 960) {
	    startOwlcatalog2();
	}

	$(window).resize(function () {
	    if ($(window).width() > 960) {
	        owlcatalog2.trigger('destroy.owl.carousel');
	        $(owlcatalog2).removeClass('owl-carousel');
	        $(catalog2).html(catalog2Html);
	    } else {
	        if (!$(owlcatalog2).hasClass("owl-carousel")) {
	            startOwlcatalog2();            
	        }
	    }
	}); 

	function startOwlcatalog2() {
	    $(owlcatalog2).addClass('owl-carousel');
	    owlcatalog2.owlCarousel(owlcatalog2Options);
	}	
});