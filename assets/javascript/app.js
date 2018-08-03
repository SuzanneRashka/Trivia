$(document).ready(function () {
  console.log("ready!");
  // onclicks go here
  $("#start").on("click", function () {
    startGame();
    $(".wrapper").show();
    $(this).hide();
  });
});

var timeMax = 3;
var intervalId; //holds setInterval under run()
var running = false; // boolean to toggle
var select; //placeholder for selected
var index;
// var timerOutput;
// var timerMessage;
var questionOutput;
var optionOutput;
var userAnswer;
var message = "Game Over!";

var trivia = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    answer: 2
  },
  {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    answer: 4
  },
  {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    answer: 0
  },
  {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    answer: 3
  },
  {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    answer: 4
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
// timer start
function run() {
  if (!running) {
    intervalId = setInterval(countdown, 1000);
    running = true;
  }
}
// timer stop
function stop() {

  clearInterval(intervalId);
  running = false;
}

// countdown timer
function countdown() {
  run();
  //catch end of count
  if (timeMax <= 0) {
    clearInterval(intervalId);
    running = false;
    $("#timer").html("<h1>Time's Up</h1>");
    // $("#answer").html("<p>Time is up! The correct answer is: " + trivia.choices[trivia.answer] + "</p>");

  } else {
    $("#timer").html("<h1>" + timeMax + " seconds remaining</h1>");
    timeMax--;
    console.log(timeMax);
  }
}

function display() {
  for (var i = 0; i < trivia.length; i++) {
    $("#question").html('<h1>Question: ' + trivia[i].question + '</h1>');
    $("<div>").addClass("answer-choice");
    $("<div>").html(select.trivia[i]); /// ********* needs to be a hide, then show
    $("<div>").attr("data-guessvalue", i);
    $("#answer").append$("<div>");
    console.log(trivia[i].question);
  }
}
display();

function nextQuestion() {
  // starts timer
  // countdown();
  // display question
  // display options
  // onclick of option...to invoke answerChecker
}

function answerChecker() {
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

// ******** working for loop *********
// for (var i = 0; i < trivia.length; i++) {
//   console.log(trivia[i].question);
// }