"use strict";

const scrollUp = document.querySelector(".main-nav");

ScrollTrigger.create({
  start: "start -10",
  end: 99999,
  toggleClass: { className: "main-nav--scrolled", targets: ".main-nav" },
  onUpdate: ({ direction }) => {
    if (direction == -1) {
      scrollUp.classList.remove("main-nav--scrolled");
    } else {
      scrollUp.classList.add("main-nav--scrolled");
    }
  },
});
