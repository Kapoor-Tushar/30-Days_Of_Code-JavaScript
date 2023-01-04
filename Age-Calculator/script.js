const btnCalc = document.querySelector(".calculate");
const inputDate = document.querySelector(".dob");
const curAgeConatiner = document.querySelector(".cur-age");

btnCalc.addEventListener("click", function () {
  let inputVal = inputDate.value.split("-");
  let birthYear = Number(inputVal[0]);
  let birthmonth = Number(inputVal[1]);

  let date = new Date();
  let curYear = date.getFullYear();
  let curMonth = date.getMonth() + 1;

  let ageYear = curYear - birthYear;
  let ageMonth = curMonth - birthmonth;

  if (ageYear < 0) {
    curAgeConatiner.textContent =
      "Birth year can't be greater than current year.";
  }
  if (ageMonth < 0) {
    if (ageYear > 0) {
      ageYear--;
      ageMonth = 12 + ageMonth;
    } else {
      curAgeConatiner.textContent =
        "Birth year can't be greater than current year.";
    }
  }
  curAgeConatiner.textContent = `Current age is ${ageYear} years and ${ageMonth} months`;
});
