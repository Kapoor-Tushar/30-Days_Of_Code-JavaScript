CurrentDate = document.querySelector(".current_date");
daysTag = document.querySelector(".days");
PrevNextIcon = document.querySelectorAll(".material-icons");

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();
// console.log(date, currentMonth , currentYear);

let months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = function () {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let LastDayofMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfMonth
  ).getDay();
  let liTag = "";

  for (i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class='inactive'>${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (i = 1; i <= lastDateOfMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class='${isToday}'>${i}</li>`;
  }

  for (i = LastDayofMonth; i < 6; i++) {
    liTag += `<li class='inactive'>${i - LastDayofMonth + 1}</li>`;
  }
  CurrentDate.textContent = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();

PrevNextIcon.forEach((iconElement) => {
  iconElement.addEventListener("click", function () {
    currentMonth =
      iconElement.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
