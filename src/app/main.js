import { preloader } from './preloader';
import { navbarScroll, navbarToggle } from './navigation';
import { scrollSpy } from './scrollSpy';
import { smoothScroll } from './smoothScroll';
import { scrollAnimation } from './scrollAnimation';

export function run() {
	preloader();
	navbarScroll();
	navbarToggle();
	scrollSpy();
	smoothScroll();
	scrollAnimation();
}
