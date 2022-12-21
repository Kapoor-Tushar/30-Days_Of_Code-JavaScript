secondHand = document.querySelector(".secondhand");
minuteHand = document.querySelector(".minutehand");
hourHand = document.querySelector(".hourhand");

timeFunc = function () {
  let date = new Date();

  seconds = date.getSeconds();
  secondsAngle = seconds * 6;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;

  minutes = date.getMinutes();
  minuteAngle = minutes * 6 + (seconds / 60) * 6;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;

  hours = date.getHours();
  hourAngle = hours * 30 + (minutes / 60) * 30;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
};

const timer = setInterval(timeFunc, 1000);
timeFunc();
