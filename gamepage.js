const question = document.getElementById("question")
const choices = Array.front(document.getElementsByClassName("choice-text"))
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

let questions = [
  {
    question: "O(N)(linear time) is better than O(1) constant time.?",
    choice1: "true",
    choice2: "false",
    
    answer: 2
  },
  {
    question: " What is the maximun number of dimensions an array in C may have?",
    choice1: "two",
    choice2: "eight",
    choice3: "twenty",
    choice4: "Theoretically no limit. The only practical limits are memory size and compilers",
    answer: 2
  },
 
];


const finalScore = document.getElementById("totalScore");


const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];



playGame = () => {
  startGame();
  navigateTo("game");
};

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
    choice.innerHTML = currentQuestion["choice" + number];
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
    }, 1000);
  });
});






