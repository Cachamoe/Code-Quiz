// Variables
let viewHighscores = document.querySelector("#viewHighscores");
let highscoreList = document.querySelector("#highscoreList");
let timer = document.querySelector("#timer");
let startButton = document.querySelector("#startButton");
let saveButton = document.querySelector("#saveButton");
let saveScore = document.querySelector("#saveScore");
let userInitials = document.querySelector("#userInitials");
let inputForm = document.querySelector("#inputForm");
let inputList = document.querySelector("#inputList");
let secondsleft = 45;
let score = 0;
let interval;
let userInput = [];


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
    let q = questions[runningQuestionIndex];
    if (secondsleft <= 0 || questions.length <= 0 || q === undefined) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Times up!";
        document.getElementById("viewHighscores").style.display = "block";
        document.getElementById("quiz").style.display = "none";
        document.getElementById("saveScore").innerHTML = "Save your score! Your score is: " + score;
        document.getElementById("h1").innerHTML = "Congratulations! Your score is: " + score;
        document.getElementById("h1").style.display = "block";
        $("#highscoreList").modal("show");
    }
}


startButton.addEventListener("click", beginquiz);
viewHighscores.addEventListener("click", highscoreList);
saveScore.addEventListener("click", renderInputs);


// When stop game, then save initials and score for highscores


// A) Render a new li for each input
retrieveItems();

function renderInputs() {

    inputList.textContent = userInput.length;

    for (var i = 0; i < userInput.length; i++) {
        var input = userInput[i];

        var li = document.createElement("li");
        li.textContent = `Initials: ${input.userName} Score: ${input.score}`;
        inputList.appendChild(li);
    }
}


// B) Retrieve Items
function retrieveItems() {

    var storedItems = JSON.parse(localStorage.getItem("userInput"))

    if (storedItems !== null) {
        userInput = storedItems;
    }

    console.log(userInput)

    renderInputs();
}

// C) Store Items
function storeItems() {
    localStorage.setItem("userInput", JSON.stringify(userInput));

    retrieveItems();
}


// D) When form is submitted
saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(userInitials);
    var inputValues = userInitials.value;


    if (inputValues === "") {
        return;
    }
    userInput.push({ userName: inputValues, score });
    userInitials.value = "";
    console.log(userInput);
    storeItems();
});

