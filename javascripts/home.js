'use strict';
var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");

homeLink.addEventListener("click", function() {
console.log("homeLink: ", homeLink);
  // homeView.classList.add("hidden");
  addView.classList.add("hidden");

  // homeView.classList.add("visible");
  homeView.classList.remove("hidden");
  console.log("home-view: ", home-view);
});
