"use strict";

class Question {
    constructor() {

    }

    generateNewExpression() {
        if (Math.random() > 0.5) {
            this.operator = "+";
            this.leftValue = Math.floor(Math.random() * 20) + 1;
            this.rightValue = Math.floor(Math.random() * 20) + 1;
        }
        else {
            this.operator = "-";
            this.leftValue = Math.floor(Math.random() * 30) + 10;
            this.rightValue = Math.floor(Math.random() * this.leftValue) + 1;
        }
    }

    calcExpressionResult() {
        if (this.operator === "+")
            return this.leftValue + this.rightValue;
        else
            return this.leftValue - this.rightValue;
    }

    toString() {
        return this.leftValue + " " + this.operator + " " + this.rightValue + " = ";
    }
}

var question = new Question();
var score = 0;

generateNewQuestion(question);

function generateNewQuestion(question) {
    question.generateNewExpression();
    printQuestion(question);
    return question;
}

function printQuestion(question) {
    document.getElementById("question").innerHTML = question.toString();
    document.getElementById("field").value = "";
}

function onSubmitClick() {
    var answer = document.getElementById("field").value;
    if (answer == question.calcExpressionResult()) {
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
