import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

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
                    {/* repeat this five times */}
                    {[...Array(5)].map((_, index) => (
                        <img 
                        src="/api/placeholder/200/200" 
                        alt="Sample" 
                        className="rounded-2xl shadow-lg mb-4 w-full sm:max-w-xs md:max-w-xs"
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