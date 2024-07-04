$(function () {
  // // 페이지 이동
  // window.addEventListener(
  //   "wheel",
  //   function (e) {
  //     e.preventDefault();
  //   },
  //   { passive: false }
  // );

  // let $html = $("html");

  // let page = 1;

  // let lastPage = $(".content").length;

  // $html.animate({ scrollTop: 0 }, 10);

  // $(window).on("wheel", function (e) {
  //   if ($html.is(":animated")) return;

  //   if (e.originalEvent.deltaY > 0) {
  //     if (page == lastPage) return;

  //     page++;
  //   } else if (e.originalEvent.deltaY < 0) {
  //     if (page == 1) return;

  //     page--;
  //   }
  //   var posTop = (page - 1) * $(window).height();

  //   $html.animate({ scrollTop: posTop });
  // });

  let baseline = -200;
  let page1 = $("#page1").offset().top + baseline;
  let page2 = $("#page2").offset().top + baseline;
  let page3 = $("#page3").offset().top + baseline;
  let page4 = $("#page4").offset().top + baseline;
  console.log("page1", page1);
  console.log("page2", page2);
  console.log("page3", page3);
  console.log("page4", page4);

  $(window).on("resize", function () {
    let baseline = -200;
    let page1 = $("#page1").offset().top + baseline;
    let page2 = $("#page2").offset().top + baseline;
    let page3 = $("#page3").offset().top + baseline;
    let page4 = $("#page4").offset().top + baseline;

    console.log("page1", page1);
    console.log("page2", page2);
    console.log("page3", page3);
    console.log("page4", page4);
  });

  $(".skill-per").removeClass("animate").css("opacity", "0"); // 초기에 숨김 처리

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll >= page1 && scroll < page2) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(0).addClass("on");
      $("section.page2 .p2_wrap >li:first-child").removeClass("animate");
      $("section.page2 .p2_wrap >li:last-child").removeClass("animate");
    }

    if (scroll >= page2 && scroll < page3) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(1).addClass("on");
      $("section.page2 .p2_wrap > li:first-child").addClass("animate");
      $("section.page2 .p2_wrap > li:last-child").addClass("animate");
    }

    if (scroll >= page3 && scroll < page4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(2).addClass("on");
      $("section.page2 .p2_wrap >li:first-child").removeClass("animate");
      $("section.page2 .p2_wrap >li:last-child").removeClass("animate");
    }

    if (scroll >= page4) {
      $("#navi li").removeClass("on");
      $("#navi li").eq(3).addClass("on");
      $("section.page2 .p2_wrap >li:first-child").removeClass("animate");
      $("section.page2 .p2_wrap >li:last-child").removeClass("animate");
    }
  });

  // ham_wrap
  $(".ham_wrap").on("click", function () {
    $(".ham1").toggleClass("on");
    $(".ham2").toggleClass("none");
    $(".ham3").toggleClass("off");
    $(".ham_wrap div").toggleClass("nomar");
    $("header .hidden").toggleClass("show");
    $(".top").toggleClass("opacity");
  });

  // navi
  $("#navi li").on("click", function () {
    let i = $(this).index();
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
    let move = $("#wrap > div").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: move });
  });

  // 화면크기 줄이면 페이지 제일 위로 올라감
  // $(window).on("resize", function () {
  //   $(this).scrollTop(0);
  // });

  // 모달 열기
  $(".modal-btn").click(function () {
    var modalClass = $(this).data("modal");
    $(".modal-view").hide();
    $("." + modalClass).show();
    $(".modal-bg").show();
    $("body").addClass("modal-open");
  });

  // 모달 닫기
  $(".close_btn, .modal-bg").click(function () {
    $(".modal-view").hide();
    $(".modal-bg").hide();
    $("body").removeClass("modal-open");
  });
});
