
window.onload = function() {

  var header = document.getElementById('header');
  var footer = document.getElementById('footer');

  axios.get('./header.html')
  .then(function(res) {
      // load('./header.html')
      header.innerHTML = res.data;

      var now = document.getElementsByClassName('navBar');
      console.log(now[0].children);
      var url = window.location.href;
      // var urlLoca = url.slice(url.indexOf("index"))
      // console.log(url.indexOf("/",1));

      // console.log(url.indexOf("index"));
      // var str = url.slice(22, 23);

      // console.log(str);
      
      // switch
      
      // 篩選標籤顯示圖
      // 切換瀑布流顯示
      
      
      // if(now === urlLoca) {
      //   console.log(yes);
      // }
      
  })

  axios.get('./footer.html')
  .then(function(res) {
    footer.innerHTML = res.data;
  })

  var body = document.getElementsByTagName('body');
  var headerH = header.offsetHeight();
  
  // body.addEventListener('scroll', headerH) {
    
  // }

  if (body.scrollTop > headerH) {
    document.getElementById('origiHeader').hide();
    document.getElementById('fixedHeader').show();
  }

  // .catch(function(err) {
  //     console.log(err);
  // });


  // $('ul.navBar a').click(function() {
  //   console.log(this);
    
  //   this.addClass('active').siblings.removeClass('active');
  // })
}

$(document).ready(function () {

  var swiper = new Swiper(".swiper-container", {
      cssMode: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      pagination: {
          el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
      autoplay: {
        delay: 3500,
      },
  
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
  });

})