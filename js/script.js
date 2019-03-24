$(function() {
  $('.hamburger-btn').click(function() {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.gnav').addClass('gnav-open'); //クラスを付与
    } else {
      $('.gnav').removeClass('gnav-open'); //クラスを外す
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 34) {
      //ボタンの表示方法
      $('.hamburger-btn').addClass('hamburger-btn-not-on-header');
    } else {
      //ボタンの非表示方法
      $('.hamburger-btn').removeClass('hamburger-btn-not-on-header');
    }
  });
  $('.top-main-slider-items').slick({
  centerMode: true, //センターモード
  centerPadding: '0', //前後のパディング
  autoplay: true, //オートプレイ
  autoplaySpeed: 5000, //オートプレイの切り替わり時間
  slidesToShow: 1,
  fade: true,
  pauseOnHover: true,
  dots: true,
  arrows: true,
  prevArrow: '<button type="button" class="top-slick-arrow-topics slick-prev-topics"><img src="./media/top/top_left_arrow.png"></button>',
  nextArrow: '<button type="button" class="top-slick-arrow-topics slick-next-topics"><img src="./media/top/top_right_arrow.png"></button>',
  });
});
