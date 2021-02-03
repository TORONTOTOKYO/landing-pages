// SLIDER

$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    adaptiveHeight: true,
  });
  $(".slider-bottom").slick({
    dots: true,
    slidesToShow: 5,
    arrows: true,
    adaptiveHeight: true,
    infinite: true,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
