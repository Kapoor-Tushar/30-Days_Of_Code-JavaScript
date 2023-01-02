container = document.querySelector(".container");

container.addEventListener("mouseover", function () {
  code = Math.floor(Math.random() * (129488 - 128512)) + 128512;
  container.innerHTML = String.fromCodePoint(code);
});
