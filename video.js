"use strict";

const video = document.querySelector("video.hero");
playVideoOnMouseover();
pauseVideoOnMouseout();

function playVideoOnMouseover() {
  video.addEventListener("mouseover", (e) => {
    e.currentTarget.play();
    e.currentTarget.classList.add("video-mouseover");
  });
}

function pauseVideoOnMouseout() {
  video.addEventListener("mouseout", (e) => {
    e.currentTarget.pause();
    e.currentTarget.classList.remove("video-mouseover");
  });
}
