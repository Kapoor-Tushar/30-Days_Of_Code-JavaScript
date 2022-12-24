keyPressed = document.querySelector(".key_pressed");
eventCode = document.querySelector(".event_code");
eventCodeContainer = document.querySelector(".event_code_container");

document.addEventListener("keydown", function (e) {
  keyPressed.textContent = e.key.toUpperCase();
  eventCode.textContent = e.keyCode;
  eventCodeContainer.classList.remove("hidden");
});
