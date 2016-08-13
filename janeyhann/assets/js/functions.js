$(function(){
  //bxslider
  $('.bxslider').bxSlider();
  //fancybox
  $(".fancybox").fancybox();

  //menu toggle
  var $navToggle = $(".main-nav-toggle")
        $overlay = $(".overlay")
  $navToggle.on("click", function() {
    $navToggle.toggleClass("menu-click")
    $overlay.toggleClass("overlay-active")
    $("body").toggleClass("fixed")
    $(".opacity-morph").toggleClass("om-active")
  })
});
