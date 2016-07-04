$(function NavClick(){
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
});
