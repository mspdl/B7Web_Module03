var slideItem = 0;

window.onload = function() {
	document.getElementsByClassName("guide")[0].style.backgroundColor = "#777";
	setInterval(autoChangeSlide, 4000); // Function to change slides on the site

	// Get and change the side of slides by the size of the slideshow class
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	var slides = document.getElementsByClassName("slide");
	for (var i in slides) {
		slides[i].style.width = slideshowWidth + "px";
	}
}


function autoChangeSlide() {
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	if (slideItem >= 3) {
		document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#CCC';
		slideItem = 0;
		document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#777';
	} else {
		document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#CCC';
		slideItem ++;
	}
	document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#777';
	document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slideshowWidth * slideItem) + "px";
}

function manualChangeSlide(pos) {
	document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#CCC';
	slideItem = pos;
	var slideshowWidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName('guide')[slideItem].style.backgroundColor = '#777';
	document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-" + (slideshowWidth * slideItem) + "px";
}

function toggleMenu() {
	menu = document.getElementById("menu-list");

	if (menu.style.display == "none"){
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}