"use strict";

window.addEventListener("DOMContentLoaded", loadSvg);

const HTML = {
  shapes: [],
};

const fills = ["#fff0be", "#ab6461", "#001fd1", "#ffd1ba", "#ff975c", "#496eff", "#ffdfa7", "#f7adad", "#c3baa8", "#527d69", "#8fd8cd"];

async function loadSvg() {
  console.log("DOM loaded");
  const heroSvg = await fetch("assets/img/portfolio_home-page_graphic-03-01.svg");
  const heroSvgText = await heroSvg.text();
  document.querySelector("section#hero").innerHTML = heroSvgText;
  addShapesToHtmlObject();
  makeShapesTransparent();
  trackMouseOverOnShapes();
}

function addShapesToHtmlObject() {
  document.querySelectorAll("g#shapes > *").forEach((shape) => {
    HTML.shapes.push(shape);
  });
}

function makeShapesTransparent() {
  HTML.shapes.forEach((shape) => {
    shape.style.fill = "transparent";
    shape.style.stroke = "transparent";
    shape.style.opacity = "";
  });
}

function trackMouseOverOnShapes() {
  //add eventlistener to groups
  HTML.shapes.forEach((shape) => {
    shape.addEventListener("mouseover", getShape);
  });
}

function getShape() {
  console.log(this);
  addFill(this);
  //   trackMouseOutOnShapes(this)
}

function addFill(shape) {
  shape.style = "";
  animateFadeInOnShape(shape);
  //***take random colour from the fills and colour the shape***
  //   shape.style.fill = fills[Math.floor(Math.random() * 10)];
}

function animateFadeInOnShape(shape) {
  const fadeIn_props = {
    duration: 3000,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in-out",
    composite: "add",
  };
  const fadeIn_kf = [{ opacity: 0 }, { opacity: 1 }];
  const fadeAnimation = shape.animate(fadeIn_kf, fadeIn_props);
  trackMouseOutFromShape(shape, fadeAnimation);
}

function trackMouseOutFromShape(shape, fadeAnimation) {
  shape.addEventListener("mouseout", animateFadeOutOnShape);
  function animateFadeOutOnShape() {
    console.log("mouse left the shape");
    fadeAnimation.pause();
    const fadeCurrentTime = fadeAnimation.currentTime;
    console.log(fadeCurrentTime);
    let currentOpacity;
    if (fadeCurrentTime > 10) {
      currentOpacity = fadeCurrentTime / 3000;
      console.log(currentOpacity);
      const fadeOut_props = {
        duration: fadeCurrentTime,
        iterations: 1,
        fill: "forwards",
        easing: "ease-in-out",
        composite: "add",
      };
      const fadeOut_kf = [{ opacity: currentOpacity }, { opacity: 0 }];
      fadeAnimation.cancel();
      setTimeout(shape.animate(fadeOut_kf, fadeOut_props), 1000);
    }
  }
}
