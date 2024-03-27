const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        choices: ["William Shakespeare", "Leo Tolstoy", "Mark Twain", "Charles Dickens"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Pb", "Fe"],
        answer: "Au"
    },
    {
        question: "Which element has the atomic number 8?",
        choices: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
        answer: "Oxygen"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 60 * 60; // 60 minutes
let ranOutOfTime = false;
let allAnswered = false;
function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    const questionNumber = String(currentQuestionIndex + 1) + '.';
    document.getElementById("question").textContent = questionNumber + questionObj.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices
    questionObj.choices.forEach((choice, index) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "choice";
        radio.value = choice;
        label.appendChild(radio);
        label.append(choice);

        // Add event listener for when the radio button is selected
        radio.addEventListener('change', function() {
            questionObj.answered = this.value; // Update the question object with the selected answer
        });
        
        // Append the label and a line break to the choices container
        choicesContainer.appendChild(label);
        choicesContainer.appendChild(document.createElement("br")); // This adds a line break
    });
}

function prepareAndSubmitResults() {
    let done = true;
    allAnswered = questions.every(q => !!q.answered);
    if (!ranOutOfTime && !allAnswered) {     
        alert("Please answer all questions before submitting.");
        return;
    }

    // Example: Sending results to a server
    fetch('/submit-quiz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ result_data: JSON.stringify(questions)}),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => console.error('Error:', error));
}

function showResult() {
    prepareAndSubmitResults();
    showScore()
}

function showScore() {
    if (!ranOutOfTime && !allAnswered) {
        return;
    }
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = `Your score is: ${score} / 50`;
}
function nextQuestion() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice && selectedChoice.value === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // last page.
        showResult();
    }
}

function backQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function startTimer(duration) {
    const timerElement = document.getElementById("timer");
    let minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(duration / 60, 10);
        seconds = parseInt(duration % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerElement.textContent = minutes + ":" + seconds;

        if (--duration < 0) {
            ranOutOfTime = true;
            clearInterval(interval);
            showResult();
        }
    }, 1000);
}

document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("back").addEventListener("click", backQuestion);
document.getElementById("submit").addEventListener("click", showResult);

// Initialize quiz
displayQuestion();
startTimer(timer);
