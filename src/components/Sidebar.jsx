import React from "react";
import AccordionItem from "./Accordion";
import { Link } from "react-router-dom";

// Helper for non-accordion items (top-level): capitalized, medium weight.
// Helper for non-accordion items (top-level): capitalized, bold when selected.
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

const Sidebar = ({ setSelected, selected }) => {
  return (
    <div className="w-1/3 bg-white shadow-lg rounded-xl p-4 h-full overflow-y-auto hidden md:block">
      <ul className="space-y-1">
        {/* General Section */}
        <li
          className={headingItemClass("Aim", selected)}
          onClick={() => setSelected("Aim")}
        >
          Aim
        </li>
        <li
          className={headingItemClass("Overview", selected)}
          onClick={() => setSelected("Overview")}
        >
          Overview
        </li>
        {/* Bubble Sort Section */}
        <AccordionItem title="Bubble Sort">
          <li
            className={childItemClass("Bubble Sort - Aim", selected)}
            onClick={() => setSelected("Bubble Sort - Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass("Bubble Sort - Concept", selected)}
            onClick={() => setSelected("Bubble Sort - Concept")}
          >
            Concept
          </li>
          <li
            className={childItemClass("Bubble Sort - Algorithm", selected)}
            onClick={() => setSelected("Bubble Sort - Algorithm")}
          >
            Algorithm
          </li>
          <li className={childItemClass("Bubble Sort - Demo", selected)}>
            <Link to="./demo" className="w-full h-full block">
              Demo
            </Link>
          </li>
          <li className={childItemClass("Bubble Sort - Practice", selected)}>
            <Link to="./practice" className="w-full h-full block">
              Practice
            </Link>
          </li>
          <li className={childItemClass("Bubble Sort - Exercise", selected)}>
            <Link to="./exercise" className="w-full h-full block">
              Exercise
            </Link>
          </li>
          <li
            className={childItemClass("Bubble Sort - Quiz", selected)}
            onClick={() => setSelected("Bubble Sort - Quiz")}
          >
            Quiz
          </li>
        </AccordionItem>

        {/* Optimized Bubble Sort Section */}
        <AccordionItem title="Optimized Bubble Sort">
          <li
            className={childItemClass("Optimized Bubble Sort - Aim", selected)}
            onClick={() => setSelected("Optimized Bubble Sort - Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass(
              "Optimized Bubble Sort - Optimization Technique",
              selected
            )}
            onClick={() =>
              setSelected("Optimized Bubble Sort - Optimization Technique")
            }
          >
            Optimization Technique
          </li>
          <li
            className={childItemClass("Optimized Bubble Sort - Demo", selected)}
            onClick={() => setSelected("Optimized Bubble Sort - Demo")}
          >
            Demo
          </li>
          <li
            className={childItemClass(
              "Optimized Bubble Sort - Practice",
              selected
            )}
            onClick={() => setSelected("Optimized Bubble Sort - Practice")}
          >
            Practice
          </li>
          <li
            className={childItemClass(
              "Optimized Bubble Sort - Exercise",
              selected
            )}
            onClick={() => setSelected("Optimized Bubble Sort - Exercise")}
          >
            Exercise
          </li>
          <li
            className={childItemClass("Optimized Bubble Sort - Quiz", selected)}
            onClick={() => setSelected("Optimized Bubble Sort - Quiz")}
          >
            Quiz
          </li>
        </AccordionItem>

        {/* Non-Accordion Item: Code Assessment */}
        <li
          className={headingItemClass("Code Assessment", selected)}
          onClick={() => setSelected("Code Assessment")}
        >
          Code Assessment
        </li>

        {/* Analysis Section */}
        <AccordionItem title="Analysis">
          <li
            className={childItemClass("Analysis - Aim", selected)}
            onClick={() => setSelected("Analysis - Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass("Analysis - Overview", selected)}
            onClick={() => setSelected("Analysis - Overview")}
          >
            Overview
          </li>
          <li
            className={childItemClass(
              "Analysis - Time and Space Complexity",
              selected
            )}
            onClick={() => setSelected("Analysis - Time and Space Complexity")}
          >
            Time and Space Complexity
          </li>
          <li
            className={childItemClass(
              "Analysis - Time and Space Complexity Demo",
              selected
            )}
            onClick={() =>
              setSelected("Analysis - Time and Space Complexity Demo")
            }
          >
            Time and Space Complexity Demo
          </li>
          <li
            className={childItemClass(
              "Analysis - Stability of Bubble Sort",
              selected
            )}
            onClick={() => setSelected("Analysis - Stability of Bubble Sort")}
          >
            Stability of Bubble Sort
          </li>
          <li
            className={childItemClass(
              "Analysis - Comparison with other Algorithms",
              selected
            )}
            onClick={() =>
              setSelected("Analysis - Comparison with other Algorithms")
            }
          >
            Comparison with other Algorithms
          </li>
          <li
            className={childItemClass("Analysis - Quiz", selected)}
            onClick={() => setSelected("Analysis - Quiz")}
          >
            Quiz
          </li>
        </AccordionItem>

        {/* Non-Accordion Items */}
        <li
          className={headingItemClass("Posttest", selected)}
          onClick={() => setSelected("Posttest")}
        >
          Posttest
        </li>
        <li
          className={headingItemClass("Further Readings/References", selected)}
          onClick={() => setSelected("Further Readings/References")}
        >
          Further Readings/References
        </li>
        <li
          className={headingItemClass("Feedback", selected)}
          onClick={() => setSelected("Feedback")}
        >
          Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
