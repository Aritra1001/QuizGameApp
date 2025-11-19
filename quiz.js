const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0; // score var to count the score on the fly.
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  scoreEl.textContent = `Score: ${score} / ${quesJSON.length}`;
  nextQuestion();
});

renderQuestions();

function renderQuestions() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];

  // rendering the question.
  questionEl.textContent = question;
  //rendering the options
  let swappedOptions = swapOptions(options);
  swappedOptions.forEach((_option) => {
    const btnEl = document.createElement("button");
    btnEl.textContent = _option;
    optionEl.appendChild(btnEl);

    //event handling on the button
    btnEl.addEventListener("click", () => {
      if (_option === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${quesJSON.length}`;

      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz Completed";
    optionEl.textContent = "";
    nextBtn.remove();
  } else {
    renderQuestions();
  }
}

// swapping of the options
function swapOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  // basic swapping logic
  // [options[3], options[0]] = [options[0], options[3]];
  return options;
}
