
$(document).ready(function(){
  $("div").click(function(){
    console.log("div clicked!");
  });

  $("#indicator-1").click(function(){
    console.log("clicked!");
    $(".curriculum-info").removeClass("curriculum-info-selected");
    $(".curriculum-info:eq(0)").addClass("curriculum-info-selected");
  });

  $("#indicator-2").click(function(){
    $(".curriculum-info").removeClass("curriculum-info-selected");
    $(".curriculum-info:eq(1)").addClass("curriculum-info-selected");
  });

  $("#indicator-3").click(function(){
    $(".curriculum-info").removeClass("curriculum-info-selected");
    $(".curriculum-info:eq(2)").addClass("curriculum-info-selected");
  });

});
