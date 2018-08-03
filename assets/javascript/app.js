$(document).ready(function () {
  console.log("ready!");
  // onclicks go here
  $("#start").on("click", function () {
    startGame();
    $(".wrapper").show();
    $(this).hide();
  });


  var timeMax = 3;
  var intervalId; //holds setInterval under run()
  var running = false; // boolean to toggle
  var select; //placeholder for selected
  var index; // i don't remember what this does
  var userGuess = ""; // selected answer from radio button// Needed????
  var correctCount = 0;
  var wrongCount = 0;
  var unansweredCount = 0;
  var newArray = [];


  // var message = "Game Over!";

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

  // ******** working for loop *********
  // for (var i = 0; i < trivia.length; i++) {
  //   console.log(trivia[i].question);
  //   console.log(trivia[i].choices);
  // }


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
      $("#answer").html("<p>Time is up! The correct answer is: " + trivia.choices[trivia.answer] + "</p>");
      wtf();
      unansweredCount++;
    } else {
      $("#timer").html("<h1>" + timeMax + " seconds remaining</h1>");
      timeMax--;
      console.log(timeMax);
    }
  }

  // running everything to html
  function display() {
    for (var i = 0; i < trivia.length; i++) {
      $("#question").html('<h1>Question: ' + trivia.question + '</h1>');
      $("<div>").addClass("answer-choice");
      $("<div>").html(trivia.trivia[i]); /// ********* needs to be a hide, then show
      $("#answer").append$("<div>");
      console.log(trivia[i].question);
    }

    // validate questions
    $(".answer-choice").on("click", function () { /// .answerchoice being made in display function

      // right or wrong guess
      for (var i = 0; i < trivia.length; i++) {
        // stop timer, check guess, display correct, add to total
        if (userGuess === trivia.answer) {
          stop();
          correctCount++;
          wtf();
        } else {
          // stop timer, check guess, display wrong, add to total
          stop();
          wrongCount++;
          $("#answer").html('<p>Wrong! The Correct answer is: ' + trivia.choices[trivia.answer] + '</p>');
          wtf();
        }
      }

    })
  }

  function wtf() {

    for (var i = 0; i < trivia.length; i++) {
      newArray.push(select);
      options.splice(index, 1);
    }

    setTimeout(function () {
      $("#answer").empty();
      timeMax = 5;

      if (wrongCount + correctCount + unansweredCount === options.length) {
        $("#question").empty();
        $("#question").html('<h3>Game Over! Here\'s how you did: </h3>');
        $("#answer").append("<h4>Correct: " + correctCount + "</h4>");
        $("#answer").append("<h4>Incorrect: " + wrongCount + "</h4>");
        $("#answer").append("<h4>Unanswered: " + unansweredCount + "</h4>");
        $("#reset").show();
        correctCount = 0;
        wrongCount = 0;
        unansweredCount = 0;

      } else {

        run();
        display();

      }
    }, 3000);
  };

  //reset button
  $("#reset").on("click", function () {
    $("#reset").hide();
    $("#answer").empty();
    $("#question").empty();
    run();
    display();
  })

  // Questions...
  // Async extending time of displayed questions?? fixed
  // lost full second on countdown() fixed
  // nothing works except the timer
  // printing questions at on time... not anymore! 

}); // end document.ready