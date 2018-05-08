$(document).ready(function(){

	$(".card").one("click",function(){
		if ($(this).children('img#bell').length > 0) {
			$(this).append("<p> You clicked on Bell </p>")
		} else if ($(this).children('img#santa').length > 0){
			$(this).append("<p> You clicked on Santa</p>")
		} else {
			$(this).append("<p> You clicked on Box</p>")
		}
	})


	$(".card2").on("click",function(){
		if ($(this).children('img#santa').length > 0) {
			$(this).fadeOut();
		}
	})
})
