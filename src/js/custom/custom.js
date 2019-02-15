$(document).ready(function() {

    $('nav').coreNavigation({
        menuPosition: "center",
        container: true
    });

    $('.header__slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText:[],
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false
            },
            480:{
                items:1
            }
        }
    });

    $('#js_products-slider .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        navText:[],
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:1
            },
            680:{
                items:3
            },
            1024:{
                items:3
            },
        }
    });

});


$(window).load(function () {
    $(".categories__panel .categories-list").animated("fadeInDown", "fadeInOut");
    $(".blog__head").animated("fadeInDown", "fadeInUp");
    $(".categories__wrap .categories__left").animated("fadeInLeftBig", "fadeInOut");
    $(".categories__wrap .categories__center").animated("fadeInDownBig", "fadeInOut");
    $(".categories__wrap .categories__right").animated("fadeInRightBig", "fadeInOut");

    $(".contents__banner .banner-item, .contents__banner-light .banner-light__item").animated("fadeInDownBig", "fadeInOut");

    $(".products__head .products__title,#js_featured .js_left").animated("fadeInLeft", "fadeInOut");
    $(".products__head .products__descr").animated("fadeInRight", "fadeInOut");

    $("#js_products-slider .js_left").animated("fadeInLeftBig", "fadeInOut");
    $("#js_products-slider .js_up").animated("fadeInUpBig", "fadeInOut");
    $("#js_products-slider .js_right").animated("fadeInRightBig", "fadeInOut");

    $("#js_featured .js_left").animated("fadeInLeftBig", "fadeInOut");
    $("#js_featured .js_down").animated("fadeInDownBig", "fadeInOut");
    $("#js_featured .js_down").animated("fadeInDownBig", "fadeInOut");
    $("#js_featured .js_right").animated("fadeInRightBig", "fadeInOut");

    $("#js_blog .js_right").animated("fadeInRightBig", "fadeInOut");
    $("#js_blog .js_left").animated("fadeInLeftBig", "fadeInOut");
    $("#js_blog .js_right").animated("fadeInRightBig", "fadeInOut");

    $("#js_links .in-wrap .js_sleft").animated("slideInLeftBig", "slideInOut");
    $("#js_links .in-wrap .js_sdown").animated("slideInDownBig", "slideInOut");
    $("#js_links .in-wrap .js_sdown").animated("slideInDownBig", "slideInOut");
    $("#js_links .in-wrap .js_sright").animated("slideInRightBig", "slideInOut");
});
