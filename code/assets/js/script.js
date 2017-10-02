window.onload = function() {

	setInterval(autoChangeSlide, 10000); // Function to change slides on the site

	// Get and change the side of slides by the size of the slideshow class
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	var slides = document.getElementsByClassName("slide");
	for (var i in slides) {
		slides[i].style.width = slideshowWidth + "px";
	}
}

var slideItem = 0;

function autoChangeSlide() {
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	if (slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem ++;
	}

	document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slideshowWidth * slideItem) + "px";
}

function manualChangeSlide(pos) {
	slideItem = pos;
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slideshowWidth * slideItem) + "px";
}