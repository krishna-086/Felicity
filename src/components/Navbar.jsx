import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

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
    <header className="fixed top-0 w-full bg-white shadow-md z-50 px-5 animate-[slideIn_0.6s_ease-out]">
      <nav className="container mx-auto flex items-center justify-between px-2 py-4">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src="/logo.jpg" alt="Logo" className="h-10 sm:h-14" />
          </Link>
          <div className="hidden sm:block text-xs sm:text-sm md:text-base">
            <div className="font-semibold">An Initiative of</div>
            <div className="font-semibold">
              Ministry of Education
              <br />
              <span className="font-normal">
                Under the National Mission on Education through{" "}
                <span className="text-red-500">ICT</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              {item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 text-md uppercase transition-colors duration-200"
                >
                  {item.text}
                  <span className="absolute left-0 -bottom-[5px] w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="relative text-gray-700 text-md uppercase transition-colors duration-200"
                >
                  {item.text}
                  <span className="absolute left-0 -bottom-[5px] w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Search (Hidden on Mobile) */}
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

        {/* Virtual Labs Button (Desktop) */}
        <Link
          to="/virtuallabs"
          className="hidden lg:inline-block bg-[#085d90] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:bg-[#064a73] hover:scale-105 hover:shadow-lg"
        >
          Virtual Labs
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-out bg-white shadow-md ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              {item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-gray-700 text-sm uppercase transition-colors duration-200"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="relative text-gray-700 text-sm uppercase transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Virtual Labs Button (Mobile) */}
        <Link
          to="/virtuallabs"
          className="bg-[#085d90] text-white w-[70%] mx-auto px-4 py-2 rounded-md text-sm font-medium hover:bg-[#064a73] transition duration-300 block text-center mt-4"
          onClick={() => setIsOpen(false)}
        >
          Virtual Labs
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
