

$(document).ready(function() {
  $(".slick-slider").slick({
    slidesToShow: 1,
    infinite:true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
  
  });

  $('.slick-slide[data-slick-index="0"] .animated-text').addClass('slideDown');
    $('.slick-slide[data-slick-index="0"] .logopic').addClass('logo');

  // Add animation to active slide on after change
  $('.slick-slider').on('afterChange', function(event, slick, currentSlide) {
    // Find all animated text elements in the current slide and add the animation class
    $('.slick-slide[data-slick-index="' + currentSlide + '"] .animated-text').addClass('slideDown');
    $('.slick-slide[data-slick-index="' + currentSlide + '"] .logopic').addClass('logo');
  });

  // Remove animation class from all slides before changing slide
  $('.slick-slider').on('beforeChange', function(event, slick, currentSlide) {
    $('.animated-text').removeClass('slideDown');
    $('.logopic').removeClass('logo');
  });
});


$(".nurse1").tilt({
  glare: true,
  maxGlare: 0.75,
  scale: 1
});


