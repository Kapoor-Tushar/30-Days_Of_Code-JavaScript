hours = document.querySelector(".hours");
minutes = document.querySelector(".minutes");
seconds = document.querySelector(".seconds");

disp_time = function () {
  date = new Date();
  hr = String(date.getHours()).padStart(2, 0);
  min = String(date.getMinutes()).padStart(2, 0);
  sec = String(date.getSeconds()).padStart(2, 0);
  //   console.log(hr, min, sec);
  hours.textContent = hr;
  minutes.textContent = min;
  seconds.textContent = sec;
};
setInterval(disp_time, 1000);
disp_time();
