$(document).ready(function () {
    console.log("ready!");
    // onclicks go here
    $("#start").on("click", function () {
        startGame();
        nextQuestion();
    })
});

var timeMax = 3;
var timer;
var timerOutput;
var timerMessage;
var questionOutput;
var optionOutput;

var trivia = {
    questions: {
        q1: 'Who?',
        q2: 'What?'
    },
    options: {
        q1: ['one', 'two', 'three', 'four'],
        q2: ['one', 'two', 'three', 'four']
    },
    answers: {
        q1: 'one',
        q2: 'two'
        // q2: options.q2[1]
    }
};

// countdown timer for each question
function countdown() {
    timer = setInterval(countdown, 1000)
    //catch end of count
    if (timeMax <= 0) {
        clearTimeout();
        timerMessage = setTimeout(function () {
            $("#timer").html('<h1>Time\'s Up</h1>');
        }, 1000);
    } else {
        timerOutput = $("#timer").html('<h1>' + timeMax + ' seconds remaining</h1>');
        timeMax--;
        console.log(timeMax);
        // console.log(trivia.answers.q2);
    }
}

function startGame() {
    countdown();
    clearTimeout();
    console.log("startGame invoked");

    // $("#start").append('<button>Start</button>');
    // start button invokes...
    // nextQuestion()
}

function nextQuestion() {
    // starts timer
    // countdown();
    // display question
    console.log(trivia.answers.q2);
    for (var key in trivia.questions) {
        // if (!trivia.questions.hasOwnProperty(key)) continue;
        var obj = trivia.questions[key];

    }
    // display options

    // onclick of option...to invoke answerChecker

}

function answerChecker() {
    console.log("answerChecker invoked")
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