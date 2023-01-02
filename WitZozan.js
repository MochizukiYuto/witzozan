$(function() {
  $('.nav_toggle').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
  });
  $('.nav_menu_li').click(function() {
    $('.nav_toggle.show, .nav.show').removeClass('show');
  });
});