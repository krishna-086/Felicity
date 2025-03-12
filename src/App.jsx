import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./pages/Home";
import BubbleSortVisualizer from "./pages/sortdemo";
import BubbleSortPractice from "./pages/sortpractice";
import BubbleSortExercise from "./pages/sortexcercise";
import SortingSidebar from "./components/SortingSidebar";
import ContactPage from "./pages/Contact";
import AboutUs from "./pages/About";
import Course from "./pages/Course";
import Chatbot from "./components/Chatbot";
import Bubble from "./pages/BubbleSort";
import LabPage from "./pages/LabPages";
import ScrollToTop from "./components/Scrolltotop";


const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="w-full min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/labs/computerscience/datastructure" element={<Course />} />
          <Route path="/exp/bubble-sort" element={<Bubble />} />
          <Route path="/exp/bubble-sort/demo" element={<BubbleSortVisualizer />} />
          <Route path="/exp/bubble-sort/practice" element={<BubbleSortPractice />} />
          <Route path="/exp/bubble-sort/exercise" element={<BubbleSortExercise />} />
          <Route path="/labs/:category" element={<LabPage />} />

        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;