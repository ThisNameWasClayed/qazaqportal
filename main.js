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
		keypress: function(){
			$(".placeholder").css("top", "-25px");
		},
		blur: function(){
			var op = $("input").val();
			if ( op == "" ) {
				$(".placeholder").css("top", "8px");
			}
		}
	});
	$(".search-btn").on({
		mouseenter: function(){
			setTimeout(function(){
				$(".btn-animate-2").addClass("animateme-2")
			}, 500)
			setTimeout(function(){
				$(".btn-animate-1").addClass("animateme-1")
			}, 500)
			setTimeout(function(){
				$(".search-btn").addClass("box-shadow-animate")
			}, 500)
		},
		mouseleave: function(){
			$(".btn-animate-2").removeClass("animateme-2");
			$(".btn-animate-1").removeClass("animateme-1");
			$(".search-btn").removeClass("box-shadow-animate");
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