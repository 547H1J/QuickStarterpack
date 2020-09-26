//===== start activation =====

(function ($) {
	"use strict";
	scrollToTopActive();
	mobileMenu();
})(jQuery);
//===== end activation =====
//===== mobileMenu
function mobileMenu() {
	$(".menu-open").click(function () {
		$(".mobile-menu-area").toggleClass("active");
	});
	$(".menu-close").click(function () {
		$(".mobile-menu-area").removeClass("active");
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
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		autoplay: false,
		autoplayTimeout: 3000,
		smartSpeed: 1000,
		responsiveClass: true,
		navText: [
			'<i class="fal fa-angle-left"></i>',
			'<i class="fal fa-angle-right"></i>',
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
		disableMutationObserver: true,
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
	$('input[type="number"]').niceNumber();
}

// HINT:
// javascript: void 0;

//venoboxPopUpModal
function venoboxPopUpModal() {
	// <a
	// 	href="https://vimeo.com/75976293"
	// 	class="venobox"
	// 	data-autoplay="true"
	// 	data-vbtype="video">
	// 	xxxx
	// </a>;
	$(".venobox").venobox();
}
