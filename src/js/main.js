
$(document).ready(function(){

  $("#indicator-1").click(function(){
    // console.log("clicked!");
    //reset
    $(".ts-a  .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-a  .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-a  .indicator").removeClass("indicator-on");


    $("#indicator-1").addClass("indicator-on");
    $(".ts-a .curriculum-info:eq(0)").addClass("curriculum-info-selected animated fadeIn");


  });

  $("#indicator-2").click(function(){

    //reset
    $(".ts-a .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-a .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-a .indicator").removeClass("indicator-on");

    $("#indicator-bridge-1").addClass("indicator-bridge-on");
    $("#indicator-1").addClass("indicator-on");
    $("#indicator-2").addClass("indicator-on");
    $(".ts-a .curriculum-info:eq(1)").addClass("curriculum-info-selected animated fadeIn");
  });

  $("#indicator-3").click(function(){

    //reset
    $(".ts-a .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-a .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-a .indicator").removeClass("indicator-on");



    $("#indicator-bridge-1").addClass("indicator-bridge-on");
    $("#indicator-bridge-2").addClass("indicator-bridge-on");
    $("#indicator-1").addClass("indicator-on");
    $("#indicator-2").addClass("indicator-on");
    $("#indicator-3").addClass("indicator-on");
    $(".ts-a .curriculum-info:eq(2)").addClass("curriculum-info-selected animated fadeIn");
  });




  $("#indicator-4").click(function(){
    // console.log("clicked4!");
    //reset
    $(".ts-b .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-b .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-b .indicator").removeClass("indicator-on");


    $("#indicator-4").addClass("indicator-on");
    $(".ts-b .curriculum-info:eq(0)").addClass("curriculum-info-selected animated fadeIn");


  });

  $("#indicator-5").click(function(){
    // console.log("clicked5!");
    //reset
    $(".ts-b .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-b .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-b .indicator").removeClass("indicator-on");


    $("#indicator-bridge-3").addClass("indicator-bridge-on");
    $("#indicator-4").addClass("indicator-on");
    $("#indicator-5").addClass("indicator-on");
    $(".ts-b .curriculum-info:eq(1)").addClass("curriculum-info-selected animated fadeIn");

  });

  $("#indicator-6").click(function(){
    // console.log("clicked6!");
    //reset
    $(".ts-b .curriculum-info").removeClass("curriculum-info-selected");
    $(".ts-b .indicator-bridge").removeClass("indicator-bridge-on");
    $(".ts-b .indicator").removeClass("indicator-on");


    $("#indicator-bridge-3").addClass("indicator-bridge-on");
    $("#indicator-bridge-4").addClass("indicator-bridge-on");
    $("#indicator-4").addClass("indicator-on");
    $("#indicator-5").addClass("indicator-on");
    $("#indicator-6").addClass("indicator-on");
    $(".ts-b .curriculum-info:eq(2)").addClass("curriculum-info-selected animated fadeIn");
  });


//  Nav bar on/off

  $('.section-about-corporation').waypoint(function(direction){
    if(direction === "down"){
      $("nav").addClass("sticky-nav animated slideInDown");
      $("nav .sticky-nav-menu").removeClass("sticky-nav-menu-hide");
      $("nav .sticky-nav-icon").removeClass("sticky-nav-icon-hide");
      $(".logo").attr("src","img/es-logo-single.png")
    } else {
      $("nav").removeClass("sticky-nav animated slideInDown");
      $("nav .sticky-nav-menu").addClass("sticky-nav-menu-hide");
      $("nav .sticky-nav-icon").addClass("sticky-nav-icon-hide");
      $(".logo").attr("src","img/ITC교육_logo_white.png")
    }
  }, {
    offset:'80px'
  })

  /* Mobile Navigation Icon Toggle*/
  $('.js--nav-icon').click(function(){
    var nav = $('.sticky-nav-menu-list');
    var icon = $('.js--nav-icon i');
    if( icon.hasClass("fa-bars")){
      icon.removeClass("fa-bars");
      icon.addClass("fa-times");
      // nav.css("display","block");
    } else {
      icon.removeClass("fa-times");
      icon.addClass("fa-bars");
    }
    nav.slideToggle(200);

  });
  //
  // /* Scroll on Buttons */
  // $('#nav-1').click(function(){
  //   $('html, body').animate({scrollTop: $('.section-about-corporation').offset().top},1000);
  // });
  // $('#nav-2').click(function(){
  //   $('html, body').animate({scrollTop: $('.section-brand').offset().top},1000);
  // });
  // $('#nav-3').click(function(){
  //   $('html, body').animate({scrollTop: $('.section-ts-curriculum').offset().top},1000);
  // });
  // $('#nav-4').click(function(){
  //   $('html, body').animate({scrollTop: $('.section-tc-curriculum').offset().top},1000);
  // });


  /* Navigation Scroll */
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


});



