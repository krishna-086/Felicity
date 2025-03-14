import React from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen, List, MoreHorizontal } from "lucide-react"; // Assuming these icons are from lucide-react
import AccordionItem from "./Accordion"; // Import the Accordion component if needed

const BottomNavbar = ({
  setSelected,
  selected,
  moreOpen,
  setMoreOpen,
  headingItemClass,
  childItemClass,
}) => {
  return (
    <>
      {/* bottom navbar */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
        <button
          onClick={() => setSelected("Aim")}
          className={
            selected === "Aim" ? "text-[#085d90] font-bold" : "text-gray-700 font-bold"
          }
        >
          <Link to="/exp/bubble-sort/">
            <img src="/logo/aim.png" alt="Aim" className="w-6 h-6" />
            <span className="text-xs">Aim</span>
          </Link>
        </button>

        <button
          onClick={() => setSelected("BubbleSort-Demo")}
          className={
            selected === "BubbleSort-Demo"
              ? "text-[#085d90] font-bold"
              : "text-gray-700 font-bold"
          }
        >
          <Link to="/exp/bubble-sort/demo">
            <img src="/logo/demo.png" alt="Demo" className="w-6 h-6" />
            <span className="text-xs">Demo</span>
          </Link>
        </button>

        <button
          onClick={() => setSelected("BubbleSort-Quiz")}
          className={
            selected === "Bubble Sort - Quiz"
              ? "text-[#085d90] font-bold"
              : "text-gray-700 font-bold"
          }
        >
          <Link to="/exp/bubble-sort?section=BubbleSort-Quiz" className="block">
            <img src="/logo/quiz.png" alt="Quiz" className="w-6 h-6" />
            <span className="text-xs">Quiz</span>
          </Link>
        </button>
        <button
          onClick={() => setMoreOpen(!moreOpen)}
          className={`${
            moreOpen ? "text-[#085d90] font-bold" : "text-gray-700 font-bold"
          }`}
        >
          <img src="/logo/more.png" alt="More" className="w-6 h-6" />
          <span className="text-xs">More</span>
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
                onClick={() => setSelected("AIm")}
              >
                <Link to="/exp/bubble-sort?section=Aim" className="block">
                  Aim
                </Link>
              </li>
              <li
                className={headingItemClass("Overview", selected)}
                onClick={() => setSelected("Overview")}
              >
                <Link to="/exp/bubble-sort?section=Overview" className="block">
                  Overview
                </Link>
              </li>

              {/* Bubble Sort Accordion */}
              <AccordionItem title="Bubble Sort">
                {[
                  {
                    text: "Aim",
                    link: "/exp/bubble-sort?section=BubbleSort-Aim",
                  },
                  {
                    text: "Concept",
                    link: "/exp/bubble-sort?section=BubbleSort-Concept",
                  },
                  {
                    text: "Algorithm",
                    link: "/exp/bubble-sort?section=BubbleSort-Algorithm",
                  },
                  { text: "Demo", link: "/exp/bubble-sort/demo" },
                  { text: "Practice", link: "/exp/bubble-sort/practice" },
                  { text: "Exercise", link: "/exp/bubble-sort/exercise" },
                  {
                    text: "Quiz",
                    link: "/exp/bubble-sort?section=BubbleSort-Quiz",
                  },
                ].map(({ text, link }) => (
                  <li
                    key={text}
                    className={childItemClass(`BubbleSort-${text}`, selected)}
                    onClick={() => {
                      setSelected(`BubbleSort-${text}`);
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
                  "OptimizedBubbleSort-Aim",
                  "OptimizedBubbleSort-Optimization Technique",
                  "OptimizedBubbleSort-Demo",
                  "OptimizedBubbleSort-Practice",
                  "OptimizedBubbleSort-Exercise",
                  "OptimizedBubbleSort-Quiz",
                ].map((item) => (
                  <li
                    key={item}
                    className={childItemClass(item, selected)}
                    onClick={() => {
                      setSelected(item);
                      setMoreOpen(false);
                    }}
                  >
                    {item.split("-")[1]}
                  </li>
                ))}
              </AccordionItem>

              {/* Other Items */}
              {[
                "CodeAssessment",
                "Posttest",
                "FurtherReadingsReferences",
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
    </>
  );
};

export default BottomNavbar;
