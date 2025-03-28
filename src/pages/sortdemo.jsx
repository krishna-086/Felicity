import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import SpeedSlider from "../components/slider";
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
const BubbleSortVisualizer = () => {
  const [array, setArray] = useState([29, 47, 17, 68, 49]);
  const [speed, setSpeed] = useState(500);
  const [isSorting, setIsSorting] = useState(false);
  const [observations, setObservations] = useState({
    comparisons: 0,
    swaps: 0,
    pass: 0,
    message: "",
  });

  const [comparing, setComparing] = useState(null);
  const [rating, setRating] = useState(0);
  const [selected, setSelected] = useState("Aim");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const bubbleSort = async () => {
    setIsSorting(true);
    let arr = [...array];
    let comparisons = 0;
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
      let swapped = false;
      for (let j = 0; j < arr.length - i - 1; j++) {
        comparisons++;
        setComparing([j, j + 1]);
        setObservations({
          comparisons,
          swaps,
          pass: i + 1,
          message: `Comparing ${arr[j]} and ${arr[j + 1]}...`,
        });
        await new Promise((resolve) => setTimeout(resolve, speed / 2));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swaps++;
          swapped = true;
          setObservations((prev) => ({
            ...prev,
            swaps,
            message: `Swapped ${arr[j + 1]} and ${arr[j]}`,
          }));
        } else {
          setObservations((prev) => ({ ...prev, message: `No swap needed` }));
        }
        setComparing(null);
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, speed / 2));
      }
      if (!swapped) break;
    }
    setIsSorting(false);
  };

  const generateRandomArray = () => {
    const arr = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 100)
    );
    setArray(arr);
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
      <div className="min-h-screen bg-white md:bg-gray-100 py-8 px-4 md:p-8 flex flex-col mt-12">
        <div
          className="w-full max-w-7xl flex gap-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {/* Sidebar */}
          <Sidebar2 setSelected={setSelected} selected={selected} />

        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-3xl text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Bubble Sort Visualizer
          </h1>
          {/* Instructions */}
          <div className="mb-6 text-sm sm:text-base text-gray-600 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Instructions</h2>
            
              <ul className="list-disc list-inside text-left">
                <li>
                Click on the <strong>Start</strong> button to start the
                demo.
                </li>
                <li>
                Move the slider to adjust the speed of the demo.
                </li>
                <li>
  Click on <strong>Randomize</strong> to generate a new set of numbers.
</li>
                <li>
                  Click on <strong>Reset</strong> button to start all over with a new set of random numbers!
                </li>
              </ul>
            </div>
          

          <div className="flex gap-2 mb-4 items-end h-52 md:h-60 justify-center">
            {array.map((num, index) => (
              <motion.div
                key={index}
                layout
                className={`w-10 md:w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                  comparing && comparing.includes(index)
                    ? "bg-yellow-500"
                    : "bg-blue-600"
                }`}
                style={{ height: `${num * 3}px` }}
              >
                {num}
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-4 justify-center">
            <button
              onClick={bubbleSort}
              disabled={isSorting}
              className={`px-4 py-2 md:px-6 md:py-2 rounded-lg font-medium shadow-md transition-all duration-200 bg-blue-500 text-white hover:bg-blue-600 ${
                isSorting && "cursor-not-allowed bg-gray-400"
              }`}
            >
              {isSorting ? "Sorting..." : "Start Sorting"}
            </button>
            <button
              onClick={() => setArray([29, 47, 17, 68, 49])}
              className="px-4 py-2 md:px-6 md:py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium shadow-md"
            >
              Reset
            </button>
            <button
              onClick={generateRandomArray}
              className="px-4 py-2 md:px-6 md:py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium shadow-md"
            >
              Randomize
            </button>
          </div>

          <div className="flex items-center gap-4 mb-6 justify-center w-full">
            <SpeedSlider speed={speed} setSpeed={setSpeed} />
          </div>

          <div className="bg-gray-100 shadow-md p-4 rounded-lg w-full border border-gray-300">
            <p>
              <strong>Comparisons:</strong> {observations.comparisons}
            </p>
            <p>
              <strong>Swaps:</strong> {observations.swaps}
            </p>
            <p>
              <strong>Passes Completed:</strong> {observations.pass}
            </p>
            <p className="text-gray-700 italic mt-2">{observations.message}</p>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Rate This Visualizer
            </h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`cursor-pointer text-2xl transition-all duration-200 ${
                    star <= rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
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

export default BubbleSortVisualizer;
