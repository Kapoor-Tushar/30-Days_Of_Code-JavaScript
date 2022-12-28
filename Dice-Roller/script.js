btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  num = Math.floor(Math.random() * 6) + 1;
  //   console.log(num);
  if (num >= 1 && num <= 6) {
    for (i = 1; i < 7; i++) {
      diceFace = document.getElementById(i);
      diceFace.classList.add("hidden");
    }
    diceFace = document.getElementById(num);
    diceFace.classList.remove("hidden");
  }
});
