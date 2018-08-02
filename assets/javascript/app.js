$(document).ready(function () {
  console.log("ready!");
  // onclicks go here
  $("#start").on("click", function () {
    startGame();
    $(".wrapper").show();
    console.log("within onclick - start");
    $(this).hide();
  });
});

var timeMax = 3;
var timer;
var timerOutput;
var timerMessage;
var questionOutput;
var optionOutput;
var userAnswer;
var message = "Game Over!";
var trivia = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 2
  },
  {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 4
  },
  {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 0
  },
  {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 3
  },
  {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 4
  }
];

function startGame() {
  console.log("startGame invoked");
  countdown();
  clearTimeout();

  // $("#start").append('<button>Start</button>');
  // start button invokes...
  // nextQuestion()
}
// initiates countdown
function run() {
  timer = setInterval(countdown, 1000);
}
// countdown timer for each question
function countdown() {
  $("#start").hide();
  run();
  //catch end of count
  if (timeMax <= 0) {
    clearTimeout();
    timerMessage = setTimeout(function () {
      $("#timer").html("<h1>Time's Up</h1>");
    }, 1000);
  } else {
    timerOutput = $("#timer").html(
      "<h1>" + timeMax + " seconds remaining</h1>"
    );
    timeMax--;
    console.log(timeMax);
  }
}

function display(data) {
  var questionData = "<form id='qOne'>" + data.question + "<br>";
  var choices = data.choices;

  for (var i = 0; i < choices.length; i++) {
    var choice = choices[i];
    questionData += '<input type="radio" ' + choice;
  }
  return questionData + "</form>";
}
window.display = display;

function nextQuestion() {
  var questionHTML = "";
  for (var i = 0; i < trivia.question.length; i++) {
    questionHTML += display(trivia.question[i]);
  }
  $("#questions-container").append(questionHTML);
  // starts timer
  // countdown();
  // display question
  // display options
  // onclick of option...to invoke answerChecker
}

function answerChecker() {
  console.log("answerChecker invoked");
  // countdown() to check time remaining
  // invoke right or wrong()
  // displays message/pop-up depending
  // loops to next question on setInterveral() of 5 secs
}

function rightAnswer() {
  // if right(){message Yay}
}

function wrongAnswer() {
  // if wrong(){message Boo}
}

function results() {
  // timer stops
  // number of correct answers
  // number of wrong answers
  // start over to reset game, not page
}

// Questions...
// Async extending time of displayed questions??
// lost full second on countdown()