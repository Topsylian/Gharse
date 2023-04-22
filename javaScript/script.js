/*This is service video pause and play video button js*/
const video = document.querySelector("video");
const videoOverlay = document.querySelector(".playbutton");
const playbtn = document.querySelector(".playbutton > button");
const icon = document.querySelector(".playbutton > button > i");

playbtn.addEventListener("click", () => {
  if (icon.getAttribute("class") === "fa-solid fa-play") {
		video.play();
		videoOverlay.style.background = "transparent";
		playbtn.style.background = "rgba(255, 255, 255, 0.3)";
		icon.setAttribute("class", "fa-solid fa-pause");
  } else {
    video.pause();
		icon.setAttribute("class", "fa-solid fa-play");
		videoOverlay.style.background = "rgba(41, 37, 37, 0.5)";
		playbtn.style.background = "rgba(255, 255, 255, 1)";
  }
});
/*and it ends here*/