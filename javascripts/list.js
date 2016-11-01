'use strict';
var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function(event) {
  console.log("listLink: ", listLink);
  event.preventDefault();
  // homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");

});
