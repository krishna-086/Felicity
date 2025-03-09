import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/Contact";
import AboutUs from "./pages/About";
import Course from "./pages/Course";

const App = () => {
  return (
    <Router>
      <div className="w-full min-h-screen">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/computerscience/datastructure" element={<Course />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
