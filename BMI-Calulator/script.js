let weight = document.querySelector(".weight");
let height = document.querySelector(".height");
let btn = document.querySelector(".btn-calculate");
let result = document.querySelector(".result");
let w, h;
weight.addEventListener("input", function (e) {
  w = weight.value;
});
height.addEventListener("input", function (e) {
  h = height.value;
});
btn.addEventListener("click", function () {
  console.log(w, h);
  if (w !== undefined && h !== undefined) {
    let bmi = (w / (h * h)).toFixed(2);
    console.log(bmi);
    if (bmi <= 18.4) {
      result.textContent = `Your BMI is ${bmi}, you are underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.textContent = `Your BMI is ${bmi}, you are normal`;
    } else if (bmi >= 25 && bmi <= 39.9) {
      result.textContent = `Your BMI is ${bmi}, you are overweight`;
    } else {
      result.textContent = `Your BMI is ${bmi}, you are obese`;
    }
  } else {
    result.textContent = "Please enter the values, fields can't be empty";
  }
});
