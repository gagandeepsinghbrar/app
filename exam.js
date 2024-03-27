const questions = [
    {
        question: "Which of the following is NOT considered unprofessional conduct for a dental professional in California?",
        choices: [
            "Failing to maintain patient confidentiality",
            "Performing dental procedures without proper training and licensure",
            "Providing dental services to a patient without informed consent",
            "Refusing treatment to a patient based on their race or ethnicity"
        ],
        answer: "Refusing treatment to a patient based on their race or ethnicity"
    },
    {
        question: "In California, who is responsible for maintaining patient records?",
        choices: [
            "The dentist only",
            "The dental hygienist only",
            "Both the dentist and the dental hygienist",
            "The dental assistant"
        ],
        answer: "Both the dentist and the dental hygienist"
    },
    {
        question: "Which of the following statements regarding advertising by dental professionals in California is true?",
        choices: [
            "Advertising must always include specific pricing information for services.",
            "False advertising is not considered unprofessional conduct.",
            "Advertising must not be false, misleading, or deceptive.",
            "Advertising is regulated by federal agencies, not state laws."
        ],
        answer: "Advertising must not be false, misleading, or deceptive."
    },
    {
        question: "According to California dental law, which of the following is NOT required to be included in a written treatment plan?",
        choices: [
            "The anticipated outcomes of the treatment",
            "A description of the proposed treatment",
            "The patient's financial history",
            "The risks and benefits of the proposed treatment"
        ],
        answer: "The patient's financial history"
    },
    {
        question: "In California, dental professionals must report suspected cases of child abuse or neglect:",
        choices: [
            "Only if they witness the abuse firsthand",
            "Only if the patient's parent or guardian gives permission",
            "As mandated reporters, regardless of witnessing the abuse firsthand",
            "Only if the abuse occurs within the dental office"
        ],
        answer: "As mandated reporters, regardless of witnessing the abuse firsthand"
    },
    {
        question: "Which of the following actions would NOT be a violation of patient confidentiality under California law?",
        choices: [
            "Discussing a patient's treatment plan with a colleague for consultation purposes",
            "Posting a patient's dental records on social media without their consent",
            "Sending a patient's records to another healthcare provider at the patient's request",
            "Sharing a patient's dental records with a family member without the patient's consent"
        ],
        answer: "Sending a patient's records to another healthcare provider at the patient's request"
    },
    {
        question: "In California, dental professionals must renew their licenses every:",
        choices: [
            "Three years",
            "Five years",
            "Two years",
            "Ten years"
        ],
        answer: "Two years"
    },
    {
        question: "What is the primary purpose of the Dental Board of California?",
        choices: [
            "To promote the dental profession",
            "To regulate the practice of dentistry and protect the public",
            "To provide continuing education for dental professionals",
            "To establish dental fee schedules"
        ],
        answer: "To regulate the practice of dentistry and protect the public"
    },
    {
        question: "Which of the following is NOT considered a violation of the California Dental Practice Act?",
        choices: [
            "Providing dental services outside of regular business hours",
            "Failing to properly sterilize dental instruments",
            "Billing for services not provided",
            "Performing dental procedures with informed consent"
        ],
        answer: "Providing dental services outside of regular business hours"
    },
    {
        question: "How should dental professionals in California handle a patient's request for their dental records?",
        choices: [
            "Refuse to provide the records unless a court order is obtained",
            "Provide the records only to the patient's attorney",
            "Provide the records to the patient or their authorized representative upon request",
            "Charge a fee for providing the records, regardless of the circumstances"
        ],
        answer: "Provide the records to the patient or their authorized representative upon request"
    },
    {
        question: "In California, what is the minimum age requirement for consent to dental treatment without parental consent?",
        choices: [
            "16 years old",
            "18 years old",
            "14 years old",
            "21 years old"
        ],
        answer: "14 years old"
    },
    {
        question: "Which of the following is NOT a duty of a dental assistant in California?",
        choices: [
            "Taking dental x-rays",
            "Administering local anesthesia",
            "Performing surgical dental procedures",
            "Providing patient education"
        ],
        answer: "Performing surgical dental procedures"
    },
    {
        question: "What action should a dental professional take if they suspect a colleague is impaired by drugs or alcohol while on duty?",
        choices: [
            "Ignore the situation to avoid conflict",
            "Report the suspicion to the Dental Board of California",
            "Confront the colleague directly",
            "Document the suspicion in the patient's records"
        ],
        answer: "Report the suspicion to the Dental Board of California"
    },
    {
        question: "Which of the following statements regarding dental advertising in California is true?",
        choices: [
            "Dental professionals are prohibited from advertising their services on social media.",
            "Advertising must include the dentist's full name, license number, and degree.",
            "Advertising must always include testimonials from satisfied patients.",
            "Advertising is regulated by local municipalities, not state laws."
        ],
        answer: "Advertising must include the dentist's full name, license number, and degree."
    },
    {
        question: "In California, how often must dental X-ray equipment be inspected and registered with the state?",
        choices: [
            "Every six months",
            "Annually",
            "Biennially",
            "Every five years"
        ],
        answer: "Biennially"
    },
    {
        question: "Under California law, how long must dental records be retained after the last date of treatment?",
        choices: [
            "1 year",
            "3 years",
            "5 years",
            "7 years"
        ],
        answer: "7 years"
    },
    {
        question: "Which of the following is NOT considered unprofessional conduct for a dental professional in California?",
        choices: [
            "Performing unnecessary dental procedures to increase revenue",
            "Failing to inform patients of alternative treatment options",
            "Refusing treatment to patients based on their sexual orientation",
            "Prescribing medication without a valid reason"
        ],
        answer: "Refusing treatment to patients based on their sexual orientation"
    },
    {
        question: "What is the purpose of informed consent in dental practice?",
        choices: [
            "To ensure patients understand the risks and benefits of treatment",
            "To protect dental professionals from liability",
            "To guarantee payment for services rendered",
            "To expedite the treatment process"
        ],
        answer: "To ensure patients understand the risks and benefits of treatment"
    },
    {
        question: "Which of the following statements regarding dental malpractice insurance in California is true?",
        choices: [
            "Dental malpractice insurance is optional for dental professionals.",
            "Dental malpractice insurance is provided free of charge by the state.",
            "Dental malpractice insurance is required by law for all dental professionals.",
            "Dental malpractice insurance only covers claims filed by patients under the age of 18."
        ],
        answer: "Dental malpractice insurance is required by law for all dental professionals."
    },
    {
        question: "In California, who is authorized to perform dental hygiene procedures?",
        choices: [
            "Only licensed dental hygienists",
            "Only licensed dentists",
            "Both licensed dental hygienists and licensed dentists",
            "Only individuals with formal training in dental hygiene, regardless of licensure"
        ],
        answer: "Both licensed dental hygienists and licensed dentists"
    }
]




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



