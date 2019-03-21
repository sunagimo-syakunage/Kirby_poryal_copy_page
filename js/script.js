    $(function() {
    　$('.hamburger-btn').click(function() {
    　　$(this).toggleClass('active');

    　if ($(this).hasClass('active')) {
    　　$('.gnav').addClass('gnav-open');　 //クラスを付与
    　} else {
    　　$('.gnav').removeClass('gnav-open'); //クラスを外す
    　}
    　});
      $(window).scroll(function () {
      if ($(this).scrollTop() > 34) {
      //ボタンの表示方法
          $('.hamburger-btn').addClass('hamburger-btn-not-on-header');
      } else {
      //ボタンの非表示方法
          $('.hamburger-btn').removeClass('hamburger-btn-not-on-header');
      }
      });
    });
