import React, { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    // 'Services',
    "Works",
    "Resume",
    "Skills",
    "Contact",
  ];

  // Prevent body scroll when menu is open (optional)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A1A]/90 text-white py-4 px-4 sm:px-6 md:px-8 shadow-md backdrop-blur-sm scroll-smooth">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-[#6C5CE7] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
            G
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 font-primary font-medium text-sm lg:text-base">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#6C5CE7] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call Now Button (Desktop) */}
        <button className="hidden md:flex items-center bg-[#6C5CE7] text-white px-4 py-2 lg:px-5 rounded-full font-semibold font-primary hover:bg-[#5a4ed1] transition text-sm lg:text-base">
          <Phone className="w-4 h-4 mr-2" />
          Call Now
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 font-primary px-4 space-y-5 text-center">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-white font-medium text-base hover:text-[#6C5CE7] transition"
            >
              {item}
            </a>
          ))}

          <button className="w-full mt-4 flex items-center justify-center bg-[#6C5CE7] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#5a4ed1] transition">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
