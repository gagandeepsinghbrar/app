const questions = [
    { question: "What is 2 + 2?", choices: ["2", "3", "4", "5"], answer: "4" },
    // Add more questions as needed
];
let currentQuestionIndex = 0;
let score = 0;
let timer = 60 * 60; // 60 minutes

function displayQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
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
        choicesContainer.appendChild(label);
    });
}

function showResult() {
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
