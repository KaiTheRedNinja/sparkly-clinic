import React, { useState, useEffect, useRef } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { medicalConditions, medicalConditionsFlat } from "../data/medicalConditions.js";

// TODO: Split into Problems of Well Babies and Problems requiring intensive care

const TreatmentCard = ({ condition, onSeeMore }) => {
  return (
    <div className="max-h-[350px] w-full rounded-xl shadow-md bg-[#DAEBD6] overflow-hidden relative">
      {(condition.imagePaths && condition.imagePaths.length > 0) && (
        <div className="w-full bg-white">
          <img 
            src={condition.imagePaths[0]}
            alt={`${condition.conditionName} visual`} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}

      {/* title and description */}
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{condition.conditionName}</h3>
        <div className="overflow-hidden relative mb-4">
          <p className="text-gray-600">{condition.doctorsInvolvement}</p>
        </div>
      </div>

      {/* trail off shadow */}
      <div className="absolute bottom-0 w-full">
        <div className="absolute bottom-10 left-0 right-0 h-16 bg-gradient-to-t from-[#DAEBD6] to-transparent flex">
          <span className="text-gray-500"></span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#DAEBD6] flex">
          <span className="text-gray-500"></span>
        </div>
      </div>

      {/* see more text */}
      <div className="absolute bottom-0 w-full">
        <p
          className="text-gray-500 underline cursor-pointer p-4 z-40" 
          onClick={() => onSeeMore(condition.id)}
        >See more</p>
      </div>
    </div>
  );
};

const PopoverSheet = ({ condition, onClose }) => {
  const sheetRef = useRef(null);

  // Handle background click
  const handleBackdropClick = (e) => {
    // Check if the click is outside the sheet
    if (sheetRef.current && !sheetRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end md:items-center justify-center z-50 text-left"
      onClick={handleBackdropClick}
    >
      <div 
        ref={sheetRef}
        className="bg-[#FAF7ED] w-full md:w-3/5 lg:h-auto max-h-[90vh] overflow-auto rounded-t-lg md:rounded-lg shadow-xl flex flex-col"
      >
        {/* Fixed header */}
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
          <h2>{condition.conditionName}</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200"
            aria-label="Close"
          >
            <h2 alt="Close">✕</h2>
          </button>
        </div>
        
        {/* Scrollable content */}
        <div className="p-6 overflow-auto space-y-4">
          {/* Image Gallery - only shown if images exist */}
          {(condition.imagePaths && condition.imagePaths.length > 0) && (
            <div className="w-full overflow-x-auto pb-4">
              <div className="flex gap-4 space-x-1 min-w-full">
                {condition.imagePaths.map((image, index) => (
                  <div key={index} className="flex-none">
                    <img 
                      src={image} 
                      alt={`${condition.conditionName} - ${index + 1}`}
                      className="h-64 w-auto object-cover rounded shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {condition.doctorsInvolvement && (
            <div className="mb-4 space-y-2">
              <h3>Dr Lee's Involvement</h3>
              <p>{condition.doctorsInvolvement}</p>
            </div>
          )}
          {condition.signsAndSymptoms && (
            <div className="mb-4 space-y-2">
              <h3>Signs and Symptoms</h3>
              <p>{condition.signsAndSymptoms}</p>
            </div>
          )}
          {condition.causes && (
            <div className="mb-4 space-y-2">
              <h3>Causes</h3>
              <p>{condition.causes}</p>
            </div>
          )}
          {condition.about && (
            <div className="mb-4 space-y-2">
              <h3>About the Condition</h3>
              <p>{condition.about}</p>
            </div>
          )}
          {condition.diagnosisAndTreatment && (
            <div className="mb-4 space-y-2">
              <h3>Diagnosis and Treatment</h3>
              <p>{condition.diagnosisAndTreatment}</p>
            </div>
          )}
          {condition.notes && (
            <div className="mb-4 space-y-2">
              <h3>Notes</h3>
              <p>{condition.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Treatments = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const history = window.history;

  useEffect(() => {
    // URL change handlers
    const handleUrlChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#')) {
        const itemId = hash.substring(1);
        const item = medicalConditionsFlat.find(item => String(item.id) === itemId);
        if (item) {
          setSelectedItem(item);
        }
      } else {
        setSelectedItem(null);
      }
    };
    
    // Initial check for direct URL access
    handleUrlChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleUrlChange);
    
    return () => window.removeEventListener('hashchange', handleUrlChange);
  }, []);

  // Handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item);
    window.location.hash = item.id;
  };

  // Handle closing the sheet
  const handleClose = () => {
    setSelectedItem(null);
    // we use history.pushState to remove the hash from the URL, without also reloading the page
    history.pushState("", document.title, window.location.pathname);
  };

  return (
    <section id="treatments" className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
    <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
      <h1 className="mb-5 text-left md:text-left">
        Conditions Treated
      </h1>
      {/* Add content for treatments here */}

      <div className="flex flex-wrap justify-left text-left">
        {medicalConditions.map((category, index) => (
          <div className="w-full mb-4" key={index}>
            {category.categoryName && (
              <h2 className="mb-2">{category.categoryName}</h2>
            )}
            {category.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-4">
                {section.sectionName && (
                  <h3 className="mb-2">{section.sectionName}</h3>
                )}
                {/* Mobile scroll view */}
                <div className="sm:hidden overflow-x-auto mx-[-32px]">
                  <div className="flex flex-nowrap px-[20px]">
                    {section.problems.map((condition) => (
                      <div className="flex-shrink-0 w-[300px] md:w-1/2 lg:w-1/3 p-2" key={condition.id}>
                        <TreatmentCard condition={condition} onSeeMore={(_) => handleItemClick(condition)} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop masonry grid */}
                <ResponsiveMasonry
                  columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4}}
                  gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
                  className="hidden sm:block"
                >
                  <Masonry>
                    {section.problems.map((condition, _) => (
                      <TreatmentCard condition={condition} onSeeMore={(_) => handleItemClick(condition)} key={condition.id} />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </div>
    {selectedItem && (
      <PopoverSheet 
        condition={selectedItem} 
        onClose={handleClose} 
      />
    )}
    </section>
  );
}

export default Treatments;