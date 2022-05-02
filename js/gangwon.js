(function(){

  let cnt=0;
  const slideWrap = $('.slide-wrap');
  const n = 3-1;

  function mainSlide(){
    slideWrap.stop().animate({left:`${-100*cnt}%`},600,function(){
      cnt>n ? cnt=0 : cnt;
      slideWrap.stop().animate({left:`${-100*cnt}%`},0)
    });
  }

  function nextCount(){
    cnt++;
    mainSlide();
  }

  function autoTimer(){
    setId=setInterval(nextCount,3000);
  }
  autoTimer();

  //첫 번째 방식
  // $('.main-btn').mouseenter(function(){
  //   $('.sub').stop().slideUp(0);
  //   $(this).next().stop().slideDown(200);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // })

  //두 번째 방식
  // $('.main-btn').on('mouseenter',function(){
  //   $('.sub').stop().slideUp(0);
  //   $(this).next().stop().slideDown(200);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // });

  //객체(Object) 형식의 이벤트(세 번째 방식)
  $('.main-btn').on({
    mouseenter:function(){
      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(200);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    },
    focusin:function(){
      $('.sub').stop().slideUp(0);
      $(this).next().stop().slideDown(200);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });

  //객체(Object) 형식의 이벤트 ES5
  // $('.main-btn').on({
  //   mouseenter:function(){

  //   },
  //   focusIn:function(){

  //   }
  // });

  //객체(Object) 형식의 이벤트 ES6
  // $('.main-btn').on({
  //   mouseenter(){

  //   },
  //   focusIn(){

  //   }
  // });




  $('#nav').mouseleave(function(){
    $('.sub').stop().slideUp(200,function(){
    $('.main-btn').delay(800).removeClass('on');
    });
  });

  $('.gallery-btn').click(function(){
    $('.notice-btn').addClass('on');
    $('.gallery-btn').addClass('on');
    $('.notice-box').addClass('on');
    $('.gallery-box').addClass('on');
  })

  $('.notice-btn').click(function(){
    $('.notice-btn').removeClass('on');
    $('.gallery-btn').removeClass('on');
    $('.notice-box').removeClass('on');
    $('.gallery-box').removeClass('on');
  })
  
  $('.link-btn').click(function(){
    $('#modal').stop().fadeIn(300);
  })

  $('.close-btn').click(function(){
    $('#modal').stop().fadeOut(0);
  })

  // 접근성:포커스
  // $('.main-btn').focusIn(function(){
  //   $('.sub').stop().fadeOut(0);
  //   $(this).next().stop().fadeIn(200);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
  // })

})(jQuery);