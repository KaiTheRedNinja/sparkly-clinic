import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const medicalConditions = [
  {
    id: 0,
    conditionName: 'Brain Injured Neonates',
    doctorsInvolvement: `Dr Lee is capable of handling this condition in the neonatal intensive care unit with the team of nurses.
If further specialized imaging like Magnetic Resonance Imaging (MRI) or paediatrics neurologists (brain specialists) are also available.`,
    imagePath: '/path/to/imageA.jpg'
  },
  {
    id: 1,
    conditionName: 'Metabolic disease',
    doctorsInvolvement: `For all newborns in the hospital, Dr Lee will recommend inborn errors of metabolism screening tests by blood spots collected from the babies prior to discharge. 
If the screening tests results are abnormal, the babies may be asked to return for further tests and if the results are very abnormal, they are referred to the metabolic specialist to review the babies conditions for treatment.`,
    imagePath: '/path/to/imageA.jpg'
  },
  {
    id: 2,
    conditionName: 'Twins and multiple pregnancies',
    doctorsInvolvement: `Dr Lee is able to manage this condition and recommends that an additional paediatrician is available with the care for your precious children during the birth process to provide assistance and care for the babies when they are born.`
  },
  {
    id: 3,
    conditionName: 'Congenital Hypothyroidism',
    doctorsInvolvement: `Dr Lee will co-manage this condition with paediatric endocrinologist`
  },
  {
    id: 4,
    conditionName: 'Respiratory Disease Requiring Mechanical Ventilation',
    doctorsInvolvement: `Dr. Lee and her NICU nurses are capable of managing all babies who require ventilation support.`
  },
  {
    id: 5,
    conditionName: 'Necrotising Enterocolitis',
    doctorsInvolvement: `Dr Lee, together with her NICU nurses and paediatric surgeons, can manage this condition.`
  },
  {
    id: 6,
    conditionName: 'Eye Disease of Prematurity',
    doctorsInvolvement: `Dr. Lee is able to diagnose and manage this condition in the NICU. Ophthalmologists (eye specialists) with pediatric expertise will be doing regular screening when required.`
  },
  {
    id: 7,
    conditionName: 'Bleeding into the Ventricles of the Brain',
    doctorsInvolvement: `Dr. Lee is able to diagnose and manage this condition in the NICU. A radiologist with pediatric ultrasound expertise may be asked to do further imaging when required.`
  },
  {
    id: 8,
    conditionName: 'Patent Ductus Arteriosus (PDA)',
    doctorsInvolvement: `NOT GIVEN`
  },
  {
    id: 9,
    conditionName: 'Congenital Cardiac Condition',
    doctorsInvolvement: `Dr. Lee is able to provide resuscitation for all babies who are diagnosed with congenital cardiac condition. She can provide initial stabilization and treatment in the NICU. She will work with our paediatric cardiologist (heart specialists) and also cardiothoracic surgeons to correct the underlying heart condition. But she is also able to provide an alternative care plan for these patients should the condition be too severe.`
  },
  {
    id: 10,
    conditionName: 'Hearing Impairment',
    doctorsInvolvement: `For all newborns in the hospital, hearing tests are carried out before discharge. For some who did not pass at birth, a repeat test will be carried out at the outpatient. If the repeat test is also not passed, the babies are referred to the ENT specialist for hearing confirmation testing.`
  },
  {
    id: 11,
    conditionName: 'Newborn Jaundice',
    doctorsInvolvement: `Dr Lee will review your babies during their hospital stay in the well baby nurseries to advise you on their jaundice level. If they are deemed to be elevated, a non-invasive test with the Bilichek will be done and if elevated, a blood prick will be done to obtain some blood to test for the actual level of jaundice.
If this level of jaundice is higher than the norm, phototherapy will be recommended for your baby. This will extend the stay for 24 hours at least.`
  }
]

const Card = ({ condition, onSeeMore }) => {
  return (
    <div className="w-full rounded-lg shadow-md bg-[#DAEBD6] overflow-hidden">
      {condition.imagePath && (
        <div className="w-full bg-white">
          <img 
            src={condition.imagePath} 
            alt={`${condition.conditionName} visual`} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{condition.conditionName}</h3>
        <div className="max-h-[200px] overflow-hidden relative mb-4">
          <p className="text-gray-600">{condition.doctorsInvolvement}</p>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#DAEBD6] to-transparent flex items-end">
            <span className="text-gray-500"></span>
          </div>
        </div>
        <p 
          className="text-gray-500 underline cursor-pointer" 
          onClick={() => onSeeMore(condition.id)}
        >See more</p>
      </div>
    </div>
  );
};

const Treatments = () => {
  return (
    <section className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
    <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
      <h1 className="mb-2 text-left md:text-left">
          Services and Treatments
      </h1>
      {/* Add content for treatments here */}
      <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4}}
          gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
      >
        <Masonry>
          {medicalConditions.map((condition, _) => (
            <Card condition={condition} onSeeMore={(id) => console.log(`See more about condition with id: ${id}`)} key={condition.id} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
    </section>
  );
}

export default Treatments;