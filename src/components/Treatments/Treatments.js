import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import medicalConditions from "../../data/medicalConditions.js";

const TreatmentCard = ({ condition, onSeeMore }) => {
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
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const [windowWidth, setWindowWidth] = React.useState(isMobile ? 0 : 1000);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileView = windowWidth < 768;

  return (
    <section className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
    <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
      <h1 className="mb-2 text-left md:text-left">
          Services and Treatments
      </h1>
      {/* Add content for treatments here */}
      {isMobileView ? (
          <div className="overflow-x-auto mx-[-32px]">
            <div className="flex flex-nowrap px-[20px]">
              {medicalConditions.map((condition) => (
                <div className="flex-shrink-0 w-[300px] md:w-1/2 lg:w-1/3 p-2" key={condition.id}>
                  <TreatmentCard condition={condition} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 600: 2, 900: 3, 1200: 4}}
            gutterBreakpoints={{350: "12px", 750: "16px", 900: "24px"}}
          >
            <Masonry>
              {medicalConditions.map((condition, _) => (
                <TreatmentCard condition={condition} onSeeMore={(id) => console.log(`See more about condition with id: ${id}`)} key={condition.id} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </div>
    </div>
    </section>
  );
}

export default Treatments;