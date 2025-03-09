import React from "react";

const labs = [
  {
    title: "Computer Science Engineering",
    color: "bg-yellow-200",
    icon: "💻",
  },
  {
    title: "Electrical & Communication Engineering",
    color: "bg-blue-300",
    icon: "🔌",
  },
  {
    title: "Electrical Engineering",
    color: "bg-lime-300",
    icon: "⚡",
  },
  {
    title: "Mechanical Engineering",
    color: "bg-yellow-200",
    icon: "🛠",
  },
  {
    title: "Chemical Engineering",
    color: "bg-blue-300",
    icon: "⚗️",
  },
  {
    title: "Biotechnology & Biomedical Engineering",
    color: "bg-lime-300",
    icon: "🧬",
  },
  {
    title: "Civil Engineering",
    color: "bg-yellow-200",
    icon: "🏗️",
  },
  {
    title: "Physical Engineering",
    color: "bg-blue-300",
    icon: "⚙️",
  },
  {
    title: "Chemical Sciences",
    color: "bg-lime-300",
    icon: "🔬",
  },
];

const VirtualLabs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Broad Areas of Virtual Labs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {labs.map((course, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${course.color} flex flex-col items-center text-center transition-transform hover:scale-105`}
          >
            <div className="text-5xl">{course.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{course.title}</h3>
            <button className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
              EXPLORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualLabs;
