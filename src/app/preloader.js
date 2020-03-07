export function preloader() {
	$(window).on('load', function() {
		setTimeout(function() {
			$('[data-toggle="preloader"]').fadeOut(200);
		}, 500);
	});
}
