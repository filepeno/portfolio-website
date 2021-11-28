"use strict";

scrollTo();

function scrollTo() {
  document.querySelectorAll("header a").forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("clicked");
      e.preventDefault();
      const linkTo = e.currentTarget.attributes.href.nodeValue;
      gsap.to(window, { duration: 0.8, scrollTo: linkTo });
    });
  });
}
