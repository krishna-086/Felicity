import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUndo, FaPlay, FaRedo, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const SortPractice= () => {
  const [array, setArray] = useState([29, 47, 17, 68, 49]);
  const [history, setHistory] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [comparing, setComparing] = useState(null);
  const [userSteps, setUserSteps] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  let correctSteps = [];
  let correctArray = [...array];
  
  const computeCorrectSteps = () => {
    correctSteps = [];
    for (let i = 0; i < correctArray.length; i++) {
      for (let j = 0; j < correctArray.length - i - 1; j++) {
        if (correctArray[j] > correctArray[j + 1]) {
          correctSteps.push({
            indices: [j, j + 1],
            action: "swap",
            newArray: [...correctArray],
          });
          [correctArray[j], correctArray[j + 1]] = [correctArray[j + 1], correctArray[j]];
        } else {
          correctSteps.push({
            indices: [j, j + 1],
            action: "continue",
            newArray: [...correctArray],
          });
        }
      }
    }
  };
  computeCorrectSteps();

  const handleUserAction = (action) => {
    if (currentStep >= correctSteps.length) return;
    
    const { indices, newArray, action: correctAction } = correctSteps[currentStep];
    setComparing(indices);
    
    let updatedUserSteps = [...userSteps, { indices, action }];
    setUserSteps(updatedUserSteps);

    if (action === correctAction) {
      setFeedback({ message: "Correct!", type: "success" });
      setHistory([...history, { array: [...newArray], indices, action }]);
      setArray([...newArray]);
    } else {
      setFeedback({ message: "Incorrect move!", type: "error" });
    }

    setCurrentStep(currentStep + 1);
    if (currentStep + 1 === correctSteps.length) {
      setIsCompleted(true);
    }
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    const lastStep = history.pop();
    setArray(lastStep.array);
    setCurrentStep(currentStep - 1);
    setUserSteps(userSteps.slice(0, -1));
    setFeedback(null);
  };

  const handleReset = () => {
    setArray([29, 47, 17, 68, 49]);
    setHistory([]);
    setUserSteps([]);
    setCurrentStep(0);
    setFeedback(null);
    setComparing(null);
    setIsCompleted(false);
  };

  return (
    <div className="min-h-screen  flex flex-col items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Bubble Sort Practice</h1>

        <div className="flex gap-2 mb-6 items-end h-60 justify-center">
          {array.map((num, index) => (
            <motion.div
              key={index}
              className={`w-12 text-center text-white font-bold p-2 rounded-md transition-all duration-300 ${
                comparing && comparing.includes(index) ? "bg-orange-500" : "bg-blue-700"
              }`}
              style={{ height: `${num * 3}px` }}
            >
              {num}
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4 mb-6 justify-center">
          <button onClick={() => handleUserAction("swap")} className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold shadow-md">
            Swap
          </button>
          <button onClick={() => handleUserAction("continue")} className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold shadow-md">
            Continue
          </button>
          <button onClick={handleUndo} className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2">
            <FaUndo /> Undo
          </button>
          <button onClick={handleReset} className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold shadow-md flex items-center gap-2">
            <FaRedo /> Reset
          </button>
        </div>

        {feedback && (
          <div className={`p-4 mb-4 rounded-md ${feedback.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
            {feedback.type === "success" ? <FaCheckCircle className="inline mr-2" /> : <FaTimesCircle className="inline mr-2" />} {feedback.message}
          </div>
        )}

        {isCompleted && (
          <div className="mt-6 p-4 bg-blue-200 text-blue-800 rounded-md">
            <FaCheckCircle className="inline mr-2" /> Exercise Completed! Well done!
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPractice;