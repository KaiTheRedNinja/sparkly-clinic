import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import reviews from "../../data/reviews.js";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full rounded-lg shadow-md bg-[#FAF7ED] overflow-hidden">
      {review.imagePath && (
        <div className="w-full bg-white">
          <img 
            src={review.imagePath} 
            alt={`Review picture, see below for text`} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      <div className="p-4 text-left">
        <p className="text-gray-600">"{review.reviewText}"</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="w-full bg-[#DAEBD6] py-8 px-4 md:py-16 md:px-8">
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
          {reviews.map((review, index) => (
            <ReviewCard review={review} key={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      </div>
    </div>
    </section>
  );
}

export default Reviews;