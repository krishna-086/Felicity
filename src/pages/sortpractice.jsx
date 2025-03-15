import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUndo, FaRedo, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccordionItem from "../components/Accordion";
import { BookOpen, Home, List, MoreHorizontal } from "lucide-react";
import Sidebar2 from "../components/Sidebar2";
import BottomNavbar from "../components/BottomNavbar";

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
const BubbleSortPractice = () => {
  const initialArray = [29, 47, 17, 68, 49]; // Typical array from Virtual Labs
  const [array, setArray] = useState([...initialArray]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [comparing, setComparing] = useState([0, 1]);
  const [history, setHistory] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [selected, setSelected] = useState("Aim");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const headingItemClass = (itemValue, selected) =>
    `cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase ${
      selected === itemValue
        ? "font-bold text-[#085d90]" // Make selected top-level items bold
        : "font-medium text-gray-700 hover:text-[#064a73]"
    }`;

  useEffect(() => {
    if (currentIndex < array.length - 1 - passIndex) {
      setComparing([currentIndex, currentIndex + 1]);
    }
    const isSorted = array.every(
      (num, idx) => idx === 0 || num >= array[idx - 1]
    );
    setIsComplete(isSorted && passIndex >= array.length - 1);
  }, [array, currentIndex, passIndex]);

  const handleSwap = () => {
    if (isComplete || isSubmitted) return;

    const arr = [...array];
    const shouldSwap = arr[currentIndex] > arr[currentIndex + 1];

    if (shouldSwap) {
      [arr[currentIndex], arr[currentIndex + 1]] = [
        arr[currentIndex + 1],
        arr[currentIndex],
      ];
      setArray(arr);
      setHistory([
        ...history,
        {
          array: [...array],
          indices: [currentIndex, currentIndex + 1],
          action: "swap",
        },
      ]);
      setFeedback({ message: "Correct! Elements swapped.", type: "success" });
      moveToNext();
    } else {
      setFeedback({
        message: "Incorrect! No swap needed here.",
        type: "error",
      });
    }

    setTimeout(() => setFeedback(null), 2000);
  };

  const handleNext = () => {
    if (isComplete || isSubmitted) return;

    const arr = [...array];
    const shouldSwap = arr[currentIndex] > arr[currentIndex + 1];

    if (!shouldSwap) {
      setHistory([
        ...history,
        {
          array: [...array],
          indices: [currentIndex, currentIndex + 1],
          action: "next",
        },
      ]);
      setFeedback({ message: "Correct! No swap needed.", type: "success" });
      moveToNext();
    } else {
      setFeedback({
        message: "Incorrect! These elements should be swapped.",
        type: "error",
      });
    }

    setTimeout(() => setFeedback(null), 2000);
  };

  const moveToNext = () => {
    if (currentIndex < array.length - 2 - passIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setPassIndex(passIndex + 1);
      setCurrentIndex(0);
    }
  };

  const handleUndo = () => {
    if (history.length === 0 || isSubmitted) return;

    const lastMove = history[history.length - 1];
    setArray([...lastMove.array]);
    setHistory(history.slice(0, -1));
    setFeedback(null);

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (passIndex > 0) {
      setPassIndex(passIndex - 1);
      setCurrentIndex(array.length - 2 - passIndex);
    }
  };

  const handleReset = () => {
    setArray([...initialArray]);
    setCurrentIndex(0);
    setPassIndex(0);
    setComparing([0, 1]);
    setHistory([]);
    setIsComplete(false);
    setIsSubmitted(false);
    setFeedback(null);
  };

  const handleSubmit = () => {
    const sortedArray = [...initialArray].sort((a, b) => a - b);
    const isCorrect = JSON.stringify(array) === JSON.stringify(sortedArray);
    setIsSubmitted(true);
    setFeedback({
      message: isCorrect
        ? "Congratulations! Array sorted correctly."
        : "Incorrect! Array not sorted.",
      type: isCorrect ? "success" : "error",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 mb-30">
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

      {/* <div className="min-h-screen bg-gray-100 flex  items-center mt-15 mb-12 p-4 sm:p-6"> */}
      <div className="min-h-screen bg-white md:bg-gray-100 py-8 px-4 md:p-8 flex flex-col mt-12">
        <div
          className="w-full max-w-7xl flex gap-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* Sidebar */}
          <Sidebar2 setSelected={setSelected} selected={selected} />
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-4xl text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
              Bubble Sort Practice
            </h1>

            {/* Instructions */}
            <div className="mb-6 text-sm sm:text-base text-gray-600 bg-blue-50 p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
                Instructions
              </h2>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>
                  Click <strong>"Swap"</strong> to swap the highlighted elements
                  if they are out of order.
                </li>
                <li>
                  Click <strong>"Next"</strong> if no swap is needed.
                </li>
                <li>
                  Use <strong>"Undo"</strong> to revert the last move.
                </li>
                <li>
                  Click <strong>"Reset"</strong> to start over
                </li>
                <li>
                  {" "}
                  <strong>"Submit"</strong> to check your result.
                </li>
              </ul>
            </div>

            {/* Progress */}
            <div className="mb-4 text-sm sm:text-base text-gray-600">
              <p>
                Pass: {passIndex + 1} of {array.length - 1}
              </p>
              <p>
                Comparing:{" "}
                <span className="font-semibold">{array[comparing[0]]}</span> vs{" "}
                <span className="font-semibold">{array[comparing[1]]}</span>
              </p>
            </div>

            {/* Array Visualization */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 items-end justify-center h-64">
              {array.map((num, index) => (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`w-10 sm:w-12 md:w-14 flex items-center justify-center text-white font-bold p-2 rounded-md shadow-md transition-all duration-300 ${
                    comparing.includes(index) && !isSubmitted
                      ? "bg-orange-500 ring-2 ring-orange-300"
                      : isSubmitted && feedback?.type === "success"
                      ? "bg-green-500"
                      : isSubmitted && feedback?.type === "error"
                      ? "bg-red-500"
                      : "bg-blue-700"
                  }`}
                  style={{ height: `${num * 3}px`, minWidth: "40px" }}
                >
                  {num}
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSwap}
                disabled={isComplete || isSubmitted}
                className="px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg font-semibold shadow-md text-sm sm:text-base"
              >
                Swap
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={isComplete || isSubmitted}
                className="px-4 sm:px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg font-semibold shadow-md text-sm sm:text-base"
              >
                Next
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUndo}
                disabled={history.length === 0 || isSubmitted}
                className="px-4 sm:px-6 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 text-sm sm:text-base"
              >
                <FaUndo /> Undo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="px-4 sm:px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold shadow-md flex items-center gap-2 text-sm sm:text-base"
              >
                <FaRedo /> Reset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={isSubmitted}
                className="px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white rounded-lg font-semibold shadow-md text-sm sm:text-base"
              >
                Submit
              </motion.button>
            </div>

            {/* Feedback */}
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className={`p-4 rounded-md flex items-center justify-center gap-2 ${
                  feedback.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {feedback.type === "success" ? (
                  <FaCheckCircle />
                ) : (
                  <FaTimesCircle />
                )}
                {feedback.message}
              </motion.div>
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

export default BubbleSortPractice;
