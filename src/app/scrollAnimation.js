import AOS from 'aos';

export function scrollAnimation() {
	AOS.init({
		offset: 300,
		duration: 1000
	});
}
