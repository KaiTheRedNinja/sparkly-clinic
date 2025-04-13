import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import reviews from "../data/reviews.js";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full rounded-xl shadow-md bg-[#DAEBD6] overflow-hidden">
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
    <section id="reviews" className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
    <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative">
        <h1 className="mb-5 text-left">
          Reviews
        </h1>

        {/* Mobile scroll view */}
        <div className="sm:hidden overflow-x-auto mx-[-32px]">
          <div className="flex flex-nowrap px-[20px]">
            {reviews.map((review, index) => (
              <div className="flex-shrink-0 w-[300px] md:w-1/2 lg:w-1/3 p-2" key={index}>
                <ReviewCard review={review} />
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