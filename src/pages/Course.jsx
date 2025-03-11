import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import StarRatingDisplay from "../components/starDisplay";
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

const Course = () => {
  const [selected, setSelected] = useState("Introduction");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {/* Custom Navbar */}
      <nav className="bg-white text-gray-700 py-2 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-9xl mx-auto px-10 flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12" />
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
            <li>
              <StarRatingDisplay rating={4.5} />
            </li>
            <li className="cursor-pointer hover:text-[#085d90]">Home</li>
            <li className="cursor-pointer hover:text-[#085d90]">About Us</li>
            <li className="cursor-pointer hover:text-[#085d90]">Contact Us</li>
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={30} className="text-black" />
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white shadow-lg w-48 rounded-lg p-4">
            <ul className="space-y-4 text-lg">
              <li className="cursor-pointer hover:text-[#085d90]">Home</li>
              <li className="cursor-pointer hover:text-[#085d90]">About Us</li>
              <li className="cursor-pointer hover:text-[#085d90]">
                Contact Us
              </li>
            </ul>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-white md:bg-gray-100 py-8 px-4 md:p-8 flex flex-col mt-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#085d90] mb-4 mt-4 text-center">
          Data Structures-1
        </h1>
        <div className="w-full max-w-7xl flex gap-8">
          {/* Sidebar (Hidden in Mobile) */}
          <div className="w-1/5 bg-white shadow-lg rounded-xl p-6 hidden md:block">
            <ul className="space-y-4">
              {[
                "Introduction",
                "Objective",
                "List of experiments",
                "Target Audience",
                "Course Alignment",
                "Feedback",
              ].map((item, index) => (
                <li
                  key={index}
                  className={`text-lg font-medium cursor-pointer transition-all duration-300 p-2 rounded-lg ${
                    selected === item
                      ? "text-[#085d90]"
                      : "text-gray-700 hover:text-[#085d90]"
                  }`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="w-[100] md:w-7/8 p-8 bg-white md:shadow-lg md:rounded-xl ">
            {selected === "Objective" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                The Virtual Lab for Data Structures will focus on creating an
                environment where the student interactively explores data
                structures. The role of this Virtual Labs is to complement the
                lectures and reading material and the programming lab in three
                ways:
                <br />
                1. Present visual animations of data structures
                <br />
                2. Allow students to interactively execute algorithms in these
                data structures.
                <br />
                3. Allow students to interactively compute the cost of using
                these data structures with different algorithms.
              </p>
            )}
            {selected === "List of experiments" && (

  <div className="text-gray-700 leading-relaxed text-lg">
    <h3 className="text-2xl font-semibold text-[#085d90] mb-4">Sorting</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/bubble-sort" className="hover:text-[#085d90]">
            Bubble Sort
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/merge-sort" className="hover:text-[#085d90]">
            Merge Sort
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={3.5} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/heap-sort" className="hover:text-[#085d90]">
            Heap Sort
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/quick-sort" className="hover:text-[#085d90]">
            Quick Sort
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Graphs</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/dfs" className="hover:text-[#085d90]">
            Depth First Search
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={3.5} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/bfs" className="hover:text-[#085d90]">
            Breadth First Search
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Trees</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/tree-traversal" className="hover:text-[#085d90]">
            Tree Traversal
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={3.5} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/bst" className="hover:text-[#085d90]">
            Binary Search Trees
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Stacks and Queues</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/stacks-queues" className="hover:text-[#085d90]">
            Stacks and Queues
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/infix-to-postfix" className="hover:text-[#085d90]">
            Infix to Postfix
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={3.5} />
      </div>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Searching</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/unsorted-arrays" className="hover:text-[#085d90]">
            Unsorted Arrays
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/hashtables" className="hover:text-[#085d90]">
            Hashtables
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4.5} />
      </div>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Linked Lists</h3>
    <ul className="ml-6 list-disc">
      <div className="flex">
        <li>
          <Link to="/exp/linked-lists" className="hover:text-[#085d90]">
            Linked Lists
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4.5} />
      </div>
      <div className="flex">
        <li>
          <Link to="/exp/polynomial-arithmetic" className="hover:text-[#085d90]">
            Polynomial Arithmetic using Linked Lists
          </Link>
          &nbsp;&nbsp;
        </li>
        <StarRatingDisplay rating={4.5} />
      </div>
    </ul>
  </div>
)}


            {selected === "Target Audience" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                UG
                <br />
                Data Structures & Algorithms for 1st & 2nd year B. Tech./ B.E in
                Computer Science & Information Technology
                <br />- B.Sc / B.S in Computer Science
                <br />
                PG
                <br />
                Computer Science, Information Technology, Compilers, Operating
                systems, Databases, AI and Software engineering.
                <br />- Ph. D. Beginners
              </p>
            )}
            {selected === "Course Alignment" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                The syllabi of this lab aligns to the following universities in
                India.
                <br />
                <br />
                Osmania University Data Structures Lab
                <br />
                JNTU Data Structures Lab
              </p>
            )}
            {selected === "Feedback" && (
              <div className="text-gray-700 leading-relaxed text-lg">
                <p>
                  Dear User,
                  <br />
                  <br />
                  Thanks for using Virtual Labs. Your opinion is valuable to us.
                  To help us improve, we'd like to ask you a few questions about
                  your experience. It will only take 3 minutes, and your answers
                  will help us make Virtual Labs better for you and other users.
                </p>
                <div className="mt-6">
                  <button className="border-2 border-[#085d90] text-[#085d90] px-6 py-2 rounded-lg font-semibold hover:bg-[#085d90] hover:text-white transition">
                    Share Your Feedback
                  </button>
                </div>
                <p className="mt-6">
                  Thanks for your time!
                  <br />
                  The Virtual Labs Team
                </p>
              </div>
            )}
            {![
              "Objective",
              "Target Audience",
              "Course Alignment",
              "Feedback",
              "List of experiments",
            ].includes(selected) && (
              <>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Welcome to the Data Structures Lab - I developed at IIIT
                  Hyderabad. Data Structures (also called Data Structures and
                  Algorithms in some places) is a core course in all computer
                  science undergraduate curricula. The course is the basis for
                  understanding several data structures and also algorithms that
                  operate on them. The course forms the foundation for almost
                  all computer science subjects: compilers, operating systems,
                  databases, AI, and software engineering.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  The course comes with a lab in most universities in India. The
                  associated lab in university curricula focuses on
                  implementation of algorithms operating on data structures,
                  i.e., coding programs on the data structures and algorithms.
                  Students embarking on the task of writing programs often have
                  difficulty visualizing how operations and algorithms modify a
                  data structure.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Navbar for Mobile */}
<div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
  <button
    onClick={() => {
      setSelected("Introduction");
      setMoreOpen(false);
    }}
    className={`flex flex-col items-center ${
      selected === "Introduction" ? "text-[#085d90] font-semibold" : "text-gray-700"
    }`}
  >
    <img
      src="/logo/intro.png"
      alt="Intro"
      className={`w-6 h-6 mx-auto ${
        selected === "Introduction" ? "filter brightness-0 invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[190deg] contrast-[90%]" : ""
      }`}
    />
    <p className="text-xs">Introduction</p>
  </button>

  <button
    onClick={() => {
      setSelected("Objective");
      setMoreOpen(false);
    }}
    className={`flex flex-col items-center ${
      selected === "Objective" ? "text-[#085d90] font-semibold" : "text-gray-700"
    }`}
  >
    <img
      src="/logo/object.png"
      alt="Objective"
      className={`w-6 h-6 mx-auto ${
        selected === "Objective" ? "filter brightness-0 invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[190deg] contrast-[90%]" : ""
      }`}
    />
    <p className="text-xs">Objective</p>
  </button>

  <button
    onClick={() => {
      setSelected("List of experiments");
      setMoreOpen(false);
    }}
    className={`flex flex-col items-center ${
      selected === "List of experiments" ? "text-[#085d90] font-semibold" : "text-gray-700"
    }`}
  >
    <img
      src="/logo/exp.png"
      alt="Experiments"
      className={`w-6 h-6 mx-auto ${
        selected === "List of experiments" ? "filter brightness-0 invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[190deg] contrast-[90%]" : ""
      }`}
    />
    <p className="text-xs">Experiments</p>
  </button>

  <button
    onClick={() => setMoreOpen(!moreOpen)}
    className={`flex flex-col items-center ${
      moreOpen ? "text-[#085d90] font-semibold" : "text-gray-700"
    }`}
  >
    <img
      src="/logo/more.png"
      alt="More"
      className={`w-6 h-6 mx-auto ${
        moreOpen ? "filter brightness-0 invert-[20%] sepia-[100%] saturate-[500%] hue-rotate-[190deg] contrast-[90%]" : ""
      }`}
    />
    <p className="text-xs">More</p>
  </button>
</div>

{/* More Options */}
{moreOpen && (
  <div className="fixed bottom-16 left-0 right-0 bg-white shadow-lg border-t border-gray-300 p-4 flex flex-col space-y-4 md:hidden">
    <button
      onClick={() => {
        setSelected("Target Audience");
        setMoreOpen(false);
      }}
      className={`text-gray-700 font-semibold ${
        selected === "Target Audience" ? "text-[#085d90]" : ""
      }`}
    >
      Target Audience
    </button>
    <button
      onClick={() => {
        setSelected("Course Alignment");
        setMoreOpen(false);
      }}
      className={`text-gray-700 font-semibold ${
        selected === "Course Alignment" ? "text-[#085d90]" : ""
      }`}
    >
      Course Alignment
    </button>
    <button
      onClick={() => {
        setSelected("Feedback");
        setMoreOpen(false);
      }}
      className={`text-gray-700 font-semibold ${
        selected === "Feedback" ? "text-[#085d90]" : ""
      }`}
    >
      Feedback
    </button>
  </div>
)}



      <Footer />
    </>
  );
};

export default Course;
