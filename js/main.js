$(document).ready(function () {

  ////// HEADER&FOOTER LOAD begin

  var headerDom = document.getElementById('header');
  var footerDom = document.getElementById('footer');

  function headerData() {
    return axios.get('./header.html');
  }

  function footerData() {
    return axios.get('./footer.html');
  }

  axios.all([headerData(), footerData()])
  .then(axios.spread(function (header, footer) {
    
    headerDom.innerHTML = header.data;
    footerDom.innerHTML = footer.data;
    
    // 點擊切換分頁
    $('.tabLink').click(function() {
      var url = $(this).attr('href');
      
      $(this).addClass('active')
      .parent().siblings().find('a').removeClass('active');
      $(url).siblings('.tabContent').fadeOut(500);
      $(url).delay(500).fadeTo(500, 1);
      return false;
    });

    // 預設值
    function resetFun() {
      $('#allTab').addClass('active')
      .parent().siblings().find('a').removeClass('active');
      $('#allTabContent').fadeIn(500)
        .siblings('.tabContent').fadeOut(500);
        return false;
        console.log('reset');
        
    };

  }));

  ////// HEADER&FOOTER LOAD end





  ////// SEARCH begin--

  var pContent = {
    "UI設計切版": [
      {
        hashtag: ['UI設計', '切版'],
        title: '線上櫃台功能設計切版',
        href: '#counter01',
        classN: 'inline',
        target: '',
        src: 'img/counter01-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '高中段考詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm665/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm02-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '外交官特考詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm215/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm03-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '上榜頂大詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm220/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm01-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '中鋼行銷頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm178/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm05-th.webp'
      },
      {
        hashtag: ['UI設計'],
        title: '放洋留遊學詳細頁設計',
        href: '#edm06',
        classN: 'inline',
        target: '',
        src: 'img/edm06-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '商用日文詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm615/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm07-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'],
        title: '銀行短衝詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm599/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm08-th.webp'
      },
      {
        hashtag: ['UI設計'],
        title: '國營聯招詳細頁設計',
        href: '#edm09',
        classN: 'inline',
        target: '',
        src: 'img/edm09-th.webp'
      },
      {
        hashtag: ['UI設計'],
        title: '學習歷程檔案詳細頁設計',
        href: '#edm04',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/edm04-th.webp'
      },
      {
        hashtag: ['UI設計', '切版'] ,
        title: '會員專區設計切版',
        href: '#member01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/member01.webp'
      },
      {
        hashtag: ['UI設計', '切版'] ,
        title: '登入註冊跳窗設計切版',
        href: '#login01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/login01.webp'
      },
      {
        hashtag: ['UI設計'] ,
        title: 'ICAR登入設計',
        href: '#login05',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/login05.webp'
      },
    ],
    "文宣設計": [
      {
        hashtag: ['文宣設計'],
        title: '記帳士手冊封面',
        href: '#dm03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/dm03.webp'
      },
      {
        hashtag: ['文宣設計'],
        title: '文化行政傳單DM',
        href: '#dm01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/dm01-1.webp'
      },
      {
        hashtag: ['文宣設計'],
        title: '記帳士教材封面',
        href: '#book01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/book01-th.webp'
      }
    ],
    "Banner設計": [
      {
        hashtag: ['Banner設計'],
        title: '記帳士優惠Banner',
        href: '#banner01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner01.webp'
      },
      {
        hashtag: ['Banner設計'],
        title: '銀行招考直播Banner',
        href: '#banner02',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner02.webp'
      },
      {
        hashtag: ['Banner設計', '插畫設計'],
        title: '歐恩伊聯名商品Facebook廣告',
        href: '#banner05',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner05.webp'
      }
    ],
    "圖說設計": [
      {
        hashtag: ['圖說設計'],
        title: '高中升學路徑說明圖',
        href: '#banner03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner03.webp'
      },
      {
        hashtag: ['圖說設計'],
        title: '前端必修課程封面圖',
        href: '#banner04',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner04.webp'
      }
    ],
    "Logo設計": [
      {
        hashtag: ['Logo設計'],
        title: 'DoWell Logo',
        href: '#logo03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/logo03.webp'
      },
      {
        hashtag: ['Logo設計'],
        title: 'VICVIN Logo',
        href: 'img/logo04pdf.pdf',
        classN: '',
        target: '_blank',
        src: 'img/logo04-th.webp'
      }
    ],
    "插畫設計": [
      {
        hashtag: ['插畫設計'],
        title: 'TKB日文柴犬',
        href: '#paint01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/paint01.webp'
      },
      {
        hashtag: ['插畫設計','MediBang'],
        title: '博美犬插畫練習',
        href: '#paint02',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/paint02.webp'
      },
      {
        hashtag: ['插畫設計'],
        title: '米克斯插畫練習',
        href: '#paint03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/paint03.webp'
      }
    ]
  }

  var searchBar = $('.searchBar:text');
  var sBlock = $('.blockList');
  var sTag = $('#sBtn button');
  var sArr = [];
  var html = '';

  // for迴圈不能使用匿名函示
  for(var s = 0; s < sTag.length; s++) {

    sTag[s].addEventListener('click', function() {

      $(this).addClass('active').siblings().removeClass('active');

      if(this.id !== 'allBtn') return tagSearch(this.innerText);
      allBlock();
      
    });

  }


  // 全部顯示
  function allBlock() {

    html = '';
    sBlock.html(html);

    // 存入數組陣列
    sArr =  Object.entries(pContent);
    
    var str = '';
    for(var i = 0; i < sArr.length; i++) {
      for(var j = 0; j < sArr[i][1].length; j++) {
        str = sArr[i][1][j];
        html += 
        `
        <a class="${str.classN}" href="${str.href}" target="${str.target}">
          <div class="hover">
            <div class="content">
              <div class="hashtag">${str.hashtag}</div>
              <div class="title">${str.title}</div>
            </div>
          </div>
          <img class="lazyload" src="img/lazy.svg" data-src="${str.src}" alt="${str.title}">
        </a>
        `
      }
  
    }
    sBlock.html(html);
    loadMore($('.blockList a').length);
    // console.log($('.blockList a').length);
    

    $(".inline").colorbox({
      inline: true, 
      maxWidth: '720px',
      width: '95%',
      maxHeight: '95%',
      scalePhotos: true,
      photo: true,
      onOpen: function(){
        $('body').css({ overflow: 'hidden' });
      },
      onClosed: function(){
        $('body').css({ overflow: '' });
      }
    });
    
  }

  allBlock();

  
  // 按下標籤搜尋顯示
  function tagSearch(sText) {

    html = '';
    sBlock.html(html);
    sArr = pContent[sText];
    
    
    for(var i = 0; i < sArr.length; i++) {
      html += 
      `
      <a class="${sArr[i].classN}" href="${sArr[i].href}" target="${sArr[i].target}">
        <div class="hover">
          <div class="content">
            <div class="hashtag">${sArr[i].hashtag}</div>
            <div class="title">${sArr[i].title}</div>
          </div>
        </div>
        <img class="lazyload" src="img/lazy.svg" data-src="${sArr[i].src}" alt="${sArr[i].title}">
      </a>
      `
      // data-aos="fade-right"
    }
      // console.log('1 '+sBlock);
      sBlock.html(html);
      // console.log(sBlock);

      // loadMore(sArr.length);
      loadMore($('.blockList a').length);

      $(".inline").colorbox({
        inline: true, 
        maxWidth: '720px',
        width: '95%',
        maxHeight: '95%', 
        scalePhotos: true,
        photo: true
      });
      
  }

  var keyword = '';
  var sHtml = '';

  // function DomRender() {
  //   html = '';
  //   sBlock.innerHTML = '';
  //   for(i = 0; i < pContent.length; i++) {
  //     html += '<a class="'+pContent[i].class+'" href="'+pContent[i].href+'">'
  //     html += '<div class="hover"><div class="content">'
  //     html += '<div class="hashtag">'+pContent[i].hashtag+'</div>'
  //     html += '<div class="title">'+pContent[i].title+'</div></div></div>'
  //     html += '<img src="'+pContent[i].src+'" alt="'+pContent[i].title+'"></a>'
  //   }

  //   sBlock.innerHTML = html;
  // }
  // DomRender();

  // <a class="inline" href="#logo01">
  //     <div class="hover">
  //         <div class="content">
  //             <div class="hashtag">#Logo設計 #Illustrator</div>
  //             <div class="title">DoWell Logo</div>
  //         </div>
  //     </div>
  //     <img src="img/logo01.webp" alt="DOWELL LOGO">
  // </a>

  // $(sBtn).keyUp(function(e) {
  //   if(e.keyCode !== 13) return;
  //   if(this.value === '') return console.log('null');
    
  //   if(this.value !== keyword) {
  //     resetData();
  //   }

  //   keyword = this.value;
  //   function searchTag(keyword) {
  //     console.log(123);
      
  //   }
  // })

  ////// SEARCH end

  

  ////// LOADMORE begin

  // var count = $('.blockList a').length;

  function loadMore(count) {

    // 顯示前六個
    $('.blockList a').slice(0, 12).css('display', 'block');
    
    // 按下更多再載入四個
    $('#moreBtn').click(function() {
      $('.blockList a:hidden').slice(0, 4).css('display', 'block');
      if($(".blockList a:hidden").length === 0) {
        $("#moreBtn").text("No More").addClass("null");
      } 
    })

    // 判斷loadmore按鈕
    if(count <= 12) return $("#moreBtn").text("No More").addClass("null");
    $("#moreBtn").text("Load More").removeClass("null");

  }

  
  ////// LOADMORE end



  ////// SWIPER begin

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

  ////// SWIPER end

  ////// COLORBOX begin
  //Examples of how to assign the Colorbox event to elements

  $(".inline").colorbox({
    inline: true, 
    maxWidth: '720px',
    width: '95%',
    maxHeight: '95%',
    scalePhotos: true,
    photo: true,
    onOpen: function(){
      $('body').css({ overflow: 'hidden' });
    },
    onClosed: function(){
       $('body').css({ overflow: '' });
    }
  });

  ////// COLORBOX end

  ////// AOS begin

  AOS.init();

  ////// AOS end



  //// ex.
  // check(function() {
  //   // callback執行內容
  // })
  // function check(callback) {
  //   // 內容1
  //   callback();
  // }


})
