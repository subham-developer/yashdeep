$(document).ready(function () {
    // var slider = $(".your-class");
    $('.your-class').slick({
        // rtl: true,
        // infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // width: 20,
        // height: 30
        dots: true,
        infinite: true,
        variableWidth: true,
        speed: 6500,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    // prevArrow: false,
                    // nextArrow: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
    // slider.slick({
	// 	prevArrow: "<button type='button' class='slick-prev' aria-label='Previous picture'></button>",
	// 	nextArrow: "<button type='button' class='slick-next' aria-label='Next Picture'></button>",
	// 	centerMode: true,
	// 	variableWidth: true,
	// 	dots: true,
    // autoplay: true,
    // slidesToShow: 1,
	// });
    $('.slick-next').text('');
    $('.slick-prev').text('');
});
$('.slick-next').text('');
$('.slick-prev').text('');