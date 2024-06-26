let examNotCorrupted = true;
let unmarkedQuestionsNoPermission = false;

let set1 = [
  {
      "question": "What is the recommended course of action if a dentist decides to discontinue a course of treatment for a patient?",
      "choices": [
          "Terminate the treatment without notice",
          "Provide the patient with a short notice and discontinue the treatment",
          "Give the patient adequate notice and the opportunity to obtain the services of another dentist",
          "Transfer the patient to another dental practice without informing them"
      ],
      "answer": "Give the patient adequate notice and the opportunity to obtain the services of another dentist"
  },
  {
      "question": "What should a dentist do when leaving a dental practice in terms of informing patients?",
      "choices": [
          "Withhold their new contact information to maintain privacy",
          "Provide misleading information to patients about their relocation",
          "Inform patients of their new contact information upon request",
          "Avoid any responsibility in notifying patients of the dentist's departure"
      ],
      "answer": "Inform patients of their new contact information upon request"
  },
  {
      "question": "How should dentists approach the treatment of patients with disabilities?",
      "choices": [
          "Provide treatment without consulting other practitioners",
          "Consult or refer the patient to another practitioner if necessary",
          "Deny treatment to patients with disabilities",
          "Avoid consultation with the patient's physician"
      ],
      "answer": "Consult or refer the patient to another practitioner if necessary"
  },
  {
      "question": "Who defines the standards of care or quality services in dentistry where undefined by law?",
      "choices": [
          "California State Dental Board",
          "California Dental Association or designated agency",
          "American Dental Association",
          "Individual dental practices"
      ],
      "answer": "California Dental Association or designated agency"
  },
  {
      "question": "What is the ethical obligation of a dentist regarding the standard of care?",
      "choices": [
          "To provide substandard care",
          "To render care according to personally defined standards",
          "To render care defined by the California Dental Association",
          "To provide quality care and avoid substandard practices"
      ],
      "answer": "To provide quality care and avoid substandard practices"
  },
  {
      "question": "When is it necessary for a dentist to obtain informed consent from a patient?",
      "choices": [
          "Only for surgical procedures",
          "Before treatment or the use of any identifiable artifacts for purposes other than treatment",
          "When requested by the patient after treatment",
          "When conducting research without patient involvement"
      ],
      "answer": "Before treatment or the use of any identifiable artifacts for purposes other than treatment"
  },
  {
      "question": "What is the dentist's obligation regarding explaining proposed treatment to the patient?",
      "choices": [
          "Briefly mention the treatment options without explaining risks",
          "Explain treatment, reasonable alternatives, and risks in an accurate and understandable manner",
          "Avoid explaining treatment options to maintain patient trust",
          "Provide treatment without any explanation to ensure compliance"
      ],
      "answer": "Explain treatment, reasonable alternatives, and risks in an accurate and understandable manner"
  },
  {
      "question": "What action should a dentist take when suspecting abuse in a patient?",
      "choices": [
          "Obtain informed consent before taking any actions",
          "Report the suspicion of abuse without obtaining informed consent",
          "Avoid reporting abuse to maintain patient confidentiality",
          "Confront the patient directly about the suspicion"
      ],
      "answer": "Report the suspicion of abuse without obtaining informed consent"
  },
  {
      "question": "How should dentists handle patient records and information?",
      "choices": [
          "Publicly disclose patient records to ensure transparency",
          "Safeguard patient confidentiality and provide information beneficial for future treatment upon request",
          "Sell patient records for profit",
          "Delete patient records after treatment"
      ],
      "answer": "Safeguard patient confidentiality and provide information beneficial for future treatment upon request"
  },
  {
      "question": "What is the obligation of a dentist regarding informing patients of their oral health status?",
      "choices": [
          "No obligation to inform patients",
          "Inform patients of their oral health status in a justifiable manner",
          "Provide false information to keep patients satisfied",
          "Inform patients only if requested"
      ],
      "answer": "Inform patients of their oral health status in a justifiable manner"
  },
  {
      "question": "What is the responsibility of dentists regarding patient confidentiality?",
      "choices": [
          "Dentists must disclose patient records to anyone upon request",
          "Dentists should maintain patient records in a manner consistent with patient welfare",
          "Dentists are not required to safeguard patient confidentiality",
          "Dentists are only obligated to provide patient information to law enforcement agencies"
      ],
      "answer": "Dentists should maintain patient records in a manner consistent with patient welfare"
  },
  {
      "question": "What obligation does a dentist have regarding informing patients about their oral health status?",
      "choices": [
          "Dentists are not obligated to inform patients about their oral health status",
          "Dentists should inform patients only if specifically requested",
          "Dentists must inform patients about their present oral health status",
          "Dentists are only required to inform other dental practitioners"
      ],
      "answer": "Dentists must inform patients about their present oral health status"
  },
  {
      "question": "When should a dentist report instances of faulty treatment?",
      "choices": [
          "Only if legally obligated",
          "Only if the patient files a complaint",
          "Whenever they suspect instances of gross and/or continual faulty treatment",
          "Only if instructed by the previous treating dentist"
      ],
      "answer": "Whenever they suspect instances of gross and/or continual faulty treatment"
  },
  {
      "question": "What types of media can a dentist participate in for public health education?",
      "choices": [
          "Social media only",
          "Any media, including press, radio, television, and lectures",
          "Print media only",
          "Private health education sessions only"
      ],
      "answer": "Any media, including press, radio, television, and lectures"
  },
  {
      "question": "What is considered unethical in regards to solicitation of children for dental health programs?",
      "choices": [
          "Using dental health programs for any financial benefit",
          "Providing dental screenings to children",
          "Distributing business cards to children",
          "Promoting dental health education in schools"
      ],
      "answer": "Using dental health programs for any financial benefit"
  },
  {
      "question": "What obligation does a dentist have regarding false statements in documents filed with professional associations?",
      "choices": [
          "No obligation, as long as the false statement benefits the dentist",
          "To ensure that all statements are accurate and truthful",
          "To omit any material facts that may be detrimental to the dentist",
          "To file documents without reviewing them for accuracy"
      ],
      "answer": "To ensure that all statements are accurate and truthful"
  },
  {
      "question": "What obligation do dentists have regarding their representation in public?",
      "choices": [
          "To represent themselves in a manner that benefits only themselves",
          "To represent themselves in a manner that contributes to the esteem of the profession",
          "To avoid public representation altogether",
          "To represent themselves in a manner that benefits their competitors"
      ],
      "answer": "To represent themselves in a manner that contributes to the esteem of the profession"
  },
  {
      "question": "What is considered unethical in regards to advertising or soliciting patients?",
      "choices": [
          "Using humor in advertisements",
          "Providing discounts to new patients",
          "Making false or misleading statements about services or fees",
          "Advertising on social media platforms"
      ],
      "answer": "Making false or misleading statements about services or fees"
  },
  {
      "question": "What constitutes false advertising according to Advisory Opinion 6.A.1?",
      "choices": [
          "Providing a partial disclosure of relevant facts",
          "Creating unjustified expectations of favorable results",
          "Issuing a public statement expressing official sanction without consent",
          "Stating factual information accurately"
      ],
      "answer": "Creating unjustified expectations of favorable results"
  },
  {
      "question": "What requirement must dentists fulfill when compensating representatives of media for publicity?",
      "choices": [
          "They are not required to disclose any compensation",
          "They must disclose any compensation given to representatives",
          "They must ensure the publicity benefits only themselves",
          "They must ensure the publicity is scientifically incorrect"
      ],
      "answer": "They must disclose any compensation given to representatives"
  },
  {
      "question": "When can a dentist issue a public statement implying official sanction without consent?",
      "choices": [
          "Anytime they deem it necessary",
          "Only after receiving authorization from the governing body of relevant organizations",
          "Only if the statement benefits the dentist personally",
          "Without any limitations"
      ],
      "answer": "Only after receiving authorization from the governing body of relevant organizations"
  },
  {
      "question": "What should dentists ensure about their public statements?",
      "choices": [
          "They should ensure that statements benefit their competitors",
          "They should ensure that statements are not scientifically correct",
          "They should ensure that statements comply with the Code of Ethics",
          "They should ensure that statements are misleading"
      ],
      "answer": "They should ensure that statements comply with the Code of Ethics"
  },
  {
      "question": "What is the responsibility of dentists in regards to partial disclosure of relevant facts?",
      "choices": [
          "To disclose only facts that benefit the dentist",
          "To disclose all relevant facts accurately",
          "To selectively disclose facts to create favorable expectations",
          "To avoid disclosing any facts"
      ],
      "answer": "To disclose all relevant facts accurately"
  },
  {
      "question": "What action is considered unethical in public statements?",
      "choices": [
          "Issuing statements that are scientifically correct",
          "Providing accurate information about dental services",
          "Implying official sanction of dental associations without due consent",
          "Providing partial disclosure of relevant facts"
      ],
      "answer": "Implying official sanction of dental associations without due consent"
  },
  {
      "question": "What ethical concerns can arise from subjective statements about the quality of dental services?",
      "choices": [
          "None, as long as the statements are positive",
          "Statements of opinion can be misleading if they misrepresent qualifications or are not honestly held",
          "Patients should not interpret subjective statements as implied statements of fact",
          "The only concern is whether the statements are legally permissible"
      ],
      "answer": "Statements of opinion can be misleading if they misrepresent qualifications or are not honestly held"
  },
  {
      "question": "What professional titles and degrees are dentists allowed to use?",
      "choices": [
          "Any title or degree, regardless of its relevance or accuracy",
          "Only titles and degrees conferred by recognized dental colleges or schools",
          "Any title or degree earned in any field",
          "Titles and degrees earned before graduation from dental or medical school"
      ],
      "answer": "Only titles and degrees conferred by recognized dental colleges or schools"
  },
  {
      "question": "Under what circumstances may a dentist use volunteer position titles and association or component society connected experience?",
      "choices": [
          "In any commercial endeavor to enhance their reputation",
          "Only if it conflicts with state law",
          "When such usage suggests superior skills",
          "In scientific papers and curriculum vitae not used for commercial purposes"
      ],
      "answer": "In scientific papers and curriculum vitae not used for commercial purposes"
  },
  {
      "question": "What degrees are considered acceptable to list with professional titles?",
      "choices": [
          "Any degree earned at any time, regardless of relevance",
          "Only degrees earned after graduation from dental or medical school",
          "Degrees earned prior to graduation from dental or medical school",
          "Certificates and licenses"
      ],
      "answer": "Only degrees earned after graduation from dental or medical school"
  },
  {
      "question": "What is the primary consideration in evaluating the use of volunteer position titles and association or component society connected experience?",
      "choices": [
          "Whether the usage benefits the dentist personally",
          "Whether the usage is legally permissible",
          "Whether the usage is false or misleading in a material respect",
          "Whether the usage enhances the dentist's reputation"
      ],
      "answer": "Whether the usage is false or misleading in a material respect"
  },
  {
      "question": "Why is the use of degrees earned prior to graduation from dental or medical school considered misleading?",
      "choices": [
          "Because they indicate specialty status or advanced dental education",
          "Because they are not relevant to dental practice",
          "Because they are legally prohibited",
          "Because they are not recognized by dental colleges"
      ],
      "answer": "Because they indicate specialty status or advanced dental education"
  },
  {
      "question": "What standard does the council apply when reviewing the use of volunteer position titles and association or component society connected experience?",
      "choices": [
          "Whether the usage benefits the dentist personally",
          "Whether the usage complies with state law",
          "Whether the usage is false or misleading in a material respect",
          "Whether the usage enhances the dentist's reputation"
      ],
      "answer": "Whether the usage is false or misleading in a material respect"
  },
  {
      "question": "What must be disclosed when compensating representatives of media for professional publicity?",
      "choices": [
          "The exact amount of compensation given",
          "Any compensation given",
          "No compensation needs to be disclosed",
          "The compensation only needs to be disclosed if it exceeds a certain amount"
      ],
      "answer": "Any compensation given"
  },
  {
      "question": "What letter abbreviations can a dentist append to indicate successful completion of a dental educational program?",
      "choices": [
          "Any letter abbreviations they prefer",
          "Only the letters 'D.D.S.' as permitted by state law",
          "Any letter abbreviation representing the degree conferred by a recognized dental college or school",
          "Any letter abbreviation, but not both 'D.D.S.' and the degree abbreviation simultaneously"
      ],
      "answer": "Any letter abbreviation representing the degree conferred by a recognized dental college or school"
  },
  {
      "question": "Why should dentists avoid using trade or assumed names that are false or misleading?",
      "choices": [
          "To create mystery around their practice",
          "To attract more patients",
          "To ensure patients are accurately informed",
          "To make their practice seem more prestigious"
      ],
      "answer": "To ensure patients are accurately informed"
  },
  {
      "question": "What obligation does a dentist have regarding billing practices?",
      "choices": [
          "To bill for services at any rate desired by the dentist",
          "To bill for services in a manner that is not fraudulent, deceitful, or misleading",
          "To bill for services without regard for accuracy or honesty",
          "To bill for services without informing the patient"
      ],
      "answer": "To bill for services in a manner that is not fraudulent, deceitful, or misleading"
  },
  {
      "question": "What ethical concern arises if a dentist accepts a third-party payment under a copayment plan without disclosing that the patient's payment portion will not be collected?",
      "choices": [
          "The patient may be charged more than expected",
          "The dentist may receive excessive payment",
          "The third-party payer may be deceived about the actual charge to the patient",
          "The dentist may not receive adequate compensation"
      ],
      "answer": "The third-party payer may be deceived about the actual charge to the patient"
  },
  {
      "question": "What action should a dentist take if payment has been received for a service that is ultimately never rendered?",
      "choices": [
          "Keep the payment and not provide the service",
          "Arrange to refund any overpayment immediately",
          "Bill the patient again for the same service",
          "Ignore the overpayment and continue with business as usual"
      ],
      "answer": "Arrange to refund any overpayment immediately"
  },
  {
      "question": "What obligation does a dentist have regarding emergency care for patients?",
      "choices": [
          "To refuse emergency care for patients not of record",
          "To make unreasonable arrangements for emergency care",
          "To make reasonable arrangements for emergency care for patients of record and patients not of record",
          "To only provide emergency care for patients of record"
      ],
      "answer": "To make reasonable arrangements for emergency care for patients of record and patients not of record"
  },
  {
      "question": "What recommendation should a dentist make regarding continuity of care for a patient not of record?",
      "choices": [
          "Recommend the patient to discontinue treatment with the original treating dentist",
          "Recommend the patient to continue treatment with the original treating dentist",
          "Recommend the patient to seek treatment from a different dentist",
          "Make no recommendation regarding continuity of care"
      ],
      "answer": "Recommend the patient to continue treatment with the original treating dentist"
  },
  {
      "question": "What obligation does a dentist have when the delivery of care to a patient requires diagnostic and therapeutic modalities beyond the dentist's scope of services?",
      "choices": [
          "To continue providing care without informing the patient",
          "To inform the patient of all available treatment options and refer the patient to a qualified provider if necessary",
          "To refuse to provide care beyond their scope of services",
          "To refer the patient to a specialist without informing them of other options"
      ],
      "answer": "To inform the patient of all available treatment options and refer the patient to a qualified provider if necessary"
  },
  {
      "question": "Under what circumstances does a dentist have the obligation to inform a patient of all available options, even if they are not covered by a third-party payer's plan?",
      "choices": [
          "When the patient requests it",
          "When the patient's condition requires services beyond the payer's contracted services or providers",
          "Only when the dentist deems it necessary",
          "When the dentist prefers outside referrals"
      ],
      "answer": "When the patient's condition requires services beyond the payer's contracted services or providers"
  },
  {
      "question": "What obligation does a specialist or consulting dentist have regarding the continuity of care when a patient is referred to them?",
      "choices": [
          "They have no obligation to inform the patient of the need to continue care with the referring dentist",
          "They should immediately take over all aspects of the patient's care",
          "They must inform the patient of the need to continue care with the referring dentist unless the patient expresses a different preference",
          "They should refer the patient to another specialist"
      ],
      "answer": "They must inform the patient of the need to continue care with the referring dentist unless the patient expresses a different preference"
  },
  {
      "question": "Under what circumstances does a specialist or consulting dentist have the obligation to inform the patient of the need for further dental care?",
      "choices": [
          "Only when requested by the patient",
          "Never, it is the patient's responsibility to seek further care",
          "When there is no referring dentist and upon completion of treatment",
          "Only when the patient's condition worsens"
      ],
      "answer": "When there is no referring dentist and upon completion of treatment"
  },
  {
      "question": "When may a dentist provide expert testimony?",
      "choices": [
          "Only when requested by the patient",
          "Only when the dentist is confident in their opinion",
          "When the testimony is essential to a just and fair disposition of a judicial or administrative action",
          "Never, dentists are not permitted to provide expert testimony"
      ],
      "answer": "When the testimony is essential to a just and fair disposition of a judicial or administrative action"
  },
  {
      "question": "What is considered unethical regarding a dentist's engagement as an expert witness?",
      "choices": [
          "Using information learned as an expert witness for personal gain",
          "Providing expert opinions about patients in litigation",
          "Accepting requests from attorneys to provide expert opinions",
          "Accepting patients into the practice who are involved in litigation"
      ],
      "answer": "Using information learned as an expert witness for personal gain"
  },
  {
      "question": "What action should a dentist take if accepting a request from an attorney to provide an expert opinion about a person who is not a patient of the dentist?",
      "choices": [
          "Accept the person as a patient immediately",
          "Reject the person as a patient until the litigation is concluded",
          "Accept the person as a patient but refrain from discussing the litigation",
          "Accept the person as a patient but report their involvement in litigation to the authorities"
      ],
      "answer": "Reject the person as a patient until the litigation is concluded"
  },
  {
      "question": "What right does a dentist have regarding speaking out against policies espoused by organized dentistry?",
      "choices": [
          "The right to misrepresent such policies",
          "The right to represent their views as those of the dental society",
          "The right to speak out against policies as long as they are not misrepresented",
          "The right to represent their views as those of the majority of dentists in the community"
      ],
      "answer": "The right to speak out against policies as long as they are not misrepresented"
  },
  {
      "question": "Under what circumstances is it unethical for a dentist to publish comments on dental health subjects?",
      "choices": [
          "If the comments are made without any evidence",
          "If the comments are made without the dentist having sufficient information to justify their truth",
          "If the comments are made without the dentist being a member of organized dentistry",
          "If the comments are made without prior approval from the dental society"
      ],
      "answer": "If the comments are made without the dentist having sufficient information to justify their truth"
  },
  {
      "question": "What types of arrangements are considered unethical regarding fees in dentistry?",
      "choices": [
          "Accepting or tendering rebates only",
          "Accepting or tendering split fees only",
          "Accepting or tendering rebates or split fees",
          "Accepting or tendering rebates, split fees, or undisclosed fee arrangements"
      ],
      "answer": "Accepting or tendering rebates, split fees, or undisclosed fee arrangements"
  },
  {
      "question": "Under what circumstances is the prohibition against fee splitting not applicable in the marketing of dental treatments or procedures via 'social coupons'?",
      "choices": [
          "If the third-party advertiser recommends, endorses, or selects the healthcare provider",
          "If the fee paid to the third-party advertiser is not commensurate with the advertising service provided",
          "If the marketing is conducted via group advertising",
          "If the third-party advertiser does not recommend, endorse, or select the healthcare provider and the fee paid is commensurate with the advertising service provided"
      ],
      "answer": "If the third-party advertiser does not recommend, endorse, or select the healthcare provider and the fee paid is commensurate with the advertising service provided"
  },
  {
      "question": "When is the prohibition against fee splitting not applicable in marketing via group advertising or referral services?",
      "choices": [
          "If the fees are based on the number of referrals",
          "If the fees are based on the amount of professional fees paid by the patient to the dentist",
          "If the fees are not based on the number of referrals or amount of professional fees paid by the patient to the dentist",
          "If the fees are disclosed to the patient"
      ],
      "answer": "If the fees are not based on the number of referrals or amount of professional fees paid by the patient to the dentist"
  },
  {
      "question": "What principle of ethics emphasizes the patient's right to determine what should be done with their own bodies?",
      "choices": [
          "Beneficence",
          "Compassion",
          "Veracity",
          "Autonomy"
      ],
      "answer": "Autonomy"
  },
  {
      "question": "What is the obligation of a dentist regarding beneficence?",
      "choices": [
          "To seek personal gain",
          "To seek the good of others",
          "To prioritize their own skills over those of specialized experts",
          "To minimize benefits for the patient"
      ],
      "answer": "To seek the good of others"
  },
  {
      "question": "What characteristic of an ethical dental professional involves caring and identifying with the patient's overall well-being?",
      "choices": [
          "Competence",
          "Integrity",
          "Compassion",
          "Tolerance"
      ],
      "answer": "Compassion"
  },
  {
      "question": "What principle of ethics requires the dentist to diagnose and treat the patient's oral health needs?",
      "choices": [
          "Integrity",
          "Competence",
          "Justice",
          "Tolerance"
      ],
      "answer": "Competence"
  },
  {
      "question": "What principle of ethics commits the dentist to behave with honor and decency?",
      "choices": [
          "Integrity",
          "Professionalism",
          "Justice",
          "Veracity"
      ],
      "answer": "Integrity"
  },
  {
      "question": "What principle of ethics requires the dentist to diagnose and treat the patient's oral health needs?",
      "choices": [
          "Integrity",
          "Competence",
          "Justice",
          "Tolerance"
      ],
      "answer": "Competence"
  },
  {
      "question": "According to the ADA Code, which principle emphasizes patients' rights to make informed decisions about their treatment options?",
      "choices": [
          "Patient Autonomy",
          "Nonmaleficence",
          "Beneficence",
          "Veracity"
      ],
      "answer": "Patient Autonomy"
  },
  {
      "question": "Which principle of ethics prioritizes patient safety and requires dentists to avoid unnecessary harm?",
      "choices": [
          "Patient Autonomy",
          "Nonmaleficence",
          "Beneficence",
          "Veracity"
      ],
      "answer": "Nonmaleficence"
  },
  {
      "question": "In the ADA Code, what principle mandates that dentists act in the best interest of the patient, considering their specific needs and well-being?",
      "choices": [
          "Patient Autonomy",
          "Nonmaleficence",
          "Beneficence",
          "Veracity"
      ],
      "answer": "Beneficence"
  }
]
let set2 = [
  {
      "question": "Which principle of ethics requires dentists to treat all patients fairly, regardless of their background or insurance status?",
      "choices": [
          "Patient Autonomy",
          "Nonmaleficence",
          "Beneficence",
          "Justice"
      ],
      "answer": "Justice"
  },
  {
      "question": "Dentists are obligated to stay updated on advancements in dentistry through continuing education. Which principle does this align with?",
      "choices": [
          "Professional Competence",
          "Safe Practices",
          "Ethical Conduct",
          "Marketing and Advertising"
      ],
      "answer": "Professional Competence"
  },
  {
      "question": "Reporting any suspected unethical behavior of colleagues to the ADA is an example of fulfilling which expectation outlined in the ADA Code?",
      "choices": [
          "Ethical Conduct",
          "Financial Considerations",
          "Safe Practices",
          "Marketing and Advertising"
      ],
      "answer": "Ethical Conduct"
  },
  {
      "question": "Utilizing only approved dental devices and techniques to ensure patient safety falls under which category of expectations in the ADA Code?",
      "choices": [
          "Safe Practices",
          "Professional Competence",
          "Emergency Care",
          "Marketing and Advertising"
      ],
      "answer": "Safe Practices"
  },
  {
      "question": "Which aspect of the ADA Code emphasizes that marketing dental services should be truthful, accurate, and avoid misleading claims?",
      "choices": [
          "Marketing and Advertising",
          "Patient Care",
          "Ethical Conduct",
          "Professionalism and Public Service"
      ],
      "answer": "Marketing and Advertising"
  },
  {
      "question": "What do Advisory Opinions provided by the ADA offer?",
      "choices": [
          "Legal guidelines for dental practices",
          "Ethical principles for dental research",
          "Additional guidance in applying the ADA Code to specific situations",
          "Recommendations for dental education programs"
      ],
      "answer": "Additional guidance in applying the ADA Code to specific situations"
  },
  {
      "question": "Which statement best summarizes the purpose of the ADA Code of Ethics and Code of Professional Conduct?",
      "choices": [
          "To prioritize financial gain over patient care",
          "To maintain a respectful and ethical workplace environment",
          "To provide strict regulations for dental advertising",
          "To guide dentists in ethical decision-making and ensure high-quality patient care"
      ],
      "answer": "To guide dentists in ethical decision-making and ensure high-quality patient care"
  },
  {
      "question": "How long does a licensee have to notify the dental board of any change in their place of practice?",
      "choices": [
          "7 days",
          "14 days",
          "30 days",
          "60 days"
      ],
      "answer": "30 days"
  },
  {
      "question": "When must a licensee report the death of a patient during a dental procedure?",
      "choices": [
          "Within 7 days",
          "Within 14 days",
          "Within 30 days",
          "Within 60 days"
      ],
      "answer": "Within 7 days"
  },
  {
      "question": "What must a dentist do if a patient dies in their practice?",
      "choices": [
          "Report to the dental board only",
          "Report to the DHBC only",
          "Report to both the dental board and DHBC",
          "No reporting required"
      ],
      "answer": "Report to the dental board only"
  },
  {
      "question": "What constitutes false, fraudulent, misleading, or deceptive advertising according to the California Dental Practice Act?",
      "choices": [
          "Any statement of professional superiority",
          "Any scientific claim that cannot be substantiated",
          "Any endorsement or testimonial without material facts disclosed",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Using any false, assumed, or fictitious name in advertising is considered:",
      "choices": [
          "Unprofessional conduct",
          "Standard practice",
          "Acceptable",
          "Not regulated"
      ],
      "answer": "Unprofessional conduct"
  },
  {
      "question": "What activities are considered 'advertising' or 'advertisement' according to the California Dental Practice Act?",
      "choices": [
          "Any communication for the purpose of soliciting, describing, or promoting a dentist's licensed activities",
          "Printing or writing on buildings or uniforms for identification purposes",
          "Communication used in the ordinary course of business without solicitation or promotion",
          "All of the above"
      ],
      "answer": "Any communication for the purpose of soliciting, describing, or promoting a dentist's licensed activities"
  },
  {
      "question": "Which of the following statements may be included in advertising by a licensee?",
      "choices": [
          "A statement of the practitioner's name and address",
          "A statement of office hours",
          "A statement of languages spoken by the practitioner",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is considered false, fraudulent, misleading, or deceptive advertising according to the California Dental Practice Act?",
      "choices": [
          "Any claim likely to mislead due to failure to disclose material facts",
          "Using photographs of models without stating they are models",
          "Making claims of professional superiority without evidence",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is considered unprofessional conduct in advertising according to the California Dental Practice Act?",
      "choices": [
          "Using false or assumed names",
          "Making deceptive claims",
          "Advertising guarantees of painless dental procedures",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is considered unprofessional conduct regarding group advertising and referral services?",
      "choices": [
          "Participating in group advertising that violates the law",
          "Advertising services through third-party advertisers",
          "Selling services through referral services",
          "None of the above"
      ],
      "answer": "Participating in group advertising that violates the law"
  },
  {
      "question": "In online advertising services, what must a licensee disclose to purchasers?",
      "choices": [
          "The regular, nondiscounted price of the service",
          "The license type of all staff members",
          "The highest level of academic degree of all staff members",
          "The name of the third-party advertiser"
      ],
      "answer": "The regular, nondiscounted price of the service"
  },
  {
      "question": "What requirement must be met for fee advertising to be considered accurate and not misleading?",
      "choices": [
          "Using phrases like 'as low as' or 'lowest prices'",
          "Including charges for related professional services in the advertised fee",
          "Basing comparisons on unverifiable data",
          "Offering discounts without listing the nondiscounted fee"
      ],
      "answer": "Including charges for related professional services in the advertised fee"
  },
  {
      "question": "According to the California Dental Practice Act, what must be displayed prominently on a dental practice website?",
      "choices": [
          "List of discounts offered",
          "Names of all staff members",
          "License type and academic degree of all staff members",
          "Length of time discounts will be honored"
      ],
      "answer": "License type and academic degree of all staff members"
  },
  {
      "question": "What details must be included in denture advertising?",
      "choices": [
          "The color of the dentures",
          "Whether the dentures are preformed or custom made",
          "The material used for the dentures",
          "The brand of denture adhesive"
      ],
      "answer": "Whether the dentures are preformed or custom made"
  },
  {
      "question": "What must be disclosed in advertising regarding 'immediate dentures'?",
      "choices": [
          "The brand of denture adhesive",
          "Charges for later relines or necessary procedures",
          "The color of the dentures",
          "Whether the dentures are preformed or custom made"
      ],
      "answer": "Charges for later relines or necessary procedures"
  },
  {
      "question": "According to the California Dental Practice Act, how must compensation to representatives of the press be handled?",
      "choices": [
          "Compensation must always be kept confidential",
          "Compensation must be disclosed in any resulting publicity",
          "Licensees cannot compensate representatives of the press",
          "Licensees must pay representatives of the press in advance"
      ],
      "answer": "Compensation must be disclosed in any resulting publicity"
  },
  {
      "question": "Starting Jan. 1, 2023, what course must dentists complete in each licensure renewal period?",
      "choices": [
          "A course in dental photography",
          "A course in orthodontics",
          "A course in prescribing Schedule II opioid drugs",
          "A course in dental hygiene"
      ],
      "answer": "A course in prescribing Schedule II opioid drugs"
  },
  {
      "question": "What types of courses are eligible for continuing education credit according to the California Dental Practice Act?",
      "choices": [
          "Courses on veterinary medicine",
          "Courses on automobile maintenance",
          "Courses on workplace safety",
          "Courses on marine biology"
      ],
      "answer": "Courses on workplace safety"
  },
  {
      "question": "What types of courses are eligible for continuing education credit according to the California Dental Practice Act?",
      "choices": [
          "Courses on automobile maintenance",
          "Courses on marine biology",
          "Courses on dental hygiene techniques",
          "Courses on human resource management"
      ],
      "answer": "Courses on dental hygiene techniques"
  },
  {
      "question": "What is the maximum percentage of total units required for license renewal that can be earned through certain dental board activities?",
      "choices": [
          "10%",
          "15%",
          "20%",
          "25%"
      ],
      "answer": "20%"
  },
  {
      "question": "What activity can earn licensees continuing education credit starting Jan. 1, 2023?",
      "choices": [
          "Participation in online forums",
          "Participation in fundraising events",
          "Providing direct patient care as an unpaid volunteer at a free public health care event or non-profit",
          "Attending dental conferences"
      ],
      "answer": "Providing direct patient care as an unpaid volunteer at a free public health care event or non-profit"
  },
  {
      "question": "What must current and active licensees enrolled in full-time dental educational programs provide in the event of an audit?",
      "choices": [
          "Proof of dental board membership",
          "School transcripts",
          "A written statement of enrollment",
          "Certification of completion"
      ],
      "answer": "School transcripts"
  },
  {
      "question": "What type of activities can earn continuing education credit for licensees?",
      "choices": [
          "Participation in board games",
          "Attending sports events",
          "Participation in site visits related to dental auxiliary programs",
          "Watching movies"
      ],
      "answer": "Participation in site visits related to dental auxiliary programs"
  },
  {
      "question": "What type of courses are NOT eligible for continuing education credit according to the California Dental Practice Act?",
      "choices": [
          "Courses in dental hygiene techniques",
          "Courses in money management and personal finances",
          "Courses in nutrition counseling",
          "Courses in esthetic dentistry"
      ],
      "answer": "Courses in money management and personal finances"
  },
  {
      "question": "What is the maximum number of units that can be earned in a day through continuing education courses?",
      "choices": [
          "4",
          "6",
          "8",
          "10"
      ],
      "answer": "8"
  },
  {
      "question": "How long must licensees retain their continuing education certificates?",
      "choices": [
          "1 renewal period",
          "2 renewal periods",
          "3 renewal periods",
          "5 renewal periods"
      ],
      "answer": "3 renewal periods"
  },
  {
      "question": "How many units are required for license renewal for a retired dentist as of Jan. 1, 2023?",
      "choices": [
          "0 units",
          "10 units",
          "20 units",
          "30 units"
      ],
      "answer": "30 units"
  },
  {
      "question": "What is the qualification for a dentist to be considered as retired?",
      "choices": [
          "Practicing dentistry for less than 10 years",
          "Practicing dentistry for 15 years",
          "Practicing dentistry for 20 years or more and reaching the age of retirement under the federal Social Security Act",
          "Practicing dentistry for 25 years"
      ],
      "answer": "Practicing dentistry for 20 years or more and reaching the age of retirement under the federal Social Security Act"
  },
  {
      "question": "How many hours of courses are required for the renewal of a General Anesthesia and Deep Sedation permit?",
      "choices": [
          "7 hours",
          "15 hours",
          "24 hours",
          "35 hours"
      ],
      "answer": "24 hours"
  },
  {
      "question": "Which dental auxiliary requires the highest number of continuing education units for renewal?",
      "choices": [
          "Registered Dental Assistant, RDA",
          "Registered Dental Hygienists in Alternative Practice, RDHAP",
          "Registered Dental Hygienist, RDH",
          "Registered Dental Assistant in Extended Functions, RDAEF"
      ],
      "answer": "Registered Dental Hygienists in Alternative Practice, RDHAP"
  },
  {
      "question": "For which permit renewal is additional competency required if the permit holder has a pediatric endorsement?",
      "choices": [
          "Oral Conscious Sedation for Adult Patients",
          "Moderate Sedation",
          "General Anesthesia and Deep Sedation",
          "Orthodontic Permit"
      ],
      "answer": "General Anesthesia and Deep Sedation"
  },
  {
      "question": "What is the exemption status for dentists renewing their license for the first time regarding continuing education requirements?",
      "choices": [
          "Not exempt",
          "Exempt",
          "Exempt only for certain permits",
          "Exempt only if they hold another dental license"
      ],
      "answer": "Exempt"
  },
  {
      "question": "What is the maximum percentage of the licensee population that the DBC and DHBC are required to conduct random audits on each year?",
      "choices": [
          "2%",
          "5%",
          "10%",
          "15%"
      ],
      "answer": "5%"
  },
  {
      "question": "What constitutes unprofessional conduct for a licensee regarding criminal and disciplinary proceedings?",
      "choices": [
          "Failing to report a traffic infraction with a fine less than $1,000",
          "Not informing the dental board about a misdemeanor conviction within 30 days",
          "Reporting an indictment against the licensee after 60 days",
          "Failing to report a conviction following a plea of nolo contendere"
      ],
      "answer": "Not informing the dental board about a misdemeanor conviction within 30 days"
  },
  {
      "question": "According to Business & Professions Code Section 1800, what defines a dental corporation?",
      "choices": [
          "A corporation that renders any professional services",
          "A corporation with a minimum of two shareholders",
          "A corporation authorized to render professional services, if compliant with specified regulations",
          "A corporation complying with the Moscone-Knox Professional Corporation Act"
      ],
      "answer": "A corporation authorized to render professional services, if compliant with specified regulations"
  },
  {
      "question": "What is required for a dental corporation to open additional offices?",
      "choices": [
          "Approval from the local government",
          "Submission of a written request to the Dental Board of California",
          "Compliance with Business & Professions Code Sections 1658 – 1658.8",
          "Obtaining a permit from the Department of Health"
      ],
      "answer": "Compliance with Business & Professions Code Sections 1658 – 1658.8"
  },
  {
      "question": "As per Business & Profession Code Section 1804, what must be included in the name of a dental corporation?",
      "choices": [
          "The first name of the dentist",
          "The last name of the dentist",
          "The corporation's founding date",
          "The words 'dental corporation' or wording indicating corporate existence"
      ],
      "answer": "The words 'dental corporation' or wording indicating corporate existence"
  },
  {
      "question": "What happens to the shares of a deceased dentist's dental corporation owner if licensed persons and dental assistants are employed by a non-dentist corporation owner?",
      "choices": [
          "They are transferred immediately to the non-dentist owner",
          "They are sold in the market",
          "They are held in escrow",
          "They must be transferred as provided by law within 12 months"
      ],
      "answer": "They must be transferred as provided by law within 12 months"
  },
  {
      "question": "What is the minimum amount of insurance coverage required per claim for a dental corporation providing security by means of insurance for claims against it by its patients?",
      "choices": [
          "$50,000",
          "$100,000",
          "$150,000",
          "$200,000"
      ],
      "answer": "$50,000"
  },
  {
      "question": "According to CCR 16 Section 1059, what is the maximum aggregate limit of liability per policy year for a dental corporation's insurance policy?",
      "choices": [
          "$50,000",
          "$150,000",
          "$200,000",
          "$450,000"
      ],
      "answer": "$450,000"
  },
  {
      "question": "Who is jointly and severally liable for claims against a dental corporation by its patients, as per CCR 16 Section 1059?",
      "choices": [
          "All shareholders of the corporation",
          "Only the shareholders",
          "Both the shareholders and the employed licensed persons",
          "The insurance provider"
      ],
      "answer": "All shareholders of the corporation"
  },
  {
      "question": "Who may own shares of a dental corporation according to regulations?",
      "choices": [
          "Only licensed dentists",
          "Any individual",
          "Only licensed dental assistants",
          "Corporations from any industry"
      ],
      "answer": "Only licensed dentists"
  },
  {
      "question": "What happens to the shares of a shareholder who ceases to be an eligible shareholder in a dental corporation?",
      "choices": [
          "They are automatically transferred to the corporation",
          "They are sold and transferred to the corporation, its shareholders, or other eligible persons",
          "They are forfeited",
          "They are transferred to the disqualified person"
      ],
      "answer": "They are sold and transferred to the corporation, its shareholders, or other eligible persons"
  },
  {
      "question": "How do laws or rules relating to dental corporations affect a dentist's duties and responsibilities to patients?",
      "choices": [
          "They alter the dentist's duties and responsibilities",
          "They impair the disciplinary powers of the dental board",
          "They do not alter the dentist's duties and responsibilities",
          "They restrict the dentist's ability to form professional relationships"
      ],
      "answer": "They do not alter the dentist's duties and responsibilities"
  },
  {
      "question": "What is required regarding dental materials fact sheets according to the Dental Practice Act?",
      "choices": [
          "Providing a fact sheet only upon patient request",
          "Providing a fact sheet to new patients and before restorative procedures",
          "Providing a fact sheet annually to all patients",
          "Providing a fact sheet during emergencies only"
      ],
      "answer": "Providing a fact sheet to new patients and before restorative procedures"
  },
  {
      "question": "What is the requirement for marking complete upper or lower dentures?",
      "choices": [
          "Marking is optional and only at the patient's request",
          "Marking is mandatory with the patient's name, unless the patient objects",
          "Marking is prohibited by the Dental Practice Act",
          "Marking is required with the patient's initials"
      ],
      "answer": "Marking is mandatory with the patient's name, unless the patient objects"
  },
  {
      "question": "What is the purpose of the disciplinary guidelines recommended by the dental board?",
      "choices": [
          "To ensure maximum punishment for violations",
          "To rehabilitate the licensee while considering public safety",
          "To protect the interests of the dental board only",
          "To expedite the disciplinary process"
      ],
      "answer": "To rehabilitate the licensee while considering public safety"
  },
  {
      "question": "When can the dental board initiate a disciplinary proceeding?",
      "choices": [
          "Within three years after discovering the act or omission or within seven years after the act or omission is alleged to have occurred",
          "Within three years after the act or omission is alleged to have occurred",
          "Within seven years after discovering the act or omission",
          "Within seven years after the act or omission is alleged to have occurred"
      ],
      "answer": "Within three years after discovering the act or omission or within seven years after the act or omission is alleged to have occurred"
  },
  {
      "question": "Under what circumstances does the statute of limitations not apply?",
      "choices": [
          "When the act or omission is discovered more than seven years after occurrence",
          "When the licensee intentionally conceals incompetence",
          "When the complaint is received by the dental board before Jan. 1, 2005",
          "When material evidence is unavailable due to an ongoing criminal investigation"
      ],
      "answer": "When material evidence is unavailable due to an ongoing criminal investigation"
  },
  {
      "question": "What are the requirements for advertising a discount according to California regulations?",
      "choices": [
          "Listing only the discounted fee",
          "Stating the discounted fee without specifying the nondiscounted fee",
          "Listing the nondiscounted fee, the discounted fee or percentage, duration of the discount, and qualifying terms",
          "Providing discounts without any conditions"
      ],
      "answer": "Listing the nondiscounted fee, the discounted fee or percentage, duration of the discount, and qualifying terms"
  },
  {
      "question": "Under what circumstances can a health care provider grant discounts for health care?",
      "choices": [
          "Only to patients with insurance coverage",
          "Only to patients without insurance coverage",
          "When patient is not eligible/entitled to insurance reimbursement",
          "To patients with any type of coverage"
      ],
      "answer": "When patient is not eligible/entitled to insurance reimbursement"
  },
  {
      "question": "Which of the following entities may employ dentists and dental auxiliaries?",
      "choices": [
          "For-profit corporations",
          "Licensed primary care clinics",
          "Sole proprietorships",
          "Private dental practices only"
      ],
      "answer": "Licensed primary care clinics"
  },
  {
      "question": "Who may employ licensed dentists and dental auxiliaries for a period of up to 12 months after the death or incapacity of a dentist?",
      "choices": [
          "An executor or administrator of a dentist’s estate",
          "a legal guardian",
          "conservator or authorized representative of a dentist who is deceased or incapacitated or a trustee or successor trustee of a trust that owns a deceased or incapacitated dentist’s dental practice",
          "all of the above"
      ],
      "answer": "all of the above"
  }
]
let set3 = [
  {
      "question": "What must a dental assistant who has been in continuous employment for 120 days or more complete within a year of the date of employment?",
      "choices": [
          "A 16-hour course on dental assisting",
          "A 4-hour course on basic life support",
          "A board-approved course in the Dental Practice Act, an 8-hour course in infection control, and a basic life support course",
          "An advanced dental assisting certification exam"
      ],
      "answer": "A board-approved course in the Dental Practice Act, an 8-hour course in infection control, and a basic life support course"
  },
  {
      "question": "Under what circumstances can a dentist practice under a fictitious name?",
      "choices": [
          "Always, without any special permit",
          "Only if they have a permit from the dental board",
          "Only if they operate as a corporation",
          "If they file a fictitious business name statement with the county clerk"
      ],
      "answer": "Only if they have a permit from the dental board"
  },
  {
      "question": "What is considered unprofessional conduct in connection with insurance claims?",
      "choices": [
          "Knowingly presenting a legitimate claim",
          "Knowingly presenting a false or fraudulent claim",
          "Failing to report a loss to the insurance company",
          "Preparing a claim without any intent to defraud"
      ],
      "answer": "Knowingly presenting a false or fraudulent claim"
  },
  {
      "question": "What action related to fees is considered unprofessional conduct?",
      "choices": [
          "Charging reasonable fees for services",
          "Obtaining a fee by fraud or misrepresentation",
          "Providing discounted services to patients",
          "Increasing fees without notice"
      ],
      "answer": "Obtaining a fee by fraud or misrepresentation"
  },
  {
      "question": "Under what circumstances is it considered unprofessional conduct to procure a license?",
      "choices": [
          "Through hard work and dedication",
          "Through legitimate means",
          "Through use of fraud",
          "Through recommendation by a colleague"
      ],
      "answer": "Through use of fraud"
  },
  {
      "question": "What permit is required for a dentist to administer or order the administration of deep sedation or general anesthesia?",
      "choices": [
          "Moderate Sedation Permit",
          "Oral Conscious Sedation for Adult Patients Permit",
          "General Anesthesia and Deep Sedation Permit",
          "Pediatric Minimal Sedation Permit"
      ],
      "answer": "General Anesthesia and Deep Sedation Permit"
  },
  {
      "question": "What is required for a dentist to obtain a general anesthesia permit?",
      "choices": [
          "Completion of 12 hours of approved courses of study",
          "Documentation of required equipment and drugs",
          "Completion of a CPR course",
          "On-site inspection and evaluation by the dental board every two years"
      ],
      "answer": "Documentation of required equipment and drugs"
  },
  {
      "question": "When is a permit not necessary for administering deep sedation or general anesthesia by a dentist?",
      "choices": [
          "When the sedation is administered by a nurse",
          "When the sedation is directly administered by another licensed dentist or physician with a general anesthesia permit",
          "When the sedation is administered in a hospital setting",
          "When the sedation is administered to patients over seven years of age"
      ],
      "answer": "When the sedation is directly administered by another licensed dentist or physician with a general anesthesia permit"
  },
  {
      "question": "What is required for a dentist to obtain a pediatric endorsement for administering deep sedation or general anesthesia?",
      "choices": [
          "Completion of ACLS certification",
          "Completion of a pediatric dental residency program",
          "At least 10 cases of deep sedation or general anesthesia to patients under seven years of age",
          "At least 20 cases of deep sedation or general anesthesia to patients under seven years of age"
      ],
      "answer": "At least 20 cases of deep sedation or general anesthesia to patients under seven years of age"
  },
  {
      "question": "How often must a dentist renew their general anesthesia permit?",
      "choices": [
          "Every 3 years",
          "Every 5 years",
          "Every 10 years",
          "No renewal required"
      ],
      "answer": "Every 5 years"
  },
  {
      "question": "What is the required patient-to-recovery-staff ratio for patients recovering from deep sedation or general anesthesia?",
      "choices": [
          "1-to-1",
          "2-to-1",
          "3-to-1",
          "4-to-1"
      ],
      "answer": "1-to-1"
  },
  {
      "question": "What monitoring equipment must be continuously used during dental procedures under deep sedation or general anesthesia?",
      "choices": [
          "Blood pressure cuff",
          "Pulse oximeter and capnography",
          "Thermometer",
          "Stethoscope"
      ],
      "answer": "Pulse oximeter and capnography"
  },
  {
      "question": "How many personnel must be present throughout a procedure for patients under 13 years old?",
      "choices": [
          "1",
          "2",
          "3",
          "4"
      ],
      "answer": "3"
  },
  {
      "question": "What is the patient-to-recovery-staff ratio limit when patients are recovering from deep sedation or general anesthesia?",
      "choices": [
          "1-to-1",
          "2-to-1",
          "3-to-1",
          "4-to-1"
      ],
      "answer": "3-to-1"
  },
  {
      "question": "What equipment must be used for continuous monitoring of patients undergoing deep sedation or general anesthesia during a dental procedure?",
      "choices": [
          "Blood pressure monitor",
          "EKG machine",
          "Pulse oximeter and capnography",
          "Thermometer"
      ],
      "answer": "Pulse oximeter and capnography"
  },
  {
      "question": "What certification must dental office personnel involved in patient care have when deep sedation or general anesthesia is administered?",
      "choices": [
          "Pediatric Advanced Life Support (PALS)",
          "Advanced Cardiovascular Life Support (ACLS)",
          "Basic Life Support (BLS)",
          "First Aid"
      ],
      "answer": "Basic Life Support (BLS)"
  },
  {
      "question": "In what situations must at least two personnel maintain current certification in Pediatric Advanced Life Support (PALS) during procedures involving patients under 13 years old?",
      "choices": [
          "If the operating dentist is the permitted anesthesia provider",
          "If the operating dentist is not the anesthesia provider",
          "In all cases involving patients under 13 years old",
          "Only if required by state law"
      ],
      "answer": "If the operating dentist is not the anesthesia provider"
  },
  {
      "question": "What is the required ratio for patient-to-recovery-staff when patients under 13 years old are undergoing dental procedures?",
      "choices": [
          "1-to-1",
          "2-to-1",
          "3-to-1",
          "4-to-1"
      ],
      "answer": "1-to-1"
  },
  {
      "question": "What must a dentist obtain prior to administering general anesthesia, deep sedation, or moderate sedation?",
      "choices": [
          "Oral consent",
          "Verbal consent",
          "Written informed consent",
          "No consent is required"
      ],
      "answer": "Written informed consent"
  },
  {
      "question": "What must be included in the written informed consent for a minor receiving general anesthesia services?",
      "choices": [
          "Options for anesthesia",
          "Potential risks",
          "Dentist's qualifications",
          "Only the treatment procedure"
      ],
      "answer": "Potential risks"
  },
  {
      "question": "What type of judgments or settlements must liability insurance companies report to the dental board?",
      "choices": [
          "Over $5,000",
          "Over $10,000",
          "Over $15,000",
          "Over $20,000"
      ],
      "answer": "Over $10,000"
  },
  {
      "question": "What are the requirements for license renewal for all dentists and permit holders according to the California Dental Practice Act?",
      "choices": [
          "Complete 4 units of California law",
          "Complete 2 units of California law and 2 units of infection control",
          "Complete 2 units of infection control and a basic life support course",
          "Complete 4 units of California law and 2 units of infection control"
      ],
      "answer": "Complete 2 units of California law and 2 units of infection control"
  },
  {
      "question": "What is the consequence of practicing dentistry with an expired license according to the California Dental Practice Act?",
      "choices": [
          "Verbal warning",
          "Fines",
          "Loss of dental license",
          "License suspension for 30 days"
      ],
      "answer": "Loss of dental license"
  },
  {
      "question": "Which educational program completion must licensed dentists report to the dental board upon initial licensure or licensure renewal?",
      "choices": [
          "Any educational program",
          "Only programs approved by the state",
          "Advanced educational program accredited by the Commission on Dental Accreditation in an ADA-recognized specialty",
          "Basic educational program"
      ],
      "answer": "Advanced educational program accredited by the Commission on Dental Accreditation in an ADA-recognized specialty"
  },
  {
      "question": "What information must the dental board and DHBC collect regarding licensees' background according to the California Dental Practice Act?",
      "choices": [
          "Religious affiliation",
          "Educational history",
          "Cultural background and foreign language proficiency",
          "Marital status"
      ],
      "answer": "Cultural background and foreign language proficiency"
  },
  {
      "question": "Under what circumstances may a licensee be required to submit digital fingerprints as part of licensure renewal?",
      "choices": [
          "Every renewal cycle",
          "If requested by the licensee",
          "If the licensee has changed their name",
          "If the fingerprints are not already on file"
      ],
      "answer": "If the fingerprints are not already on file"
  },
  {
      "question": "What must be displayed at a dental facility according to the California Dental Practice Act if dental licenses are not prominently displayed?",
      "choices": [
          "State flag",
          "Dental equipment",
          "License plate",
          "Name tag disclosing name and license in at least 18-point type"
      ],
      "answer": "Name tag disclosing name and license in at least 18-point type"
  },
  {
      "question": "What is considered unprofessional conduct according to the California Dental Practice Act?",
      "choices": [
          "Practicing dentistry with an expired license",
          "Being late for appointments",
          "Using personal cell phone during work hours",
          "Wearing casual attire"
      ],
      "answer": "Practicing dentistry with an expired license"
  },
  {
      "question": "What is required for a dentist to restore a license to active status?",
      "choices": [
          "Completion of 50 continuing education units",
          "Payment of license renewal fee and completion of required continuing education units",
          "Completion of 2 units of infection control",
          "Submission of a written apology to the dental board"
      ],
      "answer": "Payment of license renewal fee and completion of required continuing education units"
  },
  {
      "question": "What is required of licensees and permit holders regarding address changes according to the California Dental Practice Act?",
      "choices": [
          "Notify the dental board within 30 days",
          "Notify the DHBC within 10 days",
          "Renew license every two years",
          "Complete 2 units of California law"
      ],
      "answer": "Notify the dental board within 30 days"
  },
  {
      "question": "Which continuing education courses are mandatory for license renewal in California?",
      "choices": [
          "2 units of California law and 2 units of infection control",
          "2 units of pediatric dentistry",
          "2 units of oral surgery",
          "2 units of cosmetic dentistry"
      ],
      "answer": "2 units of California law and 2 units of infection control"
  },
  {
      "question": "What must licensed dentists report to the dental board upon initial licensure or licensure renewal?",
      "choices": [
          "Completion of basic life support course",
          "Completion of any advanced educational program",
          "Change of address",
          "Change of employment status"
      ],
      "answer": "Completion of any advanced educational program"
  },
  {
      "question": "According to the California Dental Practice Act, what is required of licensees regarding cultural background and foreign language proficiency information?",
      "choices": [
          "Report it only if requested",
          "It is mandatory to report",
          "Report it upon renewal",
          "It is optional to report"
      ],
      "answer": "It is optional to report"
  },
  {
      "question": "What action may the dental board and DHBC take regarding fingerprints during licensure renewal?",
      "choices": [
          "They may require submission of digital fingerprints",
          "They may waive the requirement for fingerprints",
          "They may not collect fingerprints",
          "They may require fingerprinting for initial licensure only"
      ],
      "answer": "They may require submission of digital fingerprints"
  },
  {
      "question": "How must dental licenses be displayed at the facility according to the California Dental Practice Act?",
      "choices": [
          "Each licensee must wear a name tag",
          "Each licensee must prominently display their license",
          "Each licensee must display their license on their website",
          "License display is not required"
      ],
      "answer": "Each licensee must prominently display their license"
  },
  {
      "question": "What is considered unprofessional conduct according to the California Dental Practice Act?",
      "choices": [
          "Engaging in practice with an expired license",
          "Failure to report name change within 30 days",
          "Completing 2 units of infection control",
          "Holding an active license"
      ],
      "answer": "Engaging in practice with an expired license"
  },
  {
      "question": "What are the conditions for dentists to apply for retired status according to the California Dental Practice Act?",
      "choices": [
          "Completion of 30 continuing education units",
          "Practiced dentistry in California for 10-plus years",
          "Reached the age of retirement defined in the ADA",
          "Practiced dentistry in California for 20-plus years"
      ],
      "answer": "Practiced dentistry in California for 20-plus years"
  },
  {
      "question": "What are the criteria for dentists to apply for retired status?",
      "choices": [
          "Practiced dentistry for 10-plus years in California",
          "Reached the age of retirement defined by the ADA",
          "Practiced dentistry for 20-plus years in California",
          "Completed advanced educational programs"
      ],
      "answer": "Practiced dentistry for 20-plus years in California"
  },
  {
      "question": "What is the renewal fee requirement for dentists who qualify for retired status?",
      "choices": [
          "Equal to the regular renewal fee",
          "More than the regular renewal fee",
          "Less than one-half the regular renewal fee",
          "Double the regular renewal fee"
      ],
      "answer": "Less than one-half the regular renewal fee"
  },
  {
      "question": "What options do retired dentists have regarding their status?",
      "choices": [
          "Retired active or retired inactive",
          "Active or inactive",
          "Retired full-time or retired part-time",
          "Retired with or without benefits"
      ],
      "answer": "Retired active or retired inactive"
  },
  {
      "question": "What is the requirement for retired active dentists regarding providing dental services?",
      "choices": [
          "Services must be free of charge",
          "Services must be charged at a reduced rate",
          "Services must be provided only to veterans",
          "Services must be provided outside California"
      ],
      "answer": "Services must be free of charge"
  },
  {
      "question": "What is the continuing education requirement for retired active dentists as of Jan. 1, 2023?",
      "choices": [
          "20 continuing education units",
          "30 continuing education units",
          "10 continuing education units",
          "No continuing education units required"
      ],
      "answer": "30 continuing education units"
  },
  {
      "question": "What is the renewal fee waiver percentage for disabled dentists?",
      "choices": [
          "25%",
          "50%",
          "75%",
          "100%"
      ],
      "answer": "50%"
  },
  {
      "question": "Under what conditions may a licensee whose license expired while on active duty renew their license?",
      "choices": [
          "Upon return to private practice",
          "If the license was expired for less than one year",
          "If the license was expired for more than one year",
          "If the licensee provides a false affidavit"
      ],
      "answer": "If the license was expired for less than one year"
  },
  {
      "question": "What is the duration of the temporary license granted to military spouses or domestic partners?",
      "choices": [
          "6 months",
          "12 months",
          "18 months",
          "24 months"
      ],
      "answer": "12 months"
  },
  {
      "question": "What is considered unprofessional conduct regarding licenses?",
      "choices": [
          "Using a license without displaying it",
          "Displaying a fake license",
          "Possessing an expired license",
          "Surrendering a license upon demand"
      ],
      "answer": "Displaying a fake license"
  },
  {
      "question": "What action may a licensing agency take if a licensee is unable to practice safely due to illness?",
      "choices": [
          "Order the licensee to take a vacation",
          "Revoke the license",
          "Increase the license renewal fee",
          "Grant a temporary license"
      ],
      "answer": "Revoke the license"
  },
  {
      "question": "What is a mobile unit defined as?",
      "choices": [
          "A fixed dental facility",
          "A facility without transportation",
          "A self-contained facility that can be moved",
          "A facility attached to a hospital"
      ],
      "answer": "A self-contained facility that can be moved"
  },
  {
      "question": "What type of unit is used for providing dental treatment at nondental office locations on a temporary basis?",
      "choices": [
          "Fixed dental unit",
          "Stationary dental unit",
          "Portable dental unit",
          "Immobile dental unit"
      ],
      "answer": "Portable dental unit"
  },
  {
      "question": "What are the requirements for operating a mobile dental unit or portable practice?",
      "choices": [
          "No requirements",
          "Identification of the licensed dentist only",
          "Follow-up and emergency care availability, maintenance, and patient records",
          "Patient notification only"
      ],
      "answer": "Follow-up and emergency care availability, maintenance, and patient records"
  },
  {
      "question": "Under what circumstance can a licensed dentist operate a mobile dental unit provided by their property and casualty insurer?",
      "choices": [
          "During regular practice hours",
          "When the dentist's registered practice site is unusable due to loss or calamity",
          "Only with prior approval from the dental board",
          "When the dentist is on vacation"
      ],
      "answer": "When the dentist's registered practice site is unusable due to loss or calamity"
  },
  {
      "question": "What is required for a mobile unit operating under the Mobile Health Care Services Act to be exempt from registration?",
      "choices": [
          "Registration with the dental board",
          "Notification within 30 days",
          "Notification within 60 days",
          "No requirement for registration"
      ],
      "answer": "Notification within 60 days"
  },
  {
      "question": "What training is required for obtaining a moderate sedation permit?",
      "choices": [
          "At least 20 hours",
          "At least 40 hours",
          "At least 60 hours",
          "At least 80 hours"
      ],
      "answer": "At least 60 hours"
  },
  {
      "question": "What is the patient-to-recovery-staff ratio allowed for patients recovering from moderate sedation?",
      "choices": [
          "1-to-1",
          "2-to-1",
          "3-to-1",
          "4-to-1"
      ],
      "answer": "3-to-1"
  },
  {
      "question": "What type of certification must dental office personnel have for directly caring for patients undergoing moderate sedation?",
      "choices": [
          "First Aid",
          "PALS",
          "CPR",
          "ACLS"
      ],
      "answer": "CPR"
  },
  {
      "question": "What is the timeframe within which licensees must notify the dental board of a personal name change?",
      "choices": [
          "Within 30 days",
          "Within 10 days",
          "Within 60 days",
          "Within 90 days"
      ],
      "answer": "Within 10 days"
  },
  {
      "question": "What is the requirement regarding name tags for licensees?",
      "choices": [
          "Must be worn in any size",
          "Must disclose only the name",
          "Must disclose the name and license type in at least 12-point type",
          "Must disclose the name and license type in at least 18-point type"
      ],
      "answer": "Must disclose the name and license type in at least 18-point type"
  },
  {
      "question": "How must a licensee communicate their name, license type, and highest level of academic degree to patients?",
      "choices": [
          "Verbally",
          "In writing in any font size",
          "In writing in at least 12-point type",
          "In writing in at least 24-point type"
      ],
      "answer": "In writing in at least 24-point type"
  },
  {
      "question": "What is required if a licensee chooses to display information about clinical staff on a website?",
      "choices": [
          "Display information in any format",
          "Display information in any font size",
          "Display information in at least 24-point type",
          "Display information in at least 48-point type"
      ],
      "answer": "Display information in at least 24-point type"
  },
  {
      "question": "What constitutes unprofessional conduct regarding the administration of nitrous oxide?",
      "choices": [
          "Using a non-certified machine",
          "Failure to use a fail-safe machine with an appropriate exhaust system",
          "Failure to obtain a permit for administration",
          "Using nitrous oxide without a dentist present"
      ],
      "answer": "Failure to use a fail-safe machine with an appropriate exhaust system"
  }
]

let set4 = [
  {
      "question": "Under what circumstances can a tax-exempt nonprofit corporation legally practice dentistry?",
      "choices": [
          "If it obtains approval from the IRS",
          "If it obtains approval from the state attorney general",
          "If it obtains approval from the dental board and complies with regulations",
          "If it operates under a for-profit model"
      ],
      "answer": "If it obtains approval from the dental board and complies with regulations"
  },
  {
      "question": "What is the font size requirement for the notice regarding licensure displayed at the premises?",
      "choices": [
          "24-point type",
          "36-point type",
          "48-point type",
          "60-point type"
      ],
      "answer": "48-point type"
  },
  {
      "question": "What is the contact information required in the notice regarding licensure?",
      "choices": [
          "Email only",
          "Phone number only",
          "Fax number only",
          "Phone number and website"
      ],
      "answer": "Phone number and website"
  },
  {
      "question": "What entities are exempt from the notice of licensure requirement?",
      "choices": [
          "Primary care clinics",
          "Public hospitals",
          "Nonprofit organizations",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is the requirement regarding notification for hygienists?",
      "choices": [
          "Not required",
          "Must provide notification within 30 days",
          "Must provide notification within 60 days",
          "Must provide notification within 90 days"
      ],
      "answer": "Not required"
  },
  {
      "question": "What is the definition of 'oral conscious sedation'?",
      "choices": [
          "A state of unconsciousness induced by oral medication",
          "A minimally depressed level of consciousness produced by oral medication",
          "Administration of local anesthesia",
          "Prescription of postoperative medications"
      ],
      "answer": "A minimally depressed level of consciousness produced by oral medication"
  },
  {
      "question": "Who can administer oral conscious sedation to adult patients?",
      "choices": [
          "Only licensed physicians",
          "Only dentists with an oral conscious sedation permit",
          "Any healthcare professional",
          "Only licensed pharmacists"
      ],
      "answer": "Only dentists with an oral conscious sedation permit"
  },
  {
      "question": "What permits are required for a dentist to order or administer oral conscious sedation to adult patients on an outpatient basis?",
      "choices": [
          "Oral conscious sedation permit only",
          "Moderate sedation permit only",
          "General anesthesia permit only",
          "Oral conscious sedation permit, moderate sedation permit, or general anesthesia permit"
      ],
      "answer": "Oral conscious sedation permit, moderate sedation permit, or general anesthesia permit"
  },
  {
      "question": "What is a requirement for obtaining an oral conscious sedation permit?",
      "choices": [
          "Completion of a postgraduate program in orthodontics",
          "Submission of documentation showing provision of oral conscious sedation to 10 adult patients within a three-year period",
          "Completion of a pediatric dentistry residency",
          "Possession of a general dentistry license"
      ],
      "answer": "Submission of documentation showing provision of oral conscious sedation to 10 adult patients within a three-year period"
  },
  {
      "question": "What is the requirement for renewal of an oral conscious sedation permit?",
      "choices": [
          "Completion of at least 15 hours of courses",
          "Completion of at least 7 hours of courses",
          "Completion of at least 20 hours of courses",
          "No renewal is required"
      ],
      "answer": "Completion of at least 7 hours of courses"
  },
  {
      "question": "Who may apply for an oral surgery permit?",
      "choices": [
          "Licensed pharmacists",
          "Licensed physicians",
          "Licensed dentists with a medical license in California",
          "Unlicensed individuals"
      ],
      "answer": "Licensed dentists with a medical license in California"
  },
  {
      "question": "What ownership requirement applies to California dental practices?",
      "choices": [
          "Majority ownership must be held by a licensed pharmacist",
          "Majority ownership must be held by a licensed physician",
          "Majority ownership must be held by one or more California-licensed dentists",
          "Ownership by non-licensed individuals is permitted"
      ],
      "answer": "Majority ownership must be held by one or more California-licensed dentists"
  },
  {
      "question": "What is the timeframe within which records requested by the dental board must be provided?",
      "choices": [
          "30 days",
          "15 days",
          "60 days",
          "90 days"
      ],
      "answer": "15 days"
  },
  {
      "question": "What is the requirement for ensuring the safety and integrity of electronic patient records?",
      "choices": [
          "No specific requirements",
          "Utilization of an off-site backup storage system",
          "Use of any backup system",
          "No requirement for integrity checks"
      ],
      "answer": "Utilization of an off-site backup storage system"
  },
  {
      "question": "How long should records be kept for unemancipated minors?",
      "choices": [
          "At least 5 years",
          "At least 10 years",
          "At least 1 year after reaching age 18",
          "Indefinitely"
      ],
      "answer": "At least 1 year after reaching age 18"
  },
  {
      "question": "What is considered unprofessional conduct regarding patient records?",
      "choices": [
          "Providing copies of records upon patient request",
          "Altering records with intent to deceive",
          "Not providing copies of records",
          "Keeping records for too long"
      ],
      "answer": "Altering records with intent to deceive"
  },
  {
      "question": "What action may patients take if records are not provided within the specified timeframe?",
      "choices": [
          "No action can be taken",
          "They can file a complaint with the dental board",
          "They can file a lawsuit",
          "They must wait indefinitely"
      ],
      "answer": "They can file a complaint with the dental board"
  },
  {
      "question": "What must a dental office do to ensure the safety and integrity of patient records if they solely use electronic recordkeeping systems?",
      "choices": [
          "Keep hard copies of patient records",
          "Utilize an off-site backup storage system",
          "Only use electronic files",
          "Share patient records with other offices"
      ],
      "answer": "Utilize an off-site backup storage system"
  },
  {
      "question": "What is one requirement for the image mechanism used in electronic recordkeeping systems in dental offices?",
      "choices": [
          "It must be able to print records",
          "It must copy all patient records",
          "It must be capable of copying signature documents",
          "It must have access to all patient data"
      ],
      "answer": "It must be capable of copying signature documents"
  },
  {
      "question": "What is required for patient records in an electronic health record system?",
      "choices": [
          "They must be alterable",
          "Changes or deletions must not be recorded",
          "They must automatically record and preserve any changes or deletions",
          "They must include the patient's name only"
      ],
      "answer": "They must automatically record and preserve any changes or deletions"
  },
  {
      "question": "What action must a dentist take regarding patient records once they have been electronically stored?",
      "choices": [
          "They can destroy original hard copies immediately",
          "They must keep both hard copies and electronic files indefinitely",
          "They must ensure the integrity of electronic files",
          "They must share patient records with other dentists"
      ],
      "answer": "They can destroy original hard copies immediately"
  },
  {
      "question": "What must the contracting dentist of an estate of a deceased or incapacitated dentist obtain before using the patient's dental records?",
      "choices": [
          "A written request from the patient",
          "A consent form from the patient's legal guardian",
          "A signed release form from the patient or legal guardian",
          "An approval from the dental board"
      ],
      "answer": "A signed release form from the patient or legal guardian"
  },
  {
      "question": "What right does a patient have regarding access to their dental records?",
      "choices": [
          "Only the right to inspect the records",
          "The right to request a summary of the records",
          "The right to request a copy of the records",
          "No rights regarding their records"
      ],
      "answer": "The right to request a copy of the records"
  },
  {
      "question": "How long does a dental office have to provide copies of patient records upon receiving a written request?",
      "choices": [
          "30 days",
          "10 days",
          "5 days",
          "15 days"
      ],
      "answer": "15 days"
  },
  {
      "question": "For what purpose can a patient request a free copy of a portion of their dental record?",
      "choices": [
          "For personal use",
          "To support an appeal regarding eligibility for a public benefit program",
          "For insurance purposes",
          "For research purposes"
      ],
      "answer": "To support an appeal regarding eligibility for a public benefit program"
  },
  {
      "question": "How long should dental records be kept if the patient is inactive or if the dentist ceases operations?",
      "choices": [
          "One year",
          "Three years",
          "Five years",
          "Seven years"
      ],
      "answer": "Seven years"
  },
  {
      "question": "How long should records of unemancipated minors be kept?",
      "choices": [
          "One year after the minor turns 18",
          "Three years after the minor turns 18",
          "Five years after the minor turns 18",
          "Seven years after the minor turns 18"
      ],
      "answer": "One year after the minor turns 18"
  },
  {
      "question": "What can patients do if they are injured due to a dentist's abandonment of patient records?",
      "choices": [
          "Nothing",
          "Bring action in court against the licensee, partnership, or corporation",
          "File a complaint with the dental board",
          "Seek compensation from insurance carriers"
      ],
      "answer": "Bring action in court against the licensee, partnership, or corporation"
  },
  {
      "question": "What is considered unprofessional conduct regarding altering patient records?",
      "choices": [
          "Correcting errors with proper documentation",
          "Altering records to update information",
          "Altering records without intent to deceive",
          "Altering records with intent to deceive"
      ],
      "answer": "Altering records with intent to deceive"
  },
  {
      "question": "What is considered unprofessional conduct regarding the communication of disciplinary action?",
      "choices": [
          "Informing patients about disciplinary action with accurate facts",
          "Not informing patients about disciplinary action",
          "Misrepresenting facts relating to disciplinary action to patients",
          "Filing a complaint against disciplined licensee"
      ],
      "answer": "Misrepresenting facts relating to disciplinary action to patients"
  },
  {
      "question": "Who is responsible for sending written notification to a dentist's patients in case of the dentist's death or incapacity?",
      "choices": [
          "The dental board",
          "The executor or administrator of the dentist's estate",
          "The patients themselves",
          "The dentist's colleagues"
      ],
      "answer": "The executor or administrator of the dentist's estate"
  },
  {
      "question": "What is considered unprofessional conduct regarding diagnosis, prescription, and treatment?",
      "choices": [
          "Following customary practice and standards of the dental profession",
          "Using diagnostic procedures or treatment facilities",
          "Clearly excessive prescribing or administering of drugs or treatment",
          "Treating patients without diagnosis"
      ],
      "answer": "Clearly excessive prescribing or administering of drugs or treatment"
  },
  {
      "question": "What is prohibited regarding discrimination in dental treatment?",
      "choices": [
          "Refusing to treat individuals based on their race, color, or sex",
          "Providing dental treatment based on patients' needs",
          "Offering discounts based on patients' marital status",
          "Limiting dental treatment based on patients' age"
      ],
      "answer": "Refusing to treat individuals based on their race, color, or sex"
  },
  {
      "question": "What must a licensee report to the dental board within seven (7) days?",
      "choices": [
          "All patient illnesses",
          "Any patient's death unrelated to dental procedures",
          "The death of a patient during a dental procedure",
          "Any patient's visit to the hospital"
      ],
      "answer": "The death of a patient during a dental procedure"
  },
  {
      "question": "When must a dentist report all deaths occurring in their practice?",
      "choices": [
          "Within 24 hours",
          "Within 48 hours",
          "Within 7 days",
          "Within 30 days"
      ],
      "answer": "Within 7 days"
  },
  {
      "question": "What action is required if a patient is removed to a hospital for medical treatment exceeding 24 hours?",
      "choices": [
          "No action is required",
          "Report to the dental board only if the patient received anesthesia",
          "Report to the dental board regardless of anesthesia administration",
          "Report to the DHBC"
      ],
      "answer": "Report to the dental board regardless of anesthesia administration"
  },
  {
      "question": "Who may conduct an inspection upon receipt of the report of deaths occurring in a dentist's practice?",
      "choices": [
          "The hospital administration",
          "The dental board",
          "The patient's family",
          "The dentist's colleagues"
      ],
      "answer": "The dental board"
  },
  {
      "question": "For which procedures is informed consent required?",
      "choices": [
          "Only for general anesthesia",
          "Only for conscious sedation",
          "For both general anesthesia and conscious sedation",
          "Informed consent is not required"
      ],
      "answer": "For both general anesthesia and conscious sedation"
  },
  {
      "question": "What statement should be included in informed consent for a minor receiving general anesthesia?",
      "choices": [
          "The risks associated with general anesthesia are the same for all patients",
          "Exploring anesthesia options is not necessary for minors",
          "Parents are not encouraged to consult with dentists or pediatricians",
          "Risks may vary depending on various factors and exploring options is encouraged"
      ],
      "answer": "Risks may vary depending on various factors and exploring options is encouraged"
  },
  {
      "question": "What is considered patient abandonment?",
      "choices": [
          "Discontinuing treatment without notice",
          "Providing emergency services for more than 30 days",
          "Leaving a patient without treatment for over a year",
          "Not sending a birthday card to a patient"
      ],
      "answer": "Discontinuing treatment without notice"
  },
  {
      "question": "How long should a dentist remain available to a patient after sending a termination letter?",
      "choices": [
          "60 days",
          "30 days",
          "90 days",
          "Indefinitely"
      ],
      "answer": "30 days"
  },
  {
      "question": "What does 'patient of record' refer to?",
      "choices": [
          "Any individual who visits a dental office",
          "A patient who has had a dental examination and history completed by a licensed dentist",
          "A patient who has never visited a dentist",
          "A patient who receives treatment without a prior examination"
      ],
      "answer": "A patient who has had a dental examination and history completed by a licensed dentist"
  },
  {
      "question": "Under what circumstances does the requirement for a 'patient of record' not apply?",
      "choices": [
          "When a dentist performs examinations at health fairs",
          "When a dentist performs fluoride mouth rinse programs",
          "Both A and B",
          "Neither A nor B"
      ],
      "answer": "Both A and B"
  },
  {
      "question": "What is considered unprofessional conduct regarding sexual abuse or misconduct?",
      "choices": [
          "Giving patients compliments",
          "Engaging in sexual relations with a patient",
          "Providing appropriate medical treatment",
          "Ignoring a patient's concerns"
      ],
      "answer": "Engaging in sexual relations with a patient"
  },
  {
      "question": "What is considered unprofessional conduct regarding threats or harassment?",
      "choices": [
          "Politely asking a patient for feedback",
          "Using threats or harassment against a patient for providing evidence in disciplinary or legal action",
          "Expressing disagreement with a patient's treatment plan",
          "Encouraging patients to report concerns"
      ],
      "answer": "Using threats or harassment against a patient for providing evidence in disciplinary or legal action"
  },
  {
      "question": "What duties can a dental auxiliary perform prior to examination by a dentist?",
      "choices": [
          "Prescribing medication",
          "Performing comprehensive diagnoses",
          "Exposing emergency radiographs",
          "Conducting surgical procedures"
      ],
      "answer": "Exposing emergency radiographs"
  },
  {
      "question": "What does 'minimal sedation' refer to?",
      "choices": [
          "A state where patients are unconscious",
          "A drug-induced state where patients respond normally to verbal commands",
          "A state where patients are completely unresponsive",
          "A state where patients exhibit heightened responsiveness"
      ],
      "answer": "A drug-induced state where patients respond normally to verbal commands"
  },
  {
      "question": "Who is eligible to administer pediatric minimal sedation?",
      "choices": [
          "Any dentist",
          "A dentist with a current general anesthesia permit only",
          "A dentist with a current general anesthesia permit, moderate sedation permit with a pediatric endorsement, or pediatric minimal sedation permit",
          "Only pediatric dentists"
      ],
      "answer": "A dentist with a current general anesthesia permit, moderate sedation permit with a pediatric endorsement, or pediatric minimal sedation permit"
  },
  {
      "question": "What is a requirement for obtaining a pediatric minimal sedation permit?",
      "choices": [
          "Completion of a residency in oral surgery",
          "Completion of at least 24 hours of pediatric minimal sedation instruction plus one clinical case",
          "Possession of a dental license",
          "Completion of a general dentistry program"
      ],
      "answer": "Completion of at least 24 hours of pediatric minimal sedation instruction plus one clinical case"
  },
  {
      "question": "What limitation exists for the drugs used in pediatric minimal sedation?",
      "choices": [
          "There is no limitation",
          "Only one drug can be administered via the oral route",
          "Drugs must not be administered orally",
          "Multiple drugs can be administered via the oral route"
      ],
      "answer": "Only one drug can be administered via the oral route"
  },
  {
      "question": "How many trained personnel must be present during the administration of pediatric minimal sedation?",
      "choices": [
          "None",
          "One additional personnel",
          "Two additional personnel",
          "At least three additional personnel"
      ],
      "answer": "One additional personnel"
  },
  {
      "question": "When must a licensed dentist register their place or places of practice?",
      "choices": [
          "Within 60 days of obtaining their license",
          "Within 90 days of obtaining their license",
          "Within 30 days of obtaining their license",
          "Within 120 days of obtaining their license"
      ],
      "answer": "Within 30 days of obtaining their license"
  },
  {
      "question": "What must a licensee do prior to opening an additional place of practice?",
      "choices": [
          "Notify the dental board",
          "Apply and receive permission from the dental board",
          "Register with the state health department",
          "Seek approval from a local dental association"
      ],
      "answer": "Apply and receive permission from the dental board"
  },
  {
      "question": "What is required of a licensee who transfers an additional office to another licensee?",
      "choices": [
          "Notify the state dental association",
          "Notify the dental board within 30 days",
          "Notify the local health department",
          "Notify the board of health within 60 days"
      ],
      "answer": "Notify the dental board within 30 days"
  },
  {
      "question": "What is considered unprofessional conduct for a licensee regarding their premises?",
      "choices": [
          "Providing unauthorized dental services",
          "Engaging in prostitution or pandering on the premises",
          "Refusing to treat patients of certain races",
          "Failing to display a sign with the dentist's name"
      ],
      "answer": "Engaging in prostitution or pandering on the premises"
  },
  {
      "question": "What is a portable dental unit?",
      "choices": [
          "A unit used for dental training purposes",
          "A unit for storing dental records",
          "A self-contained unit housing equipment used for providing dental treatment transported to and used on a temporary basis at nondental office locations",
          "A unit for maintaining dental instruments"
      ],
      "answer": "A self-contained unit housing equipment used for providing dental treatment transported to and used on a temporary basis at nondental office locations"
  },
  {
      "question": "Under what circumstances may a dentist authorize an agent to transmit a prescription?",
      "choices": [
          "For all prescriptions",
          "Only for Schedule II controlled substances",
          "Only for non-controlled substances",
          "Only for prescriptions related to surgical procedures"
      ],
      "answer": "For all prescriptions"
  },
  {
      "question": "What is considered unprofessional conduct regarding the prescribing of controlled substances?",
      "choices": [
          "Prescribing a controlled substance to a patient in surgical procedure",
          "Prescribing a controlled substance to oneself",
          "Prescribing a controlled substance to a non-patient",
          "Prescribing a controlled substance to a patient without informing them of the risks"
      ],
      "answer": "Prescribing a controlled substance to oneself"
  },
  {
      "question": "What is required of prescribers regarding accessing the CURES database?",
      "choices": [
          "They must consult the database before each prescription",
          "They must consult the database only for the initial prescription",
          "They must consult the database every six months",
          "They are not required to consult the database"
      ],
      "answer": "They must consult the database before each prescription"
  },
  {
      "question": "What is the deadline for mandatory electronic transmission of prescriptions?",
      "choices": [
          "Jan. 1, 2021",
          "Jan. 1, 2022",
          "Jan. 1, 2023",
          "Jan. 1, 2024"
      ],
      "answer": "Jan. 1, 2022"
  }
]

let set5 = [
  {
      "question": "What is the consequence of repeated acts of clearly excessive prescribing or administering of drugs?",
      "choices": [
          "A fine",
          "A warning",
          "Unprofessional conduct",
          "License suspension"
      ],
      "answer": "Unprofessional conduct"
  },
  {
      "question": "What must a prescriber discuss with a minor or their parent or guardian before issuing the first opioid prescription?",
      "choices": [
          "The risks of addiction and overdose associated with the use of opioids",
          "The risks of addiction associated with the use of alcohol",
          "The risks of opioid use without medical supervision",
          "The benefits of opioid use for pain management"
      ],
      "answer": "The risks of addiction and overdose associated with the use of opioids"
  },
  {
      "question": "What is the consequence of violating the laws regulating controlled substances?",
      "choices": [
          "A warning letter",
          "A misdemeanor charge",
          "A civil penalty",
          "License revocation"
      ],
      "answer": "A misdemeanor charge"
  },
  {
      "question": "What is required when a dentist prescribes or administers a Schedule II controlled substance?",
      "choices": [
          "Recording only the name and address of the patient",
          "Recording only the name and quantity of the controlled substance",
          "Recording the name, strength, and quantity of the controlled substance",
          "Recording the name, strength, and treatment for which the controlled substance is used"
      ],
      "answer": "Recording the name, strength, and quantity of the controlled substance"
  },
  {
      "question": "What is the primary requirement for a dentist to prescribe controlled substances?",
      "choices": [
          "State registration",
          "DEA registration",
          "CURES registration",
          "Local pharmacy board registration"
      ],
      "answer": "DEA registration"
  },
  {
      "question": "What is the requirement for controlled substance prescription forms?",
      "choices": [
          "They must be obtained from any authorized printer",
          "They must be obtained from any local pharmacy",
          "They must be obtained from security printers approved by the Department of Justice",
          "They must be obtained from the dental board"
      ],
      "answer": "They must be obtained from security printers approved by the Department of Justice"
  },
  {
      "question": "Under what conditions may a dentist dispense drugs to their patients?",
      "choices": [
          "If the drugs are furnished by a nurse or physician attendant",
          "If the drugs are not necessary for the dentist's treatment of the patient",
          "If the dentist maintains a pharmacy or retail operation",
          "If all necessary conditions are met"
      ],
      "answer": "If all necessary conditions are met"
  },
  {
      "question": "What must a dentist offer to give to a patient prior to dispensing drugs?",
      "choices": [
          "A discount coupon for the drugs",
          "A referral to a pharmacy",
          "A written prescription",
          "A verbal recommendation"
      ],
      "answer": "A written prescription"
  },
  {
      "question": "How long must records of drug acquisition and disposition be preserved by the dentist?",
      "choices": [
          "One year",
          "Three years",
          "Five years",
          "Ten years"
      ],
      "answer": "Three years"
  },
  {
      "question": "Where must drugs to be dispensed by a dentist be stored?",
      "choices": [
          "In an open area accessible to all staff",
          "In a secure area within the dentist's office",
          "In the waiting area",
          "In the dentist's home"
      ],
      "answer": "In a secure area within the dentist's office"
  },
  {
      "question": "What information must be recorded by a dentist for each controlled substance dispensed?",
      "choices": [
          "Only the patient's name and the date of dispensing",
          "The patient's address and phone number",
          "The dentist's DEA registration number",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is required for controlled substances dispensed by a dentist to be reported to CURES?",
      "choices": [
          "Within 24 hours",
          "Within 48 hours",
          "Within 7 days",
          "Within 14 days"
      ],
      "answer": "Within 7 days"
  },
  {
      "question": "What must be included on the label of drugs dispensed by a dentist?",
      "choices": [
          "Only the patient's name and the drug name",
          "The prescriber's name and the date of issue",
          "All required information as specified by regulations",
          "None of the above"
      ],
      "answer": "All required information as specified by regulations"
  },
  {
      "question": "What is the maximum supply of a Schedule II controlled substance a dentist may dispense to a patient?",
      "choices": [
          "24-hour supply",
          "48-hour supply",
          "72-hour supply",
          "96-hour supply"
      ],
      "answer": "72-hour supply"
  },
  {
      "question": "What is required for the construction, alteration, or repairing of dental prosthetic appliances without a written authorization?",
      "choices": [
          "Supervision of a licensed dentist",
          "Approval from a dental lab",
          "Consent from the patient",
          "None of the above"
      ],
      "answer": "Supervision of a licensed dentist"
  },
  {
      "question": "What information must be included in a written authorization to a dental lab?",
      "choices": [
          "Only the date of issuance",
          "The signature of the dental technician",
          "A description of the authorized work and the dentist's signature and license number",
          "All of the above"
      ],
      "answer": "A description of the authorized work and the dentist's signature and license number"
  },
  {
      "question": "What is considered unprofessional conduct in relation to dental care delivery?",
      "choices": [
          "Providing necessary treatment",
          "Delivering incompetent treatment",
          "Encouraging necessary treatment",
          "Ensuring patient comfort"
      ],
      "answer": "Delivering incompetent treatment"
  },
  {
      "question": "What is required for individuals operating radiographic equipment in a dental office?",
      "choices": [
          "Passing a board-approved course in radiation safety",
          "Having prior experience in radiology",
          "Obtaining a separate license for radiographic operation",
          "None of the above"
      ],
      "answer": "Passing a board-approved course in radiation safety"
  },
  {
      "question": "What does authentication of a written authorization involve?",
      "choices": [
          "Ensuring the document is not altered",
          "Ensuring the authenticity of the document and the signature",
          "Verifying the patient's identity",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is considered unprofessional conduct regarding dental radiographic equipment?",
      "choices": [
          "Providing adequate training to operate the equipment",
          "Permitting unqualified individuals to operate the equipment",
          "Ensuring proper maintenance of the equipment",
          "Following manufacturer guidelines"
      ],
      "answer": "Permitting unqualified individuals to operate the equipment"
  },
  {
      "question": "What must labs ensure when accepting preprinted paper orders with electronic signatures?",
      "choices": [
          "The speed of document processing",
          "The security, authenticity, integrity, and confidentiality of the document",
          "The availability of physical copies",
          "None of the above"
      ],
      "answer": "The security, authenticity, integrity, and confidentiality of the document"
  },
  {
      "question": "What must a dental professional do to avoid unprofessional conduct in dental care delivery?",
      "choices": [
          "Encourage unnecessary treatment",
          "Ensure patient comfort at all costs",
          "Provide competent and necessary treatment",
          "Avoid delivering any treatment"
      ],
      "answer": "Provide competent and necessary treatment"
  },
  {
      "question": "What is considered unprofessional conduct regarding compensation or inducement for referrals?",
      "choices": [
          "Accepting a gift from a patient",
          "Offering a discount to a patient",
          "Giving a rebate or commission for patient referrals",
          "Providing free services to a patient"
      ],
      "answer": "Giving a rebate or commission for patient referrals"
  },
  {
      "question": "What is the time limit for a dentist to refund a duplicate payment made by a patient?",
      "choices": [
          "Within 60 days of the duplicate payment",
          "Within 90 days of the patient's request for refund",
          "Within 30 days of the duplicate payment",
          "Within 120 days of the patient's request for refund"
      ],
      "answer": "Within 30 days of the duplicate payment"
  },
  {
      "question": "What is an exception to the prohibition on compensation or inducement for referrals?",
      "choices": [
          "Accepting gifts from patients",
          "Payment for services other than patient referrals based on a percentage of gross revenue",
          "Receiving discounts from pharmacies",
          "Providing free consultations"
      ],
      "answer": "Payment for services other than patient referrals based on a percentage of gross revenue"
  },
  {
      "question": "What must be included in a written authorization for construction or alteration of dental prosthetic appliances?",
      "choices": [
          "Patient's social security number",
          "Date of issuance and dentist's license number",
          "Technician's name and address",
          "Type of insurance coverage"
      ],
      "answer": "Date of issuance and dentist's license number"
  },
  {
      "question": "What is required of a dentist who operates a group advertising and referral service for dentists?",
      "choices": [
          "To charge fees based on the number of referrals",
          "To advertise in a way that conforms to regulations",
          "To not disclose the name and address to the dental board",
          "To impose a fee on patient referrals"
      ],
      "answer": "To advertise in a way that conforms to regulations"
  },
  {
      "question": "Under what circumstances can a dentist accept gifts related to patient referrals?",
      "choices": [
          "For any patient referral",
          "Only for referrals to specific organizations",
          "For holiday or birthday gifts",
          "For referrals made to laboratories or pharmacies"
      ],
      "answer": "For holiday or birthday gifts"
  },
  {
      "question": "What is the consequence of operating a group advertising and referral service for dentists without providing its name and address to the dental board?",
      "choices": [
          "No consequence",
          "A warning letter",
          "A fine",
          "A misdemeanor charge"
      ],
      "answer": "A misdemeanor charge"
  },
  {
      "question": "When must a licensee disclose their interest in an organization to which a patient is referred?",
      "choices": [
          "Only if requested by the patient",
          "Within 30 days of the referral",
          "Upon each referral",
          "Once a year"
      ],
      "answer": "Once a year"
  },
  {
      "question": "What is considered unprofessional conduct regarding scope of practice?",
      "choices": [
          "Performing procedures beyond one's license and competence",
          "Referring patients to specialists",
          "Offering discounted services",
          "Providing free consultations"
      ],
      "answer": "Performing procedures beyond one's license and competence"
  },
  {
      "question": "What activities constitute practicing dentistry according to California law?",
      "choices": [
          "Offering free dental check-ups",
          "Advertising dental services",
          "Constructing dental prosthetic appliances",
          "Selling dental supplies"
      ],
      "answer": "Constructing dental prosthetic appliances"
  },
  {
      "question": "Under what circumstances may a dentist allow a dental auxiliary to perform procedures on a patient?",
      "choices": [
          "Only after a full dental examination",
          "For any necessary treatment",
          "Only for diagnostic purposes",
          "Only with the patient's consent"
      ],
      "answer": "Only for diagnostic purposes"
  },
  {
      "question": "What duties may a dental auxiliary perform prior to examination by the dentist?",
      "choices": [
          "Performing dental surgery",
          "Exposing emergency radiographs",
          "Making final treatment decisions",
          "Prescribing medication"
      ],
      "answer": "Exposing emergency radiographs"
  },
  {
      "question": "What is the definition of 'patient of record'?",
      "choices": [
          "A patient who has undergone surgery",
          "A patient who has received a diagnosis",
          "A patient who has completed dental insurance paperwork",
          "A patient who has been examined and had a written plan developed by the dentist"
      ],
      "answer": "A patient who has been examined and had a written plan developed by the dentist"
  },
  {
      "question": "In what settings does the requirement for a patient of record not apply?",
      "choices": [
          "At dental offices during regular hours",
          "At health fairs and school screenings",
          "During emergency dental procedures",
          "During routine dental cleanings"
      ],
      "answer": "At health fairs and school screenings"
  },
  {
      "question": "What is the purpose of exposing emergency radiographs by a dental auxiliary?",
      "choices": [
          "To aid in diagnosis and treatment planning",
          "To perform immediate dental surgery",
          "To assist in making final treatment decisions",
          "To prescribe medication"
      ],
      "answer": "To aid in diagnosis and treatment planning"
  },
  {
      "question": "What is the requirement for a dentist prior to allowing a dental auxiliary to perform certain duties?",
      "choices": [
          "The dentist must review patient records",
          "The dentist must conduct a full examination",
          "The dentist must obtain patient consent",
          "The dentist must diagnose using telehealth"
      ],
      "answer": "The dentist must diagnose using telehealth"
  },
  {
      "question": "What is the definition of telehealth?",
      "choices": [
          "The physical examination of a patient",
          "The use of technology for healthcare delivery",
          "The provision of emergency medical services",
          "The administration of anesthesia"
      ],
      "answer": "The use of technology for healthcare delivery"
  },
  {
      "question": "What is asynchronous store and forward in telehealth?",
      "choices": [
          "Immediate interaction between patient and provider",
          "Transmission of patient information without the patient present",
          "Continuous monitoring of patient vital signs",
          "Simultaneous consultation with multiple providers"
      ],
      "answer": "Transmission of patient information without the patient present"
  },
  {
      "question": "What is required prior to the delivery of health care via telehealth?",
      "choices": [
          "Written consent from the patient",
          "Verbal consent from the patient",
          "Consent from the patient's family",
          "No consent is required"
      ],
      "answer": "Verbal consent from the patient"
  },
  {
      "question": "What documentation is necessary if health care is provided via telehealth?",
      "choices": [
          "Written consent from the patient",
          "Documentation of verbal consent from the patient",
          "Consent from the patient's family",
          "No documentation is required"
      ],
      "answer": "Documentation of verbal consent from the patient"
  },
  {
      "question": "What information must be provided to the patient if care is provided at a location other than the dentist's practice location?",
      "choices": [
          "The name and license number of the dental assistant",
          "The authorizing dentist's name, practice location address, and telephone number",
          "The patient's medical history",
          "The procedure codes for the treatment"
      ],
      "answer": "The authorizing dentist's name, practice location address, and telephone number"
  },
  {
      "question": "Who is permitted to administer general anesthesia?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who can place ligature ties and archwires?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to remove ligature ties and archwires?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can place bases, liners, and bonding agents?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to prepare teeth for bonding and select, preposition, and cure orthodontic brackets after their position has been approved by the supervising licensed dentist?",
      "choices": [
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Dentists",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  },
  {
      "question": "Who is permitted to use caries detection devices and materials, automated, for gathering information for diagnosis by the dentist?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can remove excess cement from tooth surfaces with a hand instrument?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to remove excess cement from supragingival surfaces of teeth undergoing orthodontic treatment with an ultrasonic scaler?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can obtain intraoral images for computer-aided design (CAD), milled restorations?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to perform cord retraction of gingiva for impression procedures?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA) with direct supervision required (DD)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA) with direct supervision required (DD)"
  },
  {
      "question": "Who can fabricate, adjust, cement, and remove temporary crowns, including stainless steel crowns when used as a provisional restoration?",
      "choices": [
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Dentists",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to adjust dentures extra-orally?",
      "choices": [
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Dentists",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  },
  {
      "question": "Who can place periodontal dressings?",
      "choices": [
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Dentists",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to perform drug identification and draw, limited to identification of appropriate medications, ampule and vial preparation, and withdrawing drugs of correct amount as verified by the supervising licensed dentist?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who is permitted to handle drugs, medications, and fluids?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who can fit trial endodontic filling points?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  },
  {
      "question": "Who is permitted to handle endodontic master points and accessory points?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  }
]

let set6 = [
  {
      "question": "Who can dry endodontically treated canals using absorbent paper points?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to conduct preliminary evaluation of the patient’s oral health, including, but not limited to, charting, intraoral and extra-oral evaluation of soft tissue, classifying occlusion, and myofunctional evaluation?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA) with direct supervision required (DD)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA) with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to take facebow transfers and bite registrations?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can apply topical fluoride?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to take final impressions for tooth-borne, removable prosthesis?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA) with direct supervision",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA) with direct supervision"
  },
  {
      "question": "Who can take final impressions for permanent indirect restorations?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA) with direct supervision required (DD)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA) with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to take intraoral impressions for all nonprosthodontic appliances?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can place an Interim Therapeutic Restoration (ITR) after the diagnosis and direction of a dentist in a telehealth connected dental team?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA)"
  },
  {
      "question": "Who can remove an intravenous line?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who is permitted to place ligature ties and archwires?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can remove ligature ties and archwires?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to cure restorative or orthodontic materials in the operative site with a light-curing device?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can place bases, liners, and bonding agents?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to place, wedge, and remove matrices for restorative procedures?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can place patient monitoring sensors?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to perform mouth-mirror inspection of the oral cavity, including charting of obvious lesions, existing restorations, and missing teeth?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can assist in the administration of nitrous oxide when used for analgesia or sedation?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who is permitted to perform oral health assessments in school-based, community health project settings under the direction of a dentist, registered dental hygienist, or registered dental hygienist in alternative practice?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Registered Dental Assistants (RDA)"
  },
  {
      "question": "Who is permitted to examine orthodontic appliances?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  },
  {
      "question": "Who can examine and seat removable orthodontic appliances after adjustment by the dentist, and deliver care instructions to the patient?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dental Assistants (DA)"
  },
  {
      "question": "Who is permitted to remove orthodontic bands?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "Who can size, fit, and cement orthodontic bands?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who is permitted to prepare teeth for bonding orthodontic brackets, select, preposition, and cure after their position has been approved by the supervising licensed dentist?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who can remove only orthodontic brackets and attachments, with removal of the bonding material by the supervising licensed dentist?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Dentists"
  },
  {
      "question": "Who is permitted to perform measurements for the purposes of orthodontic treatment?",
      "choices": [
          "Dentists",
          "Dental Assistants (DA)",
          "Registered Dental Assistants (RDA)",
          "Both DA and RDA with direct supervision required (DD)"
      ],
      "answer": "Both DA and RDA with direct supervision required (DD)"
  },
  {
      "question": "What level of supervision is required for administering local anesthesia?",
      "choices": [
          "Direct supervision by a dentist",
          "General supervision by a dentist not physically present",
          "Supervision without examination from a dentist",
          "No supervision required"
      ],
      "answer": "Direct supervision by a dentist"
  },
  {
      "question": "Who can place and remove ligature ties and archwires under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDH"
  },
  {
      "question": "Which category of dental hygienist can place bases, liners, and bonding agents?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can take facebow transfers and bite registrations under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "None of the above"
  },
  {
      "question": "Which dental hygienist can apply and activate bleaching agents using a non-laser light-curing device?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who is authorized to chemically prepare teeth for bonding?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Which category of dental hygienist can use automated caries detection devices to gather information for diagnosis by the dentist?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can remove excess cement on surfaces of teeth with an ultrasonic scaler?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can obtain intraoral images for computer-aided design, milled restorations?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Which duty can be performed by RDHEF under direct supervision?",
      "choices": [
          "Cord retraction of gingiva for impression procedures",
          "Adjusting extra-orally dentures",
          "Soft tissue curettage",
          "Placing periodontal dressings"
      ],
      "answer": "Cord retraction of gingiva for impression procedures"
  },
  {
      "question": "Who can place periodontal dressings without supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDHAP"
  },
  {
      "question": "Who can remove periodontal and post-extraction dressings after inspection by the supervising dentist?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can fit trial endodontic filling points under direct supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDHEF"
  },
  {
      "question": "Who can dry endodontically treated canals using absorbent paper points?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Which category of dental hygienist can perform preliminary exams, including periodontal charting and myofunctional evaluation, under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDH"
  },
  {
      "question": "Who can perform extra-oral duties or procedures specified by the supervising licensed dentist under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can take impressions for bleaching trays and placement of in-office tooth whitening devices?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can apply fluoride in a public health program created by federal, state, or local law?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDHAP"
  },
  {
      "question": "Who can take final impressions for cast restorations under direct supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "RDHEF"
  },
  {
      "question": "Who can apply hygiene preventive services in a public health program created by federal, state, or local law?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDHAP"
  },
  {
      "question": "Who is authorized to take intraoral impressions for all nonprosthodontic appliances?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can take intraoral impressions for space maintainers, orthodontic appliances, and guards under direct supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDHEF"
  },
  {
      "question": "Who can place an Interim Therapeutic Restoration (ITR) after the diagnosis and direction of a dentist in a telehealth connected dental team?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can irrigate subgingivally with antimicrobial and/or antibiotic liquid solutions under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can place and remove ligature ties and archwires under direct supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can use a non-laser light-curing device to activate bleaching agent?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can cure restorative or orthodontic materials in the operative site with a light-curing device?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can place bases, liners, and bonding agents?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can place, wedge, and remove matrices for restorative procedures?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who is authorized to place patient monitoring sensors?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can perform mouth-mirror inspection of the oral cavity, including charting of obvious lesions, existing restorations, and missing teeth under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who is authorized to administer nitrous oxide and oxygen, whether alone or in combination with each other, after completing a DHCC-approved course?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can perform oral exfoliative cytology under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDH"
  },
  {
      "question": "Who can perform oral health screenings?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "None of the above"
  },
  {
      "question": "Who can examine orthodontic appliances?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  }
]

let set7 = [
  {
      "question": "Who can perform orthodontic measurements for the purposes of orthodontic treatment?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can place and remove orthodontic separators?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can perform intraoral and extraoral photography under general supervision?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDH"
  },
  {
      "question": "Who can monitor patients undergoing sedation, limited to reading and transmitting information from the monitor display during the intraoperative phase of surgery for various parameters?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who can perform soft tissue curettage after completing a DHCC-approved course?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "RDH"
  },
  {
      "question": "Who can remove sutures after inspection of the site by the dentist?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "Who is authorized to apply non-aerosol and non-caustic topical agents?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "None of the above"
      ],
      "answer": "None of the above"
  },
  {
      "question": "Who can apply topical, therapeutic, and subgingival agents for the control of caries and periodontal disease?",
      "choices": [
          "RDH",
          "RDHEF",
          "RDHAP",
          "All of the above"
      ],
      "answer": "All of the above"
  }
]
const mappings = {
  'set1': set1,
  'set2': set2,
  'set3': set3,
  'set4': set4,
  'set5': set5,
  'set6': set6,
}
let questions = set1;
renderSets();
function renderSets() {
  const examSetsDiv = document.getElementById("exam-sets");

  // Loop through the keys (exam sets) and create buttons
  Object.keys(mappings).forEach(examSet => {
    const button = document.createElement("button");
    button.textContent = examSet;
    button.addEventListener("click", () => {
      questions = mappings[examSet];
      checkExamCorrupted();
      if (examNotCorrupted) {
        displayQuestion(true);
        if (interval) {
          clearInterval(interval)
        }
        startTimer(timer);
      }
    });
    examSetsDiv.appendChild(button);
  });
}
function checkExamCorrupted() {
  const atleastOneMatch = (question) =>
    question.choices.some((choice) => choice === question.answer);
  examNotCorrupted = questions.every(
    (q) => !!q.answer && !!q.choices && atleastOneMatch(q),
  );
  if (!examNotCorrupted) {
    logCorrupted();
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
    document.getElementById("exam-sets").style.display = "none";
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
  const rdc = !markedQuestionNumbers.length ? '': markedQuestionNumbers.join(', ')
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

  
  clearInterval(interval);
  fetch("/submit-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ result_data: JSON.stringify(questions) }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
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