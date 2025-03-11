import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUndo, FaRedo, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccordionItem from "../components/Accordion";
import { BookOpen, Home, List, MoreHorizontal } from "lucide-react";

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
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white text-gray-700 py-2 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">
          <Link to="/exp/bubble-sort">
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
      <div className="min-h-screen bg-gray-100 flex  items-center mt-15 p-4 sm:p-6">
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
        <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
            Bubble Sort Practice
          </h1>

          {/* Instructions */}
          <div className="mb-6 text-sm sm:text-base text-gray-600 bg-blue-50 p-4 rounded-lg">
            <p>Sort the array using Bubble Sort:</p>
            <ul className="list-disc list-inside text-left">
              <li>
                Click "Swap" to swap highlighted elements if they are out of
                order.
              </li>
              <li>Click "Next" if no swap is needed.</li>
              <li>
                Use "Undo" to revert the last move, "Reset" to start over, and
                "Submit" to check your result.
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
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
        <button
          onClick={() => setSelected("Aim")}
          className={selected === "Aim" ? "text-[#085d90]" : "text-gray-700"}
        >
          <Home size={24} />
        </button>
        <Link to="./demo">
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
                  { text: "Demo", link: "./demo" },
                  { text: "Practice", link: "./practice" },
                  { text: "Exercise", link: "./exercise" },
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

export default BubbleSortPractice;
