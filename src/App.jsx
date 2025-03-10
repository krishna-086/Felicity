import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BubbleSortVisualizer from "./pages/sortdemo";
import BubbleSortPractice from "./pages/sortpractice";
import BubbleSortExercise from "./pages/sortexcercise";
import SortingSidebar from "./components/SortingSidebar";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className={`fixed md:relative z-50 transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"}`}>
          <SortingSidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        {/* Main Content */}
        <div className={`flex-1 p-5 transition-all ${sidebarOpen ? "md:ml-64" : "md:ml-16"} ${!sidebarOpen && "ml-16"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bubble-sort/demo" element={<BubbleSortVisualizer />} />
            <Route path="/bubble-sort/practice" element={<BubbleSortPractice />} />
            <Route path="/bubble-sort/exercise" element={<BubbleSortExercise />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
