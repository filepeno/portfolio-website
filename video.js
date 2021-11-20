"use strict";
playVideoOnMouseover();
pauseVideoOnMouseout();

function playVideoOnMouseover() {
  document.querySelector("video.hero").addEventListener("mouseover", (e) => {
    e.currentTarget.play();
  });
}

function pauseVideoOnMouseout() {
  document.querySelector("video.hero").addEventListener("mouseout", (e) => {
    e.currentTarget.pause();
  });
}
