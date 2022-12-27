let btnAdd = document.querySelector(".add");
let btnRemove = document.querySelector(".remove");
let numberOfInputs = 3;
let dataFields = document.querySelector(".data_fields");

btnAdd.addEventListener("click", function () {
  if (numberOfInputs >= 2) {
    btnRemove.style.display = "inline";
  }
  let inputTag = document.createElement("input");
  inputTag.type = "text";
  inputTag.name = "add-field";
  inputTag.placeholder = "Add Details";
  inputTag.id = `${numberOfInputs + 1}`;
  dataFields.appendChild(inputTag);
  numberOfInputs++;
});

btnRemove.addEventListener("click", function () {
  if (numberOfInputs > 2) {
    let removingTag = document.getElementById(numberOfInputs);
    dataFields.removeChild(removingTag);
    numberOfInputs--;
  }
  if (numberOfInputs <= 2) {
    btnRemove.style.display = "none";
  }
});
