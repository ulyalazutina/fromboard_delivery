$('.single-item').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1365,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
    ]
}); 
