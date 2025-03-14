import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Function to handle Virtual Labs button click
  const handleVirtualLabsClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/"); // Navigate to homepage first
      setTimeout(() => {
        const target = document.getElementById("virtuallabs");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Delay to ensure the page has loaded
    } else {
      const target = document.getElementById("virtuallabs");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.header
      className="fixed top-0 w-full bg-white shadow-md z-50 px-5"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex items-center justify-between px-2 py-4">
        {/* Logo & Title */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-3 text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              className="relative group transition-all"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="relative text-gray-700 text-md uppercase px-3 py-2 transition-all duration-300"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  onClick={() => setIsOpen(false)}
                  className="relative text-gray-700 text-md uppercase px-3 py-2 transition-all duration-300"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              )}
            </motion.li>
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
        <motion.button
          onClick={handleVirtualLabsClick}
          className="hidden lg:inline-block bg-[#085d90] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:bg-[#064a73] hover:scale-105 hover:shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Virtual Labs
        </motion.button>

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
      <motion.div
        className={`lg:hidden flex flex-col items-center  transition-all duration-500 ease-out bg-white  ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="flex flex-col items-center space-y-4 text-gray-700 font-medium">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              {item.link.startsWith("http") ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="relative text-gray-700 text-sm uppercase px-4 py-2 transition-all duration-300"
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ) : (
                <Link
                  to={item.link}
                  className="relative text-gray-700 text-sm uppercase px-4 py-2 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
                
                
              )}
            </li>
          ))}

        </ul>
        <motion.button
          onClick={handleVirtualLabsClick}
          className="mt-4 lg:hidden bg-[#085d90] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:bg-[#064a73] hover:scale-105 hover:shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Virtual Labs
        </motion.button>
        
      </motion.div>
      
    </motion.header>
  );
};

export default Navbar;
