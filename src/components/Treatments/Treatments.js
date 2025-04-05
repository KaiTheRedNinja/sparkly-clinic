import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Card = ({ title, body, image, altText }) => {
    return (
      <div className="w-full rounded-lg shadow-md bg-[#DAEBD6] overflow-hidden">
        {image && (
          <div className="w-full bg-white">
            <img 
              src={image || "/api/placeholder/320/180"} 
              alt={altText || "Card image"} 
              className="w-full h-40 object-cover"
            />
          </div>
        )}
        <div className="p-4 text-left">
          <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{body}</p>
          <p className="text-gray-500 underline cursor-pointer">See more</p>
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
                    {[...Array(20)].map((_, index) => (
                        <Card
                            title="Beautiful Mountains"
                            body="Explore the majestic mountain landscapes that will take your breath away."
                            image={index%2 == 0 ? "/api/placeholder/320/180" : ""}
                            altText="Mountain landscape"
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
        </div>
        </section>
    );
}

export default Treatments;