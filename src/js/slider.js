
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: "<svg class='prev'><use href='./img/icons/sprite.svg#icon-vector'></use></svg>",
    nextArrow: "<svg class='next'><use href='./img/icons/sprite.svg#icon-vector'></use></svg>",
    responsive: [
    {
        breakpoint: 1440,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        dots: true
        }
    },
    {
        breakpoint: 1440,
        settings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
        }
    },
    {
        breakpoint: 768,
        settings: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
        }
    }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});