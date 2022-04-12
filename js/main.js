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
  
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
  });

})