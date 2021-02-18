
jQuery(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
    //100pxスクロールしたら表示
      if ($(this).scrollTop() > 100) {  
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
    //0.5秒かけてトップへ移動
      $('body,html').animate({
          scrollTop: 0
      }, 500); 
      return false;
  });
});