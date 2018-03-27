$(function () {
	var comments2 = $('.comments-2 .comments-wrapper'),
		comments2Html =  $(comments2).html();
	var owlcomments2 = comments2,
		owlcomments2Options = {
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
			
	if ($(window).width() < 960) {
		startOwlcomments2();
	}

	$(window).resize(function () {
		if ($(window).width() > 960) {
			owlcomments2.trigger('destroy.owl.carousel');
			$(owlcomments2).removeClass('owl-carousel');
			$(comments2).html(comments2Html);
		} else {
			if (!$(owlcomments2).hasClass("owl-carousel")) {
				startOwlcomments2();            
			}
		}
	}); 

	function startOwlcomments2() {
		$(owlcomments2).addClass('owl-carousel');
		owlcomments2.owlCarousel(owlcomments2Options);
	}
	//< SEC сonsequences-module-1
});