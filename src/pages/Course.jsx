import React, { useState } from "react";
import Footer from "../components/footer";
import StarRatingDisplay from "../components/starDisplay";
import { Menu, Home, BookOpen, List, MoreHorizontal, Users, AlignJustify, MessageSquare } from "lucide-react";


const Course = () => {
  const [selected, setSelected] = useState("Introduction");
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <>
      {/* Custom Navbar */}
      <nav className="bg-white text-gray-700 py-4 shadow-lg fixed top-0 w-full z-50 border-b-4 border-orange-500">
        <div className="max-w-9xl mx-auto px-10 flex justify-between items-center">
          <img src="/logo.jpg" alt="Logo" className="h-12" />
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-md uppercase font-medium">
            <li><StarRatingDisplay rating={4.5} /></li>
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
              <li className="cursor-pointer hover:text-[#085d90]">Contact Us</li>
            </ul>
          </div>
        )}
      </nav>

      <div className="min-h-screen bg-gray-100 p-8 flex flex-col mt-20">
        <h1 className="text-4xl font-bold text-[#085d90] mb-8 mt-4 text-left">
          Computer Science and Engineering
        </h1>
        <div className="w-full max-w-7xl flex gap-8">
          {/* Sidebar (Hidden in Mobile) */}
          <div className="w-1/5 bg-white shadow-lg rounded-xl p-6 hidden md:block">
            <ul className="space-y-4">
              {["Introduction", "Objective", "List of experiments", "Target Audience", "Course Alignment", "Feedback"].map((item, index) => (
                <li
                  key={index}
                  className={`text-lg font-medium cursor-pointer transition-all duration-300 p-2 rounded-lg ${selected === item ? "text-[#085d90]" : "text-gray-700 hover:text-[#085d90]"}`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

                    {/* Main Content */}
                    <div className="w-7/8 p-8 bg-white shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Data Structures - 1</h2>
            {selected === "Objective" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                The Virtual Lab for Data Structures will focus on creating an environment where the student interactively explores data structures. The role of this Virtual Labs is to complement the lectures and reading material and the programming lab in three ways:
                <br />1. Present visual animations of data structures
                <br />2. Allow students to interactively execute algorithms in these data structures.
                <br />3. Allow students to interactively compute the cost of using these data structures with different algorithms.
              </p>
            )}
            {selected === "List of experiments" && (
  <div className="text-gray-700 leading-relaxed text-lg">
    <h3 className="text-2xl font-semibold text-[#085d90] mb-4">Sorting</h3>
    <ul className="ml-6 list-disc">
      <li>Bubble Sort</li>
      <li>Merge Sort</li>
      <li>Heap Sort</li>
      <li>Quick Sort</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Graphs</h3>
    <ul className="ml-6 list-disc">
      <li>Depth First Search</li>
      <li>Breadth First Search</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Trees</h3>
    <ul className="ml-6 list-disc">
      <li>Tree Traversal</li>
      <li>Binary Search Trees</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Stacks and Queues</h3>
    <ul className="ml-6 list-disc">
      <li>Stacks and Queues</li>
      <li>Infix to Postfix</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Searching</h3>
    <ul className="ml-6 list-disc">
      <li>Unsorted Arrays</li>
      <li>Hashtables</li>
    </ul>

    <h3 className="text-2xl font-semibold text-[#085d90] mt-6 mb-4">Linked Lists</h3>
    <ul className="ml-6 list-disc">
      <li>Linked Lists</li>
      <li>Polynomial Arithmetic using Linked Lists</li>
    </ul>
  </div>
)}

        
            {selected === "Target Audience" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                UG
                <br />Data Structures & Algorithms for 1st & 2nd year B. Tech./ B.E in Computer Science & Information Technology 
                <br />- B.Sc / B.S in Computer Science
                <br />PG
                <br />Computer Science, Information Technology, Compilers, Operating systems, Databases, AI and Software engineering.
                <br />- Ph. D. Beginners
              </p>
            )}
            {selected === "Course Alignment" && (
              <p className="text-gray-700 leading-relaxed text-lg">
                The syllabi of this lab aligns to the following universities in India.
                <br /><br />Osmania University Data Structures Lab
                <br />JNTU Data Structures Lab
              </p>
            )}
            {selected === "Feedback" && (
              <div className="text-gray-700 leading-relaxed text-lg">
                <p>
                  Dear User,
                  <br />
                  <br />
                  Thanks for using Virtual Labs. Your opinion is valuable to us. To help us improve, we'd like to ask you a few questions about your experience. It will only take 3 minutes, and your answers will help us make Virtual Labs better for you and other users.
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
            {!["Objective", "Target Audience", "Course Alignment", "Feedback", "List of experiments"].includes(selected) && (
              <>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Welcome to the Data Structures Lab - I developed at IIIT Hyderabad. Data Structures
                  (also called Data Structures and Algorithms in some places) is a core course in all
                  computer science undergraduate curricula. The course is the basis for understanding
                  several data structures and also algorithms that operate on them. The course forms the
                  foundation for almost all computer science subjects: compilers, operating systems,
                  databases, AI, and software engineering.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-6">
                  The course comes with a lab in most universities in India. The associated lab in
                  university curricula focuses on implementation of algorithms operating on data
                  structures, i.e., coding programs on the data structures and algorithms. Students
                  embarking on the task of writing programs often have difficulty visualizing how
                  operations and algorithms modify a data structure.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Navbar for Mobile */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg border-t-4 border-orange-500 p-4 flex justify-around md:hidden">
        <button onClick={() => setSelected("Introduction")} className={selected === "Introduction" ? "text-[#085d90]" : "text-gray-700"}><Home size={24} /></button>
        <button onClick={() => setSelected("Objective")} className={selected === "Objective" ? "text-[#085d90]" : "text-gray-700"}><BookOpen size={24} /></button>
        <button onClick={() => setSelected("List of experiments")} className={selected === "List of experiments" ? "text-[#085d90]" : "text-gray-700"}><List size={24} /></button>
        <button onClick={() => setMoreOpen(!moreOpen)} className="text-gray-700"><MoreHorizontal size={24} /></button>
      </div>
      
      {/* More Options */}
      {moreOpen && (
        <div className="fixed bottom-16 left-0 right-0 bg-white shadow-lg border-t border-gray-300 p-4 flex flex-col space-y-4 md:hidden">
          <button onClick={() => { setSelected("Target Audience"); setMoreOpen(false); }} className="text-gray-700 flex items-center gap-2"><Users size={20} /> Target Audience</button>
          <button onClick={() => { setSelected("Course Alignment"); setMoreOpen(false); }} className="text-gray-700 flex items-center gap-2"><AlignJustify size={20} /> Course Alignment</button>
          <button onClick={() => { setSelected("Feedback"); setMoreOpen(false); }} className="text-gray-700 flex items-center gap-2"><MessageSquare size={20} /> Feedback</button>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Course;
