import React, { useState } from "react";
import Footer from "../components/footer";
import StarRatingDisplay from "../components/starDisplay";
import Sidebar from "../components/Sidebar";
import QuizApp from "../components/Quiz";
import AccordionItem from "../components/Accordion";
const headingItemClass = (itemValue, selected) =>
  `cursor-pointer transition-transform duration-300 text-base px-2 py-1 uppercase ${
    selected === itemValue
      ? "font-bold text-[#085d90]" // Make selected top-level items bold
      : "font-medium text-gray-700 hover:text-[#064a73]"
  }`;

// Helper for accordion child items: normal case (not capitalized), bold when selected.
const childItemClass = (itemValue, selected) =>
  `cursor-pointer transition-transform duration-300 text-base px-2 py-1  ${
    selected === itemValue
      ? "text-[#085d90] font-bold" // Already bold when selected
      : "text-gray-700 hover:text-[#064a73] font-normal"
  }`;
import {
  Menu,
  Home,
  BookOpen,
  List,
  MoreHorizontal,
  Users,
  AlignJustify,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";

const Bubble = () => {
  const [selected, setSelected] = useState("Aim");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {/* Custom Navbar */}
      <nav className="bg-white  text-gray-700 py-2 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-9xl mx-auto px-5 md:px-10  flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12" />
          <ul className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
            <li>
              <StarRatingDisplay rating={4.5} />
            </li>
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
          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
          <Link
                to="./practice"
                className="border-2 border-[#085d90] text-[#085d90] px-4 py-2 rounded-md text-sm font-medium transition duration-300 hover:bg-[#085d90] hover:text-white shadow-lg transform hover:scale-105 animate-pulse"
              >
                Practice
              </Link>
          </div>
          {/* Mobile Menu Dropdown */}
          {/* {menuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-white shadow-lg w-48 rounded-lg p-4">
              <ul className="space-y-4 text-lg">
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
          )} */}
        </div>
      </nav>

      <div className="min-h-screen bg-white md:bg-gray-100 py-8 px-4 md:p-8 flex flex-col mt-12">
        <h1 className="text-4xl md:text-4xl font-bold text-[#085d90] mb-4  text-center">
          Bubble Sort
        </h1>
        <div
          className="w-full max-w-7xl flex gap-8"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <Sidebar setSelected={setSelected} selected={selected} />
          <div className="w-[100%] md:w-7/8 px-4 md:p-8 bg-white md:shadow-lg md:rounded-xl overflow-y-auto">
            {/* Render main content based on selected state */}
            {selected === "Aim" && (
              <div className="content">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Estimated Time
                </h2>
                <p className="mb-4 md:mb-6">1 hour</p>

                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Learning Objectives
                </h2>
                <ul className="list-disc pl-4 md:pl-5 space-y-3 md:space-y-4 mb-4 md:mb-6">
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
                <div className="video-container mb-4 md:mb-6 aspect-video">
                  <iframe
                    className="w-full h-full"
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/1WHzXwp5l7g"
                    title="Bubble Sort Experiment Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Prerequisites */}
                <h2 className="text-xl md:text-2xl font-bold mb-4">
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
                <div className="overflow-x-auto">
                  <table className="table-auto min-w-[600px] w-full mb-8">
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
                        <td className="border px-4 py-2">
                          Solve All Questions
                        </td>
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
                        <td className="border px-4 py-2">
                          Solve All Questions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            {selected === "Bubble Sort - Aim" && (
              <div className="content">
                <h2 className="text-xl md:text-2xl font-bold mb-4">
                  Estimated Time
                </h2>
                <p className="mb-6">15 minutes</p>

                <h2 className="text-xl md:text-2xl font-bold mb-4">
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
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  Quiz Section
                </h2>
                <QuizApp />{" "}
                {/* This is where your quiz component is rendered */}
              </div>
            )}

            {/* Additional sections can be added based on the selected state */}
          </div>
        </div>
      </div>
      {/* Bottom Navbar for Mobile */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
        <button
          onClick={() => setSelected("Aim")}
          className={selected === "Aim" ? "text-[#085d90]" : "text-gray-700"}
        >
          <Home size={24} />
        </button>
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
      className={childItemClass(`Bubble Sort - ${text}`, selected)}
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
      <Footer />
    </>
  );
};

export default Bubble;
