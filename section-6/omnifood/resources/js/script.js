$(document).ready(function() {

  /** for Sticky nav */
  $('.js--section-features').waypoints
  
  var waypoint = new Waypoint({
    element: $('.js--section-features'),
    handler: function(direction) {
      if(direction == "down") {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    offset: '6.5%'
  })
  
  /** for scroll on buttons */
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 500)
  });

})