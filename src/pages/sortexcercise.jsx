import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSwapHoriz, MdOutlineDone } from "react-icons/md";
import { AiOutlineUndo, AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import AccordionItem from "../components/Accordion";
import { BookOpen, Home, List, MoreHorizontal } from "lucide-react";


const childItemClass = (itemValue, selected) =>
  `cursor-pointer transition-transform duration-300 text-base px-2 py-1  ${
    selected === itemValue
      ? "text-[#085d90] font-bold" // Already bold when selected
      : "text-gray-700 hover:text-[#064a73] font-normal"
  }`;
  const headingItemClass = (itemValue, selected) =>
    `cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase ${
      selected === itemValue
        ? "font-bold text-[#085d90]" // Make selected top-level items bold
        : "font-medium text-gray-700 hover:text-[#064a73]"
    }`;
const BubbleSortExercise = () => {
  const initialArray = [64, 38, 89, 46, 99, 96];
  const [array, setArray] = useState([...initialArray]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [userMoves, setUserMoves] = useState([]);
  const [iterations, setIterations] = useState(0);
  const [selected, setSelected] = useState("Aim");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const handleNext = () => {
    if (iterations < array.length) {
      setIterations(iterations + 1);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= array.length - 2) {
        setCurrentIndex(0);
        setPassIndex(passIndex + 1);
      }
    }
  };

  const handleSwap = () => {
    let arr = [...array];
    let move = { index: currentIndex, swapped: false };

    if (arr[currentIndex] > arr[currentIndex + 1]) {
      [arr[currentIndex], arr[currentIndex + 1]] = [
        arr[currentIndex + 1],
        arr[currentIndex],
      ];
      move.swapped = true;
    }

    setUserMoves([...userMoves, move]);
    setArray(arr);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= array.length - 2) {
      setCurrentIndex(0);
      setPassIndex(passIndex + 1);
    }
  };

  const undoMove = () => {
    if (userMoves.length === 0) return;
    let prevMoves = [...userMoves];
    let lastMove = prevMoves.pop();
    let arr = [...array];

    if (lastMove.swapped) {
      [arr[lastMove.index], arr[lastMove.index + 1]] = [
        arr[lastMove.index + 1],
        arr[lastMove.index],
      ];
    }

    setUserMoves(prevMoves);
    setArray(arr);
    setCurrentIndex(lastMove.index);
  };

  const resetExercise = () => {
    setArray([...initialArray]);
    setUserMoves([]);
    setCurrentIndex(0);
    setPassIndex(0);
    setIterations(0);
  };

  const submitExercise = () => {
    console.log("Submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white text-gray-700 py-2 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.jpg" alt="Logo" className="h-12" />
          </Link>
          <ul className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
            <li className="cursor-pointer hover:text-[#085d90]">Home</li>
            <li className="cursor-pointer hover:text-[#085d90]">Rate Me</li>
            <li className="cursor-pointer hover:text-[#085d90]">
              Report a Bug
            </li>
            <li>
              <Link
                to="/exp/bubble-sort/demopractice"
                className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
              >
                Practice
              </Link>
            </li>
          </ul>
          {/* Mobile Button */}
          <div className="md:hidden ml-auto">
            <Link
              to="/exp/bubble-sort/demopractice"
              className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
            >
              Practice
            </Link>
          </div>
        </div>
      </nav>

      

      {/* Main Content */}
      <div className="flex  items-center p-6 pt-24">
      <div class="max-w-[40%] mr-30 bg-white shadow-lg rounded-xl p-4 h-full overflow-y-auto hidden md:block">
        <ul class="space-y-1">
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Aim
          </li>
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Overview
          </li>
          <div>
            <div class="flex justify-between items-center py-2 cursor-pointer text-base font-medium uppercase text-gray-700 hover:text-[#064a73] px-2">
              <span>Bubble Sort</span>
              <span>
                <i class="fas fa-chevron-up text-base"></i>
              </span>
            </div>
            <ul class="px-2 space-y-1">
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                Aim
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                Concept
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                Algorithm
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                <a
                  class="w-full h-full block"
                  href="/exp/bubble-sort/demo"
                  data-discover="true"
                >
                  Demo
                </a>
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                <a
                  class="w-full h-full block"
                  href="/exp/bubble-sort/practice"
                  data-discover="true"
                >
                  Practice
                </a>
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-gray-700 hover:text-[#064a73] font-normal">
                <a
                  class="w-full h-full block"
                  href="/exp/bubble-sort/exercise"
                  data-discover="true"
                >
                  Exercise
                </a>
              </li>
              <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1  text-[#085d90] font-bold">
                Quiz
              </li>
            </ul>
          </div>
          <div>
            <div class="flex justify-between items-center py-2 cursor-pointer text-base font-medium uppercase text-gray-700 hover:text-[#064a73] px-2">
              <span>Optimized Bubble Sort</span>
              <span>
                <i class="fas fa-chevron-down text-base"></i>
              </span>
            </div>
          </div>
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Code Assessment
          </li>
          <div>
            <div class="flex justify-between items-center py-2 cursor-pointer text-base font-medium uppercase text-gray-700 hover:text-[#064a73] px-2">
              <span>Analysis</span>
              <span>
                <i class="fas fa-chevron-down text-base"></i>
              </span>
            </div>
          </div>
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Posttest
          </li>
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Further Readings/References
          </li>
          <li class="cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase font-medium text-gray-700 hover:text-[#064a73]">
            Feedback
          </li>
        </ul>
      </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-3xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-20">
            Bubble Sort Exercise
          </h1>

          {/* Bars Container - Fixed Bottom Alignment */}
          <div className="flex justify-center items-end gap-2 mb-6 h-64">
            {array.map((num, index) => (
              <motion.div
                key={index}
                layout
                className={`w-10 sm:w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                  index === currentIndex || index === currentIndex + 1
                    ? "bg-yellow-500"
                    : "bg-blue-700"
                }`}
                style={{ height: `${num * 3}px` }} // Adjusted scaling for responsiveness
              >
                {num}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 justify-center"
            >
              <MdOutlineDone /> Next
            </button>
            <button
              onClick={handleSwap}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 justify-center"
            >
              <MdOutlineSwapHoriz /> Swap
            </button>
            <button
              onClick={undoMove}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 justify-center"
            >
              <AiOutlineUndo /> Undo
            </button>
            <button
              onClick={resetExercise}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 justify-center"
            >
              <AiOutlineReload /> Reset
            </button>
          </div>

          {/* Submit Button */}
          <button
            onClick={submitExercise}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </div>
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
        <button
          onClick={() => setSelected("Aim")}
          className={selected === "Aim" ? "text-[#085d90]" : "text-gray-700"}
        >
          <Link to="/exp/bubble-sort/">
                   <Home size={24} /> </Link>
        </button>
        <Link to="/exp/bubble-sort/demo">
          <button
            onClick={() => setSelected("Bubble Sort - Demo")}
            className={
              selected === "Bubble Sort - Demo"
                ? "text-[#085d90]"
                : "text-gray-700"
            }
          >
            <BookOpen size={24} />
          </button>
        </Link>
        <button
          onClick={() => setSelected("Bubble Sort - Quiz")}
          className={
            selected === "Bubble Sort - Quiz"
              ? "text-[#085d90]"
              : "text-gray-700"
          }
        >
          <List size={24} />
        </button>
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className="text-gray-700"
        >
          <MoreHorizontal size={24} />
        </button>
      </div>
      {/* More Options */}
      {moreOpen && (
        <div className="fixed bottom-16 left-0 right-0 bg-white shadow-lg border-t border-gray-300 p-4 md:hidden">
          <div className="w-full max-h-[70vh] overflow-y-auto">
            <ul className="space-y-2">
              {/* General Section */}
              <li
                className={headingItemClass("Aim", selected)}
                onClick={() => {
                  setSelected("Aim");
                  setMoreOpen(false);
                }}
              >
                Aim
              </li>
              <li
                className={headingItemClass("Overview", selected)}
                onClick={() => {
                  setSelected("Overview");
                  setMoreOpen(false);
                }}
              >
                Overview
              </li>

              {/* Bubble Sort Accordion */}
              <AccordionItem title="Bubble Sort">
                {[
                  { text: "Aim" },
                  { text: "Concept" },
                  { text: "Algorithm" },
                  { text: "Demo", link: "/exp/bubble-sort/demo" },
                  { text: "Practice", link: "/exp/bubble-sort/practice" },
                  { text: "Exercise", link: "/exp/bubble-sort/exercise" },
                  { text: "Quiz" },
                ].map(({ text, link }) => (
                  <li
                    key={text}
                    className={childItemClass(
                      `Bubble Sort - ${text}`,
                      selected
                    )}
                    onClick={() => {
                      setSelected(`Bubble Sort - ${text}`);
                      setMoreOpen(false);
                    }}
                  >
                    {link ? (
                      <Link to={link} className="w-full h-full block">
                        {text}
                      </Link>
                    ) : (
                      text
                    )}
                  </li>
                ))}
              </AccordionItem>

              {/* Optimized Bubble Sort Accordion */}
              <AccordionItem title="Optimized Bubble Sort">
                {[
                  "Optimized Bubble Sort - Aim",
                  "Optimized Bubble Sort - Optimization Technique",
                  "Optimized Bubble Sort - Demo",
                  "Optimized Bubble Sort - Practice",
                  "Optimized Bubble Sort - Exercise",
                  "Optimized Bubble Sort - Quiz",
                ].map((item) => (
                  <li
                    key={item}
                    className={childItemClass(item, selected)}
                    onClick={() => {
                      setSelected(item);
                      setMoreOpen(false);
                    }}
                  >
                    {item.split("- ")[1]}
                  </li>
                ))}
              </AccordionItem>

              {/* Other Items */}
              {[
                "Code Assessment",
                "Posttest",
                "Further Readings/References",
                "Feedback",
              ].map((item) => (
                <li
                  key={item}
                  className={headingItemClass(item, selected)}
                  onClick={() => {
                    setSelected(item);
                    setMoreOpen(false);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BubbleSortExercise;
