const quiz = document.getElementById("quiz");
const choiceA = document.getElementById("1");
const choiceB = document.getElementById("2");
const choiceC = document.getElementById("3");
const choiceD = document.getElementById("4");
const choiceE = document.getElementById("5");
const question = document.getElementById("question");


let questions = [
    {
        question: "What pitching stat is abbreviated with a K?",
        choiceA: "Win",
        choiceB: "Strikeout",
        choiceC: "Walk",
        choiceD: "ERA",
        choiceE: "Errors",
        correct: "B",
    },
    {
        question: "Who was the first person to repeat as Cy Young winner?",
        choiceA: "Sandy Koufax",
        choiceB: "Greg Maddux",
        choiceC: "Steve Carlton",
        choiceD: "Roger Clemens",
        choiceE: "Tom Seaver",
        correct: "A",
    },
    {
        question: "Which player won the 2014 American League MVP Award?",
        choiceA: "Miguel Cabrera",
        choiceB: "Mookie Betts",
        choiceC: "Jose Altuve",
        choiceD: "Robinson Cano",
        choiceE: "Mike Trout",
        correct: "E",
    },
    {
        question: "When during a baseball game are fans encouraged to stretch?",
        choiceA: "5th Inning",
        choiceB: "6th Inning",
        choiceC: "7th Inning",
        choiceD: "8th Inning",
        choiceE: "9th Inning",
        correct: "C",
    },
    {
        question: "Which of these major awards was created first?",
        choiceA: "CY Young",
        choiceB: "Rookie of the Year",
        choiceC: "Manager of the Year",
        choiceD: "MVP",
        choiceE: "Comeback POY",
        correct: "D",
    },
];


// Once answered, new question appears
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;


function renderQuestion() {

    let q = questions[runningQuestionIndex];
    question.textContent = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

