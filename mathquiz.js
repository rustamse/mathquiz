"use strict";

var key = [];
var score = 0;

generateNewQuestion(key);

function generateNewQuestion(legend) {
    legend[0] = Math.random() > 0.5 ? "+" : "-";

    if (legend[0] == "+") {
        legend[1] = Math.floor(Math.random() * 20) + 1;
        legend[2] = Math.floor(Math.random() * 20) + 1;
        legend[3] = legend[1] + legend[2];
        printQuestion(legend);
        return legend;
    } else {
        legend[1] = Math.floor(Math.random() * 30) + 10;
        legend[2] = Math.floor(Math.random() * legend[1]) + 1;
        legend[3] = legend[1] - legend[2];
        printQuestion(legend);
        return legend;
    }
}

function printQuestion(output) {
    document.getElementById("question").innerHTML = key[1] + " " + key[0] + " " + key[2] + " = ";
    document.getElementById("field").value = "";
}

function onSubmitClick() {
    var answer = document.getElementById("field").value;
    if (answer == key[3]) {
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
