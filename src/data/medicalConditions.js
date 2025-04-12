const wellBabyProblems = [
  {
    id: "newbornJaundice",
    conditionName: "Newborn Jaundice",
    doctorsInvolvement: "Dr Lee will review your babies during their hospital stay in the well baby nurseries to advise you on their jaundice level. If they are deemed to be elevated, a non-invasive test with the Bilichek will be done and if elevated, a blood prick will be done to obtain some blood to test for the actual level of jaundice. If this level of jaundice is higher than the norm, phototherapy will be recommended for your baby. This will extend the stay for 24 hours at least.",
    signsAndSymptoms: "Jaundice in babies start from the face and progress down the body. The yellowness of the skin can also be seen in the white of the eye. As the jaundice increase, the baby may become more quiet, sleepy and not be interested in feeding.",
    causes: `1. Physiological (normal) jaundice. This occurs in more than half of all babies. An immaturity of the liver leads to a slower processing of bilirubin. The jaundice first appears at 2 to 4 days of age and should disappear by 2 weeks of age.
2. Breast milk jaundice. This occurs later at 4 to 7 days of age and may last from 3 to 10 weeks.
3. Blood group incompatibility (Rhesus or ABO problems). This type of jaundice usually begins during the first 24 hours of life, and your paediatrician would be able to diagnose it early.`,
    about: "Jaundice is a yellowish discoloration of the skin and whites of the eyes. It is caused by too much bilirubin in the body (hyperbilirubinemia). Bilirubin is produced by the normal breakdown of red blood cells and is removed from the bloodstream by the liver and excreted in the stools and urine.",
    diagnosisAndTreatment: `Treatment of severe jaundice: High levels of bilirubin (usually above 350 umol/L) can cause deafness, cerebral palsy or brain damage in some babies. These complications can be prevented by phototherapy (shining special light rays onto the skin). In rare cases, a blood exchange transfusion may be used.
Treatment of breast milk jaundice: Giving water or glucose feeds will not lower the jaundice. Since bilirubin is carried out of the body in the stools, frequent nursing of your baby and passing frequent bowel movement is useful. Avoid taking Chinese medication, Malay 'jamu', ginger and alcohol if you are breastfeeding.`,
    notes: `After your baby had received phototherapy, the baby will be discharge or observed for the rise in bilirubin. An early review appointment will be made for the baby if the baby is less than 7 days old. Alternatively parents can have their babies’ bilirubin level checked at any nearby polyclinics or private paediatricians.
Parents should continue to feed the babies regularly and observe the stools and urine frequency as well as the yellowness of the skin. If the yellowness increased suddenly or the babies do not void post discharge, then it will be good to return to the hospital-UCC early for another check.
Sunbathing the babies will not help to reduce the jaundice and can even cause sun-burns.`,
    imagePaths: [
      "./assets/pictures/neonatal_jaundice.JPG"
    ]
  },
  {
    id: "congenitalHypothyroidism",
    conditionName: "Congenital Hypothyroidism",
    doctorsInvolvement: "Dr Lee will co-manage this condition with paediatric endocrinologist",
    signsAndSymptoms: "If undetected from screening, the child can present with constipation, low body temperature, slow mentation, and developmental delay.",
    causes: `1. Abnormal development of the thyroid gland.  
2. Abnormal production of the thyroid hormone.  
3. Maternal thyroid antibodies.`,
    about: `Congenital hypothyroidism can be screened through the testing of the level of TSH (thyroid-stimulating hormone) in the cord blood of the newborn. The incidence of this condition is 1 per 3,000 babies.  

There are many causes for this condition, the most common of which is abnormal development of the gland when the baby was developing in the mother. The thyroid may be present in the correct place but not be able to produce the correct hormones. Mothers with thyroid disorders may have antibodies that can affect the baby’s function.`,
    diagnosisAndTreatment: `Those who have abnormal results will be asked for a repeat test within the first week of life.  

If the test results are very abnormal, the baby will undergo further tests like an ultrasound of the thyroid to determine its location and a special radioactive isotope test to determine its function.  

If the test results are abnormal, the baby will be started on thyroxine (a hormonal replacement). Early institution of appropriate treatment is important for normal neurodevelopment.`,
    notes: `With appropriate screening, early detection, and institution of appropriate therapy, babies are able to achieve normal intellect and development.`
  },
  {
    id: "metabolicDisease",
    conditionName: "Metabolic disease",
    doctorsInvolvement: `For all newborns in the hospital, Dr Lee will recommend inborn errors of metabolism screening tests by blood spots collected from the babies prior to discharge.

If the screening tests results are abnormal, the babies may be asked to return for further tests and if the results are very abnormal, they are referred to the metabolic specialist to review the babies conditions for treatment.`,
    signsAndSymptoms: "The babies with these conditions may appear well until they are sick and can be vomiting, be drowsy, develop fits and even neurodevelopmental delay or death.",
    causes: "An inborn error of metabolism is a group of diseases in which the babies cannot convert the food substances that we eat into proteins, or energy for life. The disease occurs due to the excessive amounts of toxic wastes accumulated or lack of the proteins and energy.",
    about: "Individually, the isolated metabolic disease is rare. However with the audits, performed since the programme started nationwide in Singapore, we had detected an incidence of 3 per 1000 individuals with these rare diseases. In otherwise well conditions, the babies’ abnormality can only be detected through the blood spots.",
    diagnosisAndTreatment: `Early detection will allow detailed confirmationary tests to be carried out. Treatment through special diet or additions of supplements will prevent the babies from becoming sick.
Dr Lee is happy to discuss more about these tests with you during your stay in the hospital.`
  },
  {
    id: "hearingImpairment",
    conditionName: "Hearing Impairment",
    doctorsInvolvement: "For all newborns in the hospital, hearing tests are carried out before discharge. For some who did not pass at birth, a repeat test will be carried out at the outpatient. If the repeat test is also not passed, the babies are referred to the ENT specialist for hearing confirmation testing.",
    signsAndSymptoms: "Hearing loss may not be easily detected until delays in speech and language milestones are detected at 9 months to 1 year.",
    causes: "Hearing loss may be due to inherited causes, family history of hearing loss, ear malformations, intrauterine infections, prematurity, recurrent ear infections, or brain infections.",
    about: "About 4 per 1000 babies have significant hearing loss, putting the babies at risk for delays in speech, language, intellectual, social, and emotional development.",
    diagnosisAndTreatment: "Diagnosis is through special hearing tests and visits to the ENT to check the ears and the hearing ability. Treatment options may range from hearing amplifications, audiovisual therapy, to cochlear implants.",
    notes: "Dr. Lee has managed many newborns diagnosed with hearing loss, and for those babies with appropriate therapy, they can achieve normal speech and development despite having significant hearing loss. In her previous role, she had helped to format and audit the newborn hearing screen program and also continues to educate and teach nurses and audiologists on this topic."
  },
]

const veryLowBirthWeightProblems = [
  {
    id: "necrotisingEnterocolitis",
    conditionName: "Necrotising Enterocolitis",
    doctorsInvolvement: "Dr Lee, together with her NICU nurses and paediatric surgeons, can manage this condition.",
    signsAndSymptoms: "Premature babies with NEC can present with increased gastric residues, vomiting, abdomen distension, and also changes in vital parameters. Rarely, blood may be passed in the stools.",
    causes: "Till date, no specific cause is known. However, babies who are premature, with reduced blood flow to the intestines in utero, or who did not have breast milk are known to have higher risks for this condition.",
    about: "To prevent this from occurring, premature babies are evaluated individually for this risk, and mother’s breast milk is strongly advocated. Probiotic supplements are also found to reduce the risk of this condition. Feeding increments are slow to prevent this.",
    diagnosisAndTreatment: `This condition can be divided into three stages with increasing severity. For those who are mild, feeds may be stopped temporarily. In more severe cases, serial abdominal X-rays are taken, and if there is suspicion of intestinal damage, surgery may be required.

Babies who have this condition will also need antibiotics and may also need mechanical ventilation.`,
    notes: `Depending on the extent of the damage, an ileostomy or colostomy may be created. Specialised care will be required for these babies.

In the book chapter she published, the risk of mortality is 35% for those with severe NEC, and Dr Lee will recommend an alternative care plan for the baby and the family.`,
    imagePaths: [
      "./assets/pictures/nec.JPG",
      "./assets/pictures/nec2.JPG",
      "./assets/pictures/nec3.JPG"
    ]
  },
  {
    id: "eyeDiseaseOfPrematurity",
    conditionName: "Eye Disease of Prematurity",
    doctorsInvolvement: "Dr. Lee is able to diagnose and manage this condition in the NICU. Ophthalmologists (eye specialists) with pediatric expertise will be doing regular screening when required.",
    signsAndSymptoms: "Babies who have ROP may have squints, increased risk of myopia, and in severe cases, may have retinal detachment leading to blindness.",
    causes: `The premature babies’ eyes have not completed their growth when the babies are born. Hence, when exposed to ex-utero life with changes in the oxygen level, the blood vessels are stimulated to have abnormal growth. This can lead to bleeding within the eyeball and also detachment of the retina, resulting in blindness.`,
    about: `The premature babies’ eyes have not completed their growth when the babies are born. Hence, when exposed to ex-utero life with changes in the oxygen level, the blood vessels are stimulated to have abnormal growth. This can lead to bleeding within the eyeball and also detachment of the retina, resulting in blindness.`,
    diagnosisAndTreatment: `Prior to the eye checks, the babies will be given topical eye medications to dilate the pupils and also local anesthetics.  

If there is evidence of vision-threatening ROP, the babies will undergo laser therapy to prevent retinal detachment.`,
    notes: "With timely intervention, none of the babies had blindness after treatment, as reported in her paper published in the Singapore Medical Journal."
  },
  {
    id: "bleedingIntoVentricles",
    conditionName: `Bleeding into the Ventricles of the Brain`,
    doctorsInvolvement: `Dr. Lee is able to diagnose and manage this condition in the NICU. A radiologist with pediatric ultrasound expertise may be asked to do further imaging when required.`,
    signsAndSymptoms: `Babies who have mild bleeds may be asymptomatic, and this can only be diagnosed on routine screening brain scans. For those who have severe bleeds, the babies may have changes in their breathing pattern, blood pressure changes, and also changes in their sensorium.`,
    causes: `The blood vessels to the developing part of the brain are very fragile. Changes in blood levels of carbon dioxide, oxygen, and acid can lead to instability in blood flow to the brain. This can result in bleeding in the developing part of the brain.`,
    about: `The bleeding will stop on its own. However, the bigger the size of the bleed, the more serious it is. Bleeding can be classified as grades 1 to 4. Grade 4 bleeds have the greatest risk of affecting the future mental development of the baby.`,
    diagnosisAndTreatment: `Diagnosis can be done at the bedside using an ultrasound machine. This can be performed by scanning through the soft part of the skull called the fontanelle.

No specific treatment is available for the bleeding.

In severe cases, the blood in the ventricles may obstruct the flow of cerebrospinal fluid (brain fluid) and lead to hydrocephalus (dilation of the brain ventricles). This may require drainage and removal.`,
    notes: `For infants with severe bleeding, Dr. Lee is able to provide an alternative care plan to support the family.`,
    imagePaths: [
      "./assets/pictures/ventricle_bleeding.JPG",
      "./assets/pictures/ventricle_bleeding2.JPG"
    ]
  },
  {
    id: "patentDuctusArteriosus",
    conditionName: "Patent Ductus Arteriosus (PDA)",
    doctorsInvolvement: "Dr Lee and her team of NICU nurses are able to manage this condition, She will also refer to the paediatric cardiologist (heart specialist) and also cardio-thoracic surgeon (heart surgeons) if the condition cannot be treated medically.",
    signsAndSymptoms: `In premature babies, PDA can cause breathing difficulties that may necessitate increased respiratory support. A murmur may be heard on examination of the heart. In very premature and small babies, a large PDA may occasionally result in bleeding into the lungs (pulmonary hemorrhage), which can be life-threatening.`,
    causes: `Patent Ductus Arteriosus (PDA) is a blood vessel that is present in all babies when they are in the womb. This blood vessel connects the aorta (a large artery that supplies blood from the heart to various body parts) and pulmonary artery (a large artery that supplies blood to the lungs). When the baby is in the womb, PDA normally diverts blood from the pulmonary artery to the aorta as the lungs do not take part in gas exchange.

After birth, when the lungs expand, all the blood in the pulmonary artery flows to the lungs and the PDA which is not needed anymore closes spontaneously in the majority of babies. However, when a baby is born prematurely`,
    about: `Problems are more likely to occur if the PDA is large. The shunting causes too much blood to flow to the lungs and not enough to other parts of the body. Large PDA in premature babies can complicate respiratory problems, making gas exchange in the lungs more difficult. It may also result in heart failure and can cause poor growth.

In her paper over a 9-year period between 2007 to 2016, 172 out of 474 (36%) VLBW babies developed a PDA that required some form of treatment.`,
    diagnosisAndTreatment: `PDA is usually suspected in a premature baby by clinical examination. An echocardiography of the heart (ultrasound scanning) done at the bedside can confirm the diagnosis. This ultrasound examination can also determine the size of the PDA.

Treatment options include fluid restriction, medical treatment with drugs such as indomethacin, ibuprofen, and paracetamol, and occasionally, surgical ligation (where the vessel is ligated with thread at operation).

In the majority of instances, medical management is effective in closing a PDA. Dr. Lee and nurses in the neonatal intensive care (NICU) are well experienced in diagnosing and treating this condition. In the rare instance of failure with medical therapy, surgical ligation is done by the cardiothoracic surgeons under general anaesthesia.`,
    notes: `Babies who require surgical ligation usually remain in the NICU during the surgery, and post-operative care is provided by the same team of doctors and nurses.

In her experience, 60% of VLBW babies with symptomatic PDA were successfully treated with medication, and the remaining 20% underwent surgical ligation. There were no deaths in babies who had ligation. Complications of surgery included vocal cord palsy, infection, bleeding, and chylothorax.`
  },
]

const intensiveCareProblems = [
  {
    id: "brainInjuredNeonates",
    conditionName: "Brain Injured Neonates",
    doctorsInvolvement: `Dr Lee is capable of handling this condition in the neonatal intensive care unit with the team of nurses.

If further specialized imaging like Magnetic Resonance Imaging (MRI) or paediatrics neurologists (brain specialists) are also available.`,
    signsAndSymptoms: `The babies with brain injury may not be breathing well and need ventilation support. They may also have other major organ malfunctions which need intensive care support. They may also be drowsy and some can also have seizures (fits)`,
    causes: `The brain injury may occur prior to delivery or during the birth process. The lack of blood supply during the delivery process to the brain causes the brain injury.`,
    about: `Brain injury can be divided into 3 grades of severity. Most of the minor grades may be unwell transiently and recover on their own. In those with more severe grades, those with the most severe grades will have fits and may even die.`,
    diagnosisAndTreatment: `The babies with potential risks for brain injury will be attended to at birth by paediatricians trained in neonatal resuscitations. If the need arise, they will undergo resuscitation at birth. The babies will be transferred to the NICU for monitoring and care.

A specialized machine which is able to monitor the brain wave patterns will be required to determine the degree of brain injury. this machines will also monitor for fits.

Besides supportive care for breathing, nutrition, cardiac and also fits treatment. Treatment with body cooling is available at the government restructured hospital as this mode is proven to reduce the neurological damage on the affected infants.

Special imaging with MRI will allow us to delineate the extent of the brain injury.`,
    notes: `For those with severe injury, Dr Lee is available to provide alternative care plan where the family can spend valuable and meaningful time together. With total body cooling, the risk of neurodevelopment delays and death are reduced, but long term sequele can be still occur.`,
    imagePaths: [
      "./assets/pictures/brain_injured_neonates.JPG",
      "./assets/pictures/brain_injured_neonates2.JPG",
    ]
  },
  {
    id: "twinsAndMultiplePregnancies",
    conditionName: "Twins and multiple pregnancies",
    doctorsInvolvement: "Dr Lee is able to manage this condition and recommends that an additional paediatrician is available with the care for your precious children during the birth process to provide assistance and care for the babies when they are born.",
    signsAndSymptoms: `The babies may be premature and require supportive care. They may be term (more than 37 weeks of pregnancy) but may be low birth weight of less than 2.5kg. They may require monitoring for blood sugar and jaundice.  

They may also be mildly premature (more than 34 weeks but less than 37 weeks). They may need transient monitoring and support for temperature control, feeding, and also jaundice.`,
    about: "Twins and multiple pregnancies is both a happy and also stressful condition for both the mother as well as the babies. Mothers are at higher risk of pregnancies-related problems like high blood pressure, diabetes, and also early labour. Twins and multiple pregnancies are also at risk of prematurity, growth differences between the two babies, and also birth injuries during delivery.",
    notes: "Based on her paper, 65% will require admission to NICU and require from 2 weeks to 4 weeks of stay. Those with additional risk of congenital malformations have the potential risk of death. Dr Lee is capable of providing an alternative care plan for the family."
  },
  {
    id: "congenitalCardiacCondition",
    conditionName: "Congenital Cardiac Condition",
    doctorsInvolvement: "Dr. Lee is able to provide resuscitation for all babies who are diagnosed with congenital cardiac condition. She can provide initial stabilization and treatment in the NICU. She will work with our paediatric cardiologist (heart specialists) and also cardiothoracic surgeons to correct the underlying heart condition. But she is also able to provide an alternative care plan for these patients should the condition be too severe.",
    signsAndSymptoms: "The babies may be sick at birth with inadequate oxygen, bluish around the lips, or poor heart function. Otherwise, they may be well and only diagnosed during the daily physical checkup with an extra sound heard, called a murmur.",
    causes: "The congenital cardiac malformation may be due to malformation of the heart when the baby is in the womb. These may be caused by wrong connections of the tubes out of the heart or abnormal openings between different parts of the heart. These are not due to any wrongdoing by the parents during the pregnancy.",
    diagnosisAndTreatment: "The babies will be examined and attended to at birth. If an antenatal diagnosis was made, the babies will be reviewed by the paediatric cardiologist after stabilization. A 2D Echography (ultrasound of the heart) will be carried out, along with blood tests to determine the baby’s cardiac conditions. Specialised medications to maintain the oxygen supply may be started depending on the condition. Cardiothoracic surgeons may or may not see you depending on the conditions.",
    notes: "For those choosing an alternative care plan, Dr. Lee will allow your family to spend time together to create moments that are valuable and meaningful to you. The surgical outcomes of each condition will vary depending on multiple factors, and the risk involved can best be discussed with the paediatric cardiologist and surgeon.",
    imagePaths: [
      "./assets/pictures/congenital_cardiac.JPG"
    ]
  },
  {
    id: "chromosomalDisorders",
    conditionName: "Chromosomal Disorders",
    doctorsInvolvement: "Dr Lee is capable of handling this condition in the neonatal intensive care unit with the team of nurses. As further specialized organ specialists are also available, she will coordinate the care of the various subspecialities.",
    signsAndSymptoms: "The babies with chromosomal conditions may not be able to adapt to ex-utero life and need resuscitation at birth. They may also have other major organ malfunctions which need intensive care support. They may also be drowsy and some can also have seizures (fits).",
    causes: "The extra or missing chromosome or part thereof can lead to major changes in the body and hence less capable of tolerating the stress during the birth process.",
    about: "All of us inherit our 46 chromosomes from our parents, each chromosome is like a volume of the encyclopedia. If we have an extra chromosome, this disrupts how our body is formed and hence leads to major changes. If we have a missing chromosome, this also disrupts our body systems. Some of us may have a partial extra or missing chromosome; this also disrupts our body systems but the effect can be as serious as a whole extra or missing chromosome. Knowing how many chromosomes we have does not allow us to know how many organ systems are affected or how severely we are affected. Only time will tell.",
    diagnosisAndTreatment: "The babies, if diagnosed antenatally, should be attended to at birth by paediatricians trained in neonatal resuscitation. If the need arises, they will undergo resuscitation at birth. The babies will be transferred to the NICU for monitoring and care. Doctors will then carry out specialized blood tests to confirm the diagnosis and also x-rays and scans to identify what organ systems are involved. Besides supportive care for breathing, nutrition, cardiac, kidney, hearing, endocrine, neurological, and also orthopaedic and surgical treatment may be needed. Doctors are not able to remove or add the chromosomes after birth either. Parents will need to plan and learn about lifelong care for these children.",
    notes: "For those with potentially life-limiting chromosomal conditions, Dr Lee is available to provide an alternative care plan where the family can spend valuable and meaningful time together."
  },
  {
    id: "congenitalInfections",
    conditionName: "Congenital Infections",
    doctorsInvolvement: "Dr Lee is capable of handling this condition with the team of nurses. As further specialized organ specialists, together with the paediatric infectious disease specialists are also available, she will coordinate the care of the various subspecialities.",
    signsAndSymptoms: "The babies with congenital conditions may not be able to adapt to ex-utero life and need resuscitation at birth. They may also have other major organ malfunctions which need intensive care support. They may also be drowsy and some can also have seizures (fits). Others may appear completely well at birth.",
    causes: "The congenital infections such as hepatitis B, syphilis, human immunodeficiency virus, rubella and COVID are commonly screened during pregnancy. Some mothers may have other infections such as toxoplasmosis, cytomegalovirus, herpes, varicella and Zika infections which are detected.",
    about: "For some infections such as hepatitis B, HIV, syphilis, toxoplasmosis, there are antenatal treatments available to the mother to prevent transmission to the baby. For others, currently, there may be no treatment available, e.g., rubella, Zika. For some of them like cytomegalovirus and herpes, treatment may be offered to the baby after birth if they are affected. Vaccines (both active and passive) are available for babies born to hepatitis B carrier mothers. Passive vaccines and antivirals are available for babies whose mothers contract varicella peri-partum.",
    diagnosisAndTreatment: "The babies, if diagnosed antenatally, should be attended to at birth by paediatricians trained in neonatal resuscitation. If the need arises, they will undergo resuscitation at birth. The babies will be transferred to the NICU for monitoring and care.\n\nDoctors will then carry out specialized blood tests to confirm the diagnosis and also x-rays and scans to identify what organ systems are involved.\n\nBesides supportive care for breathing, nutrition, cardiac, kidney, hearing, neurological and also orthopaedic and surgical treatment may be needed.\n\nSpecific treatment will be given to those who are confirmed to have varicella, hepatitis B, human immunodeficiency virus, syphilis, toxoplasmosis and herpes.",
    notes: "For those with potentially life-limiting congenital infectious conditions, Dr Lee is available to provide an alternative care plan where the family can spend valuable and meaningful time together."
  },
  {
    id: "respiratoryDisease",
    conditionName: "Respiratory Disease Requiring Mechanical Ventilation",
    doctorsInvolvement: "Dr. Lee and her NICU nurses are capable of managing all babies who require ventilation support.",
    signsAndSymptoms: "Babies may be breathing fast, with indrawing of the chest. They may also be bluish around the lips if this persists.",
    causes: "In term babies, the causes for respiratory disease can be quite varied. It can be due to lack of surfactant in some, infections, swallowing of meconium (babies’ motion) or blood during the birth process, and even malformation of the heart and intestines.",
    about: `Babies with these conditions will be transferred to the neonatal intensive care unit. For those with mild disease, oxygen may be given and some will recover. For others with more severe conditions, they may require mechanical ventilation and even specialized breathing support like high-frequency oscillatory ventilation or nitric oxide. Surgery may be needed for those with cardiac and lung malformation.`,
    notes: "For those with severe lung disease such as congenital diaphragmatic hernia, pulmonary hypertension, or pulmonary hypoplasia, Dr. Lee is able to provide an alternative care plan to suit the needs of the baby and the family.",
    imagePaths: [
      "./assets/pictures/resp_disease.JPG"
    ]
  }
]

export const medicalConditions = [
  {
    categoryName: 'Problems of Well Babies',
    sections: [
      {
        problems: wellBabyProblems
      }
    ]
  },
  {
    categoryName: 'Problems requiring intensive care',
    sections: [
      {
        sectionName: 'Infants With Very Low Birth Weight',
        problems: veryLowBirthWeightProblems
      },
      {
        sectionName: 'Intensive Care',
        problems: intensiveCareProblems
      }
    ]
  }
]

export const medicalConditionsFlat = wellBabyProblems.concat(veryLowBirthWeightProblems, intensiveCareProblems)
