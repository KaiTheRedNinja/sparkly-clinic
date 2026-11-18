import React from 'react';

const Footer = () => {
  return (
    <div className="w-full p-6 text-left bg-white">
      <div className="lg:max-w-[70%] mx-auto">
        {/* Header - "SPARK" with no icon */}
        <div className="flex mb-4">
          <div className="w-8"></div> {/* Empty space for icon alignment */}
          <h3 className="ml-4">SPARK @ Petite Practice Holland</h3>
        </div>

        {/* Address with pin emoji and gray square */}
        <div className="flex items-start w-full mb-3 space-x-4">
          <div className="w-8 text-center pt-1 select-none cursor-default">📍</div>
          <a href="https://maps.app.goo.gl/hLWR4Xpqe2BHERkR9" target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">
            <p>271 Holland Ave</p>
            <p>Singapore 278991</p>
          </a>
          {/* <div>
            <img
              src="./assets/logos/mountAlogo.png"
              alt="Mount Alvernia Hospital Logo"
              className="h-16 rounded-lg ml-4 cursor-pointer"
            />
          </div> */}
        </div>

        {/* Email with letter emoji */}
        <div className="flex items-center mb-3">
          <div className="w-8 text-center select-none cursor-default">💌</div>
          <a href='mailto:enquires.holland@petitepractice.com' target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">
            <p>enquires.holland@petitepractice.com</p>
          </a>
        </div>

        {/* Whatsapp number with chat icon */}
        <div className="flex items-center mb-3">
          <img
            src="./assets/whatsapp.png"
            alt="WhatsApp"
            className="w-6 h-6 ml-1 cursor-default" // Adjusted size for better alignment
          />
          <a href='https://wa.me/6580964871' target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">
            <p>+65 8096 4871</p>
          </a>
        </div>

        {/* Phone number with phone icon */}
        <div className="flex items-center mb-3">
        <div className="w-8 text-center select-none cursor-default">☎️</div>
          <a href='tel:+6567300963' target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:underline">
            <p>+65 6730 0963</p>
          </a>
        </div>

        {/* Clinic hours with clock icon */}
        <div className="flex items-center mb-3">
          <div className="w-8 text-center select-none cursor-default">🕒</div>
          <div className="ml-4">
            <p>Clinic hours: Appointments only, Thursdays off</p>
          </div>
        </div>

        {/* Note with clock icon */}
        <div className="flex items-center">
          <div className="w-8 text-center select-none cursor-default">📝</div>
          <div className="ml-4">
            <p>Note: Surcharge for appointments on Saturdays AM.</p>
            <p>Strictly by appointment, no walk-in</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;