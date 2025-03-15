import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSwapHoriz, MdOutlineDone } from "react-icons/md";
import { AiOutlineUndo, AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";
import AccordionItem from "../components/Accordion";
import { BookOpen, Home, List, MoreHorizontal } from "lucide-react";
import BottomNavbar from "../components/BottomNavbar";
import Sidebar2 from "../components/Sidebar2";

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
  const [moreOpen, setMoreOpen] = useState(false);
  const [selected, setSelected] = useState("Aim");
  const [array, setArray] = useState([...initialArray]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [userMoves, setUserMoves] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [correctMoves, setCorrectMoves] = useState([]);

  const handleNext = () => {
    if (currentIndex < array.length - 2) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to start correctly
    }
  };
  const handleSwap = () => {
    if (currentIndex >= array.length - 1) return; // Prevent out-of-bounds swapping

    let arr = [...array];

    // Swap elements in the array
    [arr[currentIndex], arr[currentIndex + 1]] = [
      arr[currentIndex + 1],
      arr[currentIndex],
    ];

    setArray(arr); // Update state to reflect swap

  };

  const undoMove = () => {
    if (userMoves.length === 0) return; // No moves to undo
  
    let prevMoves = [...userMoves];
    let lastMove = prevMoves.pop(); // Get the last move
    let arr = [...array];
  
    // Undo the swap if it was a swap move
    if (lastMove.swapped) {
      [arr[lastMove.index], arr[lastMove.index + 1]] = [
        arr[lastMove.index + 1],
        arr[lastMove.index],
      ];
    }
  
    // Update state
    setUserMoves(prevMoves);
    setArray(arr);
    setCurrentIndex(lastMove.index); // Restore the previous index
    setPassIndex(lastMove.passIndex); // Restore the pass index if needed
  };
  
  const resetExercise = () => {
    setArray([...initialArray]);
    setUserMoves([]);
    setCurrentIndex(0);
    setPassIndex(0);
    setIsSubmitted(false);
    setFeedback(null);
    setCorrectMoves([]);
  };

  const handleSubmit = () => {
    const sortedArray = [...initialArray].sort((a, b) => a - b); // Correct sorted array
    const isCorrect = JSON.stringify(array) === JSON.stringify(sortedArray);

    setIsSubmitted(true);

    setFeedback({
      message: isCorrect
        ? "Congratulations! The array is sorted correctly."
        : "Incorrect! The final order is not correct.",
      type: isCorrect ? "success" : "error",
    });
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
                  <li className="cursor-pointer hover:text-[#085d90]">
                    <Link to="/">Home</Link>
                  </li>
      
                  <li className="cursor-pointer hover:text-[#085d90]">Rate Me</li>
                  <li className="cursor-pointer hover:text-[#085d90]">
                    Report a Bug
                  </li>
                  <li>
                    <Link
                      to="/exp/bubble-sort/practice"
                      className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
                    >
                      Practice
                    </Link>
                  </li>
                </ul>
                {/* Mobile Button */}
                <div className="md:hidden ml-auto">
                  <Link
                    to="/exp/bubble-sort/practice"
                    className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
                  >
                    Practice
                  </Link>
                </div>
              </div>
            </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-white md:bg-gray-100 py-8 mb-25  px-4 md:p-8 flex flex-col mt-12">
        <div
          className="w-full max-w-7xl flex gap-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* Sidebar */}
          <Sidebar2 setSelected={setSelected} selected={selected} />

          {/* Sorting Exercise */}
          <div className="bg-white  pb-10  rounded-2xl   p-6 sm:p-8 w-full max-w-3xl text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
              Bubble Sort Exercise
            </h1>
            {/* Instructions */}
            <div className="mb-6 text-sm sm:text-base text-gray-600 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Instructions</h2>
              
              <ul className="list-disc list-inside text-left">
              <li>
                Click on the <strong>Start</strong> button to start the
                exercise.
              </li>
                <li>
                  Click on <strong>Swap</strong> or <strong>Next</strong> to
                  perform these operations.
                </li>
                <li>
                  Click on <strong>Submit</strong> to check your result!
                </li>
                <li>
                  Click on <strong>Reset</strong> to start over with a new set
                  of numbers.
                </li>
              </ul>
            </div>

            {/* Question */}
            <div className="mb-4 text-lg sm:text-xl font-semibold text-gray-700">
              Question: Sort the given array using Bubble Sort.
            </div>

            {/* Bars Container */}
            <div className="flex justify-center items-end gap-3 mb-6 mt-15 h-64">
              {array.map((num, index) => (
                <motion.div
                  key={index}
                  layout
                  className={`w-10 sm:w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                    isSubmitted
                      ? correctMoves.includes(index)
                        ? "bg-green-500"
                        : "bg-red-500"
                      : index === currentIndex || index === currentIndex + 1
                      ? "bg-yellow-500"
                      : "bg-blue-700"
                  }`}
                  style={{ height: `${num * 3}px` }}
                >
                  {num}
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap  gap-3 sm:gap-4 mb-6 justify-center">

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
                onClick={resetExercise}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 justify-center"
              >
                <AiOutlineReload /> Reset
              </button>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md w-auto sm:w-auto"
            >
              Submit
            </button>
            </div>


            {/* Feedback */}
            {feedback && (
              <div
                className={`mt-4 text-lg font-semibold ${
                  feedback.type === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {feedback.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNavbar
        setSelected={setSelected}
        selected={selected}
        moreOpen={moreOpen}
        setMoreOpen={setMoreOpen}
        headingItemClass={headingItemClass}
        childItemClass={childItemClass}
      />
    </div>
  );
};

export default BubbleSortExercise;
