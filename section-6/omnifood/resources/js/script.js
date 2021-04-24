$(document).ready(function () {
  /** for Sticky nav */
  $(".js--section-features").waypoints;

  var stickyNav = new Waypoint({
    element: $(".js--section-features"),
    handler: function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "6.5%",
  });

  /** for scroll on buttons */
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      500
    );
  });

  /** Animations on scroll */
  var animateFeatures = new Waypoint({
    element: $(".js--wp-1"),
    handler: function (direction) {
      $(".js--wp-1").addClass("animate__animated");
      $(".js--wp-1").addClass("animate__fadeIn");
    },
    offset: "60%",
  });

  var animatePhone = new Waypoint({
    element: $(".js--wp-2"),
    handler: function (direction) {
      $(".js--wp-2").addClass("animate__animated");
      $(".js--wp-2").addClass("animate__fadeInUp");
    },
    offset: "50%"
  });

  var animateCities = new Waypoint({
    element: $(".js--wp-3"),
    handler: function(direction) {
      $(".js--wp-3").addClass("animate__animated");
      $(".js--wp-3").addClass("animate__fadeIn");
    },
    offset: "60%"
  });

  var animatePremiumPlan = new Waypoint({
    element: $(".js--wp-4"),
    handler: function(direction) {
      $(".js--wp-4").addClass("animate__animated");
      $(".js--wp-4").addClass("animate__pulse");
    },
    offset: "60%"
  })
});
