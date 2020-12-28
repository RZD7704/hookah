// 
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



function resizeScrenn() {
	if ($(window).width() < 992) {
		var swiper1 = new Swiper('.section-buy-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				// when window width is <= 499px
				320: {
					slidesPerView: 1,
					spaceBetweenSlides: 15
				},
				768: {
					slidesPerView: 2,
					spaceBetweenSlides: 20
				},
				// when window width is <= 999px
				992: {
					slidesPerView: 3,
					spaceBetweenSlides: 20
				}
			},
			navigation: {
				nextEl: '.general-pagination__btn_next',
				prevEl: '.general-pagination__btn_prev',
			},
		});

		var swiper2 = new Swiper('.section-shop-slider', {
			slidesPerView: 1,
			spaceBetween: 30,
			breakpoints: {
				// when window width is <= 499px
				320: {
					slidesPerView: 1,
					spaceBetweenSlides: 15
				},
				768: {
					slidesPerView: 2,
					spaceBetweenSlides: 20
				},
				// when window width is <= 999px
				992: {
					slidesPerView: 3,
					spaceBetweenSlides: 20
				}
			},
			navigation: {
				nextEl: '.general-pagination__btn_next',
				prevEl: '.general-pagination__btn_prev',
			},
		});
	}
  }
resizeScrenn();

$(window).resize(function () {
	resizeScrenn();
});