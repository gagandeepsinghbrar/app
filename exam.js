const questions = require('questions.js')
const marker = document.getElementById("mark-icon")
let interval;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genNoScoreIndices() {
    const randomNumbers = [];
    const minNumber = 0;
    const maxNumber = 59;
    const numberOfRandomNumbers = 10;

    for (let i = 0; i < numberOfRandomNumbers; i++) {
        randomNumbers.push(getRandomNumber(minNumber, maxNumber));
    } 
    return randomNumbers;
}


if (isPSIExam()) {
    const indices = genNoScoreIndices();
    for(i in indices) {
        questions[i].noScore = true;
    }
}

let currentQuestionIndex = 0;
let score = 0;
let timer = 60 * 60; // 60 minutes
let ranOutOfTime = false;
let allAnswered = false;
function displayQuestion() {
    marker.style.visibility = 'hidden';
    const questionObj = questions[currentQuestionIndex];
    const questionNumber = String(currentQuestionIndex + 1) + '. ';
    document.getElementById("question").textContent = questionNumber + questionObj.question;
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = ""; // Clear previous choices
    renderMarkerIfNeeded();
    questionObj.choices.forEach((choice, index) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "choice";
        radio.value = choice;
        if (questionObj.answered && choice === questionObj.answered) {
            radio.checked = true;
        }
        label.appendChild(radio);
        label.append(choice);

        // Add event listener for when the radio button is selected
        radio.addEventListener('change', function() {
            questionObj.answered = this.value; // Update the question object with the selected answer
            showSubmitExamCTA()
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
    // clear timer
    clearInterval(interval)
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

function showResult(fromLastPage) {
    if (fromLastPage) {
        currentQuestionIndex--;
    }
    prepareAndSubmitResults();
    showScore()
}

function scorableQuestions() {
    if (!isPSIExam()) return questions.length
    else {
        return questions.filter(q => q.noScore).length;
    }
}

function showScore() {
    if (!ranOutOfTime && !allAnswered) {
        return;
    }
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = `Your score is: ${score} / ${scorableQuestions()}`;
    showPassFailStatus();
}

function showPassFailStatus() {
        const pof = document.getElementById("pass_or_fail");
        pof.style.display = "block";
        const passOrFail = (((score/questions.length)*100) >= 75) ? "PASS" : "FAIL";
        pof.textContent = passOrFail;
        pof.style.color = passOrFail === "PASS" ? "green": "red";

}

function isPSIExam() {
    return questions.length === 60;
}

function nextQuestion() {
    document.getElementById("mark-icon").style.visibility = 'hidden';
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice
     && selectedChoice.value === questions[currentQuestionIndex].answer
     && !questions[currentQuestionIndex].noScore) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        showSubmitExamCTA();
        renderMarkerIfNeeded()
    } else {
        // last page.
        showResult(true);
    }
}
function showSubmitExamCTA() {
    if (questions.every(q => q.answered)) {
        document.getElementById("submit_exam").style.display = 'block';
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
    interval = setInterval(function () {
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

function markQuestion() {
    const questionObj = questions[currentQuestionIndex];
    if (questionObj.marked) {
        delete questionObj.marked;
        document.getElementById("mark-icon").style.visibility = 'hidden';
    } else {
        questionObj.marked = true;
        renderMarkerIfNeeded();
    }
}

function renderMarkerIfNeeded() {
    const questionObj = questions[currentQuestionIndex];
    if (questionObj.marked) {
        document.getElementById("mark-icon").style.visibility = 'visible';
    }
}

function submitExam() {
    showResult(true)
}

document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("back").addEventListener("click", backQuestion);
document.getElementById("marker").addEventListener("click", markQuestion);
document.getElementById("submit_exam").addEventListener("click", submitExam);

document.addEventListener("DOMContentLoaded", function() {
    // Get the element with id "mark-icon"
    var markIcon = document.getElementById("mark-icon");
    var sub = document.getElementById("submit_exam");

    // Check if the element exists
    if (markIcon) {
        // Set the display property to 'none'
        markIcon.style.visibility = 'hidden';
        sub.style.display = 'none';
    }
});
// Initialize quiz
displayQuestion();
startTimer(timer);



