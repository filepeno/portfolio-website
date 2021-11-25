"use strict";

export function onReady(callback) {
  const intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

export function setVisible(selector, visible) {
  document.querySelector(selector).style.visibility = visible ? "visible" : "hidden";
}
