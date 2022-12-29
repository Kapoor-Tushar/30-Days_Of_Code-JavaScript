colorPicker = document.querySelector(".color_picker");
hexCode = document.getElementById("hex_value");
rgbCode = document.getElementById("rgb_value");
hslCode = document.getElementById("hsl_value");
// console.log(colorPicker.value);

hexToRGB = function (color) {
  let r = parseInt(color[1] + color[2], 16);
  let g = parseInt(color[3] + color[4], 16);
  let b = parseInt(color[5] + color[6], 16);
  return `rbg(${r},${g},${b})`;
};

hexToHSL = function (color) {
  let r = parseInt(color[1] + color[2], 16);
  let g = parseInt(color[3] + color[4], 16);
  let b = parseInt(color[5] + color[6], 16);
  let max1 = Math.max(r, g, b);
  let min1 = Math.min(r, g, b);
  let delta = max1 - min1;
  let d = (max1 - min1) / 255;
  let light = (max1 + min1) / 510;
  let s, h;
  if (light > 0) {
    s = Math.floor((d / (1 - Math.abs(2 * light - 1))) * 100);
  } else {
    s = 0;
  }
  if (delta == 0) h = 0;
  else if (max1 == r) h = ((g - b) / delta) % 6;
  else if (max1 == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;
  return `hsl(${Math.floor(h)}, ${s}%, ${Math.floor(light * 100)}%)`;
};

colorPicker.addEventListener("input", function () {
  //   console.log(colorPicker.value);
  let colorPicked = colorPicker.value;
  hexCode.textContent = colorPicked;
  rgbCode.textContent = hexToRGB(colorPicked);
  hslCode.textContent = hexToHSL(colorPicked);
});

function hex() {
  navigator.clipboard.writeText(document.getElementById("hex_value").innerHTML);
}

function rgb() {
  navigator.clipboard.writeText(document.getElementById("rgb_value").innerHTML);
}

function hsl() {
  navigator.clipboard.writeText(document.getElementById("hsl_value").innerHTML);
}
