$(".slider").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
});
$(".review_slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0px",
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: `<i class="fa-solid fa-angle-left"></i>`,
  nextArrow: `<i class="fa-solid fa-angle-right"></i>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
      {
      breakpoint: 576.99,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
