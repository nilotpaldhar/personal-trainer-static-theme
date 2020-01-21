export function navbarScroll() {
	const home = $("#home");
	const navbar = $("#mainNavbar");
	const nav = $("#mainNav");
	const navbarScrollOptions = {
		rootMargin: `-${home.height() - 200}px 0px 0px 0px`
	};

	const navbarScrollObserver = new IntersectionObserver(function (
		entries,
		navbarScrollObserver
	) {
		entries.forEach(function (entry) {
			if (!entry.isIntersecting) {
				navbar.addClass("scrolled");
				nav.addClass("scrolled");
			} else {
				navbar.removeClass("scrolled");
				nav.removeClass("scrolled");
			}
		});
	},
		navbarScrollOptions);

	navbarScrollObserver.observe(home[0]);
}

export function navbarToggle() {
	const navbar = $("#mainNavbar");
	const nav = $("#mainNav");
	const navToggleBtn = $("[data-toggle='navigation']");

	function navigationToggle() {
		$(this).toggleClass("close");
		nav.slideToggle();
	}

	navToggleBtn.on("click", navigationToggle);
}
