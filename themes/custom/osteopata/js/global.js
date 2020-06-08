/**
 * @file
 * Global utilities.
 *
 */
(function($, Drupal) {

  'use strict';

  // Drupal.behaviors.bootstrap_barrio_subtheme = {
  //  attach: function(context, settings) {

  //  }
  // };
  // $('.loop').on('initialized.owl.carousel translate.owl.carousel', function(e) {
  //  idx = e.item.index;
  //  $('.owl-item.big').removeClass('big');
  //  $('.owl-item.medium').removeClass('medium');
  //  $('.owl-item').eq(idx).addClass('big');
  //  $('.owl-item').eq(idx - 1).addClass('medium');
  //  $('.owl-item').eq(idx + 1).addClass('medium');
  // });
  $(".services-grid .grid-item").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  $('.loop').owlCarousel({
    center: true,
    loop: true,
    //autoplay: false,
    autoPlay: 3000,
    dots: true,
    navText: ['', ''],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: false
      },
      900: {
        items: 3,
        nav: true
      }
    }

  })
  // Mobile Nav
  $(document).ready(function() {
    $('.nav-button').click(function() {
      $('body').toggleClass('nav-open');
    });
  });
})(jQuery, Drupal);
