$(document).ready(function(){

  $(".modal-link").click(function(e){
  	e.preventDefault();
  });

  ///////////////snow
  $.fn.snow();

  $(window).resize(function(){

	clearInterval(intervalDobro); 
	$(".flake").remove(); 
	$.fn.snow();	
  });

});