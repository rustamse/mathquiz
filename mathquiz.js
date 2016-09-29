"use strict";

var question = {
    operator: "+",
    leftValue: 0,
    rightValue: 0,
    expectedResult: 0
};
var score = 0;

generateNewQuestion(question);

function generateNewQuestion(question) {
    if (Math.random() > 0.5) {
        question.operator = "+";
        question.leftValue = Math.floor(Math.random() * 20) + 1;
        question.rightValue = Math.floor(Math.random() * 20) + 1;
        question.expectedResult = question.leftValue + question.rightValue;
    }
    else {
        question.operator = "-";
        question.leftValue = Math.floor(Math.random() * 30) + 10;
        question.rightValue = Math.floor(Math.random() * question.leftValue) + 1;
        question.expectedResult = question.leftValue - question.rightValue;
    }

    printQuestion(question);
    return question;
}

function printQuestion(question) {
    document.getElementById("question").innerHTML = question.leftValue + " " + question.operator + " " + question.rightValue + " = ";
    document.getElementById("field").value = "";
}

function onSubmitClick() {
    var answer = document.getElementById("field").value;
    if (answer == question.expectedResult) {
        document.getElementById("check").innerHTML = "CORRECT! GOOD JOB! NOW TRY THIS ONE.";
        score += 1;
        if (score == 10) {
            finishQuestons();
        } else {
            document.getElementById("score").innerHTML = score;
            generateNewQuestion(question);
        }
    } else {
        document.getElementById("check").innerHTML = "WRONG. TRY AGAIN!";

    }
}

function finishQuestons() {
    document.getElementById("quiz").innerHTML = "<p>Congratulations! You finished 10 problems!</p>";
    var restart = document.createElement("INPUT");
    restart.setAttribute("value", "Click to start again");
    restart.setAttribute("type", "submit");
    restart.setAttribute("onclick", "location.reload(true)");
    document.getElementById("quiz").appendChild(restart);
}
