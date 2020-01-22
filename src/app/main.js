import { navbarScroll, navbarToggle } from './navigation';
import { scrollSpy } from './scrollSpy';
import { smoothScroll } from './smoothScroll';
import { preloader } from './preloader';

export function run() {
	navbarScroll();
	navbarToggle();
	scrollSpy();
	smoothScroll();
	preloader();
}
