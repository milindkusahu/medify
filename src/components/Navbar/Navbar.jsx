import React, { useState } from "react";
import Button from "../../components/Button/Button";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Navbar() {
  // State to manage the mobile menu's open/closed status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top banner */}
      <div className="bg-[#2AA8FF] text-white text-center py-2 text-sm">
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </div>
      <nav className="py-4 relative">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo and brand name */}
          <a
            href="/"
            className="flex items-center text-[#2AA8FF] font-bold text-2xl"
          >
            <img src="/logo.png" alt="Medify Logo" height="28px" width="93px" />
          </a>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6 ml-auto">
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Find Doctors
            </a>
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Hospitals
            </a>
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Medicines
            </a>
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Surgeries
            </a>
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Software for Provider
            </a>
            <a
              className="text-gray-700 font-normal hover:text-[#2AA8FF]"
              href="#"
            >
              Facilities
            </a>
            <Button>My Bookings</Button>
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-[#2AA8FF]" onClick={toggleMenu}>
            <span
              className={`block w-6 h-0.5 bg-current mb-1 ${
                isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current mb-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current ${
                isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-[#E6F4FF] transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden md:hidden`}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              className="text-gray-700 font-extrabold hover:text-[#2AA8FF]"
              href="#"
            >
              Find Doctors
            </a>
            <a className="text-gray-700 hover:text-[#2AA8FF]" href="#">
              Hospitals
            </a>
            <a className="text-gray-700 hover:text-[#2AA8FF]" href="#">
              Medicines
            </a>
            <a className="text-gray-700 hover:text-[#2AA8FF]" href="#">
              Surgeries
            </a>
            <a className="text-gray-700 hover:text-[#2AA8FF]" href="#">
              Software for Provider
            </a>
            <a className="text-gray-700 hover:text-[#2AA8FF]" href="#">
              Facilities
            </a>
            <Button>Search</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
