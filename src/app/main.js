import { preloader } from './preloader';
import { navbarScroll, navbarToggle } from './navigation';
import { scrollSpy } from './scrollSpy';
import { smoothScroll } from './smoothScroll';

export function run() {
	preloader();
	navbarScroll();
	navbarToggle();
	scrollSpy();
	smoothScroll();
}
