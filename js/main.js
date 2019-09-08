


// Function Activation
$(document).ready(function(){

    new WOW().init();
    GalleryFunction();
    OwlCarouselFunction();
    SlickMobileMenuFunction();
    isotop();

});



// Gallery Function
function GalleryFunction(){
    $('a[data-imagelightbox="imageligtbox"]').imageLightbox({
        activity: true,
        arrows: true,
        button: true,
        caption: true,
        navigation: true,
        overlay: true,
        quitOnDocClick: false,
        selector: 'a[data-imagelightbox="f"]'
    });
}



// Owl Carousel Function
function OwlCarouselFunction(){
    $('.home-sliders').owlCarousel({
        loop:true,
        // margin:10,
        nav:false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 3000,
        navSpeed: 2000,
        dots:true,
        dotsData:true,
        dotsSpeed: 2000,
        dragEndSpeed: 1000,
        // navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:3
        //     },
        //     1000:{
        //         items:5
        //     }
        // },
        items:1
    });
}



// Slick Mobile Menu Function
function SlickMobileMenuFunction(){
    $('#menu').slicknav({
        duration: 500,
        prependTo:'#demo'
    });
}


// isotop
function isotop() {
    $(".data-tittle li").on('click', function() {
        var selector = $(this).attr('data-filter');
        $('.products').isotope({
            filter: selector
        })
    })

    (".products").isotope();
}