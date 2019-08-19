jQuery(document).ready(function($) {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
      $(".home .site-header").addClass("shrink");
    } else {
      $(".home .site-header").removeClass("shrink");
    }
  });
});
