export function preloader() {
	$(document).ready(function() {
		setTimeout(function() {
			$('[data-toggle="preloader"]').fadeOut(200);
		}, 1000);
	});
}
