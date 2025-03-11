import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSwapHoriz, MdOutlineDone } from "react-icons/md";
import { AiOutlineUndo, AiOutlineReload } from "react-icons/ai";

const BubbleSortExercise = () => {
  const initialArray = [3, 3, 9, 7, 6, 3, 2, 5, 4, 6, 5, 5];
  const [array, setArray] = useState([...initialArray]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [passIndex, setPassIndex] = useState(0);
  const [userMoves, setUserMoves] = useState([]);
  const [iterations, setIterations] = useState(0);

  const handleNext = () => {
    if (iterations < 6) {
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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-3xl text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">Bubble Sort Exercise</h1>

        <div className="flex flex-wrap gap-2 mb-6 items-end justify-center">
          {array.map((num, index) => (
            <motion.div
              key={index}
              layout
              className={`w-10 sm:w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                index === currentIndex || index === currentIndex + 1 ? "bg-yellow-500" : "bg-blue-700"
              }`}
              style={{ height: `${num * 10}px` }}
            >
              {num}
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 justify-center">
          <button
            onClick={handleNext}
            className="px-4 sm:px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <MdOutlineDone /> Next
          </button>
          <button
            onClick={handleSwap}
            className="px-4 sm:px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2"
          >
            <MdOutlineSwapHoriz /> Swap
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
      </div>
    </div>
  );
};

export default BubbleSortExercise;
