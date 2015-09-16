var key = [];
var score = 0;

makeQuestion(key);

function makeQuestion(legend) {
	legend[0] = Math.random() > 0.5 ? "+" : "-";

	if(legend[0] == "+") {
		legend[1] = Math.floor(Math.random() * 20) + 1;
		legend[2] = Math.floor(Math.random() * 20) + 1;
		legend[3] = legend[1] + legend[2];
		refreshQuestion(legend);
		return legend;
	} else {
		legend[1] = Math.floor(Math.random() * 30) + 10;
		legend[2] = Math.floor(Math.random() * legend[1]) + 1;
		legend[3] = legend[1] - legend[2];
		refreshQuestion(legend);
		return legend;
	}
}

function refreshQuestion(output) {
	document.getElementById("question").innerHTML = key[1] + " " + key[0] + " " + key[2] + " = ";
	document.getElementById("field").value = "";
}

function checker() {
	var answer = document.getElementById("field").value;
	if(answer == key[3]) {
		document.getElementById("check").innerHTML = "CORRECT! GOOD JOB! NOW TRY THIS ONE.";
		score += 1;
		if(score == 10) {
			end();
		} else {
			document.getElementById("score").innerHTML = score;
			makeQuestion(key);
		}
	} else {
		document.getElementById("check").innerHTML = "WRONG. TRY AGAIN!";

	}
}

function end() {
	document.getElementById("quiz").innerHTML = "<p>Congratulations! You finished 10 problems!</p>";
	var restart = document.createElement("INPUT");
	restart.setAttribute("value", "Click to start again");
	restart.setAttribute("type", "submit");
	restart.setAttribute("onclick", "location.reload(true)");
	document.getElementById("quiz").appendChild(restart);
}
