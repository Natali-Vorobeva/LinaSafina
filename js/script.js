// $('.pic').bind('click', function() {
// 	$('.pic').toggleClass('away');
// 	$(this).removeClass('away').toggleClass('active');
// });

new Swiper('.image-slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	grabCursor: true,	
	mousewheel: {
		sensitivity: 1
	},
	// автовысота
	autoHeight: true,
	slidesPerView: 1,
	spaceBetween: 20,
	// slidePerGroup: 1,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		// stopOnLastSlide: true,
	},
	// speed: 100,
	effect: 'flip',
	flipEffect: {
		
		crossFlip: true
	},
	preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	zoom: {
		maxRatio: 3,
		minRatio: 1,
	},
	// direction: 'vertical',
	// loop: true,
	// loopedSlides: 3,
	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	},
	// }
});
