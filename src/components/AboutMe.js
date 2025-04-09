import React from 'react';

const AboutMe = () => {
  return (
    <section id="aboutme" className="w-full bg-[#DAEBD6] py-8 px-4 md:py-16 md:px-8">
      <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
        <img 
          src="./assets/profile.jpeg"
          alt="Lee Ye Le's Profile" 
          className="rounded-2xl shadow-lg md:float-left mr-8 mb-4 w-full sm:max-w-xs md:max-w-xs"
        />
        {/* Name - Top right on desktop */}
        <h1 className="mb-2 text-left md:text-left">
          Lee Ye Le
        </h1>
        
        {/* Titles - Below name */}
        <div className="mb-6 text-left md:text-left">
          <h3 className="">Consultant Neonatologist/Paediatrician</h3>
          <h3 className="">MBBS(S'pore), MMed (Paed Med), GDPM (S'pore)</h3>
          <h3 className="">MRCPCH (UK), FAMS (S'pore)</h3>
          <h3 className="">Medical director at SPARK (Singapore PAediatric caRe for Kids)</h3>
          {/* Add more titles as needed */}
        </div>
        
        {/* About Text - Wraps around on desktop */}
        <div className="text-gray-700 space-y-4 text-left">
          <p className="leading-relaxed">
            Dr Lee Le Ye graduated from the National University of Singapore and obtained her speciality
            qualifications in paediatrics and sub-specialised in neonatology. She undertook the graduate diploma
            in palliative medicine in 2024. She was a senior consultant with the Department of Neonatology at
            the National University Healthcare System, Singapore. Her work involves managing both inpatient
            neonatal care as well as palliative care for stillbirths, neonates and also paediatric patients. Her
            clinical interests include neonatal screening programmes and nutritional management of Very Low
            Birth weights (VLBWs) infants as well as term neonates.
          </p>
          <p className="leading-relaxed">
            She has also started a programme for
            alternative care plan for infants with palliative care needs and stillbirths. She held the title of
            Assistant Professor and was on the teaching paediatric faculty for the Yong Loo Lin School of
            Medicine, National University of Singapore. She had obtained numerous grants on neonatal
            jaundice, hepatitis B vertical transmission, covid-19 vertical transmission and also newborn
            nutrition. She has published on these topics in both local and international peer reviewed journals as
            well as book chapters. She hopes to be able to provide end of life care for those who required these
            and support these families during the stressful period to let them see the next rainbow.
          </p>
          <p className="leading-relaxed">
            Outside her work, Dr Lee has been an active volunteer with Hospice Care Association since 2020 and
            had participated in the Weekend Warrior, Oasis Day Care and also Virgil Angel program. She had also
            volunteered in Ang Kor Children’s Hospital (Siem Reap) and Chenla Children’s Healthcare, Kratie for
            skills teaching at their neonatal units. Her hobbies include cycling and fund raising during these activities, solving puzzles and also reading.
          </p>
          {/* Add more paragraphs as needed */}
        </div>

        <div className="flex mt-4 space-x-4">
          <img
            src="./assets/linkedIn.png"
            alt="LinkedIn"
            className="w-12 h-12 rounded-xl shadow-lg cursor-pointer"
            onClick={() => window.open('https://linkedin.com/in/le-ye-lee-929992113', '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.open('https://linkedin.com/in/le-ye-lee-929992113', '_blank');
              }
            }}
          />
          <img 
            src="./assets/researchGate.jpeg"
            alt="Research Gate"
            className="w-12 h-12 rounded-xl shadow-lg cursor-pointer"
            onClick={() => window.open('https://www.researchgate.net/profile/Le-Lee', '_blank')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                window.open('https://www.researchgate.net/profile/Le-Lee', '_blank');
              }
            }}
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;