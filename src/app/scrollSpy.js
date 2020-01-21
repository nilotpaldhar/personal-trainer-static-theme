export function scrollSpy() {
	// Active link switching
	$(window).scroll(function() {
		var scrollbarLocation = $(this).scrollTop();
		var scrollLink = $('#mainNav a');

		scrollLink.each(function() {
			var sectionOffset = $(this.hash).offset().top - 80;

			if (sectionOffset <= scrollbarLocation) {
				$('#mainNav a').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
}
