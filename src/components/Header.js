import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = () => {
    setIsOpen(false);
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const sections = [
    {
        name: 'About Dr Lee',
        id: 'aboutme',
    },
    {
        name: 'Conditions Treated',
        id: 'treatments',
    },
    {
        name: 'Reviews',
        id: 'reviews',
    },
    {
        name: 'Contact',
        id: 'contactme',
    }
  ]

  return (
    <div>
    <header className="w-full bg-white shadow-md py-4 z-10">
      <nav className="lg:max-w-[70%] container mx-auto px-6">
        <div className="flex justify-between items-center">
          <img
            src="./assets/logo_extended.jpg"
            alt="Logo"
            className="h-12 w-auto"
          />

          {/* Desktop navigation */}
          <ul className="hidden sm:block flex justify-around items-center space-x-12">
            {sections.map((section) => (
              <li key={section.id}>
                <button 
                  onClick={() => scrollToSection(section.id)}
                  className="hover:text-blue-500 transition-colors"
                >
                  <h3>{section.name}</h3>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile navigation */}
          <div className="sm:hidden relative" ref={menuRef}>
            {/* Hamburger Button */}
            <button
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#FAF7ED] rounded-md shadow-lg py-1 z-10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                    onClick={() => {
                      handleOptionClick();
                      scrollToSection(section.id);
                    }}
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;