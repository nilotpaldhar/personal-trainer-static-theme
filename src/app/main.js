import { navbarScroll, navbarToggle } from './navigation';
import { scrollSpy } from './scrollSpy';
import { smoothScroll } from './smoothScroll';

export function run() {
	navbarScroll();
	navbarToggle();
	scrollSpy();
	smoothScroll();
}
