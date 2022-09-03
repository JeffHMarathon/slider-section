$(document).ready(function(){
    $('.testimonial-slider').slick({
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              breakpoint: 989,
              settings: {
                 slidesToShow: 2
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1
              }
            }
          ]        

    });
  });