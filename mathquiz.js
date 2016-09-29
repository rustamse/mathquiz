"use strict";

var key = {
    operator: "+",
    leftValue: 0,
    rightValue: 0,
    expectedResult: 0
};
var score = 0;

generateNewQuestion(key);

function generateNewQuestion(legend) {
    legend.operator = Math.random() > 0.5 ? "+" : "-";

    if (legend.operator == "+") {
        legend.leftValue = Math.floor(Math.random() * 20) + 1;
        legend.rightValue = Math.floor(Math.random() * 20) + 1;
        legend.expectedResult = legend.leftValue + legend.rightValue;
        printQuestion(legend);
        return legend;
    } else {
        legend.leftValue = Math.floor(Math.random() * 30) + 10;
        legend.rightValue = Math.floor(Math.random() * legend.leftValue) + 1;
        legend.expectedResult = legend.leftValue - legend.rightValue;
        printQuestion(legend);
        return legend;
    }
}

function printQuestion(legend) {
    document.getElementById("question").innerHTML = legend.leftValue + " " + legend.operator + " " + legend.rightValue + " = ";
    document.getElementById("field").value = "";
}

function onSubmitClick() {
    var answer = document.getElementById("field").value;
    if (answer == key.expectedResult) {
        document.getElementById("check").innerHTML = "CORRECT! GOOD JOB! NOW TRY THIS ONE.";
        score += 1;
        if (score == 10) {
            finishQuestons();
        } else {
            document.getElementById("score").innerHTML = score;
            generateNewQuestion(key);
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
