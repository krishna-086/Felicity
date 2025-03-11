import React, { useState } from "react";

const QuizApp = () => {
  const [difficulty, setDifficulty] = useState({
    beginner: true,
    intermediate: true,
    advanced: true,
  });
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const correctAnswers = {
    q1: "d", // Correct answer for question 1
    q2: "a", // Correct answer for question 2
    q3: "c", // Correct answer for question 3
  };

  const handleCheckboxChange = (level) => {
    setDifficulty((prev) => ({ ...prev, [level]: !prev[level] }));
  };

  const handleAnswerChange = (q, answer) => {
    setAnswers((prev) => ({ ...prev, [q]: answer }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    Object.keys(correctAnswers).forEach((q) => {
      if (answers[q] === correctAnswers[q]) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    calculateScore();
  };

  const checkAnswer = (q, correctAnswer, option) => {
    if (submitted && answers[q]) {
      if (answers[q] === option && option === correctAnswer) {
        return "bg-green-400 text-white"; // Correct answer
      } else if (answers[q] === option && option !== correctAnswer) {
        return "bg-red-400 text-white"; // Wrong answer
      }
    }
    return ""; // Default styling for unanswered/other options
  };

  return (
    <div className="quiz-app  mt-2 md:p-6 w-full max-w-4xl mx-auto ">
    <div className="px-5">
      <h2 className="text-l md:text-2xl font-bold mb-2 md:mb-4 ">
        Choose Difficulty:
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-4 md:mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={difficulty.beginner}
            onChange={() => handleCheckboxChange("beginner")}
            className="mr-2"
          />
          Beginner
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={difficulty.intermediate}
            onChange={() => handleCheckboxChange("intermediate")}
            className="mr-2"
          />
          Intermediate
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={difficulty.advanced}
            onChange={() => handleCheckboxChange("advanced")}
            className="mr-2"
          />
          Advanced
        </label>
      </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {difficulty.intermediate && (
          <div className="question p-3 md:p-4 border rounded-lg bg-blue-50">
            <p className="font-semibold mb-2 text-sm md:text-base">
              1. Which of the following statements is true (assume ascending
              sort order)?
            </p>
            <label className={`block mb-2 p-2 rounded-lg break-words text-sm md:text-base ${checkAnswer(
                "q1",
                correctAnswers.q1,
                "a"
              )}`}
            >
              <input
                type="radio"
                name="q1"
                value="a"
                onChange={() => handleAnswerChange("q1", "a")}
                className="mr-2"
                disabled={submitted}
              />
              a: After T iterations, at least T of the smallest elements will be
              in their correct positions.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q1",
                correctAnswers.q1,
                "b"
              )}`}
            >
              <input
                type="radio"
                name="q1"
                value="b"
                onChange={() => handleAnswerChange("q1", "b")}
                className="mr-2"
                disabled={submitted}
              />
              b: After T iterations, at least T random elements will be in their
              correct positions.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q1",
                correctAnswers.q1,
                "c"
              )}`}
            >
              <input
                type="radio"
                name="q1"
                value="c"
                onChange={() => handleAnswerChange("q1", "c")}
                className="mr-2"
                disabled={submitted}
              />
              c: After T iterations, a random number of elements will be in
              their correct positions.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q1",
                correctAnswers.q1,
                "d"
              )}`}
            >
              <input
                type="radio"
                name="q1"
                value="d"
                onChange={() => handleAnswerChange("q1", "d")}
                className="mr-2"
                disabled={submitted}
              />
              d: After T iterations, at least T of the largest elements will be
              in their correct positions.
            </label>
          </div>
        )}

        {difficulty.beginner && (
          <div className="question p-4 border rounded-lg bg-blue-50">
            <p className="font-semibold mb-2">
              2. To sort an array in descending order, when will we swap two
              adjacent elements under consideration?
            </p>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q2",
                correctAnswers.q2,
                "a"
              )}`}
            >
              <input
                type="radio"
                name="q2"
                value="a"
                onChange={() => handleAnswerChange("q2", "a")}
                className="mr-2"
                disabled={submitted}
              />
              a: When the ith element is lesser than the (i + 1)th element.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q2",
                correctAnswers.q2,
                "b"
              )}`}
            >
              <input
                type="radio"
                name="q2"
                value="b"
                onChange={() => handleAnswerChange("q2", "b")}
                className="mr-2"
                disabled={submitted}
              />
              b: When the ith element is equal to the (i + 1)th element.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q2",
                correctAnswers.q2,
                "c"
              )}`}
            >
              <input
                type="radio"
                name="q2"
                value="c"
                onChange={() => handleAnswerChange("q2", "c")}
                className="mr-2"
                disabled={submitted}
              />
              c: When the ith element is greater than the (i + 1)th element.
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q2",
                correctAnswers.q2,
                "d"
              )}`}
            >
              <input
                type="radio"
                name="q2"
                value="d"
                onChange={() => handleAnswerChange("q2", "d")}
                className="mr-2"
                disabled={submitted}
              />
              d: None of the above.
            </label>
          </div>
        )}

        {difficulty.advanced && (
          <div className="question p-4 border rounded-lg bg-blue-50">
            <p className="font-semibold mb-2">
              3. Consider the following array: A = [9, -1, -10, 9*, 2]
            </p>
            <p className="mb-2">
              Which of the following represents the steps in sorting the above
              array (assume ascending order)?
            </p>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q3",
                correctAnswers.q3,
                "a"
              )}`}
            >
              <input
                type="radio"
                name="q3"
                value="a"
                onChange={() => handleAnswerChange("q3", "a")}
                className="mr-2"
                disabled={submitted}
              />
              a: [9, -1, -10, 9*, 2]→[-1, -10, 9, 2, 9*]→[-10, -1, 2, 9,
              9*]→[-10, -1, 2, 9, 9*]→[-10, -1, 2, 9, 9*]
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q3",
                correctAnswers.q3,
                "b"
              )}`}
            >
              <input
                type="radio"
                name="q3"
                value="b"
                onChange={() => handleAnswerChange("q3", "b")}
                className="mr-2"
                disabled={submitted}
              />
              b: [9, -1, -10, 9*, 2]→[-1, -10, 9*, 2, 9]→[-10, -1, 2, 9,
              9*]→[-10, -1, 2, 9*, 9]→[-10, -1, 2, 9, 9*]
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q3",
                correctAnswers.q3,
                "c"
              )}`}
            >
              <input
                type="radio"
                name="q3"
                value="c"
                onChange={() => handleAnswerChange("q3", "c")}
                className="mr-2"
                disabled={submitted}
              />
              c: [9, -1, -10, 9*, 2]→[-1, -10, 2, 9, 9*]→[-10, -1, 2, 9,
              9*]→[-10, -1, 2, 9, 9*]→[-10, -1, 2, 9, 9*]
            </label>
            <label
              className={`block mb-2 p-2 rounded-lg ${checkAnswer(
                "q3",
                correctAnswers.q3,
                "d"
              )}`}
            >
              <input
                type="radio"
                name="q3"
                value="d"
                onChange={() => handleAnswerChange("q3", "d")}
                className="mr-2"
                disabled={submitted}
              />
              d: [9, -1, -10, 9*, 2]→[9, -1, 9*, 2, -10]→[9, 9*, 2, -1, -10]→[9,
              9*, 2, -1, -10]→[9, 9*, 2, -1, -10]
            </label>
          </div>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#085d90] text-white px-4 py-2 rounded-lg hover:bg-[#06466E]"
            disabled={submitted}
          >
            Submit
          </button>
          {submitted && score !== null && (
            <p className="mt-4 text-lg font-bold">
              Your score: {score} / {Object.keys(correctAnswers).length}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuizApp;
