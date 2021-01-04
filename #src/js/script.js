// @@include('alert.js')
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.archive-filter-btn,.archive-filters__btn-back').click(function(event) {
		$('.archive-filter-btn,.archive-filters').toggleClass('active');
		$('body').toggleClass('lock');
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

	var swiper = new Swiper('.section-partners-slider', {
		navigation: {
			nextEl: '.general-pagination__btn_next',
			prevEl: '.general-pagination__btn_prev',
		},
	});

	$('.archive-filter').on('click', '.archive-filter__headline', function() {
		$(this).toggleClass('active').siblings('.archive-filter__list').slideToggle();
	});

	// $('.archive-filter-scroll').on('click', '.archive-filter-scroll__headline', function() {
	// 	$(this).toggleClass('active').siblings('.archive-filter-scroll__list').slideToggle();
	// });
});

jQuery(document).ready(function($){
	if ($('ul.archive-head-filters__list').find('li').length > 5) {
		$('.archive-head-filters__more-btn').click(function(){
			$(this).prev().children('li:nth-child(n+3)').slideToggle('');
			$(this).toggleClass('opnd_g');

			// if ($(this).hasClass('opnd_g')) {
			// 	$(this).html('Скрыть');}
			// else {
			// 	$(this).html('Смотреть все');
			// }
		});
	} else {
		$('.show_hide_list').hide();
	}
});


