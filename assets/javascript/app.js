$(document).ready(function () {
  console.log("ready");

  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unansweredQuestions = 0;

  var timeRemaining = 10;

  var intervalId; // timeout
  var indexQandA = 0; //index to load a different question each round without the game reset or screen refresh
  var answered = false; //variable to stop the timer if user has clicked an answer
  var correct;

  var trivia = [{
      question: "What is the diameter of Earth?",
      options: ["5,000 miles", "7,000 miles", "8,000 miles", "9,000 miles"],
      correct: "2",
      image: "assets/images/earth.jpg"
    },
    {
      question: "Which chess piece can only move diagonally?",
      options: ["Bishop", "Knight", "Rook", "King"],
      correct: "0",
      image: "assets/images/chess.jpg"
    },
    {
      question: "When did the Cold War end?",
      options: ["1986", "1984", "1992", "1989"],
      correct: "3",
      image: "assets/images/war.jpg"
    },
    {
      question: "What flavor is Cointreau?",
      options: ["Vanilla", "Orange", "Peach", "Grape"],
      correct: "1",
      image: "assets/images/orange.jpg"
    },
    {
      question: "What was the first planet to be discovered using the telescope, in 1781?",
      options: ["Mars", "Venus", "Uranus", "Pluto"],
      correct: "2",
      image: "assets/images/uranus.jpg"
    },
    {
      question: "What Great Lake state has more shoreline than the entire U.S. Atlantic seaboard?",
      options: ["Michigan", "Wisconsin", "New York", "Ohio"],
      correct: "0",
      image: "assets/images/mountain.jpg"
    }
  ];
  // ******** working for loop *********
  // for (var i = 0; i < trivia.length; i++) {
  //   console.log(trivia[i].question);
  //   console.log(trivia[i].choices);
  // }
  function startGame() {
    console.log("game has begun");
    $(".start-button").remove();
    // start 0 score
    correctAnswers = 0;
    incorrectAnswers = 0;
    unansweredQuestions = 0;
    loadQandA();
  }

  function loadQandA() {
    answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer() **forgot this before
    timeRemaining = 10;
    intervalId = setInterval(timer, 1000); // resets after new question
    if (answered === false) {
      timer();
    }
    correct = trivia[indexQandA].correct;
    var question = trivia[indexQandA].question;
    $(".question").html(question); // display question
    for (var i = 0; i < 4; i++) {
      var answer = trivia[indexQandA].options[i];

      $(".answers").append('<div><label type= radio class= answersAll id=' + i + '>' + answer + '</label></div>') // display answer
    }

    $("label").click(function () {
      var id = $(this).attr("id");
      if (id === correct) {
        answered = true; // stops the timer
        $(".question").text(
          "THE ANSWER IS: " + trivia[indexQandA].options[correct]
        );
        correctAnswer();
      } else {
        answered = true; //stops the timer
        $(".question").text(
          "YOU CHOSE: " +
          trivia[indexQandA].options[id] +
          ".....HOWEVER THE ANSWER IS: " +
          trivia[indexQandA].options[correct]
        );
        incorrectAnswer();
      }
    });
  }
  /// timer runs and 0's out or clears if answered
  function timer() {
    if (timeRemaining === 0) {
      answered = true;
      clearInterval(intervalId);
      $(".question").text(
        "THE CORRECT ANSWER IS: " + trivia[indexQandA].options[correct]
      );
      unAnswered();
    } else if (answered === true) {
      clearInterval(intervalId);
    } else {
      timeRemaining--;
      $(".timeRemaining").text(
        "YOU HAVE " + timeRemaining + " SECONDS TO CHOOSE"
      );
    }
  }

  function correctAnswer() {
    correctAnswers++;
    $(".timeRemaining")
      .text("YOU HAVE ANSWERED CORRECTLY!");
    resetRound();
  }

  function incorrectAnswer() {
    incorrectAnswers++;
    $(".timeRemaining")
      .text("YOU HAVE ANSWERED INCORRECTLY!");
    resetRound();
  }

  function unAnswered() {
    unansweredQuestions++;
    $(".timeRemaining")
      .text("YOU FAILED TO CHOOSE AN ANSWER");
    resetRound();
  }

  function resetRound() {
    $(".answersAll").remove();
    $(".answers").append(
      '<img class=answerImage src="' +
      trivia[indexQandA].image +
      ' ">'
    ); // adds answer image
    indexQandA++; // increments index which will load next question when loadQandA() is called again
    if (indexQandA < trivia.length) {
      setTimeout(function () {
        loadQandA();
        $(".answerImage").remove();
      }, 3000); // removes answer image from previous round
    } else {
      setTimeout(function () {
        $(".question").remove();
        $(".timeRemaining").remove();
        $(".answerImage").remove();
        $(".answers").append("<h4 class= answersAll end>CORRECT ANSWERS: " + correctAnswers + "</h4>");
        $(".answers").append("<h4 class= answersAll end>INCORRECT ANSWERS: " + incorrectAnswers + "</h4>");
        $(".answers").append("<h4 class= answersAll end>UNANSWERED QUESTIONS: " + unansweredQuestions + "</h4>");
        setTimeout(function () {
          location.reload(); // page reload to go back to start. 
        }, 7000);
      }, 5000);
    }
  }

  $(".startButton").on("click", function () {
    $(".startButton");
    startGame();
  });
}); // end of document ready

/// 99 problems and broken code is all of them

// radio buttons not displaying
// curser is in input field??