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
  document.querySelector("section#hero-svg").innerHTML = heroSvgText;
  startDelegator();
}

function startDelegator() {
  addShapesToHtmlObject();
  makeShapesTransparent();
  trackMouseOverOnShapes();
  trackMediaScreenSize();
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
    duration: 4000,
    iterations: 1,
    fill: "forwards",
    easing: "ease-in-out",
    composite: "add",
  };
  const fadeIn_kf = [{ opacity: 0 }, { opacity: 0.7 }, { opacity: 0 }];
  const fadeAnimation = shape.animate(fadeIn_kf, fadeIn_props);
  //   trackMouseOutFromShape(shape, fadeAnimation);
}

function trackMediaScreenSize() {
  const mq1 = window.matchMedia("(max-width: 500px)");
  if (mq1.matches) {
    resizeSvgViewBox("small");
  }
  mq1.addEventListener("change", screenTest);
}

function screenTest(e) {
  if (e.matches) {
    /* the viewport is smaller than mq */
    resizeSvgViewBox("small");
  } else {
    /* the viewport is larger than mq */
    resizeSvgViewBox("large");
  }
}

//resize svg viewbox
function resizeSvgViewBox(size) {
  const svg = document.getElementsByTagName("svg")[0];
  //   svg.setAttribute("viewBox", "290 0 400 700");
  switch (size) {
    case "small":
      svg.setAttribute("viewBox", "370 0 290 545");
      stopTrackingMouseOverOnShapes();
      break;
    case "large":
      svg.setAttribute("viewBox", "0 0 842 545");
      break;
  }
}

function stopTrackingMouseOverOnShapes() {
  console.log("stopTracking");
  HTML.shapes.forEach((shape) => {
    shape.removeEventListener("mouseover", getShape);
  });
}
