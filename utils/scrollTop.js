let scrollTop = document.querySelector(".scrollTop");

function scroll() {
	if (window.scrollY > innerHeight / 2) {
		scrollTop.style.visibility = "visible";
	} else {
		scrollTop.style.visibility = "hidden";
	}
}

document.addEventListener("scroll", scroll);

function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

scrollTop.addEventListener("click", scrollToTop);

//---------------------------------------------
