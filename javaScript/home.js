const backgroundMode = document.querySelector(".light-mode");
const modeIcon = document.querySelector("p.light-mode > i");
const body = document.querySelector("body");

function changeDark() {
	if (body.classList.contains("dark")) {
		body.classList.remove("dark");
		localStorage.setItem("theme", "light");
		modeIcon.setAttribute("class", "fa-solid fa-moon");
		modeIcon.style.color = "var(--black)";
	} else {
		body.classList.add("dark");
		localStorage.setItem("theme", "dark");
		modeIcon.setAttribute("class", "fa-solid fa-sun");
		modeIcon.style.color = "var(--input-orange-color)";
	}
}

if (localStorage.getItem("theme") === "dark") {
	body.classList.add("dark");
	modeIcon.setAttribute("class", "fa-solid fa-sun");
}

backgroundMode.addEventListener("click", changeDark);