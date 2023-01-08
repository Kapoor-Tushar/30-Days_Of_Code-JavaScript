let sampleText = document.querySelector(".sample-text");
let wordCount = document.querySelector(".word-count");
let lineCount = document.querySelector(".line-count");
let paragraphCount = document.querySelector(".paragraph-count");
let wc = 0,
  lc = 0,
  pc = 0;

function funcWordCount(str) {
  return str.split(" ").length;
}
function funcLineCount(str) {
  return str.split(/[.?!]+/).length;
}
function funcParagraphCount(str) {
  return str.split("\n").length;
}
sampleText.addEventListener("input", function () {
  wc = funcWordCount(sampleText.value);
  lc = funcLineCount(sampleText.value);
  pc = funcParagraphCount(sampleText.value);
  wordCount.textContent = `Word: ${wc}`;
  lineCount.textContent = `Line: ${lc}`;
  paragraphCount.textContent = `Paragraph: ${pc}`;
});
