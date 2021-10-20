// import questions from "../js/Questions";

// DOM SELECTOR //
// Buttons
const startQuiz = document.getElementById("startQuiz");
const ExitButton = document.querySelector(".ExitButton");
const ContinueButton = document.querySelector(".ContinueButton");
// Pages
const quizHome = document.getElementById("quizHome");
const quizRules = document.getElementById("quizRules");
const questions = document.getElementById("questions");

// EVENT LISTENER //
// Start Quiz
startQuiz.addEventListener("click", function () {
  quizHome.style.display = "none";
  quizRules.style.display = "block";
});
// Exit Quiz
ExitButton.addEventListener("click", function () {
  quizRules.style.display = "none";
  quizHome.style.display = "block";
});
// Quiz Continue
ContinueButton.addEventListener("click", function () {
  quizRules.style.display = "none";
  questions.style.display = "block";
  showQuestion(0);
});

// Next Btn
const nextBtn = document.querySelector(".nextBtn");
let quizCount = 0;
nextBtn.onclick = () => {
  if (quizCount < Questions.length - 1) {
    quizCount++;
    showQuestion(quizCount);
  } else {
    console.log("Quiz Finished!");
  }
};

// Show Question
function showQuestion(index) {
  // questin name
  const quiz = document.querySelector(".quiz");
  let question = Questions[index].num + "." + Questions[index].question;
  quiz.textContent = question;
  //question option
  const MyOptions = document.querySelector(".MyOptions");
  let optionTag =
    `
		<div class="options">
		<span>${Questions[index].options[0]}</span>
		<i class="fas fa-times-circle"></i>
		</div>
	` +
    `
		<div class="options">
		<span>${Questions[index].options[1]}</span>
		<i class="fas fa-times-circle"></i>
		</div>
	` +
    `
		<div class="options">
		<span>${Questions[index].options[2]}</span>
		<i class="fas fa-times-circle"></i>
		</div>
	` +
    `
		<div class="options">
		<span>${Questions[index].options[3]}</span>
		<i class="fas fa-times-circle"></i>
		</div>
	`;
  MyOptions.innerHTML = optionTag;

  // Total Questin
  const total_que = document.querySelector(".total_que");
  const total_que_tag = `<p> ${quizCount + 1} of 5 Questions</p>`;
  total_que.innerHTML = total_que_tag;
}
