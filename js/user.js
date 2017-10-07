$(document).ready(function(){

	// Affix Header

	$(window).on("scroll", function(event){
	    var scrollValue = $(window).scrollTop();
	    if (scrollValue == 28 || scrollValue > 28) {
	        $("#header-100d").css({'position': 'fixed', 'top': '0'});
	        $("#header-100").css('marginBottom', '72px');
	        $("#header-100d").addClass('box-shadow');
	    }else {
	        $("#header-100d").css('position', 'relative');
	        $("#header-100").css('marginBottom', '0');
	        $("#header-100d").removeClass('box-shadow');
	    }
	});

	// Fixed Next/Prev

	$(".modal-content-pic").on("scroll", function(event){
		var scrollDown = $(".modal-content-pic").scrollTop();
		var criticalDown = $(".modal-pic").height();
		if (scrollDown < (criticalDown - 180)) {
			$(".scroll-fix").css('top', scrollDown + 'px');
		}
	});

	// Subscribe Button

	$(".subscribe").click(function(){
		$(".sub").toggleClass("sub-active");
		$(".unsub").toggleClass("show");
	});
	// ModalSub
	$(".modal-sub").click(function(){
		$(".sub").toggleClass("sub-active");
		$(".unsub").toggleClass("show");
	});

	// Show and Hide Information


	$("#showall").click(function(){
		$(".info-block").css("height", "100%");
	    $("#hideall").css("display", "block");
	    $("#showall").css("display", "none");
	});
	$("#hideall").click(function(){
		var width = $(window).width();
		width += 17;
		if( width <= 715 ) {
			$(".info-block").css("height", "435px");
		    $("#hideall").css("display", "none");
		    $("#showall").css("display", "block");
		}else {
			$(".info-block").css("height", "285px");
		    $("#hideall").css("display", "none");
		    $("#showall").css("display", "block");
		}
	});
	$(window).resize(function(){
		var width = $(window).width();
		width = width + 17;
		if( width <= 715 ) {
			$(".info-block").css("height", "435px");
		    $("#hideall").css("display", "none");
		    $("#showall").css("display", "block");
		}else {
			$(".info-block").css("height", "285px");
		    $("#hideall").css("display", "none");
		    $("#showall").css("display", "block");
		}
	});

	// Search I/P

	$(".input-potr").on({
		focus: function() {
			$(".search-i").css('color', 'white');
		},
		blur: function() {
			$(".search-i").css('color', '#444');
		}
	});
	$(".input-pred").on({
		focus: function() {
			$(".search-p").css('top', '11px');
		},
		blur: function() {
			$(".search-p").css('top', '9px');
		}
	});

	// Modal Content ShowIn

	$(".overlay-img").click(function(){
		$(".modal-content-pic").css('display', 'block');
		$("body").css({'overflow': 'hidden', 'padding-right': '17px'});
	});
	$(".cancel-btn").click(function(){
		$(".modal-content-pic").css('display', 'none');
		$("body").css({"overflow": "auto", "overflow-x": "hidden", "padding-right": "0px"});
	});

	// Phone Menu

	$(".phone-menu-btn").click(function(){
		// Button
		$(".phone-menu-btn").toggleClass("phone-menu-animate");
		$(".bar1").toggleClass("change1");
		$(".bar2").toggleClass("change2");
		$(".bar3").toggleClass("change3");
		// Menu
		$(".phone").toggleClass("showPhone");
	});
	$(window).resize(function(){
		var width = $(window).width();
		width = width + 17;
		if( width > 1024 ) {
			$(".phone").removeClass("showPhone");
			$(".bar1").removeClass("change1");
			$(".bar2").removeClass("change2");
			$(".bar3").removeClass("change3");
		}
	});

	// Parallax

	$(window).bind("scroll", function(){
		var scrolled = $(window).scrollTop();
		$(".parallax").css("top", (60 - (scrolled * .1)) + "%");
	});

	// More-btn

	$(".more-comments-btn").click(function(){
		$(this).hide();
	});

	// Img Resizer

	var screen = $(window).width();
	screen += 17;
	if (screen <= 1200) {
		var size = $("div.pic").width();
		$("div.pic img").height(size);
	}
	$(window).resize(function(){
			var size = $("div.pic").width();
			$("div.pic img").height(size);
	});

});



/*** ** *   JS   * ** ***/



// Slider

var slideNow = 1;
showDivs(slideNow);
function plusDivs(newSlide) {
    showDivs(slideNow += newSlide);
}
function showDivs(newSlide) {
    var i;
    var slide = document.getElementsByClassName("slide");
    if (newSlide > slide.length) {
    	slideNow = 1
    }
    if (newSlide < 1) {
    	slideNow = slide.length
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[slideNow-1].style.display = "block";
}

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