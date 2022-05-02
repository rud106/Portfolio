$(function(){
  $('header > h1').animate({'left':'50px','opacity':'1'},1000);
  $('header > .me').delay(300).animate({'left':'50px','opacity':'1'},1000);
  $('.abil').delay(600).animate({'left':'50px','opacity':'1'},1000);
  $('.tell').delay(900).animate({'left':'50px','opacity':'1'},1000);
  $('.swiper').animate({'right':'0px','opacity':'1'},1800);
  $('.shadow img').animate({'bottom':'-10px'},1800);
});
$(function(){
  $('.swiper-slide .detail').click(function(){
    let n = $(this).attr('href'); //변수 선언
    console.log(n);
    
    $('body').before('<div class="c_img"><img src="'+n+'"><i class="fa-solid fa-xmark"></i></div>');
    $('i.fa-xmark').click(function(){
      $('.c_img').hide();
    });
    return false;
  });

});