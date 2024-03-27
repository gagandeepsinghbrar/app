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
    },
    {
        question: "A patient arrives at your dental office and requests to see their dental records. What should you do?",
        choices: [
          "Provide the patient with their dental records immediately",
          "Ask the patient to fill out a request form and provide the records within a reasonable timeframe",
          "Refuse to provide the records until the patient pays a fee",
          "Deny the request citing patient privacy laws"
        ],
        answer: "Ask the patient to fill out a request form and provide the records within a reasonable timeframe"
      },
      {
        question: "During a routine dental examination, you discover that a patient has a severe dental abscess requiring immediate treatment. However, the patient refuses treatment due to financial constraints. What is the most appropriate course of action?",
        choices: [
          "Proceed with the treatment and discuss payment options afterward.",
          "Refer the patient to a public health clinic for subsidized treatment.",
          "Respect the patient's decision and provide supportive care until they are able to afford treatment.",
          "Inform the patient of the potential consequences of delaying treatment and offer to explore alternative financing options."
        ],
        answer: "Inform the patient of the potential consequences of delaying treatment and offer to explore alternative financing options."
      },
      {
        question: "A patient arrives for an appointment with visible signs of intoxication. They insist on receiving dental treatment despite being unable to communicate clearly. How should you respond?",
        choices: [
          "Proceed with treatment as scheduled.",
          "Reschedule the appointment for a later time.",
          "Refer the patient to a medical professional for evaluation.",
          "Request consent from a family member or caregiver before proceeding."
        ],
        answer: "Refer the patient to a medical professional for evaluation."
      },
      {
        question: "During a dental procedure, you accidentally damage a neighboring tooth. The patient is unaware of the mistake. What is your next step?",
        choices: [
          "Inform the patient of the error and offer to repair the damage at no additional cost.",
          "Document the incident in the patient's records and proceed with the planned treatment.",
          "Downplay the severity of the mistake to avoid alarming the patient.",
          "Consult with a colleague for advice on how to address the situation."
        ],
        answer: "Inform the patient of the error and offer to repair the damage at no additional cost."
      },
      {
        question: "A patient requests a dental procedure that you believe is unnecessary and potentially harmful. How should you handle this situation?",
        choices: [
          "Proceed with the procedure to avoid conflict with the patient.",
          "Explain your concerns to the patient and offer alternative treatment options.",
          "Refer the patient to another dentist who may be willing to perform the procedure.",
          "Seek permission from the patient's insurance provider before proceeding with the treatment."
        ],
        answer: "Explain your concerns to the patient and offer alternative treatment options."
      },
      {
        question: "A patient refuses to wear a face mask during their dental appointment, citing personal beliefs. How should you respond?",
        choices: [
          "Allow the patient to proceed with the appointment without a face mask.",
          "Educate the patient on the importance of infection control measures and offer a mask.",
          "Reschedule the appointment for a later date when the patient is willing to comply with safety protocols.",
          "Refuse to provide treatment to the patient until they agree to wear a face mask."
        ],
        answer: "Educate the patient on the importance of infection control measures and offer a mask."
      },
      {
        question: "A patient requests a copy of their dental records to submit to their insurance provider. How should you handle this request?",
        choices: [
          "Provide the patient with a copy of their records free of charge.",
          "Charge a fee for copying and processing the patient's records.",
          "Refuse the request until the patient provides written consent from their insurance provider.",
          "Inform the patient that their insurance provider can request records directly from the dental office."
        ],
        answer: "Inform the patient that their insurance provider can request records directly from the dental office."
      },
      {
        question: "A patient complains of severe tooth pain and requests a prescription for opioids to manage the discomfort. What is the most appropriate response?",
        choices: [
          "Prescribe opioids as requested to alleviate the patient's pain.",
          "Discuss alternative pain management strategies with the patient and offer a non-opioid prescription.",
          "Refer the patient to a pain specialist for evaluation and treatment.",
          "Deny the patient's request for opioids due to the risk of addiction and misuse."
        ],
        answer: "Discuss alternative pain management strategies with the patient and offer a non-opioid prescription."
      },
      {
        question: "A patient presents with multiple missing teeth and requests dental implants. However, their medical history indicates conditions that may complicate implant surgery. What should you do?",
        choices: [
          "Proceed with implant surgery as requested by the patient.",
          "Conduct a thorough evaluation of the patient's medical history and consult with relevant specialists.",
          "Inform the patient of the potential risks associated with implant surgery and offer alternative treatment options.",
          "Refer the patient to another dental office that specializes in implant surgery."
        ],
        answer: "Conduct a thorough evaluation of the patient's medical history and consult with relevant specialists."
      },
      {
        question: "A patient arrives for a routine dental cleaning but becomes agitated and aggressive during the appointment. How should you handle this situation?",
        choices: [
          "Terminate the appointment and ask the patient to reschedule when they are calmer.",
          "Continue with the appointment while monitoring the patient's behavior closely.",
          "Request assistance from a colleague or security personnel to manage the situation.",
          "Offer the patient sedation to help calm their anxiety and aggression."
        ],
        answer: "Terminate the appointment and ask the patient to reschedule when they are calmer."
      },
      {
        question: "A patient arrives for a routine dental cleaning but becomes agitated and aggressive during the appointment. How should you handle this situation?",
        choices: [
          "Terminate the appointment and ask the patient to reschedule when they are calmer.",
          "Continue with the appointment while monitoring the patient's behavior closely.",
          "Request assistance from a colleague or security personnel to manage the situation.",
          "Offer the patient sedation to help calm their anxiety and aggression."
        ],
        answer: "Terminate the appointment and ask the patient to reschedule when they are calmer."
      },
      {
        question: "A patient presents with a dental emergency outside of regular office hours. How should you respond?",
        choices: [
          "Provide the patient with emergency contact information and instruct them to go to the nearest hospital.",
          "Schedule an emergency appointment to assess and treat the patient's condition.",
          "Refer the patient to another dental office that offers emergency services.",
          "Advise the patient to wait until regular office hours to seek treatment."
        ],
        answer: "Provide the patient with emergency contact information and instruct them to go to the nearest hospital."
      },
      {
        question: "A patient expresses dissatisfaction with a dental procedure and demands a refund. What is the appropriate course of action?",
        choices: [
          "Offer the patient a full refund to resolve the issue.",
          "Apologize to the patient and offer to redo the procedure at no additional cost.",
          "Explain the rationale behind the treatment and attempt to address the patient's concerns.",
          "Ignore the patient's complaint and continue with regular appointments as scheduled."
        ],
        answer: "Explain the rationale behind the treatment and attempt to address the patient's concerns."
      },
      {
        question: "A patient arrives for an appointment but refuses to provide updated contact information. How should you handle this situation?",
        choices: [
          "Proceed with the appointment using the existing contact information on file.",
          "Explain the importance of having accurate contact information and request the patient's cooperation.",
          "Refuse to provide treatment until the patient provides updated contact information.",
          "Document the refusal in the patient's records and proceed with the appointment."
        ],
        answer: "Explain the importance of having accurate contact information and request the patient's cooperation."
      },
      {
        question: "A patient presents with a medical condition that requires antibiotic prophylaxis before dental treatment. How should you proceed?",
        choices: [
          "Administer antibiotics to the patient before proceeding with dental treatment.",
          "Consult with the patient's physician to determine the appropriate antibiotic prophylaxis regimen.",
          "Proceed with dental treatment without antibiotic prophylaxis.",
          "Refer the patient to another dental office that specializes in treating medically compromised patients."
        ],
        answer: "Consult with the patient's physician to determine the appropriate antibiotic prophylaxis regimen."
      },
      {
        question: "A patient requests a dental procedure that is not covered by their insurance plan. How should you handle this situation?",
        choices: [
          "Proceed with the procedure and bill the patient directly for the cost.",
          "Inform the patient of the procedure's cost and offer alternative treatment options that are covered by their insurance.",
          "Refuse to provide the procedure unless the patient agrees to pay out of pocket.",
          "Submit a request to the insurance company for pre-authorization of the procedure."
        ],
        answer: "Inform the patient of the procedure's cost and offer alternative treatment options that are covered by their insurance."
      },
      {
        question: "A patient arrives for a dental appointment accompanied by a service animal. How should you respond?",
        choices: [
          "Allow the service animal to accompany the patient throughout the appointment.",
          "Request documentation confirming the service animal's status and training.",
          "Refuse entry to the service animal due to concerns about hygiene and safety.",
          "Ask the patient to leave the service animal outside the dental office."
        ],
        answer: "Allow the service animal to accompany the patient throughout the appointment."
      },
      {
        question: "A patient requests a cosmetic dental procedure to improve their appearance. How should you proceed?",
        choices: [
          "Discuss the risks and benefits of the procedure with the patient and obtain informed consent.",
          "Refuse to provide the procedure unless the patient has a valid medical need.",
          "Offer alternative treatment options that are less invasive and more cost-effective.",
          "Refer the patient to a cosmetic dentist for evaluation and treatment."
        ],
        answer: "Discuss the risks and benefits of the procedure with the patient and obtain informed consent."
      },
      {
        question: "A patient arrives for a dental appointment but appears to be inebriated. How should you handle this situation?",
        choices: [
          "Proceed with the appointment as scheduled.",
          "Reschedule the appointment for a later time when the patient is sober.",
          "Refer the patient to a substance abuse counselor for evaluation and treatment.",
          "Contact emergency services for assistance in managing the situation."
        ],
        answer: "Reschedule the appointment for a later time when the patient is sober."
      },
      {
        question: "A patient expresses fear and anxiety about undergoing dental treatment. How should you address their concerns?",
        choices: [
          "Assure the patient that dental treatment is safe and painless.",
          "Discuss the patient's fears and concerns openly and offer reassurance.",
          "Proceed with treatment without acknowledging the patient's anxiety.",
          "Refer the patient to a mental health professional for evaluation and treatment."
        ],
        answer: "Discuss the patient's fears and concerns openly and offer reassurance."
      },
      {
        question: "A patient arrives at your dental office and requests to see their dental records. What should you do?",
        choices: [
          "Provide the patient with their dental records immediately",
          "Ask the patient to fill out a request form and provide the records within a reasonable timeframe",
          "Refuse to provide the records until the patient pays a fee",
          "Deny the request citing patient privacy laws"
        ],
        answer: "Ask the patient to fill out a request form and provide the records within a reasonable timeframe"
      },
      {
        question: "How long do you have to notify the dental board of a change in your office address?",
        choices: [
          "Immediately",
          "Within 10 days",
          "Within 30 days",
          "No requirement to notify"
        ],
        answer: "Within 30 days"
      },
      {
        question: "What is the requirement for a dentist to get an orthodontic assistant permit?",
        choices: [
          "84 hours of class and 12 months of work experience",
          "110 hours of class and 12 months of work experience",
          "No additional requirements beyond dental school",
          "Completion of a specialized orthodontic program"
        ],
        answer: "84 hours of class and 12 months of work experience"
      },
      {
        question: "Who is required to be on the dental committee?",
        choices: [
          "1 dentist, 4 public members, 4 hygienists",
          "2 dentists, 3 public members, 3 hygienists",
          "3 dentists, 2 public members, 2 hygienists",
          "4 dentists, 1 public member, 1 hygienist"
        ],
        answer: "1 dentist, 4 public members, 4 hygienists"
      },
      {
        question: "What is the CE requirement for renewing a dental license?",
        choices: [
          "Dentists - 50 CE, RDA and RDH - 25 hours",
          "Dentists - 40 CE, RDA and RDH - 20 hours",
          "Dentists - 60 CE, RDA and RDH - 30 hours",
          "Dentists - 30 CE, RDA and RDH - 15 hours"
        ],
        answer: "Dentists - 50 CE, RDA and RDH - 25 hours"
      },
      {
        question: "How long should patient records be kept for?",
        choices: [
          "5 years",
          "7 years",
          "10 years",
          "Indefinitely"
        ],
        answer: "7 years"
      },
      {
        question: "What is the allowable proportion of hours for CE related to self or office management?",
        choices: [
          "20%",
          "30%",
          "50%",
          "80%"
        ],
        answer: "20%"
      },
      {
        question: "How long do you have to offer employees the Hepatitis B vaccine after they start working?",
        choices: [
          "Immediately",
          "Within 10 days",
          "Within 30 days",
          "No requirement"
        ],
        answer: "Within 10 days"
      },
      {
        question: "How long should employee records be kept after termination?",
        choices: [
          "5 years",
          "10 years",
          "20 years",
          "30 years"
        ],
        answer: "30 years"
      },
      {
        question: "How long do you have to report a death or hospitalization longer than 24 hours due to a dental procedure?",
        choices: [
          "Immediately",
          "Within 24 hours",
          "Within 7 days",
          "Within 30 days"
        ],
        answer: "Within 7 days"
      },
      {
        question: "What is the required waiting period for a patient to receive a refund for dental services?",
        choices: [
          "Within 10 days of the request",
          "Within 30 days of the request",
          "Within 60 days of the request",
          "No requirement for a waiting period"
        ],
        answer: "Within 30 days of the request"
      },
      {
        question: "When is it appropriate to disclose patient information to a third party without consent?",
        choices: [
          "When requested by law enforcement",
          "When requested by the patient's insurance company",
          "When there is a medical emergency",
          "Only with the patient's explicit consent"
        ],
        answer: "When there is a medical emergency"
      },
      {
        question: "What is the recommended protocol for handling a patient who refuses necessary dental treatment due to financial concerns?",
        choices: [
          "Refer the patient to a charity dental clinic",
          "Offer a payment plan option for the treatment",
          "Refuse treatment until the patient can afford it",
          "Proceed with treatment regardless of the patient's financial situation"
        ],
        answer: "Offer a payment plan option for the treatment"
      },
      {
        question: "How should a dental office handle a patient's complaint about the behavior of a staff member?",
        choices: [
          "Investigate the complaint internally and take appropriate action",
          "Dismiss the complaint if it does not involve clinical care",
          "Ignore the complaint unless it is made in writing",
          "Inform the patient that staff behavior is not the responsibility of the dental office"
        ],
        answer: "Investigate the complaint internally and take appropriate action"
      },
      {
        question: "What is the recommended method for disposing of expired dental materials and medications?",
        choices: [
          "Throw them in the regular trash",
          "Flush them down the sink or toilet",
          "Return them to the manufacturer for disposal",
          "Dispose of them in a designated hazardous waste container"
        ],
        answer: "Dispose of them in a designated hazardous waste container"
      },
      {
        question: "When is it appropriate to release a patient's dental records to their attorney?",
        choices: [
          "Upon the patient's request",
          "Only with a court order",
          "When the attorney provides written consent from the patient",
          "When the patient is involved in a legal dispute related to their dental treatment"
        ],
        answer: "When the patient is involved in a legal dispute related to their dental treatment"
      },
      {
        question: "What should a dental office do if a patient fails to show up for a scheduled appointment?",
        choices: [
          "Charge the patient a fee for the missed appointment",
          "Contact the patient to reschedule the appointment",
          "Remove the patient from the practice's patient list",
          "Ignore the missed appointment unless the patient contacts the office"
        ],
        answer: "Contact the patient to reschedule the appointment"
      },
      {
        question: "How should a dental office handle a patient's request to amend their dental records?",
        choices: [
          "Refuse the request unless ordered by a court",
          "Allow the patient to submit a written amendment to be included in their records",
          "Ignore the request if the records are accurate",
          "Inform the patient that dental records cannot be amended"
        ],
        answer: "Allow the patient to submit a written amendment to be included in their records"
      },
      {
        question: "What is the recommended protocol for confirming appointments with patients?",
        choices: [
          "Send a text message reminder the day before the appointment",
          "Call the patient's home phone number to confirm the appointment",
          "Send an email reminder two days before the appointment",
          "Send a letter by mail confirming the appointment date and time"
        ],
        answer: "Send a text message reminder the day before the appointment"
      },
      {
        question: "How should a dental office handle a patient's request to transfer their records to another provider?",
        choices: [
          "Refuse the request unless the patient provides written consent",
          "Charge the patient a fee for transferring the records",
          "Transfer the records to the new provider promptly and free of charge",
          "Delay transferring the records until the patient pays any outstanding balances"
        ],
        answer: "Transfer the records to the new provider promptly and free of charge"
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



