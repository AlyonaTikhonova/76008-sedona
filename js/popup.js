var link = document.querySelector(".button");
<<<<<<< HEAD
var popup = document.querySelector(".modal-content");
var form = popup.querySelector("form");
var coming = popup.querySelector("[name=coming-date]");
var departure = popup.querySelector("[name=departure-date]");
link.addEventListener("click", function(event) {
	if (popup.classList.contains("modal-content-show") || popup.classList.contains("modal-error")) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
	} else {
		event.preventDefault();
		popup.classList.add("modal-content-show");
	}
});
form.addEventListener("submit", function(event) {
	if (!coming.value || !departure.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		popup.classList.remove("modal-content-show");
	}
});
=======
		var popup = document.querySelector(".modal-content");
		var coming = popup.querySelector("[name=coming-date]");
		var departure = popup.querySelector("[name=departure-date]");
		var grown = popup.querySelector("[name=grown]");
		var child = popup.querySelector("[name=child]");
		var form = popup.querySelector("form");
		
		link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.toggle("modal-content-show");
		popup.classList.remove("modal-error");
		coming.focus();
		});
		
		form.addEventListener("submit", function(event){
		if (!coming.value || !departure.value || !grown.value || !child.value) {
		event.preventDefault();
		popup.classList.add("modal-error");}
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (popup.classList.contains("modal-content-show")) {
					popup.classList.remove("modal-content-show");
					popup.classList.remove("modal-error");
				}
			}
		});
>>>>>>> origin/master
