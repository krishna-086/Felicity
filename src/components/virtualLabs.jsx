import React, { useState, useEffect } from "react";
import { labs } from "../assets/assets";
import { Link } from "react-router-dom";

const VirtualLabs = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleLabs = isMobile && !showAll ? labs.slice(0, 3) : labs; 

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Broad Areas of Virtual Labs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {visibleLabs.map((course, index) => {
          const slug = encodeURIComponent(course.title);

          return (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${course.color} flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                <img src={course.image} alt={course.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{course.title}</h3>
              <Link to={`/labs/${slug}`}>
                <button className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition-all duration-300">
                  EXPLORE
                </button>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Show More / Show Less Button (Only for Mobile) */}
      {isMobile && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {showAll ? "Show Less ▲" : "Show More ▼"}
          </button>
        </div>
      )}
    </div>
  );
};

export default VirtualLabs;
