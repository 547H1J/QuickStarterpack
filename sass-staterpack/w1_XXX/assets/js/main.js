//===== start activation =====

(function ($) {
	"use strict";
	scrollToTopActive();
	mobileMenu();
	stickyHeader();
	slickSliderActive();
	owlCarouselSliders();
	magnificPopUpModal();
	isoTopGridBox();
	asoAnimationActive();
	factCounterActive();
	niceSelectorActive();
	niceNumberActive();
})(jQuery);
//===== end activation =====
//===== mobileMenu
function mobileMenu() {
	$(".mobile-menu-toggler").click(function () {
		$(".mobile-menu").toggleClass("active");
	});
	$(".menu-close-toggler").click(function () {
		$(".mobile-menu").removeClass("active");
	});
	var lastClicked;
	$(".dw-menu").on("click", function (e) {
		$(this).siblings().toggle("slow");
		$(this).removeClass("b");
		if (lastClicked != $(this)) {
			if (lastClicked != undefined) {
				if (lastClicked.hasClass("b")) {
					lastClicked.siblings().hide(1000);
				}
			}
		}
		lastClicked = $(this);
		lastClicked.addClass("b");
	});
	$(".menu li").click(function () {
		$(this).siblings().removeClass("active");
	});
}
//===== nice selector active
function niceSelectorActive() {
	$("select").niceSelect();
	$(".filter-itm-subcat .current").html(
		"<span>Filter</span><span><img src='./assets/img/icon/Sl-arrow.png' alt=''></span>"
	);
	$(".feture-itm-ct .current").html(
		"<span>Feature</span><span><i class='fa fa-angle-down'></i></span>"
	);
}
//===== sticky header
function stickyHeader() {
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});
}
//===== slick slider
function slickSliderActive() {
	$(".slider-for").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: ".slider-nav",
	});
	$(".slider-nav").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".slider-for",
		dots: true,
		centerMode: true,
		focusOnSelect: true,
	});
}
//==== owl carousel slider
function owlCarouselSliders() {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>',
		],
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 3,
			},
			992: {
				items: 5,
			},
		},
	});
}

//==== scroll to top active
function scrollToTopActive() {
	$.scrollUp({
		scrollName: "scrollUp",
		topDistance: "300",
		topSpeed: 300,
		animation: "fade",
		animationInSpeed: 200,
		animationOutSpeed: 200,
		scrollText: '<i class="fal fa-arrow-up"></i>',
		activeOverlay: false,
	});
}
//==== WOW active
function asoAnimationActive() {
	//USES: data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
	AOS.init({
		disable: false,
		startEvent: "DOMContentLoaded",
		initClassName: "aos-init",
		animatedClassName: "aos-animate",
		useClassNames: false,
		disableMutationObserver: false,
		debounceDelay: 50,
		throttleDelay: 99,
		offset: 120,
		delay: 0,
		duration: 400,
		easing: "ease",
		once: false,
		mirror: false,
		anchorPlacement: "top-bottom",
	});
}
//==== fact counter
function factCounterActive() {
	//counter
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});
}

//==nice number
function niceNumberActive() {
	$("select").niceSelect();
}

// HINT:
// javascript: void 0;
