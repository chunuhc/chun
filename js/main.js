$(document).ready(function () {
  


  ////// --header/footer載入begin--

  // $('#header').load('./header.html');
  // $('#footer').load('./footer.html');

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
      // console.log(123);
      // console.log($(this).attr('data-href'));
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

  ////// header/footer載入end





  ////// --搜尋 begin--

  var pContent = {
    "UI設計切版": [
      {
        hashtag: ['UI設計', '切版', 'Figma', '\
        Html', 'Css', 'JavaScript'] ,
        title: '線上櫃台功能設計切版',
        href: '#counter01',
        classN: 'inline',
        target: '',
        src: 'img/counter01.webp'
      },
      {
        hashtag: ['UI設計', '切版', 'Xd', '\
        Html', 'Css', 'JavaScript'] ,
        title: '高中段考守護神詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm665/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm02-th.webp'
      },
      {
        hashtag: ['UI設計', '切版', 'Illustrator', '\
        Figma', 'Html', 'Css', 'JavaScript'],
        title: '外交官特考詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm215/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm03-th.webp'
      },
      {
        hashtag: ['UI設計','Illustrator', 'Figma', '\
        Html', 'Css', 'JavaScript'],
        title: '上榜頂大詳細頁設計切版',
        href: 'https://www.tkbgo.com.tw/go_edm/edm220/index.jsp',
        classN: '',
        target: '_blank',
        src: 'img/edm01-th.webp'
      },
      {
        hashtag: ['UI設計','Illustrator', 'Xd'],
        title: '學習歷程檔案詳細頁設計',
        href: '#edm04',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/edm04-th.webp'
      },
      {
        hashtag: ['UI設計', '切版', 'Figma', '\
        Html', 'Css', 'JavaScript'] ,
        title: 'TKBGO會員專區設計切版',
        href: '#member01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/member01.webp'
      },
      {
        hashtag: ['UI設計', '切版', 'Xd', '\
        Html', 'Css', 'JavaScript'] ,
        title: 'TKBGO登入註冊跳窗設計切版',
        href: '#login01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/login01.webp'
      },
      {
        hashtag: ['UI設計', 'Xd'] ,
        title: 'ICAR登入設計',
        href: '#login05',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/login05.webp'
      },
    ],
    "文宣設計": [
      {
        hashtag: ['文宣設計', 'Illustrator', 'Photoshop'],
        title: '記帳士手冊封面',
        href: '#dm03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/dm03.webp'
      },
      {
        hashtag: ['文宣設計', 'Illustrator'],
        title: '文化行政傳單DM',
        href: '#dm01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/dm01-1.webp'
      }
    ],
    "Banner設計": [
      {
        hashtag: ['Banner設計','Illustrator'],
        title: '記帳士優惠Banner',
        href: '#banner01',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner01.webp'
      },
      {
        hashtag: ['Banner設計','Illustrator'],
        title: '銀行招考直播Banner',
        href: '#banner02',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner02.webp'
      },
      {
        hashtag: ['Banner設計', '插畫設計', 'Illustrator'],
        title: '歐恩伊聯名商品Facebook廣告',
        href: '#banner05',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner05.webp'
      }
    ],
    "圖說設計": [
      {
        hashtag: ['圖說設計','Illustrator'],
        title: '高中升學路徑說明圖',
        href: '#banner03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner03.webp'
      },
      {
        hashtag: ['圖說設計','Illustrator'],
        title: '前端必修課程封面圖',
        href: '#banner04',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/banner04.webp'
      }
    ],
    "Logo設計": [
      {
        hashtag: ['Logo設計', 'Illustrator'],
        title: 'DoWell Logo',
        href: '#logo03',
        classN: 'inline cboxElement',
        target: '',
        src: 'img/logo03.webp'
      },
      {
        hashtag: ['Logo設計', 'Illustrator'],
        title: 'VICVIN Logo',
        href: 'img/logo04pdf.pdf',
        classN: '',
        target: '_blank',
        src: 'img/logo04.webp'
      }
    ],
    "插畫設計": [
      {
        hashtag: ['插畫設計','Illustrator'],
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
        hashtag: ['插畫設計','Illustrator'],
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
  // var sBlock = $('.block')[0];

  // for迴圈不能使用匿名函示
  for(var s = 0; s < sTag.length; s++) {

    sTag[s].addEventListener('click', function() {

      if(this.id !== 'allBtn') {
        // console.log('no');
        tagSearch(this.innerText);
      } else {
        // console.log('yes');
        allBlock();
      }
      // console.log(this);
      $(this).addClass('active').siblings().removeClass('active');
      
    });

  }


  // 全部顯示
  function allBlock() {

    html = '';
    sBlock.html(html);

    sArr =  Object.entries(pContent);
    
  
    var str = '';
    for(var i = 0; i < sArr.length; i++) {
      for(var j = 0; j < sArr[i][1].length; j++) {
        str = sArr[i][1][j];
        html += '<a class="'+str.classN+'" href="'+str.href+'" target="'+str.target+'" data-aos="fade-right">'
        html += '<div class="hover"><div class="content">'
        html += '<div class="hashtag">'+str.hashtag+'</div>'
        html += '<div class="title">'+str.title+'</div></div></div>'
        html += '<img class="lazyload" src="img/lazy.svg" data-src="'+str.src+'" alt="'+str.title+'"></a>'
        // str = sArr[i][1][j];
        // var html = `
        //   <a class="${str.classN}" href'"${str.href}" target="${str.target}" data-aos="fade-right">
        //     <div class="hover">
        //       <div class="content">
        //         <div class="hashtag">${str.hashtag}</div>
        //         <div class="title">${str.title}</div>
        //       </div>
        //     </div>
        //     <img class="lazyload" src="img/lazy.svg" data-src="${str.src}" alt="${str.title}">
        //   </a>
        // `
      }
  
    }
    sBlock.html(html);
    loadMore(sArr.length);

    $(".inline").colorbox({
      inline: true, 
      maxWidth: '720px',
      maxHeight: '95%',
      scalePhotos: true,
      photo: true
    });

    $(".inline").colorbox({
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
      html += '<a class="'+sArr[i].classN+'" href="'+sArr[i].href+'" target="'+sArr[i].target+'" data-aos="fade-right">'
      html += '<div class="hover"><div class="content">'
      html += '<div class="hashtag">'+sArr[i].hashtag+'</div>'
      html += '<div class="title">'+sArr[i].title+'</div></div></div>'
      html += '<img class="lazyload" src="img/lazy.svg" data-src="'+sArr[i].src+'" alt="'+sArr[i].title+'"></a>'
    }
      // console.log('1 '+sBlock);
      sBlock.html(html);
      // console.log(sBlock);

      loadMore(sArr.length);

      $(".inline").colorbox({
        inline: true, 
        maxWidth: '720px',
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

  ////// --搜尋 end--

  

  ////// --載入更多內容 begin--

  // var $item = $(".block a");

  function loadMore(count) {

    // console.log(count);
    

    if(count <= 6) {
      $("#moreBtn").text("No More").addClass("null");
    } else {
      $("#moreBtn").text("Load More").removeClass("null");
    }

    
    // if(count <= 6) {
    //   $("#moreBtn").text("No More").addClass("null");
    // } 
    
    // $("#moreBtn").text("Load More").removeClass("null");

    // 顯示前六個
    $('.blockList a').slice(0, 6).css('display', 'block');
    
    // 按下更多再載入四個
    $('#moreBtn').click(function() {
        $('.blockList a:hidden').slice(0, 4).css('display', 'block');
        if($(".blockList a:hidden").length == 0) {
          $("#moreBtn").text("No More").addClass("null");
        }
    })

    // console.log(count);
    

  }

  
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

  ////// --colorbox begin--
  //Examples of how to assign the Colorbox event to elements
  // $(".group1").colorbox({rel:'group1'});
  // $(".group2").colorbox({rel:'group2', transition:"fade"});
  // $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
  // $(".group4").colorbox({rel:'group4', slideshow:true});
  // $(".ajax").colorbox();
  // $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
  // $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
  // $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});

  $(".inline").colorbox({
    inline: true, 
    maxWidth: '720px',
    maxHeight: '95%',
    scalePhotos: true,
    photo: true
  });
  $(".inline").colorbox({
    onOpen: function(){
      $('body').css({ overflow: 'hidden' });
    },
    onClosed: function(){
       $('body').css({ overflow: '' });
    }
  });
  

  // $(".callbacks").colorbox({
  //     onOpen:function(){ alert('onOpen: colorbox is about to open'); },
  //     onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
  //     onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
  //     onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
  //     onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
  // });

  // $('.non-retina').colorbox({rel:'group5', transition:'none'})
  // $('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
  
  // //Example of preserving a JavaScript event for inline calls.
  // $("#click").click(function(){ 
  //     $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
  //     return false;
  // });

  ////// --colorbox end--

  ////// --AOS begin--

  AOS.init();

  ////// --AOS end--


})
