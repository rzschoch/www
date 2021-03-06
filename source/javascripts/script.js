$(function() {
  $('.header__introduction__body').fitText(1.2, {minFontSize: '16px', maxFontSize: '48px'});

  $('section').fitVids();

  $('.animation-toggle').hover(
    function () {
      $('.header__item--logo').toggleClass('animating');
    },
    function () {
      $('.header__item--logo').toggleClass('animating');
    }
  );

  $('a[href*=#]').each(function() {
    if($(this).attr('href').indexOf('#') === 0) {
      $(this).on('click', function(e) {
        e.preventDefault();
        var targetOffset = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: targetOffset}, 700);
      });
    }
  });
});
