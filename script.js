// Variables
let viewHighscores = document.querySelector("#viewHighscores");
let highscoreList = document.querySelector("#highscoreList");
let timer = document.querySelector("#timer");
let startButton = document.querySelector("#startButton");
let saveButton = document.querySelector("#saveButton");
let saveScore = document.querySelector("#saveScore");
let userInitials = document.querySelector("#userInitials");
let imputForm = document.querySelector("#imputForm");
let imputList = document.querySelector("#imputList");
let secondsleft = 60;
let score = 0;
let interval;

// Timer and questions activated once start button clicked
function beginquiz() {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("p").style.display = "none";
    document.getElementById("viewHighscores").style.display = "none";
    renderQuestion();
    countdown();
}

function countdown() {
    interval = setInterval(function () {
        secondsleft--;
        console.log(secondsleft);
        document.getElementById("timer").innerHTML = "Timer: " + secondsleft;
        endgame();
    }, 1000);
}


// If answered inccorrectly, then sub 10 secs

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++;
        runningQuestionIndex++ & renderQuestion();
        console.log("correct");
        console.log("Score", score);
    } else {
        secondsleft -= 10;
        if (secondsleft <= 0 || questions.length <= 0); {
            endgame();
            console.log("wrong");
        }
    }
}

// When all questions answered or timer === 0, then stop game
function endgame() {
    if (secondsleft <= 0 || questions.length <= 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Times up!";
        document.getElementById("viewHighscores").style.display = "block";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("saveScore").innerHTML = "Save your score! Your score is: " + score;
        document.getElementById("h1").innerHTML = "Congratulations! Your score is: " + score;
        document.getElementById("h1").style.display = "block";
    }
}


startButton.addEventListener("click", beginquiz);
viewHighscores.addEventListener("click", highscoreList);


// When stop game, then save initials and score for highscores
function renderImputs() {

    for (var i = 0; i < questions.length; i++) {
        var imput = questions[i];

        var li = document.createElement("li");
        li.textContent = imput;
        li.setAttribute("data-index", i);
        imputList.appendChild(li);
    }
}

saveButton.addEventListener("submit", function(event) {
    event.preventDefault();

    var inputValues = {
        userInitials: userInitials.value.trim(),
        score: score.value.trim(),
    }
    if (imputValues === "") {
        return;
    }

});
