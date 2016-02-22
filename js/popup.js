var link = document.querySelector(".button");
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