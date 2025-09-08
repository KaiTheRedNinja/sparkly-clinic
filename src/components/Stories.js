import React from 'react';

const story = [
  "Why SPARK?",
  "SPARK has an ARK in it, the work behind it was all due to what Noah’s parents had told me as they shared their diagnostic odyssey.",
  "According to my favorite author, a spark of electricity was created when the sperm enters the ovum and that is how a beautiful life is created.",
  "No matter how this beautiful life enfolds, we know that it will create a brilliance that will touch the lives of those who share it.",
  "In creating this brilliance, the spark will burn itself out, but we knew it was once there.",
  "With this SPARK, I hope that we can start the fire and pass it on to all who may find comfort in its warmth.",
  "Not every story has a fairy tale ending and we hope that by sharing our story, you will find the bravery to carry on.",
  "So, here’s our story…."
]

const ending = [
  "Yours truly",
  "Le Ye",
  "drlee.spark@gmail.com",
  "Medical Director",
  "SPARK Pte Ltd"
]

const ExternalLinkCard = ({ title, url }) => {
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      className="roundedHoverBox bg-[#DAEBD6] py-3 px-5 flex items-center cursor-pointer w-fit"
    >
      <h3>{title}</h3>
      <img src="./assets/openExternal.svg" alt="Open External Link" className="ml-2 text-gray-600" />
    </a>
  );
}

const Stories = () => {
  return (
    <section id="stories" className="w-full bg-[#FAF7ED] py-8 px-4 md:py-16 md:px-8">
    <div className="p-4 lg:max-w-[70%] mx-auto">
      <div className="relative text-left">
        <h1 className="mb-5 text-left">
          Stories
        </h1>

        {/* Story */}
        {story.map((line, index) => (
          <p key={index} className="mb-4 font-serif">
            {line}
          </p>
        ))}

        {/* Spacer */}
        <div className="h-5"/>
        
        {/* Ending */}
        {ending.map((line, index) => (
          <p key={index} className="font-serif italic">
            {line}
          </p>
        ))}

        {/* Spacer */}
        <div className="h-5"/>

        {/* External Links */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <ExternalLinkCard 
            title="The Boy who Teaches" 
            url="/pdfs/What a Difference a Doc makes.pdf"
          />
          <ExternalLinkCard 
            title="The Girl who Teaches me Hope" 
            url="https://debbiecorner.wordpress.com"
          />
          <ExternalLinkCard 
            title="The Boy who Loves" 
            url="/pdfs/The boy who loves.pdf"
          />
        </div>
      </div>
    </div>
    </section>
  );
}

export default Stories;