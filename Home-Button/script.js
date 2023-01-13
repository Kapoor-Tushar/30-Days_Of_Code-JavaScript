"use-strict";

let creatButton = function () {
  // Selecting noscript tag from html file
  let noScript = document.getElementsByTagName("noscript");
  // Taking the target element from the HTML collection.
  let tgtNoScript = noScript[0];
  // Removing the noscript tag
  tgtNoScript.parentNode.removeChild(tgtNoScript);

  // Selecting parent class
  let btnParentClass = document.querySelector("#root");
  // Creating the home button.
  let homeButton = document.createElement("button");
  homeButton.className = "btn";
  homeButton.innerHTML = "Home";
  // Adding home button to HTML
  btnParentClass.appendChild(homeButton);
  // Adding link to home button.
  homeButton.addEventListener("click", function () {
    window.location.href = "https://github.com/Kapoor-Tushar";
  });
};
creatButton();
