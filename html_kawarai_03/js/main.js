// jsを記述する際はここに記載していく
$(function(){
  $('.slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: '30%'
  });
});

	
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
      e.preventDefault();
      url = $(this).attr('href');
      if (url !== '') {
          $('body').addClass('is_remove');
          setTimeout(function () {
              window.location = url;
          }, 1000);
      }
      return false;
  });
});