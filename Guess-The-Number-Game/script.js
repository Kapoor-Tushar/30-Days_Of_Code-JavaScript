let inpNum = document.querySelector(".inp-num");
let btnGuess = document.querySelector(".btn-guess");
let hiddenNumContainer = document.querySelector(".hidden-num");
let img = document.querySelector(".img");
let resultContainer = document.querySelector(".result");
let btnReload = document.querySelector(".btn-reload");

let randomNum = Math.floor(Math.random() * 10);
let userInp;
inpNum.addEventListener("input", function () {
  userInp = Number(inpNum.value);
  resultContainer.classList.add("hidden");
});
btnGuess.addEventListener("click", function () {
  if (randomNum === userInp) {
    hiddenNumContainer.textContent = randomNum;
    btnGuess.textContent = `Reload`;
    resultContainer.textContent = `You Won! 🏆`;
    resultContainer.style.left = `22.5%`;
    img.classList.add("hidden");
    hiddenNumContainer.classList.remove("hidden");
    resultContainer.classList.remove("hidden");
    btnGuess.classList.add("hidden");
    btnReload.classList.remove("hidden");
  } else {
    resultContainer.textContent = `You Lost!😝, Try Again`;
    img.classList.remove("hidden");
    hiddenNumContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.style.left = `9%`;
  }
});
btnReload.addEventListener("click", function () {
  location.reload();
});
