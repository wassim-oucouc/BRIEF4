const section = document.querySelectorAll('.Question');
const nextButton = document.querySelectorAll('.next');
const backButton = document.querySelectorAll('.back');
let count = 0;
let score = 0;
const questions = [
    {
        question: "What does 'console.log()' do in JavaScript?",
        choices: ["Logs output to the console", "Creates an alert", "Writes to a file", "None of the above"],
        answer: 0
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        choices: ["//", "/* */", "<!-- -->", "Both // and /* */"],
        answer: 3
    },
    {
        question: "What is the output of 'typeof NaN'?",
        choices: ["number", "undefined", "NaN", "object"],
        answer: 0
    },
    {
        question: "Which method is used to convert a JSON string to a JavaScript object?",
        choices: ["JSON.parse()", "JSON.stringify()", "eval()", "parseInt()"],
        answer: 0
    },
    {
        question: "What is the result of '1' + 1?",
        choices: ["2", "11", "NaN", "undefined"],
        answer: 1
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        choices: ["'==' checks value, '===' checks value and type", "'==' checks type, '===' checks value", "No difference", "Both are the same"],
        answer: 0
    },
    {
        question: "What is a closure in JavaScript?",
        choices: ["A function with access to its own scope", "A function with access to the scope of its parent", "Both A and B", "None of the above"],
        answer: 2
    },
    {
        question: "Which of the following is a JavaScript framework?",
        choices: ["Django", "Flask", "React", "Ruby on Rails"],
        answer: 2
    },
    {
        question: "How can you prevent default form submission in JavaScript?",
        choices: ["event.stopPropagation()", "event.preventDefault()", "return false;", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following methods can be used to create an object in JavaScript?",
        choices: ["Object.create()", "new Object()", "Literal notation", "All of the above"],
        answer: 3
    },
];

nextButton.forEach(function (btn) {
    btn.onclick = function () {
        const selectedAnswers = document.querySelectorAll('.form-check-input');
        selectedAnswers.forEach((input, idx) => {
            if (input.checked && idx === questions[count].answer) {
                score++;
            }
        });

        section[count].classList.remove("d-block");
        section[count].classList.add("d-none");

        count++;

        if (count >= section.length) {
            displayFinalScore();
            return;
        }

        section[count].classList.remove("d-none");
        section[count].classList.add("d-block");
    };
});

backButton.forEach(function (backbtn) {
    backbtn.onclick = function () {
        section[count].classList.remove("d-block");
        section[count].classList.add("d-none");

        count--;

        if (count < 0) count = 0;

        section[count].classList.remove("d-none");
        section[count].classList.add("d-block");
    };
});


function displayFinalScore() {
    alert(`Your final score is: ${score} out of ${questions.length}`);
    restartQuiz();
}
function restartQuiz() {
    score = 0; 
    count = 0; 
    section.forEach((sec) => {
        sec.classList.add("d-none");
    });
    section[0].classList.remove("d-none");
}
