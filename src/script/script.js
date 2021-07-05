$(document).ready(function () {
  $("#yt__play").click(function () {
    // $(this).parent().children()[0].src += "&autoplay=1";
    $(".ytplayer").append(
      $(
        '<iframe class="lazyload" src="https://www.youtube.com/embed/nxGWjdBuBbQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>'
      )
    );
    $("iframe").height($(".yt__preview").height());
    $("iframe").width($(".yt__preview").width());
    $(".yt__preview").hide();
    $(".ytplayer").addClass("active");
    setTimeout(() => {
      $(this).hide();
    }, 500);
  });
  //tabs
  $("ul.tabs-process__list").on("click", "li:not(.active)", function () {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.tabs-process")
      .find("div.tabs-process__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
  $("div.list-questions__status").on("click", function () {
    $("li.list-questions__item.active").removeClass("active");
    $(this).closest("li.list-questions__item").toggleClass("active");
  });

  //SLICK
  $(".list-feedback").slick({
    infinity: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: false,
    prevArrow: '<button type="button" class="list-feedback__prev"></button>',
    nextArrow: '<button type="button" class="list-feedback__next"></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //popup
  $("#header-menu").click(function () {
    $(this).toggleClass("open");
    $("#drop-menu").toggleClass("open");
  });
  $(".header-language").click(function () {
    $(this).toggleClass("active");
  });
  $(".right-header__registration, .result__button").click(function (e) {
    e.preventDefault();
    $(".popup").addClass("active");
    $(".popup__overlay").css("display", "block").animate({ opacity: 0.5 }, 400);
    $(".popup__body")
      .css("display", "block")
      .delay(600)
      .animate({ top: "40%", opacity: 1 }, 400);
    // $("html").addClass("overflow");
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var popup = $(".popup__overlay"); // тут указываем ID элемента
    if (
      $(".popup__cross").is(e.target) ||
      (popup.is(e.target) && // если клик был не по нашему блоку
        popup.has(e.target).length === 0)
    ) {
      // $("html").removeClass("overflow");
      setTimeout(() => {
        $(".popup").removeClass("active");
      }, 1200);
      $(".popup__overlay").delay(400).animate({ opacity: 0 }, 800);
      $(".popup__body").delay(200).animate({ top: "20%", opacity: 0 }, 400);
    }
  });
  //course
  $(".course .course__link").click(function () {
    let link = $(this).attr("href");
    $(this).attr("target") ? window.open(link) : (window.location.href = link);
  });
});
