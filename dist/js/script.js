// 
function initChecker() {
	const headerParent = document.querySelector('.header-js'),
		  mapParent = document.getElementById('map');

	if (headerParent) {
		initStickyHeader();
	}

	if (mapParent) {
		console.log('init');
		generalInitMap();
	}
}
initChecker();

function initStickyHeader() {
	window.addEventListener('scroll', function() {
		let menuArea = document.querySelector('.header-js');

		if (window.pageYOffset > 0) {
			menuArea.classList.remove("header_theme_main");
		} else {
			menuArea.classList.add("header_theme_main");
		}
	});
}

$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header-menu,.header-btns').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.archive-filter-btn,.archive-filters__btn-back,.personal-filters__btn-back,.registration-filter-btn,.account-nav__btn-back').click(function(event) {
		$('.archive-filter-btn,.archive-filters,.personal-filters,.registration-filter-btn,.account-nav').toggleClass('active');
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

			$('.product-trade__btn_backed').html('В корзину');
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

	var swiper3 = new Swiper('.section-everything-partners-slider', {
		navigation: {
			nextEl: '.general-pagination__btn_next',
			prevEl: '.general-pagination__btn_prev',
		},
	});

	var galleryThumbs = new Swiper('.single-gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.single-gallery-top', {
		spaceBetween: 10,
		thumbs: {
		  swiper: galleryThumbs
		}
	});

	$('.archive-filter').on('click', '.archive-filter__headline', function() {
		$(this).toggleClass('active').siblings('.archive-filter__list').slideToggle();
	});

	// $('.archive-filter-scroll').on('click', '.archive-filter-scroll__headline', function() {
	// 	$(this).toggleClass('active').siblings('.archive-filter-scroll__list').slideToggle();
	// });


	/////////////////// product +/-
	$('.product-quantity__wrapper span').click(function () {
		var $input = $(this).parents('.product-quantity__wrapper').find('input.product-num');
	  if($(this).hasClass('minus')) {
		var count = parseFloat($input.val()) - 1;
		count = count < 1 ? 1 : count;
		if (count < 2) {
		  $(this).addClass('dis');
		}
		else {
		  $(this).removeClass('dis');
		}
		$input.val(count);
	  }
	  else {
		var count = parseFloat($input.val()) + 1
		$input.val(count);
		if (count > 1) {
		  $(this).parents('.product-quantity').find(('.minus')).removeClass('dis');
		}
	  }
	  
	  $input.change();
	  return false;
	});

	// Fancybox
	$('.single-product-photo__gallery').fancybox({
		buttons: [
			"fullScreen",
			"download",
			// "thumbs",
			"close"
		],
		animationEffect: "zoom-in-out",
		animationDuration: 500,
		transitionEffect: "circular",
		transitionDuration: 800,
		loop: true,
	});
});

jQuery(document).ready(function($){
	if ($('ul.archive-head-filters__list').find('li').length > 5) {
		$('.archive-head-filters__more-btn').click(function(){
			$(this).prev().children('li:nth-child(n+3)').slideToggle('');
			$(this).toggleClass('opnd_g');
		});
	} else {
		$('.show_hide_list').hide();
	}

	if ($('ul.personal-account-tabs__list').find('li').length > 1) {
		$('.archive-head-filters__more-btn').click(function(){
			$(this).prev().children('li:nth-child(n+2)').slideToggle('');
			$(this).toggleClass('opnd_g');
		});
	} else {
		$('.show_hide_list').hide();
	}

	if ($('ul.archive-customers-filters__list').find('li').length > 2) {
		$('.archive-customers-filters__more-btn').click(function(){
			$(this).prev().children('li:nth-child(n+3)').slideToggle('');
			$(this).toggleClass('opnd_g');
		});
	} else {
		$('.show_hide_list').hide();
	}
});


(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('div.accordion__body');

        $(this).closest('.accordion').find('div.accordion__body').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

$( document ).ready(function() {
	$('.select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-hidden'); 
		$this.wrap('<div class="custom-select"></div>');
		$this.after('<div class="custom-select__header"></div>');
	
		var $styledSelect = $this.next('div.custom-select__header');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.custom-select__header.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	
	});
});

$( document ).ready(function() {
	$('.hookah-select').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
		$this.addClass('select-general-hidden'); 
		$this.wrap('<div class="custom-general-select"></div>');
		$this.after('<div class="custom-general-select__header"></div>');
	
		var $styledSelect = $this.next('div.custom-general-select__header');
		$styledSelect.text($this.children('option').eq(0).text());
	  
		var $list = $('<ul />', {
			'class': 'select-general-options'
		}).insertAfter($styledSelect);
	  
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
	  
		var $listItems = $list.children('li');
	  
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.custom-general-select__header.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-general-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-general-options').toggle();
		});
	  
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});
	  
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	
	});
});

$(function() {
	var el;
	$("#rng").change(function() {
	el = $(this);
	el
	.next("#ong")
	.text(el.val());
	})
	.trigger('change');
});

function addAdvertisingEditing() {
	let editBtn = document.querySelectorAll('.btn-edit-js');

	editBtn.forEach(item => {
		item.addEventListener('click', () => aditingAdvertisingEditing());
	});
}

addAdvertisingEditing();

function aditingAdvertisingEditing () {
	const parent = document.querySelector('.advertising-type__wrapper-js'),
		archiveBlock = document.querySelector('.advertising-type__inner-js'),
		archiveBtn = document.querySelector('.advertising-btn-js');

	let saveBtn;

	archiveBlock.remove ();	
	archiveBtn.remove ();
	parent.innerHTML = `
		<form class="editing-advertising-form" action="#">
			<div class="advertising-type__inner">
				<div class="registration-wgt pb-3">
					<h2 class="registration-subtitle">Локация (google map)</h2>
					<div class="info-location d-flex">
						<svg class="info-location__icon">
							<use xlink:href="img/icons/icons.svg#geoposition-icon"></use>
						</svg>
						<div class="d-flex flex-column">
							<label class="editing-registration-label">
								Введите страну, город
								<input class="editing-registration-field" type="text">
							</label>
							<label class="editing-registration-label">
								Введите улицу
								<input class="editing-registration-field" type="text">
							</label>                                                       
						</div>                                                        
					</div>
				</div>
				<div class="registration-wgt pb-3">
					<div class="advertising-mobile_pl_34 d-flex">
						<label class="editing-registration-label">
							Введите возраст
							<input class="editing-registration-field" type="text">
						</label>
					</div>
				
				</div>
			</div>
			<div class="d-flex justify-content-end justify-content-lg-start align-items-center ps-lg-5">
				<button class="btn btn-save-js" type="button">Save</button>
			</div>
		</form>
	`;	
	saveBtn = document.querySelector('.btn-save-js');
	saveBtn.addEventListener('click', function(e) {
		e.preventDefault();
		inputVal = document.querySelectorAll('.editing-registration-field');
		let valueArr = [];
		inputVal.forEach((item) => {
			valueArr.push(item.value);
			console.log(valueArr);
		});
		creatingEditedFields(valueArr);
		
	});
}

function creatingEditedFields (valueArr) {
	const parent = document.querySelector('.advertising-type__wrapper-js');

	parent.innerHTML = `
	<div class="advertising-type__inner advertising-type__inner-js">
		<div class="registration-wgt pb-3">
			<h2 class="registration-subtitle">Локация (google map)</h2>
			<div class="info-location">
				<a class="info-location__link" href="#">
					<svg class="info-location__icon">
						<use xlink:href="img/icons/icons.svg#geoposition-icon"></use>
					</svg>
					<div class="info-location__descr">
						<p class="info-location__txt">${valueArr[0]}</p>
						<p class="info-location__txt">${valueArr[1]}</p>
					</div>
				</a>
			</div>
		</div>
		<div class="advertising-mobile_pl_34 registration-wgt pb-3">
			<h2 class="registration-subtitle">Возраст</h2>
		<div class="registration-txt">${valueArr[2]} лет</div>
		</div>
	</div>
	<div class="d-flex justify-content-end justify-content-lg-start align-items-center ps-lg-5 advertising-btn-js">
		<button class="btn btn-edit-js" type="button">Edit</button>
	</div>
	`;
	addAdvertisingEditing();
}

function addScheduleEditing() {
	let editBtn = document.querySelectorAll('.schedule-time__edit-btn');

	editBtn.forEach(item => {
		item.addEventListener('click', () => aditingScheduleEditing());
	});
}

addScheduleEditing();

function aditingScheduleEditing () {
	const parent = document.querySelector('.schedule-time-js'),
		archiveBlock = document.querySelector('.schedule-time__inner-js'),
		archiveBtn = document.querySelector('.schedule-time__edit-btn');

	let saveBtn;

	archiveBlock.remove ();	
	archiveBtn.remove ();
	parent.innerHTML = `
		<div class="schedule-time__inner schedule-time__inner-js">
			с
			<div class="schedule-time__num">
				<input class="schedule-time__field" placeholder="00" type="text">
				:
				<input class="schedule-time__field" placeholder="00" type="text">
			</div>
			до
			<div class="schedule-time__num">
				<input class="schedule-time__field" placeholder="00" type="text">
				:
				<input class="schedule-time__field" placeholder="00" type="text">
			</div>
		</div>
		<button class="schedule-time__edit-btn schedule-time__save-btn-js" type="button">Save</button>
	`;	
	saveBtn = document.querySelector('.schedule-time__save-btn-js');
	saveBtn.addEventListener('click', function(e) {
		e.preventDefault();
		inputVal = document.querySelectorAll('.schedule-time__field');
		let valueArr = [];
		inputVal.forEach((item) => {
			valueArr.push(item.value);
			console.log(valueArr);
		});
		creatingScheduleFields(valueArr);
	});
}

function creatingScheduleFields (valueArr) {
	const parent = document.querySelector('.schedule-time-js');

	parent.innerHTML = `
	<div class="schedule-time__inner schedule-time__inner-js">
		с
		<div class="schedule-time__num">
			<span>${valueArr[0]}</span>
			:
			<span>${valueArr[1]}</span>
		</div>
		до
		<div class="schedule-time__num">
			<span>${valueArr[2]}</span>
			:
			<span>${valueArr[3]}</span>
		</div>
	</div>
	<button class="schedule-time__edit-btn schedule-time__edit-btn-js" type="button">Edit</button>
	`;
	addScheduleEditing();
}

var galleryThumbs = new Swiper('.single-product-gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var galleryTop = new Swiper('.single-product-gallery-top', {
	spaceBetween: 10,
	thumbs: {
	  swiper: galleryThumbs
	}
});

// Modal
function modal() {
	const modalTrigger = document.querySelectorAll('[data-modal]'),
	modal = document.querySelector('.modal'),
	modalCloseBtn = document.querySelector('[data-close]');
  
	
	function closeModal () {
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
	}

	modalTrigger.forEach(btn => {
	btn.addEventListener('click', () => {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	});
	});

	modalCloseBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
	});

	document.addEventListener('keydown', (e) => {
	if (e.code === "Escape" && modal.classList.contains('show')) {
		closeModal();
	}
	});
}

modal();

//Dropdown
function dropdownLog() {
	const dropdownTrigger = document.querySelector('.log-dropdown-btn'),
		  dropdown = document.querySelector('.log-dropdown-js');

	dropdownTrigger.addEventListener('click', () => {
		// console.log('click');
		dropdown.classList.toggle('hide');
	});
	
}

dropdownLog();

function dropdownBasket() {
	const dropdownTrigger = document.querySelector('.basket-dropdown-btn'),
		  dropdown = document.querySelector('.basket-dropdown-js');

	dropdownTrigger.addEventListener('click', () => {
		// console.log('click');
		dropdown.classList.toggle('hide');
	});
	
}

dropdownBasket();

let map;

function initMap() {
	let map, coords, styles, marker, info, content;

	coords = {
		lat: -24.548298,
		lng: 133.200039
	};

	content = '<h1 class="info-title">I\'m here</h1>';

	styles = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#ebe3cd"
			}]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#523735"
			}]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#c9b2a6"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#dcd2be"
			}]
		},
		{
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#ae9e90"
			}]
		},
		{
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#93817c"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#a5b076"
			}]
		},
		{
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#447530"
			}]
		},
		{
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fdfcf8"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f8c967"
			}]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#e9bc62"
			}]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e98d58"
			}]
		},
		{
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#db8555"
			}]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#806b63"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8f7d77"
			}]
		},
		{
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#ebe3cd"
			}]
		},
		{
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		},
		{
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#b9d3c2"
			}]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#92998d"
			}]
		}
	];

	map = new google.maps.Map(document.getElementById('map'), {
		center: coords,
		zoom: 4,
		styles: styles,
		disableDefaultUI: true,
		zoomControl: true,
		streetViewControl: true,
	});

	marker = new google.maps.Marker({
		position: coords,
		map: map,
		// icon: 'images/marker.png',
		draggable: true
	});

	info = new google.maps.InfoWindow({
		content: content
	});

	marker.addListener('click', function () {
		info.open(map, marker);
	});
}