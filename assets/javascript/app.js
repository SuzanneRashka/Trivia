$(document).ready(function () {
    console.log("ready!");
    $("#timer").append('<h1>' + '</h1>')


});

var timeMax = 5;
var timerId = setInterval(countdown, 1000);
var timerOutput;
var timerMessage;

function countdown() {
    //catch end of count
    if (timeMax == 0) {
        clearTimeout(timerId);
        timerMessage = $("#timer").html('<h1>Time\'s Up</h1>');
    } else {
        timerOutput = $("#timer").html('<h1>' + timeMax + ' seconds remaining.</h1>')
        timeMax--;
        console.log(timeMax);
    }
}