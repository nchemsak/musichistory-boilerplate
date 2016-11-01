'use strict';
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  console.log("addLink: ", addLink);
  // homeView.classList.add("hidden");
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");
});


function add() {
  document.getElementById("num1");
  var add = (parseFloat(num1.value) + parseFloat(num2.value) );
  output.innerHTML = add;
}



