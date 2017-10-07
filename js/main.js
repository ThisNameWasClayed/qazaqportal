$(document).ready(function(){

	// Bg-slidershow

	$("#slideshow > div:gt(0)").hide();
	setInterval(function() {
		$("#slideshow > div:first").fadeOut(3000).next().fadeIn(2000).end().appendTo('#slideshow');
	}, 7000);

	// Animation

	$(".animation-bar").css("width", "100%");
	$(".placeholder").css("bottom", "12px");
	$(".note-p").css({"bottom": "-24px", "color": "white"});
	$("input").on({
		focus: function(){
			$(".placeholder").css("top", "-25px");
		},
		blur: function(){
			$(".placeholder").css("top", "8px");
		}
	});

});



/*** ** *   JS   * ** ***/



// Accardion

var acc = document.getElementsByClassName("accardion-btn");
var btn = document.getElementsByClassName("pred-accardion-btn");
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
    var panel = this.nextElementSibling;
	    if (panel.style.maxHeight) {
	    	panel.style.maxHeight = null;
	    } else {
	    	panel.style.maxHeight = panel.scrollHeight + "px";
	    }
	}
}