numberOfVisits = document.querySelector(".visits");

let response = fetch(`https://api.countapi.xyz/hit/tusharat.com/?amount=1`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.value);
    numberOfVisits.textContent = data.value;
  });
