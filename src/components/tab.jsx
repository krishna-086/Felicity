import { useState } from "react";

const tabs = [
  { id: "objectives", label: "Objectives" },
  { id: "philosophy", label: "The Philosophy" }
];

const content = {
  objectives: (
    <div className="p-3">
      <h2 className="text-2xl font-semibold mb-8 mt-5 text-center">Objectives</h2>
      <ul className="list-disc pl-5 space-y-5">
        <li>To provide remote-access to simulation-based Labs in various disciplines of Science and Engineering.</li>
        <li>To enthuse students to conduct experiments by arousing their curiosity. This helps in learning concepts through remote experimentation.</li>
        <li>To provide a complete Learning Management System with additional tools such as web resources, video lectures, and self-evaluation.</li>
      </ul>
    </div>
  ),
  philosophy: (
    <div className="p-3">
      <h2 className="text-2xl font-semibold mb-8 mt-5 text-center">The Philosophy</h2>
      <p className="mb-4">
        Good lab facilities and updated experiments are crucial for engineering colleges, but lack of resources often creates challenges. The Virtual Labs project aims to solve this by providing remote-access to simulation-based labs.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Access to online labs for colleges lacking lab facilities.</li>
        <li>Complementary access for colleges with existing labs.</li>
        <li>Training & skill-set enhancement through workshops.</li>
      </ul>
      <p className="mt-4">Virtual labs enable anytime, anywhere learning with a student-centric approach.</p>
    </div>
  )
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("objectives");

  return (
    <div className="max-w-[80%] mx-auto mt-10 rounded-lg w-full">
      {/* Tabs */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-white text-blue-600 border-b-2 border-gray-600"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-gray-800 ">{content[activeTab]}</div>
    </div>
  );
}
