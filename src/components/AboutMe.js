import React from 'react';

const HospitalCard = ({ name, logo }) => {
  return (
    <div className="rounded-xl bg-[#FAF7ED] flex overflow-hidden">
      <div className="p-4 text-left w-full">
        <h4 className="font-bold text-gray-800">
          {name}
        </h4>
      </div>

      <div className="bg-white p-6 flex items-left justify-left w-full ml-auto h-30">
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-contain max-w-100 h-full"
        />
      </div>
    </div>
  );
};

const hospitals = [
  {
    name: "Gleneagles Hospital",
    logo: "./assets/logos/gleneagleslogo.png"
  },
  {
    name: "Mount Alvernia Hospital",
    logo: "./assets/logos/mountAlogo.png"
  },
  {
    name: "Mount Elizabeth Novena",
    logo: "./assets/logos/mountElogo.png"
  },
  {
    name: "Mount Elizabeth (Orchard)",
    logo: "./assets/logos/mountElogo.png"
  },
  {
    name: "Thomson Medical Centre",
    logo: "./assets/logos/thomsonlogo.png"
  }
];

const AboutMe = () => {
  return (
    <section id="aboutme" className="w-full bg-[#DAEBD6] py-8 px-4 md:py-16 md:px-8">
      <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
        <img 
          src="./assets/profile.jpeg"
          alt="Lee Le Ye's Profile" 
          className="roundedBox md:float-left mr-8 mb-4 w-full sm:max-w-xs md:max-w-xs"
        />
        {/* Name - Top right on desktop */}
        <h1 className="mb-2 text-left md:text-left">
          Lee Le Ye
        </h1>
        
        {/* Titles - Below name */}
        <div className="mb-6 text-left md:text-left">
          <h3 className="">Consultant Neonatologist/Paediatrician</h3>
          <h3 className="">MBBS(S'pore), MMed (Paed Med), GDPM (S'pore)</h3>
          <h3 className="">MRCPCH (UK), FAMS (S'pore)</h3>
          <h3 className="">Medical director at SPARK (Singapore PAediatric caRe for Kids)</h3>
          {/* Add more titles as needed */}
        </div>

        <div className="flex mt-4 mb-4 space-x-4">
          <a href="https://linkedin.com/in/le-ye-lee-929992113" target="_blank" rel="noopener noreferrer" class="roundedHoverBox w-12 h-12 cursor-pointer">
            <img
              src="./assets/linkedIn.png"
              alt="LinkedIn"
              className="rounded-xl"
            />
          </a>
          <a href="https://www.researchgate.net/profile/Le-Lee" target="_blank" rel="noopener noreferrer" class="roundedHoverBox w-12 h-12 cursor-pointer">
            <img 
              src="./assets/researchGate.jpeg"
              alt="Research Gate"
              className="rounded-xl"
            />
          </a>
        </div>
        
        {/* About Text - Wraps around on desktop */}
        <div className="text-gray-700 space-y-4 text-justify">
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
          <br/>
          <p className="leading-relaxed">
            Dr Lee is accredited to practice neonatology and paediatric medicine as inpatient at the following hospitals:
            <div className="
              mt-4
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            ">
              {hospitals.map((hospital) => (
                <HospitalCard
                  key={hospital.name}
                  name={hospital.name}
                  logo={hospital.logo}
                />
              ))}
            </div>
          </p>
          {/* Add more paragraphs as needed */}
        </div>
      </div>
    </div>
    </section>
  );
};

export default AboutMe;