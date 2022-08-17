$(document).ready(function () {
  


  ////// --header載入begin--

  // $('#header').load('./header.html');

  var header = document.getElementById('header');

  axios.get('./header.html')
  .then(function(res) {

      header.innerHTML = res.data;


      // 點擊切換分頁
      $('.tabLink').click(function() {
        // console.log(123);
        // console.log($(this).attr('data-href'));
        var url = $(this).attr('href');
        
        $(this).addClass('active')
        .parent().siblings().find('a').removeClass('active');
        // 先隱藏再fadein
        // header sticky
        $(url).parent().find('.tabContent').fadeOut(800, function() {
          $(url).fadeIn(800);
        });
        // $(url).fadeToggle(800);
        
        // function fadeNewNew() {
        //   $(url).fadeIn();
        // }
        return false;
      });



      // // var li = document.getElementById('slideSource');
      // var url = $(this).attr('href');

      // document.getElementsByClassName('tabLink').onclick = function () {
      //   console.log(url);
        
      //   url.classList.toggle('fade');
      //   return false;
      // }

      // 預設值
      function resetFun() {
        $('#allTab').addClass('active')
        .parent().siblings().find('a').removeClass('active');
        $('#allTabContent').fadeIn(500)
          .siblings('.tabContent').fadeOut(500);
          return false;
          console.log('reset');
          
      };

      resetFun();
      

  })


  ////// --header載入end--



  ////// --footer載入begin--

  // $('#footer').load('./footer.html');
 
  var footer = document.getElementById('footer');

  axios.get('./footer.html')
  .then(function(res) {
    footer.innerHTML = res.data;
  })

  ////// footer載入end



  ////// --載入更多內容 begin--

  // var $item = $(".block a");

  $('.block a').slice(0, 4).css('display', 'block');
  
  $('#moreBtn').click(function() {

      $('.block a:hidden').slice(0, 4).css('display', 'block');
      if($(".block a:hidden").length == 0) {
        $("#moreBtn").text("No More").addClass("null");
      }
  })
  
  ////// --載入更多內容 end--



  ////// --swiper begin--

  // var swiper = new Swiper(".swiper-container", {
  //     cssMode: true,
  //     navigation: {
  //         nextEl: ".swiper-button-next",
  //         prevEl: ".swiper-button-prev",
  //     },
  //     pagination: {
  //         el: ".swiper-pagination",
  //     },
  //     mousewheel: true,
  //     keyboard: true,
  //     autoplay: {
  //       delay: 3500,
  //     },
  
  //     observer: true, //修改swiper自己或子元素时，自动初始化swiper
  //     observeParents: true, //修改swiper的父元素时，自动初始化swiper
  // });

  ////// --swiper end--


})
