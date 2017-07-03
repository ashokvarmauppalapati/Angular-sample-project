$(document).ready(function(){
  var windowHeight = window.innerHeight;
  $(".div-pos").css('height', windowHeight);

  $(".menu").on("click", function(){
  	$(".menu").toggleClass("pad");
  });
});