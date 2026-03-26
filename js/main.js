$(document).ready(function () {
  ////// HEADER&FOOTER LOAD begin

  const headerDom = document.querySelector("#header");
  const footerDom = document.querySelector("#footer");

  function headerData() {
    return axios.get("./header.html");
  }

  function footerData() {
    return axios.get("./footer.html");
  }

  axios.all([headerData(), footerData()]).then(
    axios.spread(function (header, footer) {
      headerDom.innerHTML = header.data;
      footerDom.innerHTML = footer.data;

      // 點擊切換分頁
      $(".tabLink").click(function () {
        var url = $(this).attr("href");

        $(this)
          .addClass("active")
          .parent()
          .siblings()
          .find("a")
          .removeClass("active");
        $(url).siblings(".tabContent").fadeOut(500);
        $(url).delay(500).fadeTo(500, 1);
        return false;
      });

      // 預設值
      function resetFun() {
        $("#allTab")
          .addClass("active")
          .parent()
          .siblings()
          .find("a")
          .removeClass("active");
        $("#allTabContent").fadeIn(500).siblings(".tabContent").fadeOut(500);
        return false;
        console.log("reset");
      }
    })
  );

  ////// HEADER&FOOTER LOAD end

  ////// SEARCH begin--

  var portfolioData = {
    UI設計切版: [
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `HTML/CSS/JS 切版實作`,
        href: "https://shopping.gamania.com/act/mall/",
        classN: "",
        target: "_blank",
        src: "img/mall-cover.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `視覺延伸 × UI Layout<br>× 前端切版`,
        href: "https://shopping.gamania.com/act/2025promise/",
        classN: "",
        target: "_blank",
        src: "img/2025promise.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `視覺動態實作<br>× AI輔助程式開發`,
        href: "https://shopping.gamania.com/act/bossdog999/",
        classN: "",
        target: "_blank",
        src: "img/bossdog999.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `視覺動態實作<br>× 前端切版`,
        href: "https://shopping.gamania.com/act/foodyokaianime/",
        classN: "",
        target: "_blank",
        src: "img/foodyokai.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `視覺動態實作<br>× AI輔助程式開發`,
        href: "https://shopping.gamania.com/act/mizuki-luminous/",
        classN: "",
        target: "_blank",
        src: "img/mizuki-luminous.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `視覺動態實作<br>× 前端切版`,
        href: "#playground",
        classN: "inline",
        target: "",
        src: "img/playground-cover.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `視覺動態實作<br>× 前端切版`,
        href: "#acgworld",
        classN: "inline",
        target: "",
        src: "img/acgworld-cover.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `HTML/CSS 切版實作`,
        href: "#sale99",
        classN: "inline",
        target: "",
        src: "img/99sale-cover.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `HTML/CSS 切版實作`,
        href: "#double11-2024",
        classN: "inline",
        target: "",
        src: "img/2024double11-cover.webp",
      },
      {
        hashtag: ["切版", "AI輔助開發"],
        title: `HTML/CSS 切版實作`,
        href: "#double12-2024",
        classN: "inline",
        target: "",
        src: "img/2024double12-cover.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `視覺設計及延伸 × UI Layout<br>× 前端切版`,
        title: `HTML/CSS 切版實作`,
        href: "#2023otaku",
        classN: "inline",
        target: "",
        src: "img/2023otaku-mb-th.webp",
      },
      // tkb
      {
        hashtag: ["UI設計", "切版"],
        title: `線上櫃台功能設計<br>× 前端切版`,
        href: "#counter01",
        classN: "inline",
        target: "",
        src: "img/counter01-th.webp",
      },
      // {
      //   hashtag: ['UI設計', '切版'],
      //   title: '電商活動頁',
      //   href: 'https://www.jollybuy.com/act/acgworld/',
      //   classN: '',
      //   target: '_blank',
      //   src: 'img/jb01.jpg'
      // },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#edm02",
        classN: "inline",
        target: "",
        src: "img/edm02-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#edm03",
        classN: "inline",
        target: "",
        src: "img/edm03-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#edm01",
        classN: "inline",
        target: "",
        src: "img/edm01-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#edm05",
        classN: "inline",
        target: "",
        src: "img/edm05-th.webp",
      },
      {
        hashtag: ["UI設計"],
        title: `UI設計`,
        href: "#edm06",
        classN: "inline",
        target: "",
        src: "img/edm06-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#edm07",
        classN: "inline",
        target: "",
        src: "img/edm07-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "https://www.tkbgo.com.tw/go_edm/edm599/index.jsp",
        classN: "",
        target: "_blank",
        src: "img/edm08-th.webp",
      },
      {
        hashtag: ["UI設計"],
        title: `UI設計`,
        href: "#edm09",
        classN: "inline",
        target: "",
        src: "img/edm09-th.webp",
      },
      {
        hashtag: ["UI設計"],
        title: `UI設計`,
        href: "#edm04",
        classN: "inline cboxElement",
        target: "",
        src: "img/edm04-th.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#member01",
        classN: "inline cboxElement",
        target: "",
        src: "img/member01.webp",
      },
      {
        hashtag: ["UI設計", "切版"],
        title: `UI設計<br>× 切版實作`,
        href: "#login01",
        classN: "inline cboxElement",
        target: "",
        src: "img/login01.webp",
      },
      {
        hashtag: ["UI設計"],
        title: `UI設計`,
        href: "#login05",
        classN: "inline cboxElement",
        target: "",
        src: "img/login05.webp",
      },
    ],
    文宣設計: [
      {
        hashtag: ["文宣設計"],
        title: `手冊封面設計`,
        href: "#dm03",
        classN: "inline cboxElement",
        target: "",
        src: "img/dm03.webp",
      },
      {
        hashtag: ["文宣設計"],
        title: `傳單DM設計`,
        href: "#dm01",
        classN: "inline cboxElement",
        target: "",
        src: "img/dm01-1.webp",
      },
      {
        hashtag: ["文宣設計"],
        title: `教材封面設計`,
        href: "#book01",
        classN: "inline cboxElement",
        target: "",
        src: "img/book01-th.webp",
      },
    ],
    Banner設計: [
      {
        hashtag: ["Banner設計"],
        title: `Banner設計`,
        href: "#banner06",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner06.webp",
      },
      {
        hashtag: ["Banner設計"],
        title: `Banner設計`,
        href: "#banner06",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner07.webp",
      },
      // tkb
      {
        hashtag: ["Banner設計"],
        title: `Instagram貼文設計`,
        href: "#ig04",
        classN: "inline cboxElement",
        target: "",
        src: "img/ig-1080x1350-4-1.webp",
      },
      {
        hashtag: ["Banner設計"],
        title: `Banner設計`,
        href: "#banner01",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner01.webp",
      },
      {
        hashtag: ["Banner設計"],
        title: `Banner設計`,
        href: "#banner02",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner02.webp",
      },
      {
        hashtag: ["Banner設計", "插畫設計"],
        title: `Banner設計<br>× 插畫設計`,
        href: "#banner05",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner05.webp",
      },
    ],
    圖說設計: [
      {
        hashtag: ["圖說設計"],
        title: `說明圖設計`,
        href: "#banner03",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner03.webp",
      },
      {
        hashtag: ["圖說設計"],
        title: `課程封面圖設計`,
        href: "#banner04",
        classN: "inline cboxElement",
        target: "",
        src: "img/banner04.webp",
      },
    ],
    Logo設計: [
      {
        hashtag: ["Logo設計"],
        title: `Logo設計製作`,
        href: "#logo03",
        classN: "inline cboxElement",
        target: "",
        src: "img/logo03.webp",
      },
      {
        hashtag: ["Logo設計"],
        title: `Logo設計<br>× 延伸應用`,
        href: "#vicvin",
        classN: "inline cboxElement",
        target: "_blank",
        src: "img/logo04-th.webp",
      },
    ],
    插畫設計: [
      {
        hashtag: ["插畫設計", "MediBang"],
        title: `電繪練習`,
        href: "#paint02",
        classN: "inline cboxElement",
        target: "",
        src: "img/paint02.webp",
      },
      {
        hashtag: ["插畫設計", "Illustrator"],
        title: `電繪練習`,
        href: "#paint04",
        classN: "inline cboxElement",
        target: "",
        src: "img/paint04.webp",
      },
      {
        hashtag: ["插畫設計", "Illustrator"],
        title: `吉祥物插畫設計`,
        href: "#paint01",
        classN: "inline cboxElement",
        target: "",
        src: "img/paint01.webp",
      },
      {
        hashtag: ["插畫設計", "Illustrator"],
        title: `電繪練習`,
        href: "#paint03",
        classN: "inline cboxElement",
        target: "",
        src: "img/paint03.webp",
      },
    ],
  };

  const searchBar = $(".searchBar:text");
  const portfolioContainer = $(".blockList");
  const categoryButtons = $("#sBtn button");
  let filteredProjects = [];
  let projectCardsHTML = "";

  // for迴圈不能使用匿名函示
  for (
    let buttonIndex = 0;
    buttonIndex < categoryButtons.length;
    buttonIndex++
  ) {
    categoryButtons[buttonIndex].addEventListener("click", function () {
      $(this).addClass("active").siblings().removeClass("active");

      if (this.id !== "allBtn") return tagSearch(this.innerText);
      allBlock();
    });
  }

  // 全部顯示
  function allBlock() {
    projectCardsHTML = "";
    portfolioContainer.html(projectCardsHTML);

    // 存入數組陣列
    filteredProjects = Object.entries(portfolioData);

    let currentProject = "";
    for (
      let categoryIndex = 0;
      categoryIndex < filteredProjects.length;
      categoryIndex++
    ) {
      for (
        let projectIndex = 0;
        projectIndex < filteredProjects[categoryIndex][1].length;
        projectIndex++
      ) {
        currentProject = filteredProjects[categoryIndex][1][projectIndex];
        projectCardsHTML += `
        <a class="${currentProject.classN}" href="${currentProject.href}" target="${currentProject.target}">
          <div class="hover">
            <div class="content">
              <div class="hashtag">${currentProject.hashtag}</div>
              <div class="title">${currentProject.title}</div>
            </div>
          </div>
          <img class="lazyload" src="img/lazy.svg" data-src="${currentProject.src}" alt="${currentProject.title}">
        </a>
        `;
      }
    }
    portfolioContainer.html(projectCardsHTML);
    loadMore($(".blockList a").length);
    // console.log($('.blockList a').length);

    $(".inline").colorbox({
      inline: true,
      maxWidth: "720px",
      width: "95%",
      maxHeight: "95%",
      scalePhotos: true,
      photo: true,
      onOpen: function () {
        $("body").css({ overflow: "hidden" });
      },
      onClosed: function () {
        $("body").css({ overflow: "" });
      },
    });
  }

  allBlock();

  // 按下標籤搜尋顯示
  function tagSearch(categoryName) {
    projectCardsHTML = "";
    portfolioContainer.html(projectCardsHTML);
    filteredProjects = portfolioData[categoryName];

    for (
      let categoryIndex = 0;
      categoryIndex < filteredProjects.length;
      categoryIndex++
    ) {
      projectCardsHTML += `
      <a class="${filteredProjects[categoryIndex].classN}" href="${filteredProjects[categoryIndex].href}" target="${filteredProjects[categoryIndex].target}">
        <div class="hover">
          <div class="content">
            <div class="hashtag">${filteredProjects[categoryIndex].hashtag}</div>
            <div class="title">${filteredProjects[categoryIndex].title}</div>
          </div>
        </div>
        <img class="lazyload" src="img/lazy.svg" data-src="${filteredProjects[categoryIndex].src}" alt="${filteredProjects[categoryIndex].title}">
      </a>
      `;
      // data-aos="fade-right"
    }
    // console.log('1 '+portfolioContainer);
    portfolioContainer.html(projectCardsHTML);
    // console.log(portfolioContainer);

    // loadMore(filteredProjects.length);
    loadMore($(".blockList a").length);

    $(".inline").colorbox({
      inline: true,
      maxWidth: "720px",
      width: "95%",
      maxHeight: "95%",
      scalePhotos: true,
      photo: true,
    });
  }

  // function DomRender() {
  //   html = '';
  //   portfolioContainer.innerHTML = '';
  //   for(let i = 0; i < portfolioData.length; i++) {
  //     html += '<a class="'+portfolioData[i].class+'" href="'+portfolioData[i].href+'">'
  //     html += '<div class="hover"><div class="content">'
  //     html += '<div class="hashtag">'+portfolioData[i].hashtag+'</div>'
  //     html += '<div class="title">'+portfolioData[i].title+'</div></div></div>'
  //     html += '<img src="'+portfolioData[i].src+'" alt="'+portfolioData[i].title+'"></a>'
  //   }

  //   portfolioContainer.innerHTML = html;
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

  function loadMore(totalProjectsCount) {
    // 顯示前17個
    $(".blockList a").slice(0, 17).css("display", "block");

    // 按下更多再載入6個
    $("#moreBtn").click(function () {
      $(".blockList a:hidden").slice(0, 6).css("display", "block");
      if ($(".blockList a:hidden").length === 0) {
        $("#moreBtn").text("No More").addClass("null");
      }
    });

    // 判斷loadmore按鈕
    if (totalProjectsCount <= 17)
      return $("#moreBtn").text("No More").addClass("null");
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
    maxWidth: "720px",
    width: "95%",
    maxHeight: "95%",
    scalePhotos: true,
    photo: true,
    onOpen: function () {
      $("body").css({ overflow: "hidden" });
    },
    onClosed: function () {
      $("body").css({ overflow: "" });
    },
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
});
