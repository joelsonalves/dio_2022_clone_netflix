$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 5
                },
                1000: {
                    items: 9
                }
            },
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true
        }
    );
});