$(function () {

    //toggle_the_nav
  $('.navtoggle').click(function(event) {
    event.preventDefault();
    $('.navtoggle').toggleClass('open');

    //toggle_the_ul
    $('.navigation').toggleClass('active');
  });
});




