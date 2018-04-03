$(function () {
	var openPhotoSwipe = function(self) {

	    var pswpElement = document.querySelectorAll('.pswp')[0];

	    // build items array
	    var items = $('.photoswipe-photos span', self),
	    	itemsCount = items.length;
	    
	    var photos = [];
	    for (var index = 0; index < itemsCount; index++) {
	    	photos[index] = {
	    		src: $(items[index]).attr('photo-src'),
	    		w: $(items[index]).attr('photo-w'),
	    		h: $(items[index]).attr('photo-h')
	    	}
	    }

	    console.log(photos);
	    // define options (if needed)
	    var options = {
	             // history & focus options are disabled on CodePen        
	        history: false,
	        focus: false,

	        showAnimationDuration: 0,
	        hideAnimationDuration: 0
	        
	    };
	    
	    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, photos, options);
	    gallery.init();
	};



	$('.galery-images-1 .galery-images-1-content').on('click', function () {
		openPhotoSwipe(this);
	});
});

