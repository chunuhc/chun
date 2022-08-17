
// window.onload = function() {

//   var header = document.getElementById('header');
//   var footer = document.getElementById('footer');

//   axios.get('./header.html')
//   .then(function(res) {
//       // load('./header.html')
//       header.innerHTML = res.data;

//       var now = document.getElementsByClassName('navBar');
//       // console.log(now[0].children);
//       var url = window.location.href;



//       // var urlLoca = url.slice(url.indexOf("index"))
//       // console.log(url.indexOf("/",1));

//       // console.log(url.indexOf("index"));
//       // var str = url.slice(22, 23);

//       // console.log(str);
      
//       // switch
      
//       // 篩選標籤顯示圖
//       // 切換瀑布流顯示
      
      
//       // if(now === urlLoca) {
//       //   console.log(yes);
//       // }
      

//   })

//   // axios.get('./footer.html')
//   // .then(function(res) {
//   //   footer.innerHTML = res.data;
//   // })




//   // // 滾動釘選header修改中
//   // var body = document.getElementsByTagName('body');
//   // var headerH = header.offsetHeight();
  
//   // // body.addEventListener('scroll', headerH) {
    
//   // // }

//   // if (body.scrollTop > headerH) {
//   //   document.getElementById('origiHeader').hide();
//   //   document.getElementById('fixedHeader').show();
//   // }




//   // .catch(function(err) {
//   //     console.log(err);
//   // });


//   // $('ul.navBar a').click(function() {
//   //   console.log(this);
    
//   //   this.addClass('active').siblings.removeClass('active');
//   // })




  
//           //   // 點擊切換分頁參考
//           //   $("#parentHTab").each(function () {
//           //     var $li = $("ul.tab li");
//           //     $($li.eq(0).addClass("active").find("a").attr("href"))
//           //         .siblings(".tab-content")
//           //         .hide();

//           //     $li.click(function () {
//           //         $($(this).find("a").attr("href"))
//           //             .show()
//           //             .siblings(".tab-content")
//           //             .hide();

//           //         $(this)
//           //             .addClass("active")
//           //             .siblings(".active")
//           //             .removeClass("active");

//           //         if ($(this).hasClass("myCalendar")) {
//           //             calendar.render();
//           //         };
//           //         return false;
//           //     });
//           // });
// }

$(document).ready(function () {
  


  // header載入begin

  // $('#header').load('./header.html');

  var header = document.getElementById('header');

  axios.get('./header.html')
  .then(function(res) {

      // load('./header.html')
      header.innerHTML = res.data;

      // 點擊切換分頁
      $('.tabLink').click(function() {
        // var $li = $('ul.navBar li a');
        // console.log(123);
        // console.log($(this).attr('data-href'));
        var url = $(this).attr('href');
        
        $(this).addClass('active')
        .parent().siblings().find('a').removeClass('active');
        $(url).fadeIn(1000)
        .siblings('.tabContent').fadeOut(1000);
        return false;
      });

      // 預設值
      $('#allTab').addClass('active')
      .parent().siblings().find('a').removeClass('active');
      $('#allTabContent').fadeIn(1000)
        .siblings('.tabContent').fadeOut(1000);
        return false;
  })


  // header載入end



  // footer載入begin

  $('#footer').load('./footer.html');
 
  // var footer = document.getElementById('footer');

  // axios.get('./footer.html')
  // .then(function(res) {
  //   footer.innerHTML = res.data;
  // })

  // footer載入end



  // // swiper
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


})
