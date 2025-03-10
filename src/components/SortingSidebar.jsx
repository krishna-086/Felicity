import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSort, FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineFlag, MdPlayArrow, MdSchool, MdFitnessCenter } from "react-icons/md";

const SortingSidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (sortType) => {
    setActiveDropdown(activeDropdown === sortType ? null : sortType);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("overflow-hidden", isMenuOpen); // Prevents horizontal scrolling
  };

  const sectionIcons = {
    Aim: <MdOutlineFlag className="text-white" />,
    Objective: <MdSchool className="text-white" />,
    Demo: <MdPlayArrow className="text-white" />,
    Practice: <MdFitnessCenter className="text-white" />,
    Exercise: <MdFitnessCenter className="text-white" />,
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button
        className="fixed top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-md shadow-lg md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[80vw] max-w-[280px] bg-gray-900 text-white p-4 shadow-2xl transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2 text-white">
          <FaSort /> Sorting Options
        </h2>

        <div className="overflow-y-auto max-h-[75vh] pr-2 text-white">
          {["Bubble Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort"].map(
            (sortType) => (
              <div key={sortType} className="mb-1">
                {/* Dropdown Button */}
                <button
                  onClick={() => toggleDropdown(sortType)}
                  className="w-full flex justify-between items-center text-left bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-all text-sm text-white"
                >
                  {sortType}
                  {activeDropdown === sortType ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {/* Dropdown Content */}
                {activeDropdown === sortType && (
                  <div className="mt-1 bg-gray-800 p-2 rounded-md shadow-md animate-fade-in text-white">
                    {["Aim", "Objective", "Demo", "Practice", "Exercise"].map((section) => (
                      <button
                        key={section}
                        className="block w-full text-left p-2  items-center gap-2 hover:bg-gray-700 rounded transition-all text-sm text-white"
                        onClick={() =>
                          navigate(`/${sortType.toLowerCase().replace(" ", "-")}/${section.toLowerCase()}`)
                        }
                      >
                        {sectionIcons[section]} {section}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {/* {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )} */}
    </div>
  );
};

export default SortingSidebar;
