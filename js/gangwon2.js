(function($){
  // 객체(Object) 형식의 이벤트
 $('.main-btn').on({
     mouseenter: function(){    //마우스 접근성
       $('.sub').stop().fadeOut(0);
       $(this).next().stop().fadeIn(300);
   
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
     },
     focusin: function(){   //탭키 접근성(필수 입력)
       $('.sub').stop().fadeOut(0);
       $(this).next().stop().fadeIn(300);
   
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
     }
 });


 $('#nav').on({
   mouseleave:function(){
     $('.sub').stop().fadeOut(300);
     $('.main-btn').removeClass('on');
   }
 });



 //메인슬라이드
 let cnt=0;
 const slideWrap = $('.slide-wrap');
 const n = 3;  //전체슬라이드 갯수


 // 1. 메인슬라이드함수
 function mainSlide(){
   slideWrap.animate({left: `${-100*cnt}%` }, 600, function(){
     cnt>n-1?cnt=0:cnt;
     slideWrap.animate({left: `${-100*cnt}%` }, 0);
   })
 }

 // 2. 다음카운트함수
 function nextCount(){
   cnt++;
   mainSlide();
 }

 // 3. 자동타이머함수
 function autoTimer(){
   setInterval(nextCount, 3000);
 }
 autoTimer();

 //공지사항 & 갤러리 탭메뉴 클릭 이벤트
 // 갤러리버튼 클릭
 $('.gallery-btn').on({
     click: function(){
       $('.notice-btn').addClass('on');
       $('.gallery-btn').addClass('on');
       $('.notice-box').addClass('on');
       $('.gallery-box').addClass('on');
     }
 });

 // 공지사항버튼 클릭
 $('.notice-btn').on({
     click: function(){
       $('.notice-btn').removeClass('on');
       $('.gallery-btn').removeClass('on');
       $('.notice-box').removeClass('on');
       $('.gallery-box').removeClass('on');
     }
 });


 // 레이어팝업창 
 $('.link-btn').on({
     click: function(){
       $('#modal').stop().fadeIn(300);
     }
 });


 // 닫기
 $('.close-btn').on({
     click: function(){
       $('#modal').stop().fadeOut(300);
     }
 });




})(jQuery);