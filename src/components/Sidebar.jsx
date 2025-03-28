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
            className={childItemClass("BubbleSort-Aim", selected)}
            onClick={() => setSelected("BubbleSort-Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass("BubbleSort-Concept", selected)}
            onClick={() => setSelected("BubbleSort-Concept")}
          >
            Concept
          </li>
          <li
            className={childItemClass("BubbleSort-Algorithm", selected)}
            onClick={() => setSelected("BubbleSort-Algorithm")}
          >
            Algorithm
          </li>
          <li className={childItemClass("BubbleSort-Demo", selected)}>
            <Link to="/exp/bubble-sort/demo" className="w-full h-full block">
              Demo
            </Link>
          </li>
          <li className={childItemClass("BubbleSort-Practice", selected)}>
            <Link to="/exp/bubble-sort/practice" className="w-full h-full block">
              Practice
            </Link>
          </li>
          <li className={childItemClass("BubbleSort-Exercise", selected)}>
            <Link to="/exp/bubble-sort/exercise" className="w-full h-full block">
              Exercise
            </Link>
          </li>
          <li
            className={childItemClass("BubbleSort-Quiz", selected)}
            onClick={() => setSelected("BubbleSort-Quiz")}
          >
            Quiz
          </li>
        </AccordionItem>

        {/* Optimized Bubble Sort Section */}
        <AccordionItem title="Optimized Bubble Sort">
          <li
            className={childItemClass("OptimizedBubbleSort-Aim", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass(
              "OptimizedBubbleSort-OptimizationTechnique",
              selected
            )}
            onClick={() =>
              setSelected("OptimizedBubbleSort-OptimizationTechnique")
            }
          >
            Optimization Technique
          </li>
          <li
            className={childItemClass("OptimizedBubbleSort-Demo", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Demo")}
          >
            Demo
          </li>
          <li
            className={childItemClass(
              "OptimizedBubbleSort-Practice",
              selected
            )}
            onClick={() => setSelected("OptimizedBubbleSort-Practice")}
          >
            Practice
          </li>
          <li
            className={childItemClass(
              "OptimizedBubbleSort-Exercise",
              selected
            )}
            onClick={() => setSelected("OptimizedBubbleSort-Exercise")}
          >
            Exercise
          </li>
          <li
            className={childItemClass("OptimizedBubbleSort-Quiz", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Quiz")}
          >
            Quiz
          </li>
        </AccordionItem>

        {/* Non-Accordion Item: Code Assessment */}
        <li
          className={headingItemClass("CodeAssessment", selected)}
          onClick={() => setSelected("CodeAssessment")}
        >
          Code Assessment
        </li>

        {/* Analysis Section */}
        <AccordionItem title="Analysis">
          <li
            className={childItemClass("Analysis-Aim", selected)}
            onClick={() => setSelected("Analysis-Aim")}
          >
            Aim
          </li>
          <li
            className={childItemClass("Analysis-Overview", selected)}
            onClick={() => setSelected("Analysis-Overview")}
          >
            Overview
          </li>
          <li
            className={childItemClass(
              "Analysis-TimeandSpaceComplexity",
              selected
            )}
            onClick={() => setSelected("Analysis-TimeandSpaceComplexity")}
          >
            Time and Space Complexity
          </li>
          <li
            className={childItemClass(
              "Analysis-TimeandSpaceComplexityDemo",
              selected
            )}
            onClick={() =>
              setSelected("Analysis-TimeandSpaceComplexityDemo")
            }
          >
            Time and Space Complexity Demo
          </li>
          <li
            className={childItemClass(
              "Analysis-StabilityofBubbleSort",
              selected
            )}
            onClick={() => setSelected("Analysis-StabilityofBubbleSort")}
          >
            Stability of Bubble Sort
          </li>
          <li
            className={childItemClass(
              "Analysis-ComparisonWithOtherAlgorithms",
              selected
            )}
            onClick={() =>
              setSelected("Analysis-ComparisonWithOtherAlgorithms")
            }
          >
            Comparison with other Algorithms
          </li>
          <li
            className={childItemClass("Analysis-Quiz", selected)}
            onClick={() => setSelected("Analysis-Quiz")}
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
          className={headingItemClass("FurtherReadingsReferences", selected)}
          onClick={() => setSelected("FurtherReadingsReferences")}
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
