$(document).ready(function() {
            new WOW().init();
            $('.autoplay').slick({
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                arrows: false,
            });
        });