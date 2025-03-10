import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BubbleSortVisualizer from "./pages/sortdemo";
import BubbleSortPractice from "./pages/sortpractice";
import BubbleSortExercise from "./pages/sortexcercise";
import SortingSidebar from "./components/SortingSidebar";
import ContactPage from "./pages/Contact";
import AboutUs from "./pages/About";
import Course from "./pages/Course";
import Chatbot from "./components/Chatbot";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/computerscience/datastructure" element={<Course />} />
          <Route path="/bubble-sort/demo" element={<BubbleSortVisualizer />} />
          <Route path="/bubble-sort/practice" element={<BubbleSortPractice />} />
          <Route path="/bubble-sort/exercise" element={<BubbleSortExercise />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
