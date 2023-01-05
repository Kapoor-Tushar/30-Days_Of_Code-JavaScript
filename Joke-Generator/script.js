let url = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;
const jokeContainer = document.querySelector(".joke-container");
const btnJokeGenerator = document.querySelector(".generate-joke");

const generateJoke = function () {
  fetch(url)
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      console.log(response.joke);
      jokeContainer.textContent = response.joke;
    });
};
btnJokeGenerator.addEventListener("click", generateJoke);
