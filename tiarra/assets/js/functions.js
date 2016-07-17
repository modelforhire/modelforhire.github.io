$(function (){
  navClick();
  sliderReveal();
  videoPlay();
});

function navClick() {
  var $navClick = $(".nav-toggle")
        $pageWrap = $(".page-wrap")
        $sideBar = $(".sidebar");
  $navClick.on("click", function () {
    $navClick.toggleClass("nav-active");
    $sideBar.toggleClass("sidebar-active");
    $pageWrap.toggleClass("page-wrap-active");

    if ($pageWrap.hasClass("page-wrap-active")){
      $("body").addClass("fixed");
    } else {
      $("body").removeClass("fixed");
    }

  })
}

function sliderReveal() {
  $(".slider-controls a").on("click", function () {
        var $this = $(this),
          $heroImg = $(".hero-img"),
          $heroImgPic = $(".hero-img img")
          curReveal = $heroImg.find(".reveal"),
          position = $heroImg.children().index(curReveal),
          imgNum = $heroImgPic.length;

        if ($this.hasClass("next")) {
          if ( position < imgNum -1 ) {
            curReveal.removeClass("reveal");
            curReveal.next().addClass("reveal");
          } else {
            curReveal.removeClass("reveal");
            $heroImgPic.first().addClass("reveal")
          }
        } else {
          if (position != 0 ) {
            curReveal.removeClass("reveal");
            curReveal.prev().addClass("reveal");
          } else {
            curReveal.removeClass("reveal");
            $heroImgPic.last().addClass("reveal");
          }
        }


  })

}

function videoPlay() {
  var video = document.getElementById('video');
  video.play();
}
