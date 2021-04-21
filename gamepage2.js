const question = document.getElementById("question")
const choices = Array.front(document.getElementsByClassName("choice-text"))
const counter = document.getElementById("counter");
const score = document.getElementById("score");

let currentQuestion = {}
let acceptingAnswers = true
let questionCounter = 0
let availableQuestion = {}
let Score = 0

const correct_bonus = 5;
const maximum_questions = 2;



let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

 
const finalScore = document.getElementById("totalScore");


const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];




startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0) {
    
    finalScore.innerHTML = score;
    
    return navigateTo("end");
  }
  questionCounter++;
  questionCounterText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

 
  availableQuestions.splice(questionIndex, 1);

 
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    

    selectedChoice.parentElement.classList.add(classToApply);

    
    incrementScore(classToApply === "correct" ? CORRECT_BONUS : 0);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      
      getNewQuestion();
    }, 500);
  });
});


