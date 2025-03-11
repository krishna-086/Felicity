import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSwapHoriz, MdOutlineDone } from "react-icons/md";
import { AiOutlineUndo, AiOutlineReload } from "react-icons/ai";
import { Link } from "react-router-dom";

const BubbleSortExercise = () => {
  const initialArray = [64, 38, 89, 46, 99, 96];
  const [array, setArray] = useState([...initialArray]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [userMoves, setUserMoves] = useState([]);
  const [iterations, setIterations] = useState(0);

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
      [arr[currentIndex], arr[currentIndex + 1]] = [arr[currentIndex + 1], arr[currentIndex]];
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
      [arr[lastMove.index], arr[lastMove.index + 1]] = [arr[lastMove.index + 1], arr[lastMove.index]];
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
        <Link
                to="/exp/bubble-sort"><img src="/logo.jpg" alt="Logo" className="h-12" /></Link>
          <ul className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
            <li className="cursor-pointer hover:text-[#085d90]">Home</li>
            <li className="cursor-pointer hover:text-[#085d90]">Rate Me</li>
            <li className="cursor-pointer hover:text-[#085d90]">Report a Bug</li>
            <li>
              <Link
                to="./practice"
                className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
              >
                Practice
              </Link>
            </li>
          </ul>
          {/* Mobile Button */}
          <div className="md:hidden ml-auto">
            <Link
              to="./practice"
              className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
            >
              Practice
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center p-6 pt-24">
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
    </div>
  );
};

export default BubbleSortExercise;
