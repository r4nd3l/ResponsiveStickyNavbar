// Default DevCorner JavaScript Setting

// Menu toggle-button
$(document).ready(function(){
  $(".menu-icon").on("click", function(){
    $("nav ul").toggleClass("showing");
  })
});

// Scrolling Effect
$(window).on("scroll", function(){
  if($(window).scrollTop()){
    $('nav').addClass('green');
  }else{
    $('nav').removeClass('green');
  }
});
