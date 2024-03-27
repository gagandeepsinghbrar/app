console.log('hello world')
const questions = [
    {
        question: "A patient arrives at your dental office and requests to see their dental records. What should you do?",
        choices: ["Provide the patient with their dental records immediately", "Ask the patient to fill out a request form and provide the records within a reasonable timeframe", "Refuse to provide the records until the patient pays a fee", "Deny the request citing patient privacy laws"],
        answer: "Ask the patient to fill out a request form and provide the records within a reasonable timeframe"
    },
    {
        question: "What is the correct procedure when a patient refuses to consent to a dental procedure recommended by the dentist?",
        choices: ["Proceed with the procedure without consent", "Respect the patient's decision and discuss alternative treatment options", "Convince the patient to change their mind by providing more information", "Refer the patient to another dentist for treatment"],
        answer: "Respect the patient's decision and discuss alternative treatment options"
    },
    {
        question: "How should you handle a situation where a patient arrives intoxicated for their dental appointment?",
        choices: ["Refuse to treat the patient and ask them to leave", "Proceed with the treatment and monitor the patient closely", "Refer the patient to a rehabilitation facility", "Report the incident to the dental board"],
        answer: "Refuse to treat the patient and ask them to leave"
    },
    {
        question: "What steps should be taken if a patient files a complaint against the dentist for malpractice?",
        choices: ["Advise the patient to seek legal counsel and refrain from involvement in the matter", "Convince the patient to withdraw the complaint to avoid damage to the dentist's reputation", "Discuss the complaint with other staff members to gather evidence", "Ignore the complaint as it is not your responsibility"],
        answer: "Advise the patient to seek legal counsel and refrain from involvement in the matter"
    },
    {
        question: "If you suspect that a colleague is diverting prescription drugs for personal use, what is the appropriate action to take?",
        choices: ["Confront the colleague about your suspicions", "Ignore the situation and focus on your own work", "Report your suspicions to the appropriate authorities", "Discuss your concerns with other colleagues"],
        answer: "Report your suspicions to the appropriate authorities"
    },
    {
        question: "A patient requests a copy of their dental records to be sent to another dental office. What is the correct procedure to follow?",
        choices: ["Provide the patient with the records immediately without question", "Ask the patient to fill out a request form and provide the records within a reasonable time frame", "Refuse to provide the records citing patient privacy laws", "Charge the patient a fee for accessing their records"],
        answer: "Ask the patient to fill out a request form and provide the records within a reasonable time frame"
    },
    {
        question: "During a dental procedure, a patient experiences complications and requests to stop the treatment. What is your responsibility as a dental assistant?",
        choices: ["Ignore the patient's request and continue with the procedure", "Inform the dentist immediately and follow their instructions", "Provide reassurance to the patient and continue with the procedure", "Terminate the procedure and inform the patient of their options"],
        answer: "Inform the dentist immediately and follow their instructions"
    },
    {
        question: "A patient's dental insurance has expired, but they request to proceed with treatment anyway. What should you do?",
        choices: ["Proceed with the treatment and bill the patient directly", "Refuse to provide treatment until the patient renews their insurance", "Ask the patient to sign a waiver releasing the dentist from liability", "Submit a claim to the insurance company and request pre-authorization"],
        answer: "Ask the patient to sign a waiver releasing the dentist from liability"
    },
    {
        question: "A patient arrives for their appointment and refuses to provide personal information required for registration. What should you do?",
        choices: ["Refuse to see the patient and ask them to leave", "Proceed with the treatment and complete the registration process later", "Ask the patient to provide only essential information required for treatment", "Inform the patient that providing personal information is necessary for treatment and offer assistance in completing the forms"],
        answer: "Inform the patient that providing personal information is necessary for treatment and offer assistance in completing the forms"
    },
    {
        question: "What should you do if you accidentally disclose a patient's dental information to another patient?",
        choices: ["Apologize to the patient and inform them of the breach", "Ignore the incident and hope the patient does not notice", "Blame the mistake on a colleague to avoid repercussions", "Keep the incident confidential and do not inform anyone"],
        answer: "Apologize to the patient and inform them of the breach"
    },
    {
        question: "A patient arrives for their appointment intoxicated. How should you handle this situation?",
        choices: ["Refuse to treat the patient and ask them to leave", "Proceed with the treatment and monitor the patient closely", "Refer the patient to a rehabilitation facility", "Report the incident to the dental board"],
        answer: "Refuse to treat the patient and ask them to leave"
    },
    {
        question: "What is the appropriate action to take if you notice a colleague performing a dental procedure without wearing gloves?",
        choices: ["Report the incident to the dentist immediately", "Confront your colleague about the violation", "Ignore the situation as it is not your responsibility", "Inform the patient about the breach of protocol"],
        answer: "Report the incident to the dentist immediately"
    },
    {
        question: "A patient requests to view their dental records. How should you handle this request?",
        choices: ["Provide the records immediately without question", "Ask the patient to fill out a request form and provide the records within a reasonable time frame", "Refuse to provide the records citing patient privacy laws", "Charge the patient a fee for accessing their records"],
        answer: "Ask the patient to fill out a request form and provide the records within a reasonable time frame"
    },
    {
        question: "What should you do if a patient asks you to dispose of their old dental X-rays?",
        choices: ["Throw the X-rays in the regular trash bin", "Shred the X-rays and discard them in the recycling bin", "Keep the X-rays in the patient's file indefinitely", "Follow HIPAA guidelines for the proper disposal of medical records"],
        answer: "Follow HIPAA guidelines for the proper disposal of medical records"
    },
    {
        question: "How should you handle a situation where a patient calls your office to request a prescription refill for a painkiller?",
        choices: ["Refill the prescription over the phone without consulting the dentist", "Request the patient to come in for a consultation before refilling the prescription", "Refuse to refill the prescription without a valid reason", "Ask the patient to provide the dentist's DEA number for verification"],
        answer: "Request the patient to come in for a consultation before refilling the prescription"
    }
]

const marker = document.getElementById("mark-icon")

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



