export function preloader() {
	$(document).ready(function() {
		setTimeout(function() {
			$('[data-toggle="preloader"]').fadeOut(100);
		}, 1000);
	});
}
