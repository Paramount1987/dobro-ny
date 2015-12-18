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

/////////////////////////////////////
// function textb(str){
//     str = str.trim();
//     var words = str.split(' ');

//     for(var i = 0; i < words.length - 1; i++){
//         if( words[i].length <  3 ){
//             words[i] = words[i] + "\u00A0";
//         }else{
//         	words[i] += " ";
//         }
//     }

//     return str = words.join("");

// };





// var topText = $(".top-text .center-text").text();
// $(".top-text .center-text").text(textb(topText));



});