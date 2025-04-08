
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
        id: 'contact',
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
          <ul className="flex justify-around items-center space-x-12">
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
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;