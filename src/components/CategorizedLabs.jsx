import React, { useState } from "react";
import { ChevronDown, ChevronUp, Folder, FolderOpen } from "lucide-react";
import LabCard from "./LabCard";

const CategorizedLabs = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState(
    Object.fromEntries(categories.map((category) => [category.name, false]))
  );

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="space-y-5">
      {categories.map((category) => (
        <div
          key={category.name}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
          <div
            className={`flex items-center justify-between p-3 cursor-pointer transition-all duration-200 ${
              expandedCategories[category.name]
                ? "bg-[#1e3a8a] text-white"
                : "bg-white text-gray-800 hover:bg-gray-50"
            }`}
            onClick={() => toggleCategory(category.name)}
          >
            <div className="flex items-center gap-2">
              {expandedCategories[category.name] ? (
                <FolderOpen className="h-5 w-5" />
              ) : (
                <Folder className="h-5 w-5 text-[#1e3a8a]" />
              )}
              <h2 className="text-base font-medium">{category.name}</h2>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2 py-0.5 p-5 rounded-full ${
                  expandedCategories[category.name]
                    ? "bg-white/20"
                    : "bg-blue-100 text-[#1e3a8a]"
                }`}
              >
                {category.labs.length} labs
              </span>
              {expandedCategories[category.name] ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          </div>

          <div
            className={`transition-all duration-300 grid gap-4 p-4 ${
              expandedCategories[category.name]
                ? "opacity-100 max-h-[5000px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                : "opacity-0 max-h-0 overflow-hidden p-0"
            }`}
          >
            {category.labs.map((lab, index) => (
              <LabCard key={index} {...lab} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorizedLabs;
