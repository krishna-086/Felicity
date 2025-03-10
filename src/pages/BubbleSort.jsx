import React, { useState } from "react";
import Footer from "../components/footer";
import StarRatingDisplay from "../components/starDisplay";
import Sidebar from "../components/Sidebar";
import QuizApp from "../components/Quiz";

const Bubble = () => {
  const [selected, setSelected] = useState("Aim");

  return (
    <>
      {/* Custom Navbar */}
      <nav className="bg-white text-gray-700 py-4 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-9xl mx-auto px-10 flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12" />
          <ul className="flex items-center space-x-6 text-md uppercase font-medium">
            <li>
              <StarRatingDisplay rating={4.5} />
            </li>
            <li className="cursor-pointer hover:text-[#085d90]">Home</li>
            <li className="cursor-pointer hover:text-[#085d90]">Rate Me</li>
            <li className="cursor-pointer hover:text-[#085d90]">
              Report a Bug
            </li>
            <li>
              <a
                href="#virtuallabs"
                rel="noopener noreferrer"
                className="border border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
              >
                Practice
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="min-h-screen bg-gray-100 p-8 flex flex-col mt-20">
        <h1 className="text-4xl font-bold text-[#085d90] mb-8 mt-4 text-center">
          Computer Science and Engineering
        </h1>
        <div
          className="w-full max-w-7xl flex gap-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <Sidebar setSelected={setSelected} selected={selected} />
          <div className="w-7/8 p-8 bg-white shadow-lg rounded-xl h-full overflow-y-auto">
            {/* Render main content based on selected state */}
            {selected === "Aim" && (
              <div className="content">
                <h2 className="text-2xl font-bold mb-4">Estimated Time</h2>
                <p className="mb-6">1 hour</p>

                <h2 className="text-2xl font-bold mb-4">
                  Learning Objectives of the Experiment
                </h2>
                <ul className="list-disc pl-5 mb-6">
                  <li>
                    Given an unsorted array of numbers, generate a sorted array
                    of numbers by applying Bubble Sort.
                  </li>
                  <li>
                    Optimise the Bubble Sort algorithm to achieve better
                    performance.
                  </li>
                  <li>
                    Demonstrate knowledge of time complexity of Bubble Sort by
                    counting the number of operations involved in each
                    iteration.
                  </li>
                  <li>
                    Compare Bubble Sort with other sorting algorithms and
                    realise Bubble Sort as a stable comparison sorting
                    algorithm.
                  </li>
                </ul>
              </div>
            )}

            {selected === "Overview" && (
              <div className="content">
                {/* YouTube Video */}
                <div className="video-container mb-6">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/1WHzXwp5l7g"
                    title="Bubble Sort Experiment Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Prerequisites */}
                <h2 className="text-2xl font-bold mb-4">
                  Prerequisites of the Experiment
                </h2>
                <p className="mb-4">
                  This experiment requires you to have basic knowledge about:
                </p>
                <ul className="list-disc list-inside mb-6">
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Sorting_algorithm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      The Notion of Sorting
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Time_complexity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Notion of Time and Space complexity
                    </a>
                  </li>
                  <br />
                  And above all, a curiosity to learn and explore!
                </ul>

                {/* Overview of the Experiment */}
                <h2 className="text-2xl font-bold mb-4">
                  Overview of the Experiment
                </h2>

                <ul className="list-disc mb-6 pl-5">
                  <li>
                    The aim of this experiment is to understand the Bubble Sort
                    algorithm, its time and space complexity, and how it
                    compares against other sorting algorithms.
                  </li>
                  <li>
                    The experiment features a series of modules with video
                    lectures, interactive demonstrations, simulations, hands-on
                    practice exercises, and quizzes for self-analysis.
                  </li>
                </ul>

                {/* Experiment Modules Table */}
                <h2 className="text-2xl font-bold mb-4">
                  Experiment Modules and their Weightage
                </h2>
                <table className="table-auto w-full mb-8">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Module</th>
                      <th className="px-4 py-2">Weightage</th>
                      <th className="px-4 py-2">Expectation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2">Pre-Test</td>
                      <td className="border px-4 py-2">10%</td>
                      <td className="border px-4 py-2">Solve All Questions</td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Bubble Sort</td>
                      <td className="border px-4 py-2">25%</td>
                      <td className="border px-4 py-2">
                        Understand the Bubble Sort algorithm
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">
                        Optimized Bubble Sort
                      </td>
                      <td className="border px-4 py-2">25%</td>
                      <td className="border px-4 py-2">
                        Understand the optimization technique
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Analysis</td>
                      <td className="border px-4 py-2">25%</td>
                      <td className="border px-4 py-2">
                        Understand the time and space complexity
                      </td>
                    </tr>
                    <tr>
                      <td className="border px-4 py-2">Post-test</td>
                      <td className="border px-4 py-2">15%</td>
                      <td className="border px-4 py-2">Solve All Questions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {selected === "Bubble Sort - Aim" && (
              <div className="content">
                <h2 className="text-2xl font-bold mb-4">Estimated Time</h2>
                <p className="mb-6">15 minutes</p>

                <h2 className="text-2xl font-bold mb-4">
                  Learning Objectives of this Module
                </h2>
                <ul className="list-disc pl-5 mb-6">
                  <li>Gain the intuition for Bubble Sort</li>
                  <li>
                    Learn when and how to swap incorrectly ordered elements
                  </li>
                  <li>Learn about the primitive Bubble Sort algorithm</li>
                  <li>Practice the algorithm</li>
                  <li>Test your conceptual understanding with a short quiz</li>
                </ul>
              </div>
            )}
            {selected === "Bubble Sort - Quiz" && (
              <div className="content">
                <h2 className="text-2xl font-bold mb-4">Quiz Section</h2>
                <QuizApp /> {/* This is where your quiz component is rendered */}
              </div>
            )}

            {/* Additional sections can be added based on the selected state */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bubble;
