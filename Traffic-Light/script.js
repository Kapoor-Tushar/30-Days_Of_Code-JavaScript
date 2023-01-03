redLight = document.querySelector(".red_light");
yellowLight = document.querySelector(".yellow_light");
greenLight = document.querySelector(".green_light");

illuminateRed = function () {
  redLight.style.backgroundColor = "red";
};
illuminateYellow = function () {
  yellowLight.style.backgroundColor = "yellow";
};
illuminateGreen = function () {
  greenLight.style.backgroundColor = "green";
};
clearColor = function () {
  redLight.style.backgroundColor = "gainsboro";
  yellowLight.style.backgroundColor = "gainsboro";
  greenLight.style.backgroundColor = "gainsboro";
};
startTrafficSignal = function () {
  setTimeout(function () {
    clearColor();
    illuminateRed();
  }, 3000);
  setTimeout(function () {
    clearColor();
    illuminateYellow();
  }, 5000);
  setTimeout(function () {
    clearColor();
    illuminateGreen();
  }, 8000);
};
let timer = setInterval(function () {
  startTrafficSignal();
}, 9000);
startTrafficSignal();
