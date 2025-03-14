import React from "react";
import AccordionItem from "./Accordion";
import { Link, useLocation } from "react-router-dom";

// Helper for non-accordion items (top-level): capitalized, medium weight.
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

const Sidebar2 = ({ setSelected, selected }) => {
  const location = useLocation();

  const getSectionUrl = (section) => {
    return `/exp/bubble-sort?section=${section}`;
  };

  return (
    <div className="w-1/3 bg-white shadow-lg rounded-xl p-4 h-full overflow-y-auto hidden md:block">
      <ul className="space-y-1">
        {/* General Section */}
        <li
          className={headingItemClass("Aim", selected)}
          onClick={() => setSelected("Aim")}
        >
          <Link to={getSectionUrl("Aim")} className="w-full h-full block">
              Aim
            </Link>
        </li>
        <li
          className={headingItemClass("Overview", selected)}
          onClick={() => setSelected("Overview")}
        >
          <Link to={getSectionUrl("Overview")} className="w-full h-full block">
              Overview
            </Link>
        </li>

        {/* Bubble Sort Section */}
        <AccordionItem title="Bubble Sort">
          <li
            className={childItemClass("BubbleSort-Aim", selected)}
            onClick={() => setSelected("BubbleSort-Aim")}
          >
            <Link to={getSectionUrl("BubbleSort-Aim")} className="w-full h-full block">
              Aim
            </Link>
          </li>
          <li
            className={childItemClass("BubbleSort-Concept", selected)}
            onClick={() => setSelected("BubbleSort-Concept")}
          >
            <Link to={getSectionUrl("BubbleSort-Concept")} className="w-full h-full block">
              Concept
            </Link>
          </li>
          <li
            className={childItemClass("BubbleSort-Algorithm", selected)}
            onClick={() => setSelected("BubbleSort-Algorithm")}
          >
            <Link to={getSectionUrl("BubbleSort-Algorithm")} className="w-full h-full block">
              Algorithm
            </Link>
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
            <Link to={getSectionUrl("BubbleSort-Quiz")} className="w-full h-full block">
              Quiz
            </Link>
          </li>
        </AccordionItem>

        {/* Optimized Bubble Sort Section */}
        <AccordionItem title="Optimized Bubble Sort">
          <li
            className={childItemClass("OptimizedBubbleSort-Aim", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Aim")}
          >
            <Link to={getSectionUrl("OptimizedBubbleSort-Aim")} className="w-full h-full block">
              Aim
            </Link>
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
            <Link
              to={getSectionUrl("OptimizedBubbleSort-OptimizationTechnique")}
              className="w-full h-full block"
            >
              Optimization Technique
            </Link>
          </li>
          <li
            className={childItemClass("OptimizedBubbleSort-Demo", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Demo")}
          >
            <Link
              to={getSectionUrl("OptimizedBubbleSort-Demo")}
              className="w-full h-full block"
            >
              Demo
            </Link>
          </li>
          <li
            className={childItemClass(
              "OptimizedBubbleSort-Practice",
              selected
            )}
            onClick={() => setSelected("OptimizedBubbleSort-Practice")}
          >
            <Link
              to={getSectionUrl("OptimizedBubbleSort-Practice")}
              className="w-full h-full block"
            >
              Practice
            </Link>
          </li>
          <li
            className={childItemClass(
              "OptimizedBubbleSort-Exercise",
              selected
            )}
            onClick={() => setSelected("OptimizedBubbleSort-Exercise")}
          >
            <Link
              to={getSectionUrl("OptimizedBubbleSort-Exercise")}
              className="w-full h-full block"
            >
              Exercise
            </Link>
          </li>
          <li
            className={childItemClass("OptimizedBubbleSort-Quiz", selected)}
            onClick={() => setSelected("OptimizedBubbleSort-Quiz")}
          >
            <Link
              to={getSectionUrl("OptimizedBubbleSort-Quiz")}
              className="w-full h-full block"
            >
              Quiz
            </Link>
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
            <Link to={getSectionUrl("Analysis-Aim")} className="w-full h-full block">
              Aim
            </Link>
          </li>
          <li
            className={childItemClass("Analysis-Overview", selected)}
            onClick={() => setSelected("Analysis-Overview")}
          >
            <Link to={getSectionUrl("Analysis-Overview")} className="w-full h-full block">
              Overview
            </Link>
          </li>
          <li
            className={childItemClass(
              "Analysis-TimeandSpaceComplexity",
              selected
            )}
            onClick={() => setSelected("Analysis-TimeandSpaceComplexity")}
          >
            <Link
              to={getSectionUrl("Analysis-TimeandSpaceComplexity")}
              className="w-full h-full block"
            >
              Time and Space Complexity
            </Link>
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
            <Link
              to={getSectionUrl("Analysis-TimeandSpaceComplexityDemo")}
              className="w-full h-full block"
            >
              Time and Space Complexity Demo
            </Link>
          </li>
          <li
            className={childItemClass(
              "Analysis-StabilityofBubbleSort",
              selected
            )}
            onClick={() => setSelected("Analysis-StabilityofBubbleSort")}
          >
            <Link
              to={getSectionUrl("Analysis-StabilityofBubbleSort")}
              className="w-full h-full block"
            >
              Stability of Bubble Sort
            </Link>
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
            <Link
              to={getSectionUrl("Analysis-ComparisonWithOtherAlgorithms")}
              className="w-full h-full block"
            >
              Comparison with other Algorithms
            </Link>
          </li>
          <li
            className={childItemClass("Analysis-Quiz", selected)}
            onClick={() => setSelected("Analysis-Quiz")}
          >
            <Link to={getSectionUrl("Analysis-Quiz")} className="w-full h-full block">
              Quiz
            </Link>
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
          className={headingItemClass("Conclusion", selected)}
          onClick={() => setSelected("Conclusion")}
        >
          Conclusion
        </li>
        <li
          className={headingItemClass("References", selected)}
          onClick={() => setSelected("References")}
        >
          References
        </li>
      </ul>
    </div>
  );
};

export default Sidebar2;
