let container = document.querySelector(".container");
let header = document.querySelector(".header");

function onDrag({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(container);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  container.style.left = `${left + movementX}px`;
  container.style.top = `${top + movementY}px`;
  console.log(left, top);
}
header.addEventListener("mousedown", function () {
  header.addEventListener("mousemove", onDrag);
});
document.addEventListener("mouseup", function () {
  header.removeEventListener("mousemove", onDrag);
});
