const quizData = [
  {
    question: "Which language runs in a web browser?",
    ans1: "Java",
    ans2: "C",
    ans3: "Python",
    ans4: "javascript",
    correct: "ans4",
  },
  {
    question: "What does CSS stand for?",
    ans1: "Central Style Sheets",
    ans2: "Cascading Style Sheets",
    ans3: "Cascading Simple Sheets",
    ans4: "Cars SUVs Sailboats",
    correct: "ans2",
  },
  {
    question: "What does HTML stand for?",
    ans1: "Hypertext Markup Language",
    ans2: "Hypertext Markdown Language",
    ans3: "Hyperloop Machine Language",
    ans4: "Helicopters Terminals Motorboats Lamborginis",
    correct: "ans1",
  },
  {
    question: "What year was JavaScript launched?",
    ans1: "1996",
    ans2: "1995",
    ans3: "1994",
    ans4: "none of the above",
    correct: "ans2",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const ans1_text = document.getElementById("ans1_text");
const ans2_text = document.getElementById("ans2_text");
const ans3_text = document.getElementById("ans3_text");
const ans4_text = document.getElementById("ans4_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAll();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  ans1_text.innerText = currentQuizData.ans1;
  ans2_text.innerText = currentQuizData.ans2;
  ans3_text.innerText = currentQuizData.ans3;
  ans4_text.innerText = currentQuizData.ans4;
}

function deselectAll() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function celebrate() {
  var img = new Image();
  img.src = "celebrate.gif";
  document.getElementById("quiz").appendChild(img);
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h3  style="color:green;padding: 50px 0px 50px 300px"> ${score}/${quizData.length} Questions Answered <br>Correctly </h3>
      <button style= "background-color:rgb(189, 32, 189); padding: 10px 270px; font-size: 20px; border: none;border-radius: 5px;cursor: pointer;width: 100%;" onclick="location.reload()">Reload</button>`;
      var el = document.getElementById("quiz");

      if (score === quizData.length) {
        el.style.backgroundImage = "url(victory.gif)";
        el.style.backgroundSize = "80% 100%";
      } else {
        el.style.backgroundImage = "url(tryagain.gif)";
        el.style.backgroundSize = "110% 100%";
      }
    }
  }
});
