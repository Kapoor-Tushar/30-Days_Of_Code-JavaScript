inputText = document.querySelector(".input_text");
qrCode = document.querySelector(".qr_code");
generateResult = document.querySelector(".generate_result");

generateResult.addEventListener("click", function () {
  inputTextValue = inputText.value;
  console.log(inputTextValue);
  qrCode.innerHTML = "";
  new QRCode(qrCode, inputTextValue);
});
