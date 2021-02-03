// SLIDER

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    slidesToShow: 3,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
