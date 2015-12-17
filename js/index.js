$(document).ready(function(){

  $(".modal-link").click(function(e){
  	e.preventDefault();
  });

///////////////////////////////modal
$('.modal').on('show.bs.modal', function (e) {

	var self = $(this);

	setTimeout(function(){
		 self.find("[autofocus]").focus();
		},500);

   
});

  ///////////////snow
 //  $.fn.snow();

 //  $(window).resize(function(){

	// clearInterval(intervalDobro); 
	// $(".flake").remove(); 
	// $.fn.snow();	
 //  });

});