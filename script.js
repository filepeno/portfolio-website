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
  trackHoverOnShapes();
}

function addShapesToHtmlObject() {
  document.querySelectorAll("g#shapes > *").forEach((shape) => {
    HTML.shapes.push(shape);
  });
  console.log(HTML.shapes);
}

function makeShapesTransparent() {
  HTML.shapes.forEach((shape) => {
    shape.style.fill = "transparent";
    shape.style.stroke = "transparent";
  });
  //   document.querySelectorAll("g#circles > *").forEach((circle) => {
  //     circle.style.stroke = "transparent";
  //   });
}

function trackHoverOnShapes() {
  //add eventlistener to groups
  HTML.shapes.forEach((shape) => {
    shape.addEventListener("mouseover", getShape);
  });
  //   document.querySelectorAll("g#shapes > *").forEach((shape) => {
  //     shape.addEventListener("mouseover", getShape);
  //   });
}

function getShape() {
  console.log(this);
  changeFill(this);
}

function changeFill(shape) {
  shape.style = "";
}
