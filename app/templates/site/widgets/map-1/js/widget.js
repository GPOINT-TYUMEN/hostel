
callback["map"] = function () {
	var map = $('.lazyiframe'),
		mapCount = map.length;

	for (var index = 0; index < mapCount; index++) {
		$(map[index]).parent().append('<iframe src="' + $(map[index]).attr('src') + '" frameborder="0"></iframe>');
	}
}

