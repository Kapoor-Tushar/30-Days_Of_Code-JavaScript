let inputText = document.querySelector(".input-text");
let inputBtn = document.querySelector(".input-btn");
let searchContainer = document.querySelector(".search-container");
let nounMeaningTag = document.querySelector(".noun-meaning");
let verbMeaningTag = document.querySelector(".verb-meaning");
let synonymsTag = document.querySelector(".synonyms");
let antonymsTag = document.querySelector(".antonyms");

let word;
inputText.addEventListener("input", function () {
  word = inputText.value;
});
inputBtn.addEventListener("click", function () {
  console.log(word);
  let response = fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      searchContainer.classList.remove("hidden");
      //   noun
      nounMeaningTag.textContent = `Meaning: ${data[0].meanings[0].definitions[0].definition}`;
      //   verb
      verbMeaningTag.textContent = `Meaning: ${data[0].meanings[1].definitions[0].definition}`;
      //   synonyms
      synonymsTag.textContent = `Synonyms: ${data[0].meanings[0].synonyms.join(
        ","
      )}`;
      //   antonyms
      antonymsTag.textContent = `Antonyms: ${data[0].meanings[2].antonyms.join(
        ","
      )}`;
    });
});
