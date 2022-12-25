btnPasswordGenerator = document.querySelector(".btn");
passwordContainer = document.querySelector(".password_container");
password = document.querySelector(".password");

btnPasswordGenerator.addEventListener("click", function () {
  let passCode = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
  let pass = String.fromCharCode(passCode);

  for (i = 0; i < 11; i++) {
    let code = Math.floor(Math.random() * (126 - 33 + 1)) + 33;
    pass = pass + String.fromCharCode(code);
  }
  password.textContent = pass;
  passwordContainer.classList.remove("hidden");
});
