$(document).ready(function() {
            new WOW().init();
            $('.autoplay').slick({
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
            });
        });