const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
let score = 0; // score var to count the score on the fly.

// rendering the question.
questionEl.textContent = questionObj.question;

//rendering the options
questionObj.options.forEach((_option) => {
  const btnEl = document.createElement("button");
  btnEl.textContent = _option;
  optionEl.appendChild(btnEl);

  //event handling on the button
  btnEl.addEventListener("click", () => {
    if (_option === questionObj.correctAnswer) {
      score++;
    } else {
      score = score - 0.25;
    }
    scoreEl.textContent = `Score: ${score}`;
    questionEl.textContent = "Quiz Completed";
    optionEl.textContent = "";
  });
});
