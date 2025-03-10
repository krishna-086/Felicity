import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { MdOutlineSwapHoriz, MdOutlineDone } from "react-icons/md";
import { AiOutlineUndo, AiOutlineReload } from "react-icons/ai";

const BubbleSortExercise = () => {
  const [array, setArray] = useState([29, 47, 17, 68, 49]);
  const [userMoves, setUserMoves] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [comparing, setComparing] = useState([0, 1]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (currentIndex < array.length - 1) {
      setComparing([currentIndex, currentIndex + 1]);
    }
  }, [currentIndex]);

  const handleMove = (action) => {
    if (passIndex >= array.length - 1) return;
    let arr = [...array];
    let move = { index: currentIndex, action };

    if (action === "swap" && arr[currentIndex] > arr[currentIndex + 1]) {
      [arr[currentIndex], arr[currentIndex + 1]] = [arr[currentIndex + 1], arr[currentIndex]];
    }

    setUserMoves([...userMoves, move]);
    setArray(arr);
    setCurrentIndex(currentIndex + 1);

    if (currentIndex === array.length - 2) {
      setPassIndex(passIndex + 1);
      setCurrentIndex(0);
    }
  };

  const undoMove = () => {
    if (userMoves.length === 0) return;
    let prevMoves = [...userMoves];
    let lastMove = prevMoves.pop();
    let arr = [...array];
    if (lastMove.action === "swap") {
      [arr[lastMove.index], arr[lastMove.index + 1]] = [arr[lastMove.index + 1], arr[lastMove.index]];
    }
    setUserMoves(prevMoves);
    setArray(arr);
    setCurrentIndex(lastMove.index);
  };

  const submitExercise = () => {
    const sortedArray = [...array].sort((a, b) => a - b);
    setIsCorrect(JSON.stringify(array) === JSON.stringify(sortedArray));
    setIsSubmitted(true);
  };

  const resetExercise = () => {
    setArray([29, 47, 17, 68, 49]);
    setUserMoves([]);
    setCurrentIndex(0);
    setPassIndex(0);
    setComparing([0, 1]);
    setIsSubmitted(false);
    setIsCorrect(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 sm:p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">Bubble Sort Exercise</h1>

        <div className="flex flex-wrap gap-2 mb-6 items-end justify-center">
          {array.map((num, index) => (
            <motion.div
              key={index}
              layout
              className={`w-10 sm:w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                comparing.includes(index) ? "bg-yellow-500" : "bg-blue-700"
              }`}
              style={{ height: `${num * 2.5}px` }}
            >
              {num}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 justify-center">
          <button
            onClick={() => handleMove("swap")}
            className="px-4 sm:px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <MdOutlineSwapHoriz /> Swap
          </button>
          <button
            onClick={() => handleMove("continue")}
            className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <MdOutlineDone /> Continue
          </button>
          <button
            onClick={undoMove}
            className="px-4 sm:px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <AiOutlineUndo /> Undo
          </button>
          <button
            onClick={resetExercise}
            className="px-4 sm:px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <AiOutlineReload /> Reset
          </button>
        </div>

        <button
          onClick={submitExercise}
          className="px-4 sm:px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md"
        >
          Submit
        </button>

        {isSubmitted && (
          <div className="mt-6 bg-gray-100 shadow-md p-4 rounded-lg w-full border border-gray-300">
            {isCorrect ? (
              <p className="text-green-600 font-bold">Great job! You sorted the array correctly.</p>
            ) : (
              <p className="text-red-600 font-bold">Sorry, your sorting was incorrect.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BubbleSortExercise;
