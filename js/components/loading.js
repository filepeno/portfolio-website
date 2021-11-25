"use strict";

export function setVisible(selector, visible) {
  document.querySelector(selector).style.visibility = visible ? "visible" : "hidden";
  document.querySelector(selector).style.opacity = visible ? "100%" : "0";
}
