// DOM SELECTOR //
// Buttons
const startQuiz = document.getElementById('startQuiz');
const ExitButton = document.querySelector('.ExitButton');
const ContinueButton = document.querySelector('.ContinueButton');
// Pages
const quizHome = document.getElementById('quizHome');
const quizRules = document.getElementById('quizRules');
const questions = document.getElementById('questions');



// EVENT LISTENER //
// Start Quiz
startQuiz.addEventListener('click', function(){
    quizHome.style.display = 'none';
    quizRules.style.display = 'block';
});
// Exit Quiz
ExitButton.addEventListener('click', function(){
    quizRules.style.display = 'none';
    quizHome.style.display = 'block';
});
// Quiz Continue
ContinueButton.addEventListener('click', function(){
    quizRules.style.display = 'none';
    questions.style.display = 'block';
});

