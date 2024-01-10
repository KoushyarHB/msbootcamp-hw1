"use strict";

const runButtons = document.querySelectorAll(".runButton");

for (const runButton of runButtons) {
  runButton.addEventListener("click", () => {
    const myCode = runButton.parentElement.children[0].value;
    runCode(myCode);
  });
}

function runCode(content) {
  eval(content);
}

const revealButtons = document.querySelectorAll(".revealButton");

for (const revealButton of revealButtons) {
  revealButton.addEventListener("click", () => {
    const answerElement = revealButton.parentElement.children[2];
    answerElement.classList.toggle("hidden");
  });
}
