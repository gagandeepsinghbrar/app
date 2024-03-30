let examNotCorrupted = true;
let unmarkedQuestionsNoPermission = false;
const questions = [
  {
    question:
      "During a routine checkup, a dental hygienist notices signs of possible domestic abuse on a patient. What is the appropriate action for the hygienist?",
    choices: [
      "Ignore the signs and proceed with the checkup",
      "Ask the patient about the signs of abuse",
      "Report the suspected abuse to the appropriate authorities",
      "Offer the patient pamphlets on domestic violence",
    ],
    answer: "Report the suspected abuse to the appropriate authorities",
  },
  {
    question:
      "A dental receptionist accidentally schedules two patients for the same appointment slot. What is the ethical course of action for the receptionist?",
    choices: [
      "Cancel one of the appointments without informing the patient",
      "Inform both patients of the scheduling error and reschedule one of them",
      "See both patients simultaneously to save time",
      "Ask the dentist to handle the situation",
    ],
    answer:
      "Inform both patients of the scheduling error and reschedule one of them",
  },
  {
    question:
      "A dentist notices that a colleague is practicing dentistry without a valid license. What should the dentist do?",
    choices: [
      "Ignore the situation as it is not their responsibility",
      "Confront the colleague directly about the lack of license",
      "Report the colleague to the state dental board",
      "Offer to cover for the colleague",
    ],
    answer: "Report the colleague to the state dental board",
  },
  {
    question:
      "During a dental procedure, a patient expresses discomfort and requests the dentist to stop. What should the dentist do?",
    choices: [
      "Ignore the patient's request and continue the procedure",
      "Stop the procedure immediately and address the patient's concerns",
      "Delay stopping the procedure until it's completed",
      "Ask the patient to tolerate the discomfort for a little longer",
    ],
    answer: "Stop the procedure immediately and address the patient's concerns",
  },
  {
    question:
      "A dental assistant inadvertently discloses a patient's medical history to a family member who is not authorized to access it. What action should the dental office take?",
    choices: [
      "Dismiss the incident as accidental and not report it",
      "Inform the patient about the disclosure and apologize",
      "Ignore the incident as it's not a serious breach of confidentiality",
      "Report the incident to the appropriate regulatory authorities",
    ],
    answer: "Inform the patient about the disclosure and apologize",
  },
  {
    question:
      "A patient presents a fake identification card during registration at the dental office. What should the dental office staff do?",
    choices: [
      "Accept the fake identification and proceed with treatment",
      "Inform the patient about the consequences of presenting fake identification",
      "Report the incident to the authorities",
      "Ignore the fake identification and continue with registration",
    ],
    answer:
      "Inform the patient about the consequences of presenting fake identification",
  },
  {
    question:
      "A dental office manager discovers that a staff member has been stealing supplies from the office. What should the manager do?",
    choices: [
      "Ignore the theft to avoid conflict within the staff",
      "Confront the staff member privately and warn them not to repeat the behavior",
      "Terminate the staff member's employment and report the theft to the appropriate authorities",
      "Move the staff member to a different department to prevent further theft",
    ],
    answer:
      "Terminate the staff member's employment and report the theft to the appropriate authorities",
  },
  {
    question:
      "A dentist discovers a minor billing error on a patient's account from a previous visit that benefits the dentist. What is the ethical course of action?",
    choices: [
      "Ignore the error since it's minor",
      "Correct the error and refund the patient",
      "Charge the patient more to cover up the error",
      "Inform the patient but do nothing",
    ],
    answer: "Correct the error and refund the patient",
  },
  {
    question:
      "A dental assistant accidentally breaches patient confidentiality by discussing a celebrity patient's dental work with a friend. What are the potential consequences?",
    choices: [
      "No consequences",
      "Disciplinary action from the Dental Board and potential lawsuit",
      "Promotion for attracting more celebrities",
      "A formal warning",
    ],
    answer: "Disciplinary action from the Dental Board and potential lawsuit",
  },
  {
    question:
      "A dentist is treating a patient with a contagious disease. What additional infection control protocols should be implemented?",
    choices: [
      "Standard protocols only",
      "No additional protocols needed",
      "Specific PPE, disposable instruments, and stricter disinfection procedures",
      "Treatment only in isolation rooms",
    ],
    answer:
      "Specific PPE, disposable instruments, and stricter disinfection procedures",
  },
  {
    question:
      "A patient requests a specific treatment even though the dentist believes it's not the best option. How can the dentist ethically address this situation?",
    choices: [
      "Refuse to treat the patient",
      "Provide the requested treatment without discussion",
      "Explain the risks and benefits and offer alternatives",
      "Persuade the patient to accept the dentist's preference",
    ],
    answer: "Explain the risks and benefits and offer alternatives",
  },
  {
    question:
      "A dental office experiences a data breach exposing patient information. What are the reporting requirements to patients and authorities?",
    choices: [
      "No action needed if the breach is minor",
      "Notify affected patients and potentially report to authorities",
      "Only notify the dental office staff",
      "Report only to the Dental Board",
    ],
    answer: "Notify affected patients and potentially report to authorities",
  },
  {
    question:
      "A hygienist observes a dental assistant performing a procedure outside their scope of practice. What should they do?",
    choices: [
      "Ignore it as a one-time incident",
      "Report the observation to the dentist or supervisor",
      "Confront the dental assistant directly",
      "Advise the patient to complain",
    ],
    answer: "Report the observation to the dentist or supervisor",
  },
  {
    question:
      "A dentist is considering offering discounted dental services in exchange for positive online reviews. Is this ethical?",
    choices: [
      "Yes, if the reviews are honest",
      "No, it's considered unethical",
      "Yes, as long as it's disclosed",
      "Only if the discounts are substantial",
    ],
    answer: "No, it's considered unethical",
  },
  {
    question:
      "A patient files a formal complaint against a dentist with the Dental Board. What is the typical process for investigating such complaints?",
    choices: [
      "Immediate suspension of the dentist's license",
      "Investigation by gathering information from both parties",
      "A public hearing with media involvement",
      "Ignoring the complaint if it seems minor",
    ],
    answer: "Investigation by gathering information from both parties",
  },
  {
    question:
      "A dentist is treating a patient who is a minor. How does informed consent differ in this situation?",
    choices: [
      "Minors can consent on their own",
      "Parental or guardian consent is required",
      "Only the dentist's consent is needed",
      "Consent is not required for minors",
    ],
    answer: "Parental or guardian consent is required",
  },
  {
    question:
      "A dentist is considering participating in a research study involving a new dental product. What ethical considerations should they prioritize?",
    choices: [
      "Financial benefits from the research company",
      "Patient safety and ethical conduct of the study",
      "Potential for personal fame and recognition",
      "Exclusivity of using the product in their practice",
    ],
    answer: "Patient safety and ethical conduct of the study",
  },
  {
    question:
      "Scenario: A dentist is treating a patient who is a known 'difficult patient' with a history of making unreasonable demands and verbal abuse towards staff. The patient becomes verbally aggressive during the procedure. How should the dentist handle this situation?",
    choices: [
      "Continue the procedure and document the incident.",
      "Politely but firmly explain the behavior is unacceptable and offer to reschedule when the patient can be calm.",
      "Terminate the treatment and refer the patient to another dentist.",
      "Ignore the behavior and hope it subsides.",
    ],
    answer:
      "Politely but firmly explain the behavior is unacceptable and offer to reschedule when the patient can be calm.",
  },
  {
    question:
      "Question: A dental assistant is sterilizing instruments and discovers a broken spore test ampoule after running an autoclave cycle. What is the most appropriate course of action?",
    choices: [
      "Reprocess the instruments using a different sterilization method.",
      "Discard the instruments and rerun the autoclave cycle with a new spore test.",
      "Consider the instruments sterilized and proceed with use.",
      "Document the incident but continue using the instruments.",
    ],
    answer:
      "Discard the instruments and rerun the autoclave cycle with a new spore test.",
  },
  {
    question:
      "Scenario: A dentist is treating a patient who expresses a fear of needles. Which of the following actions would be MOST appropriate to manage the patient's anxiety?",
    choices: [
      "Minimize the discussion of needles and proceed quickly with the injection.",
      "Offer the patient nitrous oxide (laughing gas) for relaxation.",
      "Assure the patient there's nothing to worry about and proceed with the injection.",
      "Offer a topical anesthetic cream before administering the injection.",
    ],
    answer: "Offer the patient nitrous oxide (laughing gas) for relaxation.",
  },
  {
    question:
      "Question: A dental hygienist suspects a patient may be pregnant. What information should the hygienist gather before proceeding with the dental cleaning?",
    choices: [
      "No additional information is necessary, hygienists can proceed with routine cleanings during pregnancy.",
      "The hygienist should confirm the pregnancy with a home test and adjust the cleaning based on the results.",
      "The hygienist should inquire about the trimester and any pregnancy-related complications, then adjust the cleaning procedures as needed.",
      "The hygienist should refer the patient to an obstetrician for clearance before proceeding.",
    ],
    answer:
      "The hygienist should inquire about the trimester and any pregnancy-related complications, then adjust the cleaning procedures as needed.",
  },
  {
    question:
      "Scenario:  A dentist is developing a new website to advertise their practice.  Which of the following statements would be a violation of the California Dental Association Code of Ethics?",
    choices: [
      "Listing their areas of expertise.",
      "Highlighting patient testimonials about their positive experiences.",
      "Displaying pictures of the dental office and staff.",
      "Providing information about the dentist's educational background and professional affiliations.",
    ],
    answer: "Listing their areas of expertise.",
  },
  {
    question:
      "Question: A dental assistant accidentally exposes a patient's x-ray to excessive radiation due to a malfunctioning equipment setting. What should the assistant do FIRST?",
    choices: [
      "Inform the dentist immediately.",
      "Retake the x-ray with the correct settings.",
      "Document the incident in the patient's chart.",
      "Apologize to the patient and reschedule the appointment.",
    ],
    answer: "Inform the dentist immediately.",
  },
  {
    question:
      "Scenario: A dentist is treating a patient who requests a specific cosmetic dentistry procedure. The dentist believes the procedure is unnecessary and may even be detrimental to the patient's oral health. How should the dentist address this situation?",
    choices: [
      "Perform the procedure as requested by the patient.",
      "Explain the potential drawbacks of the procedure and present alternative options based on their professional judgment.",
      "Refer the patient to another dentist who may be willing to perform the procedure.",
      "Refuse to perform the procedure without explanation.",
    ],
    answer:
      "Explain the potential drawbacks of the procedure and present alternative options based on their professional judgment.",
  },
  {
    question:
      "Question: A dental hygienist discovers outdated information in a patient's medical history form.  For example, a medication listed is no longer being taken.  What should the hygienist do?",
    choices: [
      "Update the information in the chart without consulting the dentist.",
      "Ignore the discrepancy and proceed with the cleaning.",
      "Note the discrepancy in the chart and inform the dentist for verification.",
      "Ask the patient directly about the medication and update the chart based on their response.",
    ],
    answer:
      "Note the discrepancy in the chart and inform the dentist for verification.",
  },
  {
    question:
      "Scenario:  A dental office is experiencing financial difficulties and considering offering discounted services to attract new patients.  Is this practice ethical under the California Dental Association Code of Ethics?",
    choices: [
      "Yes, offering discounts is always an ethical way to attract new patients.",
      "No, offering discounts is considered unprofessional conduct.",
      "Discounts are ethical only if the quality of care is not compromised.",
      "The ethics of discounting depend on the specific type of discount offered.",
    ],
    answer:
      "Discounts are ethical only if the quality of care is not compromised.",
  },
  {
    question:
      "Question: A dentist is treating a minor child.  How does informed consent differ in this situation compared to an adult patient?",
    choices: [
      "Informed consent is not required for treating minors.",
      "Informed consent must be obtained solely from the parent or guardian.",
      "The dentist should explain the treatment to the child and obtain their verbal agreement in addition to parental consent.",
      "Informed consent requirements remain the same for minors and adults.",
    ],
    answer:
      "Informed consent must be obtained solely from the parent or guardian.",
  },
  {
    question:
      "Scenario: A dentist is treating a patient who exhibits signs of potential opioid abuse.  The dentist also discovers the patient is prescribed high doses of opioids from another physician.  What is the dentist's MOST appropriate course of action?",
    choices: [
      "Refill the opioid prescription as written but document the concerns in the patient's chart.",
      "Refuse to refill the prescription and suggest alternative pain management options.",
      "Discuss the concerns with the patient and offer to taper the opioid dosage.",
      "Report the suspected abuse directly to the prescribing physician without informing the patient.",
    ],
    answer:
      "Refuse to refill the prescription and suggest alternative pain management options.",
  },
  {
    question:
      "Question: A dental hygienist observes a dental assistant performing a procedure outside their scope of practice, such as administering local anesthesia. What should the hygienist do?",
    choices: [
      "A) Ignore the situation to avoid conflict with the assistant.",
      "B) Immediately confront the assistant and instruct them to stop the procedure.",
      "C) Document the incident in the patient's chart and report it to the dentist or supervisor ",
      "D) Report the assistant directly to the California Dental Board. While this might be an option, internal reporting is usually the first step.",
    ],
    answer:
      "C) Document the incident in the patient's chart and report it to the dentist or supervisor ",
  },
  {
    question:
      "Scenario: A dentist is considering participating in a clinical trial for a new dental implant material. What are some KEY ethical considerations the dentist should prioritize?",
    choices: [
      "A) Focus on the potential financial benefits of participating in the study.",
      "B) Ensure the research has proper institutional review board (IRB) approval and prioritize patient safety ",
      "C) Disclose any financial ties to the company sponsoring the research to patients involved in the trial.",
      "D) All of the above (B & C) are crucial considerations.",
    ],
    answer:
      "B) Ensure the research has proper institutional review board (IRB) approval and prioritize patient safety ",
  },
  {
    question:
      "Question: A patient files a formal complaint against a dentist with the California Dental Board alleging substandard care. What is the TYPICAL process for investigating such complaints?",
    choices: [
      "A) The Board will immediately suspend the dentist's license pending investigation. This is not typical unless there's imminent danger to patients.",
      "B) The Board will gather information from both parties, potentially involving a hearing or mediation process ",
      "C) The Board will rely solely on the patient's complaint and issue disciplinary action against the dentist.",
      "D) The Board does not investigate complaints against dentists; patients must pursue civil litigation.",
    ],
    answer:
      "B) The Board will gather information from both parties, potentially involving a hearing or mediation process ",
  },
  {
    question:
      "Scenario: A dental office experiences a data breach that exposes patient information, such as names, addresses, and social security numbers. What are the dentist's legal obligations in response to this incident?",
    choices: [
      "A) There are no legal obligations to report the data breach, the dentist can simply inform affected patients.",
      "B) The dentist must report the breach to the California Dental Board but is not required to notify patients.",
      "C) The dentist must notify affected patients and potentially report the breach to relevant authorities depending on the severity of the exposure ",
      "D) The dentist is only obligated to report the breach if it involves the theft of controlled substances.",
    ],
    answer:
      "C) The dentist must notify affected patients and potentially report the breach to relevant authorities depending on the severity of the exposure ",
  },
  {
    question:
      "Question: A dental assistant discovers a broken vial of disinfectant solution labeled with an unknown expiration date. What should they do?",
    choices: [
      "A) Use the solution as long as it appears clear and has a normal odor (incorrect - expired disinfectants may be ineffective).",
      "B) Discard the solution and locate a fresh bottle of disinfectant ",
      "C) Dilute the solution with water to potentially increase its effectiveness.",
      "D) Re-label the solution with a new expiration date and continue using it.",
    ],
    answer:
      "B) Discard the solution and locate a fresh bottle of disinfectant ",
  },
  {
    question:
      "A dentist is treating a patient who is a known 'difficult patient' with a history of disruptive behavior. During the procedure, the patient becomes verbally abusive and threatens to leave without paying. How should the dentist respond?",
    choices: [
      "A) Continue the procedure and address the payment issue later.",
      "B) Politely but firmly explain the disruptive behavior is unacceptable and offer to reschedule when the patient can be calm ",
      "C) Terminate the treatment immediately and escort the patient out of the office.",
      "D) Ignore the behavior and hope it subsides.",
    ],
    answer:
      "B) Politely but firmly explain the disruptive behavior is unacceptable and offer to reschedule when the patient can be calm ",
  },
  {
    question:
      "A dental hygienist suspects child abuse or neglect based on observations during a patient examination. What is their legal obligation?",
    choices: [
      "A) Discuss the concerns with the parent or guardian directly.",
      "B) Ignore the suspicion as it's not their responsibility.",
      "C) Report the suspected abuse or neglect to the appropriate authorities, such as Child Protective Services ",
      "D) Document the observations in the patient's chart but take no further action.",
    ],
    answer:
      "C) Report the suspected abuse or neglect to the appropriate authorities, such as Child Protective Services ",
  },
  {
    question:
      "Question: A registered dental assistant (RDA) can perform ALL of the following EXCEPT:",
    choices: [
      "A) Taking dental x-rays with proper supervision ",
      "B) Polishing teeth",
      "C) Placing temporary fillings",
      "D) Scheduling appointments",
    ],
    answer: "A) Taking dental x-rays with proper supervision ",
  },
  {
    question:
      "Scenario: A dental hygienist (RDH) discovers a patient has significant periodontal disease during a routine cleaning. Can the RDH perform scaling and root planing without dentist supervision?",
    choices: [
      "A) Yes, scaling and root planing fall within the RDH's scope of practice.",
      "B) No, scaling and root planing require direct supervision from a dentist ",
      "C) The RDH can perform scaling but not root planing.",
      "D) The hygienist can proceed with the cleaning as planned.",
    ],
    answer:
      "B) No, scaling and root planing require direct supervision from a dentist ",
  },
  {
    question:
      "Question: A dental assistant accidentally damages a dental instrument during a procedure. What should they do?",
    choices: [
      "A) Continue using the damaged instrument.",
      "B) Inform the dentist or supervisor immediately and dispose of the instrument ",
      "C) Attempt to repair the instrument themselves.",
      "D) Document the incident but keep using the instrument.",
    ],
    answer:
      "B) Inform the dentist or supervisor immediately and dispose of the instrument ",
  },
  {
    question:
      "Scenario: A dentist delegates specific tasks to a dental assistant. Is the dentist ultimately responsible for the assistant's work?",
    choices: [
      "A) No, the assistant is solely responsible for their actions.",
      "B) Yes, the dentist is ultimately responsible for the care provided by their auxiliary staff ",
      "C) Responsibility depends on the specific task delegated.",
      "D) There's no legal responsibility for the dentist regarding the assistant's work.",
    ],
    answer:
      "B) Yes, the dentist is ultimately responsible for the care provided by their auxiliary staff ",
  },
  {
    question:
      "Question: A dental office is considering hiring an unlicensed dental assistant. Is this legal in California?",
    choices: [
      "A) Yes, anyone can assist a dentist regardless of licensure.",
      "B) No, all dental auxiliaries in California must be licensed for their specific role ",
      "C) It depends on the specific duties the assistant will perform.",
      "D) An unlicensed assistant can work under direct supervision of a dentist.",
    ],
    answer:
      "B) No, all dental auxiliaries in California must be licensed for their specific role ",
  },
  {
    question:
      "Question: A patient arrives for their appointment with a new dental insurance plan. What is the dental office MOST obligated to do regarding the insurance?",
    choices: [
      "A) Refuse to treat the patient until they verify the insurance information.",
      "B) Verify the patient's insurance coverage and explain any estimated out-of-pocket costs ",
      "C) Collect full payment upfront and let the patient handle reimbursement with their insurance.",
      "D) Inform the patient they are not accepting new insurance plans.",
    ],
    answer:
      "B) Verify the patient's insurance coverage and explain any estimated out-of-pocket costs ",
  },
  {
    question:
      "Scenario: A dental office submits a claim to a patient's insurance company for a completed procedure. The insurance company denies the claim partially, stating the procedure is not covered. What should the dental office do?",
    choices: [
      "A) Accept the denial and bill the patient for the full amount.",
      "B) Review the reason for denial and potentially appeal the decision if justified ",
      "C) Ignore the denial and resubmit the claim multiple times.",
      "D) Inform the patient the procedure is no longer covered by insurance.",
    ],
    answer:
      "B) Review the reason for denial and potentially appeal the decision if justified ",
  },
  {
    question:
      "Question: A patient requests a specific dental treatment, but their insurance plan does not cover it. What is the dentist's ethical obligation?",
    choices: [
      "A) Recommend the treatment and pressure the patient to pay out-of-pocket.",
      "B) Explain the treatment options, including those covered by insurance, and allow the patient to decide ",
      "C) Discourage the patient from pursuing the uncovered treatment.",
      "D) Offer a discount on the uncovered treatment to make it more affordable.",
    ],
    answer:
      "B) Explain the treatment options, including those covered by insurance, and allow the patient to decide ",
  },
  {
    question:
      "Scenario: A dental office is accused of insurance fraud by submitting false or inflated claims. What could be the potential consequences?",
    choices: [
      "A) The dentist may receive a warning letter from the insurance company.",
      "B) The dental office may face fines and potential loss of provider status with the insurance company ",
      "C) The dentist may lose their dental license but face no criminal charges.",
      "D) There are no consequences for submitting inaccurate insurance claims.",
    ],
    answer:
      "B) The dental office may face fines and potential loss of provider status with the insurance company ",
  },
  {
    question:
      "Question: A dentist operates a solo practice under their own name. Do they need to register a fictitious name in California?",
    choices: [
      "A) Yes, all dentists practicing under a name other than their own require fictitious name registration ",
      "B) No, registration is only required for businesses with multiple owners.",
      "C) Registration is optional but recommended for legal protection.",
      "D) Only dentists practicing as corporations need to register a fictitious name.",
    ],
    answer:
      "A) Yes, all dentists practicing under a name other than their own require fictitious name registration ",
  },
  {
    question:
      "Scenario: A dentist partners with another dentist and wants to operate under a new business name. When should they file a fictitious name statement?",
    choices: [
      "A) Before they begin practicing together ",
      "B) Within 30 days of starting the partnership.",
      "C) Fictitious name registration is not required for partnerships.",
      "D) They can register any time after forming the partnership.",
    ],
    answer: "A) Before they begin practicing together ",
  },

  {
    question:
      "A dentist wants to operate their practice under a name that includes their own last name but with a different first name. Does this require fictitious name registration?",
    choices: [
      "A) Yes, any name variation from the dentist's legal name requires registration ",
      "B) No, registration is not needed if the name still clearly identifies the dentist.",
      "C) Registration depends on whether the dentist advertises the new name.",
      "D) The dentist can register if they wish, but it's not mandatory.",
    ],
    answer:
      "A) Yes, any name variation from the dentist's legal name requires registration ",
  },
  {
    question:
      "Scenario: A dentist files a fictitious name statement for their practice. How long is the statement valid?",
    choices: [
      "A) The statement is valid for one year and needs annual renewal.",
      "B) The fictitious name registration remains valid indefinitely ",
      "C) The statement expires after five years and needs to be refiled.",
      "D) The validity depends on the county where the business operates.",
    ],
    answer: "B) The fictitious name registration remains valid indefinitely ",
  },
  {
    question:
      "A dentist wants to change the name of their existing practice that is already registered as a fictitious name. What needs to be done?",
    choices: [
      "A) File a new fictitious name statement with the chosen new name ",
      "B) No further action is required, the existing registration applies to any name change.",
      "C) Notify the county clerk's office of the name change.",
      "D) There's no need to update the fictitious name registration for existing businesses.",
    ],
    answer: "A) File a new fictitious name statement with the chosen new name ",
  },
  {
    question:
      "Scenario: A dentist is considering purchasing an existing dental practice with a registered fictitious name. What steps should they take regarding the fictitious name?",
    choices: [
      "A) The new owner automatically inherits the existing fictitious name registration.",
      "B) The new owner needs to file a new fictitious name statement under their own name ",
      "C) The previous owner should cancel their fictitious name registration.",
      "D) There's no need to modify the existing fictitious name registration.",
    ],
    answer:
      "B) The new owner needs to file a new fictitious name statement under their own name ",
  },
  {
    question:
      "A dentist files a fictitious name statement in one California county. Is this registration valid for practicing in other counties?",
    choices: [
      "A) No, a separate fictitious name statement needs to be filed in each county ",
      "B) Registration in one county allows practicing anywhere in California.",
      "C) The validity depends on the specific county regulations.",
      "D) Fictitious name registration is only required in the dentist's primary practice location.",
    ],
    answer:
      "A) No, a separate fictitious name statement needs to be filed in each county ",
  },
  {
    question:
      "Scenario: A dentist fails to register their fictitious name as required by law. What are the potential consequences?",
    choices: [
      "A) They may face fines and potential legal challenges from other businesses with similar names. ",
      "B) The dentist could lose their dental license.",
      "C) There are no consequences for not registering a fictitious name.",
      "D) Only the county clerk's office can enforce fictitious name registration.",
    ],
    answer:
      "A) They may face fines and potential legal challenges from other businesses with similar names. ",
  },
  {
    question:
      "Where can a dentist find the official California Fictitious Name Statement form?",
    choices: [
      "A) The form can be obtained from the California Dental Board website.",
      "B) The form is available at the dentist's local county clerk's office ",
      "C) Fictitious name statement forms can be downloaded from various online legal resources.",
      "D) Dentists do not need a specific form for fictitious name registration.",
    ],
  },
  {
    question:
      'A dentist wants to operate their practice under a name that includes their own last name but with a different first name (e.g., "Dr. Smile Jones" vs. real name "John Smith"). Does this require fictitious name registration?',
    choices: [
      "Yes, any name variation from the dentist's legal name requires registration",
      "No, registration is not needed if the name still clearly identifies the dentist.",
      "Registration depends on whether the dentist advertises the new name.",
      "The dentist can register if they wish, but it's not mandatory.",
    ],
    answer:
      "No, registration is not needed if the name still clearly identifies the dentist.",
  },
  {
    question:
      "Scenario: A dentist files a fictitious name statement for their practice. How long is the statement valid?",
    choices: [
      "The statement is valid for one year and needs annual renewal.",
      "The fictitious name registration remains valid indefinitely",
      "The statement expires after five years and needs to be refiled.",
      "The validity depends on the county where the business operates.",
    ],
    answer: "The fictitious name registration remains valid indefinitely",
  },
  {
    question:
      "A dentist wants to change the name of their existing practice that is already registered as a fictitious name. What needs to be done?",
    choices: [
      "File a new fictitious name statement with the chosen new name",
      "No further action is required, the existing registration applies to any name change.",
      "Notify the county clerk's office of the name change.",
      "There's no need to update the fictitious name registration for existing businesses.",
    ],
    answer: "File a new fictitious name statement with the chosen new name",
  },
  {
    question:
      "Scenario: A dentist is considering purchasing an existing dental practice with a registered fictitious name. What steps should they take regarding the fictitious name?",
    choices: [
      "The new owner automatically inherits the existing fictitious name registration.",
      "The new owner needs to file a new fictitious name statement under their own name",
      "The previous owner should cancel their fictitious name registration.",
      "There's no need to modify the existing fictitious name registration.",
    ],
    answer:
      "The new owner needs to file a new fictitious name statement under their own name",
  },
  {
    question:
      "A dentist files a fictitious name statement in one California county. Is this registration valid for practicing in other counties?",
    choices: [
      "No, a separate fictitious name statement needs to be filed in each county",
      "Registration in one county allows practicing anywhere in California.",
      "The validity depends on the specific county regulations.",
      "Fictitious name registration is only required in the dentist's primary practice location.",
    ],
    answer:
      "No, a separate fictitious name statement needs to be filed in each county",
  },
  {
    question:
      "Scenario: A dentist fails to register their fictitious name as required by law. What are the potential consequences?",
    choices: [
      "They may face fines and potential legal challenges from other businesses with similar names.",
      "The dentist could lose their dental license.",
      "There are no consequences for not registering a fictitious name.",
      "Only the county clerk's office can enforce fictitious name registration.",
    ],
    answer:
      "They may face fines and potential legal challenges from other businesses with similar names.",
  },
  {
    question:
      "Where can a dentist find the official California Fictitious Name Statement form?",
    choices: [
      "The form can be obtained from the California Dental Board website.",
      "The form is available at the dentist's local county clerk's office",
      "Fictitious name statement forms can be downloaded from various online legal resources.",
      "Dentists do not need a specific form for fictitious name registration.",
    ],
    answer:
      "The form is available at the dentist's local county clerk's office",
  },
];

// const questions = [
//     {
//         question: "Which of the following is NOT considered unprofessional conduct for a dental professional in California?",
//         choices: [
//             "Failing to maintain patient confidentiality",
//             "Performing dental procedures without proper training and licensure",
//             "Providing dental services to a patient without informed consent",
//             "Refusing treatment to a patient based on their race or ethnicity"
//         ],
//         answer: "Refusing treatment to a patient based on their race or ethnicity"
//     },
//     {
//         question: "In California, who is responsible for maintaining patient records?",
//         choices: [
//             "The dentist only",
//             "The dental hygienist only",
//             "Both the dentist and the dental hygienist",
//             "The dental assistant"
//         ],
//         answer: "Both the dentist and the dental hygienist"
//     },
//     {
//         question: "Which of the following statements regarding advertising by dental professionals in California is true?",
//         choices: [
//             "Advertising must always include specific pricing information for services.",
//             "False advertising is not considered unprofessional conduct.",
//             "Advertising must not be false, misleading, or deceptive.",
//             "Advertising is regulated by federal agencies, not state laws."
//         ],
//         answer: "Advertising must not be false, misleading, or deceptive."
//     },
//     {
//         question: "According to California dental law, which of the following is NOT required to be included in a written treatment plan?",
//         choices: [
//             "The anticipated outcomes of the treatment",
//             "A description of the proposed treatment",
//             "The patient's financial history",
//             "The risks and benefits of the proposed treatment"
//         ],
//         answer: "The patient's financial history"
//     },
//     {
//         question: "In California, dental professionals must report suspected cases of child abuse or neglect:",
//         choices: [
//             "Only if they witness the abuse firsthand",
//             "Only if the patient's parent or guardian gives permission",
//             "As mandated reporters, regardless of witnessing the abuse firsthand",
//             "Only if the abuse occurs within the dental office"
//         ],
//         answer: "As mandated reporters, regardless of witnessing the abuse firsthand"
//     },
//     {
//         question: "Which of the following actions would NOT be a violation of patient confidentiality under California law?",
//         choices: [
//             "Discussing a patient's treatment plan with a colleague for consultation purposes",
//             "Posting a patient's dental records on social media without their consent",
//             "Sending a patient's records to another healthcare provider at the patient's request",
//             "Sharing a patient's dental records with a family member without the patient's consent"
//         ],
//         answer: "Sending a patient's records to another healthcare provider at the patient's request"
//     },
//     {
//         question: "In California, dental professionals must renew their licenses every:",
//         choices: [
//             "Three years",
//             "Five years",
//             "Two years",
//             "Ten years"
//         ],
//         answer: "Two years"
//     },
//     {
//         question: "What is the primary purpose of the Dental Board of California?",
//         choices: [
//             "To promote the dental profession",
//             "To regulate the practice of dentistry and protect the public",
//             "To provide continuing education for dental professionals",
//             "To establish dental fee schedules"
//         ],
//         answer: "To regulate the practice of dentistry and protect the public"
//     },
//     {
//         question: "Which of the following is NOT considered a violation of the California Dental Practice Act?",
//         choices: [
//             "Providing dental services outside of regular business hours",
//             "Failing to properly sterilize dental instruments",
//             "Billing for services not provided",
//             "Performing dental procedures with informed consent"
//         ],
//         answer: "Providing dental services outside of regular business hours"
//     },
//     {
//         question: "How should dental professionals in California handle a patient's request for their dental records?",
//         choices: [
//             "Refuse to provide the records unless a court order is obtained",
//             "Provide the records only to the patient's attorney",
//             "Provide the records to the patient or their authorized representative upon request",
//             "Charge a fee for providing the records, regardless of the circumstances"
//         ],
//         answer: "Provide the records to the patient or their authorized representative upon request"
//     },
//     {
//         question: "In California, what is the minimum age requirement for consent to dental treatment without parental consent?",
//         choices: [
//             "16 years old",
//             "18 years old",
//             "14 years old",
//             "21 years old"
//         ],
//         answer: "14 years old"
//     },
//     {
//         question: "Which of the following is NOT a duty of a dental assistant in California?",
//         choices: [
//             "Taking dental x-rays",
//             "Administering local anesthesia",
//             "Performing surgical dental procedures",
//             "Providing patient education"
//         ],
//         answer: "Performing surgical dental procedures"
//     },
//     {
//         question: "What action should a dental professional take if they suspect a colleague is impaired by drugs or alcohol while on duty?",
//         choices: [
//             "Ignore the situation to avoid conflict",
//             "Report the suspicion to the Dental Board of California",
//             "Confront the colleague directly",
//             "Document the suspicion in the patient's records"
//         ],
//         answer: "Report the suspicion to the Dental Board of California"
//     },
//     {
//         question: "Which of the following statements regarding dental advertising in California is true?",
//         choices: [
//             "Dental professionals are prohibited from advertising their services on social media.",
//             "Advertising must include the dentist's full name, license number, and degree.",
//             "Advertising must always include testimonials from satisfied patients.",
//             "Advertising is regulated by local municipalities, not state laws."
//         ],
//         answer: "Advertising must include the dentist's full name, license number, and degree."
//     },
//     {
//         question: "In California, how often must dental X-ray equipment be inspected and registered with the state?",
//         choices: [
//             "Every six months",
//             "Annually",
//             "Biennially",
//             "Every five years"
//         ],
//         answer: "Biennially"
//     },
//     {
//         question: "Under California law, how long must dental records be retained after the last date of treatment?",
//         choices: [
//             "1 year",
//             "3 years",
//             "5 years",
//             "7 years"
//         ],
//         answer: "7 years"
//     },
//     {
//         question: "Which of the following is NOT considered unprofessional conduct for a dental professional in California?",
//         choices: [
//             "Performing unnecessary dental procedures to increase revenue",
//             "Failing to inform patients of alternative treatment options",
//             "Refusing treatment to patients based on their sexual orientation",
//             "Prescribing medication without a valid reason"
//         ],
//         answer: "Refusing treatment to patients based on their sexual orientation"
//     },
//     {
//         question: "What is the purpose of informed consent in dental practice?",
//         choices: [
//             "To ensure patients understand the risks and benefits of treatment",
//             "To protect dental professionals from liability",
//             "To guarantee payment for services rendered",
//             "To expedite the treatment process"
//         ],
//         answer: "To ensure patients understand the risks and benefits of treatment"
//     },
//     {
//         question: "Which of the following statements regarding dental malpractice insurance in California is true?",
//         choices: [
//             "Dental malpractice insurance is optional for dental professionals.",
//             "Dental malpractice insurance is provided free of charge by the state.",
//             "Dental malpractice insurance is required by law for all dental professionals.",
//             "Dental malpractice insurance only covers claims filed by patients under the age of 18."
//         ],
//         answer: "Dental malpractice insurance is required by law for all dental professionals."
//     },
//     {
//         question: "In California, who is authorized to perform dental hygiene procedures?",
//         choices: [
//             "Only licensed dental hygienists",
//             "Only licensed dentists",
//             "Both licensed dental hygienists and licensed dentists",
//             "Only individuals with formal training in dental hygiene, regardless of licensure"
//         ],
//         answer: "Both licensed dental hygienists and licensed dentists"
//     },
//     {
//         question: "A patient arrives at your dental office and requests to see their dental records. What should you do?",
//         choices: [
//           "Provide the patient with their dental records immediately",
//           "Ask the patient to fill out a request form and provide the records within a reasonable timeframe",
//           "Refuse to provide the records until the patient pays a fee",
//           "Deny the request citing patient privacy laws"
//         ],
//         answer: "Ask the patient to fill out a request form and provide the records within a reasonable timeframe"
//       },
//       {
//         question: "During a routine dental examination, you discover that a patient has a severe dental abscess requiring immediate treatment. However, the patient refuses treatment due to financial constraints. What is the most appropriate course of action?",
//         choices: [
//           "Proceed with the treatment and discuss payment options afterward.",
//           "Refer the patient to a public health clinic for subsidized treatment.",
//           "Respect the patient's decision and provide supportive care until they are able to afford treatment.",
//           "Inform the patient of the potential consequences of delaying treatment and offer to explore alternative financing options."
//         ],
//         answer: "Inform the patient of the potential consequences of delaying treatment and offer to explore alternative financing options."
//       },
//       {
//         question: "A patient arrives for an appointment with visible signs of intoxication. They insist on receiving dental treatment despite being unable to communicate clearly. How should you respond?",
//         choices: [
//           "Proceed with treatment as scheduled.",
//           "Reschedule the appointment for a later time.",
//           "Refer the patient to a medical professional for evaluation.",
//           "Request consent from a family member or caregiver before proceeding."
//         ],
//         answer: "Refer the patient to a medical professional for evaluation."
//       },
//       {
//         question: "During a dental procedure, you accidentally damage a neighboring tooth. The patient is unaware of the mistake. What is your next step?",
//         choices: [
//           "Inform the patient of the error and offer to repair the damage at no additional cost.",
//           "Document the incident in the patient's records and proceed with the planned treatment.",
//           "Downplay the severity of the mistake to avoid alarming the patient.",
//           "Consult with a colleague for advice on how to address the situation."
//         ],
//         answer: "Inform the patient of the error and offer to repair the damage at no additional cost."
//       },
//       {
//         question: "A patient requests a dental procedure that you believe is unnecessary and potentially harmful. How should you handle this situation?",
//         choices: [
//           "Proceed with the procedure to avoid conflict with the patient.",
//           "Explain your concerns to the patient and offer alternative treatment options.",
//           "Refer the patient to another dentist who may be willing to perform the procedure.",
//           "Seek permission from the patient's insurance provider before proceeding with the treatment."
//         ],
//         answer: "Explain your concerns to the patient and offer alternative treatment options."
//       },
//       {
//         question: "A patient refuses to wear a face mask during their dental appointment, citing personal beliefs. How should you respond?",
//         choices: [
//           "Allow the patient to proceed with the appointment without a face mask.",
//           "Educate the patient on the importance of infection control measures and offer a mask.",
//           "Reschedule the appointment for a later date when the patient is willing to comply with safety protocols.",
//           "Refuse to provide treatment to the patient until they agree to wear a face mask."
//         ],
//         answer: "Educate the patient on the importance of infection control measures and offer a mask."
//       },
//       {
//         question: "A patient requests a copy of their dental records to submit to their insurance provider. How should you handle this request?",
//         choices: [
//           "Provide the patient with a copy of their records free of charge.",
//           "Charge a fee for copying and processing the patient's records.",
//           "Refuse the request until the patient provides written consent from their insurance provider.",
//           "Inform the patient that their insurance provider can request records directly from the dental office."
//         ],
//         answer: "Inform the patient that their insurance provider can request records directly from the dental office."
//       },
//       {
//         question: "A patient complains of severe tooth pain and requests a prescription for opioids to manage the discomfort. What is the most appropriate response?",
//         choices: [
//           "Prescribe opioids as requested to alleviate the patient's pain.",
//           "Discuss alternative pain management strategies with the patient and offer a non-opioid prescription.",
//           "Refer the patient to a pain specialist for evaluation and treatment.",
//           "Deny the patient's request for opioids due to the risk of addiction and misuse."
//         ],
//         answer: "Discuss alternative pain management strategies with the patient and offer a non-opioid prescription."
//       },
//       {
//         question: "A patient presents with multiple missing teeth and requests dental implants. However, their medical history indicates conditions that may complicate implant surgery. What should you do?",
//         choices: [
//           "Proceed with implant surgery as requested by the patient.",
//           "Conduct a thorough evaluation of the patient's medical history and consult with relevant specialists.",
//           "Inform the patient of the potential risks associated with implant surgery and offer alternative treatment options.",
//           "Refer the patient to another dental office that specializes in implant surgery."
//         ],
//         answer: "Conduct a thorough evaluation of the patient's medical history and consult with relevant specialists."
//       },
//       {
//         question: "A patient arrives for a routine dental cleaning but becomes agitated and aggressive during the appointment. How should you handle this situation?",
//         choices: [
//           "Terminate the appointment and ask the patient to reschedule when they are calmer.",
//           "Continue with the appointment while monitoring the patient's behavior closely.",
//           "Request assistance from a colleague or security personnel to manage the situation.",
//           "Offer the patient sedation to help calm their anxiety and aggression."
//         ],
//         answer: "Terminate the appointment and ask the patient to reschedule when they are calmer."
//       },
//       {
//         question: "A patient arrives for a routine dental cleaning but becomes agitated and aggressive during the appointment. How should you handle this situation?",
//         choices: [
//           "Terminate the appointment and ask the patient to reschedule when they are calmer.",
//           "Continue with the appointment while monitoring the patient's behavior closely.",
//           "Request assistance from a colleague or security personnel to manage the situation.",
//           "Offer the patient sedation to help calm their anxiety and aggression."
//         ],
//         answer: "Terminate the appointment and ask the patient to reschedule when they are calmer."
//       },
//       {
//         question: "A patient presents with a dental emergency outside of regular office hours. How should you respond?",
//         choices: [
//           "Provide the patient with emergency contact information and instruct them to go to the nearest hospital.",
//           "Schedule an emergency appointment to assess and treat the patient's condition.",
//           "Refer the patient to another dental office that offers emergency services.",
//           "Advise the patient to wait until regular office hours to seek treatment."
//         ],
//         answer: "Provide the patient with emergency contact information and instruct them to go to the nearest hospital."
//       },
//       {
//         question: "A patient expresses dissatisfaction with a dental procedure and demands a refund. What is the appropriate course of action?",
//         choices: [
//           "Offer the patient a full refund to resolve the issue.",
//           "Apologize to the patient and offer to redo the procedure at no additional cost.",
//           "Explain the rationale behind the treatment and attempt to address the patient's concerns.",
//           "Ignore the patient's complaint and continue with regular appointments as scheduled."
//         ],
//         answer: "Explain the rationale behind the treatment and attempt to address the patient's concerns."
//       },
//       {
//         question: "A patient arrives for an appointment but refuses to provide updated contact information. How should you handle this situation?",
//         choices: [
//           "Proceed with the appointment using the existing contact information on file.",
//           "Explain the importance of having accurate contact information and request the patient's cooperation.",
//           "Refuse to provide treatment until the patient provides updated contact information.",
//           "Document the refusal in the patient's records and proceed with the appointment."
//         ],
//         answer: "Explain the importance of having accurate contact information and request the patient's cooperation."
//       },
//       {
//         question: "A patient presents with a medical condition that requires antibiotic prophylaxis before dental treatment. How should you proceed?",
//         choices: [
//           "Administer antibiotics to the patient before proceeding with dental treatment.",
//           "Consult with the patient's physician to determine the appropriate antibiotic prophylaxis regimen.",
//           "Proceed with dental treatment without antibiotic prophylaxis.",
//           "Refer the patient to another dental office that specializes in treating medically compromised patients."
//         ],
//         answer: "Consult with the patient's physician to determine the appropriate antibiotic prophylaxis regimen."
//       },
//       {
//         question: "A patient requests a dental procedure that is not covered by their insurance plan. How should you handle this situation?",
//         choices: [
//           "Proceed with the procedure and bill the patient directly for the cost.",
//           "Inform the patient of the procedure's cost and offer alternative treatment options that are covered by their insurance.",
//           "Refuse to provide the procedure unless the patient agrees to pay out of pocket.",
//           "Submit a request to the insurance company for pre-authorization of the procedure."
//         ],
//         answer: "Inform the patient of the procedure's cost and offer alternative treatment options that are covered by their insurance."
//       },
//       {
//         question: "A patient arrives for a dental appointment accompanied by a service animal. How should you respond?",
//         choices: [
//           "Allow the service animal to accompany the patient throughout the appointment.",
//           "Request documentation confirming the service animal's status and training.",
//           "Refuse entry to the service animal due to concerns about hygiene and safety.",
//           "Ask the patient to leave the service animal outside the dental office."
//         ],
//         answer: "Allow the service animal to accompany the patient throughout the appointment."
//       },
//       {
//         question: "A patient requests a cosmetic dental procedure to improve their appearance. How should you proceed?",
//         choices: [
//           "Discuss the risks and benefits of the procedure with the patient and obtain informed consent.",
//           "Refuse to provide the procedure unless the patient has a valid medical need.",
//           "Offer alternative treatment options that are less invasive and more cost-effective.",
//           "Refer the patient to a cosmetic dentist for evaluation and treatment."
//         ],
//         answer: "Discuss the risks and benefits of the procedure with the patient and obtain informed consent."
//       },
//       {
//         question: "A patient arrives for a dental appointment but appears to be inebriated. How should you handle this situation?",
//         choices: [
//           "Proceed with the appointment as scheduled.",
//           "Reschedule the appointment for a later time when the patient is sober.",
//           "Refer the patient to a substance abuse counselor for evaluation and treatment.",
//           "Contact emergency services for assistance in managing the situation."
//         ],
//         answer: "Reschedule the appointment for a later time when the patient is sober."
//       },
//       {
//         question: "A patient expresses fear and anxiety about undergoing dental treatment. How should you address their concerns?",
//         choices: [
//           "Assure the patient that dental treatment is safe and painless.",
//           "Discuss the patient's fears and concerns openly and offer reassurance.",
//           "Proceed with treatment without acknowledging the patient's anxiety.",
//           "Refer the patient to a mental health professional for evaluation and treatment."
//         ],
//         answer: "Discuss the patient's fears and concerns openly and offer reassurance."
//       },
//       {
//         question: "A patient arrives at your dental office and requests to see their dental records. What should you do?",
//         choices: [
//           "Provide the patient with their dental records immediately",
//           "Ask the patient to fill out a request form and provide the records within a reasonable timeframe",
//           "Refuse to provide the records until the patient pays a fee",
//           "Deny the request citing patient privacy laws"
//         ],
//         answer: "Ask the patient to fill out a request form and provide the records within a reasonable timeframe"
//       },
//       {
//         question: "How long do you have to notify the dental board of a change in your office address?",
//         choices: [
//           "Immediately",
//           "Within 10 days",
//           "Within 30 days",
//           "No requirement to notify"
//         ],
//         answer: "Within 30 days"
//       },
//       {
//         question: "What is the requirement for a dentist to get an orthodontic assistant permit?",
//         choices: [
//           "84 hours of class and 12 months of work experience",
//           "110 hours of class and 12 months of work experience",
//           "No additional requirements beyond dental school",
//           "Completion of a specialized orthodontic program"
//         ],
//         answer: "84 hours of class and 12 months of work experience"
//       },
//       {
//         question: "Who is required to be on the dental committee?",
//         choices: [
//           "1 dentist, 4 public members, 4 hygienists",
//           "2 dentists, 3 public members, 3 hygienists",
//           "3 dentists, 2 public members, 2 hygienists",
//           "4 dentists, 1 public member, 1 hygienist"
//         ],
//         answer: "1 dentist, 4 public members, 4 hygienists"
//       },
//       {
//         question: "What is the CE requirement for renewing a dental license?",
//         choices: [
//           "Dentists - 50 CE, RDA and RDH - 25 hours",
//           "Dentists - 40 CE, RDA and RDH - 20 hours",
//           "Dentists - 60 CE, RDA and RDH - 30 hours",
//           "Dentists - 30 CE, RDA and RDH - 15 hours"
//         ],
//         answer: "Dentists - 50 CE, RDA and RDH - 25 hours"
//       },
//       {
//         question: "How long should patient records be kept for?",
//         choices: [
//           "5 years",
//           "7 years",
//           "10 years",
//           "Indefinitely"
//         ],
//         answer: "7 years"
//       },
//       {
//         question: "What is the allowable proportion of hours for CE related to self or office management?",
//         choices: [
//           "20%",
//           "30%",
//           "50%",
//           "80%"
//         ],
//         answer: "20%"
//       },
//       {
//         question: "How long do you have to offer employees the Hepatitis B vaccine after they start working?",
//         choices: [
//           "Immediately",
//           "Within 10 days",
//           "Within 30 days",
//           "No requirement"
//         ],
//         answer: "Within 10 days"
//       },
//       {
//         question: "How long should employee records be kept after termination?",
//         choices: [
//           "5 years",
//           "10 years",
//           "20 years",
//           "30 years"
//         ],
//         answer: "30 years"
//       },
//       {
//         question: "How long do you have to report a death or hospitalization longer than 24 hours due to a dental procedure?",
//         choices: [
//           "Immediately",
//           "Within 24 hours",
//           "Within 7 days",
//           "Within 30 days"
//         ],
//         answer: "Within 7 days"
//       },
//       {
//         question: "What is the required waiting period for a patient to receive a refund for dental services?",
//         choices: [
//           "Within 10 days of the request",
//           "Within 30 days of the request",
//           "Within 60 days of the request",
//           "No requirement for a waiting period"
//         ],
//         answer: "Within 30 days of the request"
//       },
//       {
//         question: "When is it appropriate to disclose patient information to a third party without consent?",
//         choices: [
//           "When requested by law enforcement",
//           "When requested by the patient's insurance company",
//           "When there is a medical emergency",
//           "Only with the patient's explicit consent"
//         ],
//         answer: "When there is a medical emergency"
//       },
//       {
//         question: "What is the recommended protocol for handling a patient who refuses necessary dental treatment due to financial concerns?",
//         choices: [
//           "Refer the patient to a charity dental clinic",
//           "Offer a payment plan option for the treatment",
//           "Refuse treatment until the patient can afford it",
//           "Proceed with treatment regardless of the patient's financial situation"
//         ],
//         answer: "Offer a payment plan option for the treatment"
//       },
//       {
//         question: "How should a dental office handle a patient's complaint about the behavior of a staff member?",
//         choices: [
//           "Investigate the complaint internally and take appropriate action",
//           "Dismiss the complaint if it does not involve clinical care",
//           "Ignore the complaint unless it is made in writing",
//           "Inform the patient that staff behavior is not the responsibility of the dental office"
//         ],
//         answer: "Investigate the complaint internally and take appropriate action"
//       },
//       {
//         question: "What is the recommended method for disposing of expired dental materials and medications?",
//         choices: [
//           "Throw them in the regular trash",
//           "Flush them down the sink or toilet",
//           "Return them to the manufacturer for disposal",
//           "Dispose of them in a designated hazardous waste container"
//         ],
//         answer: "Dispose of them in a designated hazardous waste container"
//       },
//       {
//         question: "When is it appropriate to release a patient's dental records to their attorney?",
//         choices: [
//           "Upon the patient's request",
//           "Only with a court order",
//           "When the attorney provides written consent from the patient",
//           "When the patient is involved in a legal dispute related to their dental treatment"
//         ],
//         answer: "When the patient is involved in a legal dispute related to their dental treatment"
//       },
//       {
//         question: "What should a dental office do if a patient fails to show up for a scheduled appointment?",
//         choices: [
//           "Charge the patient a fee for the missed appointment",
//           "Contact the patient to reschedule the appointment",
//           "Remove the patient from the practice's patient list",
//           "Ignore the missed appointment unless the patient contacts the office"
//         ],
//         answer: "Contact the patient to reschedule the appointment"
//       },
//       {
//         question: "How should a dental office handle a patient's request to amend their dental records?",
//         choices: [
//           "Refuse the request unless ordered by a court",
//           "Allow the patient to submit a written amendment to be included in their records",
//           "Ignore the request if the records are accurate",
//           "Inform the patient that dental records cannot be amended"
//         ],
//         answer: "Allow the patient to submit a written amendment to be included in their records"
//       },
//       {
//         question: "What is the recommended protocol for confirming appointments with patients?",
//         choices: [
//           "Send a text message reminder the day before the appointment",
//           "Call the patient's home phone number to confirm the appointment",
//           "Send an email reminder two days before the appointment",
//           "Send a letter by mail confirming the appointment date and time"
//         ],
//         answer: "Send a text message reminder the day before the appointment"
//       },
//       {
//         question: "How should a dental office handle a patient's request to transfer their records to another provider?",
//         choices: [
//           "Refuse the request unless the patient provides written consent",
//           "Charge the patient a fee for transferring the records",
//           "Transfer the records to the new provider promptly and free of charge",
//           "Delay transferring the records until the patient pays any outstanding balances"
//         ],
//         answer: "Transfer the records to the new provider promptly and free of charge"
//       }
// ]

function checkExamCorrupted() {
  const atleastOneMatch = (question) =>
    question.choices.some((choice) => choice === question.answer);
  examNotCorrupted = questions.every(
    (q) => !!q.answer && !!q.choices && atleastOneMatch(question),
  );
  if (!examNotCorrupted) {
  }
}

function logCorrupted() {
  var no = [];
  for (indices in questions) {
    const question = questions[indices];
    const choices = question.choices;
    const answer = question.answer;

    if (!choices.includes(answer)) {
      no.push(indices);
    }
  }
  console.error("Answers are mismatching strings for: ", no);
}

const marker = document.getElementById("mark-icon");
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
  for (i in indices) {
    questions[i].noScore = true;
  }
}

let currentQuestionIndex = 0;
let score = 0;
let timer = 60 * 60; // 60 minutes
let ranOutOfTime = false;
let allAnswered = false;
function displayQuestion(initial) {
  if (!initial) {
    document.getElementById("results_link").style.display = "none";
  }
  marker.style.visibility = "hidden";
  const questionObj = questions[currentQuestionIndex];
  const questionNumber = String(currentQuestionIndex + 1) + ". ";
  document.getElementById("of").innerHTML =
    questionNumber + "of " + String(questions.length);
  document.getElementById("question").textContent =
    questionNumber + questionObj.question;
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
    radio.addEventListener("change", function () {
      questionObj.answered = this.value; // Update the question object with the selected answer
      showSubmitExamCTA();
    });

    // Append the label and a line break to the choices container
    choicesContainer.appendChild(label);
    choicesContainer.appendChild(document.createElement("br")); // This adds a line break
  });
}

function prepareAndSubmitResults() {
  let done = true;
  allAnswered = questions.every((q) => !!q.answered);
  if (!ranOutOfTime && !allAnswered) {
    alert("Please answer all questions before submitting.");
    return;
  }
  const markedQuestionNumbers = [];
  const markedOnes = questions.forEach((question, i) => {
      if (question.marked) {
        markedQuestionNumbers.push(i + 1);
      }
  })
  const rdc = markedQuestionNumbers.length ? '': markedQuestionNumbers.reduce((prev, next) => {
    return String(prev) + ' ' + next ? String(next): '';
}) 
  const qs = 'Questions ' + rdc
  let permission = true;
  if (markedQuestionNumbers.length) {
    permission = false;
    const userInput = prompt("Warning: You have marked " + qs + ". Enter yes to proceed and submit or go back");
    if (!userInput || userInput.toLowerCase() !== 'yes') {
      unmarkedQuestionsNoPermission = true;
      return;
    } else {
      unmarkedQuestionsNoPermission = false;
    }
  }


  // clearInterval(interval);
  // fetch("/submit-quiz", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ result_data: JSON.stringify(questions) }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.error("Error:", error));
}

function showResult(fromLastPage) {
  if (fromLastPage) {
    currentQuestionIndex--;
  }
  prepareAndSubmitResults();
  showScore();
}

function scorableQuestions() {
  if (!isPSIExam()) return questions.length;
  else {
    return questions.filter((q) => !q.noScore).length;
  }
}

function showScore() {
  if (unmarkedQuestionsNoPermission || (!ranOutOfTime && !allAnswered)) {
    return;
  }
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("of").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("result").textContent =
    `Your score is: ${score} / ${scorableQuestions()}`;
  showPassFailStatus();
}

function showPassFailStatus() {
  const pof = document.getElementById("pass_or_fail");
  pof.style.display = "block";
  const passOrFail = (score / questions.length) * 100 >= 75 ? "PASS" : "FAIL";
  pof.textContent = passOrFail;
  pof.style.color = passOrFail === "PASS" ? "green" : "red";
}

function isPSIExam() {
  return questions.length === 60;
}

function nextQuestion() {
  document.getElementById("mark-icon").style.visibility = "hidden";
  const selectedChoice = document.querySelector('input[name="choice"]:checked');
  if (
    selectedChoice &&
    selectedChoice.value === questions[currentQuestionIndex].answer &&
    !questions[currentQuestionIndex].noScore
  ) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    showSubmitExamCTA();
    renderMarkerIfNeeded();
  } else {
    // last page.
    showResult(true);
  }
}
function showSubmitExamCTA() {
  if (questions.every((q) => q.answered)) {
    document.getElementById("submit_exam").style.display = "block";
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
    document.getElementById("mark-icon").style.visibility = "hidden";
  } else {
    questionObj.marked = true;
    unmarkedQuestionsNoPermission = false;
    renderMarkerIfNeeded();
  }
}

function renderMarkerIfNeeded() {
  const questionObj = questions[currentQuestionIndex];
  if (questionObj.marked) {
    document.getElementById("mark-icon").style.visibility = "visible";
  }
}

function submitExam() {
  showResult(true);
}

document.getElementById("next").addEventListener("click", nextQuestion);
document.getElementById("back").addEventListener("click", backQuestion);
document.getElementById("marker").addEventListener("click", markQuestion);
document.getElementById("submit_exam").addEventListener("click", submitExam);

document.addEventListener("DOMContentLoaded", function () {
  // Get the element with id "mark-icon"
  var markIcon = document.getElementById("mark-icon");
  var sub = document.getElementById("submit_exam");

  // Check if the element exists
  if (markIcon) {
    // Set the display property to 'none'
    markIcon.style.visibility = "hidden";
    sub.style.display = "none";
  }
});
// Initialize quiz
if (examNotCorrupted) {
  displayQuestion(true);
  startTimer(timer);
}


/*

automation 

setInterval(() => {
    document.querySelectorAll('#choices label input')[0].click()
document.querySelector('#next').click()
}, 500)

*/