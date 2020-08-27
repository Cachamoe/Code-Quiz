// Variables
let interval;
let viewHighscores = document.querySelector("#viewHighscores");
let highscoreList = document.querySelector("#highscoreList");
let timer = document.querySelector("#timer");
let startButton = document.querySelector("#startButton");
let saveButton = document.querySelector("#saveButton");
let userInitials = document.querySelector("#userInitials");
let secondsleft = 60;
let score = 0;


// Timer and questions activated once start button clicked
function beginquiz() {
    countdown();
    renderQuestion();
    document.getElementById("quiz").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("h1").style.display = "none";
    document.getElementById("p").style.display = "none";
    document.getElementById("viewHighscores").style.display = "none";
}

function countdown() {
    interval = setInterval(function () {
        secondsleft--;
        console.log(secondsleft);
        endgame();
    }, 1000);

    document.getElementById("timer").innerHTML = "Timer: " + secondsleft;
}


// If answered inccorrectly, then sub 10 secs

function checkAnswer(answer) {
    if (questions[runningQuestionIndex].correct == answer) {
        score++;
        console.log("correct");
    } else {
        secondsleft -= 10;
        if (secondsleft <= 0); {
            endgame()
            console.log("wrong");
        }
    }
}

// When all questions answered or timer === 0, then stop game
function endgame() {
    if (secondsleft <= 0 || questions.length === 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Times up!";
        document.getElementById("viewHighscores").style.display = "block";
    }
}


startButton.addEventListener("click", beginquiz);
viewHighscores.addEventListener("click", highscoreList);



// When stop game, then save initials and score for highscores
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("Score", JSON.stringify(checkAnswer)),
        localStorage.setItem("Initials", JSON.stringify(userInitials))
})




