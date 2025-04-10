import React from 'react';

const Footer = () => {
  return (
    <div className="w-full p-6 text-left bg-white">
      <div className="lg:max-w-[70%] mx-auto">
        {/* Header - "SPARK" with no icon */}
        <div className="flex mb-4">
          <div className="w-8"></div> {/* Empty space for icon alignment */}
          <h3 className="ml-4">SPARK</h3>
        </div>

        {/* Address with pin emoji and gray square */}
        <div className="flex items-start mb-3" onClick={() => window.open('https://maps.app.goo.gl/omKfaqHqrSPN3oFR8', '_blank')}>
          <div className="w-8 text-center pt-1 select-none cursor-pointer">📍</div>
          <div className="ml-4 flex-1">
            <p>Level 2, Health Screening Centre</p>
            <p>St. Anne Mother and Child Centre</p>
            <p>820 Thomson Road S574623</p>
          </div>
        </div>

        {/* Email with letter emoji */}
        <div className="flex items-center mb-3" onClick={() => window.open('mailto:hsc@mtalvernia.sg', '_blank')}>
          <div className="w-8 text-center select-none cursor-pointer">💌</div>
          <div className="ml-4 text-blue-500">
            <p>hsc@mtalvernia.sg</p>
          </div>
        </div>

        {/* Whatsapp number with chat icon */}
        <div className="flex items-center mb-3" onClick={() => window.open('https://wa.me/6598191303', '_blank')}>
          <img
            src="./assets/whatsapp.png"
            alt="WhatsApp"
            className="w-6 h-6 ml-1 cursor-pointer" // Adjusted size for better alignment
          />
          <div className="ml-4 text-blue-500">
            <p>+65 9819 1303</p>
          </div>
        </div>

        {/* Phone number with phone icon */}
        <div className="flex items-center mb-3" onClick={() => window.open('tel:+6562476215', '_blank')}>
        <div className="w-8 text-center select-none cursor-pointer">☎️</div>
          <div className="ml-4 text-blue-500">
            <p>+65 6247 6215</p>
          </div>
        </div>

        {/* Fax number with fax icon */}
        <div className="flex items-center mb-8" title="Fax"> {/* Added mb-6 for vertical space */}
        <div className="w-8 text-center select-none cursor-default">📠</div>
          <div className="ml-4">
            <p>+65 6250 6481 (for fax)</p>
          </div>
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