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

});
