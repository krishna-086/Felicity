import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const navLinks = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about-us" },
    { text: "Outreach Portal", link: "https://centraloutreach.vlabs.co.in/" },
    { text: "NMEICT", link: "http://www.nmeict.ac.in" },
    { text: "Contact Us", link: "/contact-us" },
  ];

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 max-w-full bg-white shadow-md z-50 px-5">
      <nav className="container mx-auto flex items-center justify-between px-2 py-4">

        <a href="./">
          <img
            src="https://centraloutreach.vlabs.co.in/images/logos/logo.png"
            alt="Logo"
            className="h-12 sm:h-14"
          />
        </a>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <a
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="relative text-gray-700 text-md uppercase transition-colors duration-200"
              >
                {item.text}
                <span className="absolute left-0 -bottom-[35px] w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="relative hidden md:flex items-center" ref={searchRef}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`transition-all duration-300 ease-in-out border rounded-full px-4 py-1 text-sm outline-none ${
              searchOpen ? "w-40 border-gray-400 opacity-100" : "w-0 border-transparent opacity-0"
            } focus:w-40 focus:opacity-100`}
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch className="text-lg" />
          </button>
        </div>

    
        <a
          href="https://vlabs.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
        >
          Virtual Labs
        </a>


        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700 font-medium">
            {navLinks.map((item, index) => (
              <li key={index} className="relative group">
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="relative text-gray-700 text-sm uppercase transition-colors duration-200"
                >
                  {item.text}
 
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-center py-4">
            <a
              href="https://vlabs.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-300"
            >
              Virtual Labs
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
