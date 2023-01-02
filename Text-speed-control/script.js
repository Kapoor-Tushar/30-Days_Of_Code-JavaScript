speedValue = document.querySelector(".speed");
btn = document.querySelector(".btn");
sampleText = document.querySelector(".sample_text");

btn.addEventListener("click", function () {
  if (speedValue.textContent !== null && speedValue.value >= 0) {
    // console.log(speedValue.value);
    sampleText.style.animationDuration = `${speedValue.value}s`;
  }
});
