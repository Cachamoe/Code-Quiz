const quiz = document.getElementById("quiz");
const choiceA = document.getElementById("1");
const choiceB = document.getElementById("2");
const choiceC = document.getElementById("3");
const choiceD = document.getElementById("4");
const choiceE = document.getElementById("5");

let questions = [
    {question : "To be determined?",
    choiceA : "To be determined",
    choiceB : "To be determined",
    choiceC : "To be determined",
    choiceD : "To be determined",
    choiceE : "To be determined",
    correct : "B",
    },
    {question : "To be determined?",
    choiceA : "To be determined",
    choiceB : "To be determined",
    choiceC : "To be determined",
    choiceD : "To be determined",
    choiceE : "To be determined",
    correct : "A",
    },
    {question : "To be determined?",
    choiceA : "To be determined",
    choiceB : "To be determined",
    choiceC : "To be determined",
    choiceD : "To be determined",
    choiceE : "To be determined",
    correct : "E",
    },
    {question : "To be determined?",
    choiceA : "To be determined",
    choiceB : "To be determined",
    choiceC : "To be determined",
    choiceD : "To be determined",
    choiceE : "To be determined",
    correct : "C",
    },
    {question : "To be determined?",
    choiceA : "To be determined",
    choiceB : "To be determined",
    choiceC : "To be determined",
    choiceD : "To be determined",
    choiceE : "To be determined",
    correct : "D",
    },
];

// Once answered, new question appears

let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion() {
    let q = questions[runningQuestionIndex];
    questions.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;

}
if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
}