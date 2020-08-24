// Variables
var viewhighscores = document.querySelector("#viewhighscores");
var highscorelist = document.querySelector("#highscorelist");
var timer = document.querySelector("#timer");
var startbutton = document.querySelector("#startbutton");
var questions = ["a", "b", "c", "d", "e"];
var answers = ["a", "b", "c", "d", "e"];
var score = [];


// Timer and questions activated once start button clicked
 function beginquiz() {
    if (startbutton);
    countdown() && questions[0];
}
 function countdown() {
    var timer = setInterval(function() {
        secondsleft--;
    }, 1,000); 
}
 

// Once answered, new question appears
  function newquestion() {
    if (answers[0] === true);
         questions[1] && score ++;
    if (answers[1] === true);
         questions[2] && score ++;
    if (answers[2] === true);
         questions[3] && score ++;
    if (answers[3] === true);
         questions[4] && score ++;
    if (answers[4] === true);
         score ++;
}


// If answered inccorrectly, then sub 10 secs
   function inccorrect() {
    if (answers !== true);
         secondsleft - 10;
}


// When all questions answered or timer === 0, then stop game
   function endgame() {   
    if (secondsleft === 0 || questions === 0) {
          clearInterval(timer);
          sendmessage("Times Up!");
        }
}


startbutton.addEventListener("click", beginquiz);
viewhighscores.addEventListener("click", highscorelist);


// When stop game, then save initials and score for highscores
    function Save() {
        if (endgame());
        JSON.stringify(
            localStorage.setItem("Score", score),
            highscorelist.setItem("Highscores", highscorelist)
        )
    }
