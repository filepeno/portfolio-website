"use strict";

window.addEventListener("DOMContentLoaded", loadSvg);

const fills = ["#fff0be", "#ab6461", "#001fd1", "#ffd1ba", "#ff975c", "#496eff", "#ffdfa7", "#f7adad", "#c3baa8", "#527d69", "#8fd8cd"];

async function loadSvg() {
  console.log("DOM loaded");
  const heroSvg = await fetch("assets/img/portfolio_home-page_graphic-03-01.svg");
  const heroSvgText = await heroSvg.text();
  document.querySelector("section#hero").innerHTML = heroSvgText;
}
