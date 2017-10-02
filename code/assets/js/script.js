window.onload = function() {
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	var slides = document.getElementsByClassName("slide");
	for (var i in slides) {
		slides[i].style.width = slideshowWidth + "px";
	}
}