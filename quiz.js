const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");

// rendering the question.
// console.log("questionDiv", questionDiv);
questionEl.textContent = questionObj.question;

//rendering the options
questionObj.options.forEach((_option) => {
  const btnEl = document.createElement("button");
  btnEl.textContent = _option;
  optionEl.appendChild(btnEl);
});
