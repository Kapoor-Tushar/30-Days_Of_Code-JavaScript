let inputHour = 0;
let inputMin = 0;
let inputSec = 0;
let time = 0;

const btnInputHour = document.querySelector(".input-hour");
const btnInputMin = document.querySelector(".input-min");
const btnInputSec = document.querySelector(".input-sec");
const timerContainer = document.querySelector(".timer-container");
const timerContainerCountdown = document.querySelector(
  ".timer-container__countdown"
);
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const selecElement = document.querySelectorAll(".input");

btnInputHour.addEventListener("change", function (event) {
  if (event.target.value === "1") {
    document.querySelector(".displayhour").innerHTML = "hour";
  }
  inputHour = Number(event.target.value);
  time = time + inputHour * 3600;
});

btnInputMin.addEventListener("change", function (event) {
  inputMin = Number(event.target.value);
  time = time + inputMin * 60;
});

btnInputSec.addEventListener("change", function (event) {
  inputSec = Number(event.target.value);
  time = time + inputSec;
});

let timer;
// Creating executable function
const timerFunc = function () {
  const hour = String(Math.trunc(time / 3600)).padStart(2, "0");
  const min = String(Math.trunc((time / 60) % 60)).padStart(2, "0");
  const sec = String(Math.trunc(time % 60)).padStart(2, "0");

  timerContainerCountdown.textContent = `${hour}:${min}:${sec}`;

  // Stopping the timer when it is 0 seconds.
  if (time === 0) {
    clearInterval(timer);
    btnInputHour.value = 0;
    btnInputMin.value = 0;
    btnInputSec.value = 0;
    time = 0;
    btnStop.classList.add("hidden");
    btnStart.classList.remove("hidden");
    timerContainerCountdown.classList.add("hidden");
    timerContainer.classList.remove("hidden");
  }
  time--;
};

btnStart.addEventListener("click", function () {
  if (time > 0) {
    timerFunc();
    timer = setInterval(timerFunc, 1000);
    btnStop.classList.remove("hidden");
    btnStart.classList.add("hidden");
    timerContainerCountdown.classList.remove("hidden");
    timerContainer.classList.add("hidden");
  }
});

btnStop.addEventListener("click", function () {
  clearInterval(timer);
  btnInputHour.value = 0;
  btnInputMin.value = 0;
  btnInputSec.value = 0;
  time = 0;
  btnStop.classList.add("hidden");
  btnStart.classList.remove("hidden");
  timerContainerCountdown.classList.add("hidden");
  timerContainer.classList.remove("hidden");
});
