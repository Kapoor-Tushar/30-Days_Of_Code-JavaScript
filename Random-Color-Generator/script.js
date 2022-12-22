btnColorGenerator = document.querySelector(".btn_color-change");
body = document.querySelector(".body_class");
hexCode_container = document.querySelector(".hidden");
hexCode = document.querySelector(".hexcode");

rgbToHex = function (val) {
  return val.toString(16).padStart("2", 0).toUpperCase();
};

btnColorGenerator.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255 + 1);
  let g = Math.floor(Math.random() * 255 + 1);
  let b = Math.floor(Math.random() * 255 + 1);
  //   console.log(r, g, b);
  //   Here we will also display the hex code of the color.
  //   For converting rgb be code hex code we will use toSting, padStart and toUppercase.
  hx1 = rgbToHex(r);
  hx2 = rgbToHex(g);
  hx3 = rgbToHex(b);
  //   console.log(hx1, hx2, hx3, hx1 + hx2 + hx3);
  hexCode_container.style.display = "block";
  //   Now we will use innerHTML to add hex code of the color in our information block.
  hexCode.textContent = hx1 + hx2 + hx3;

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
