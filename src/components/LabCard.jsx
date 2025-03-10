import React, { useState } from "react";
import { BookOpen, FileText, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

const LabCard = ({ title, institution, referenceBooks, syllabusMapping }) => {
  const [showInfo, setShowInfo] = useState(null);

  const toggleInfo = (type) => (e) => {
    e.stopPropagation();
    setShowInfo(showInfo === type ? null : type);
  };

  const safeArray = (data) => (Array.isArray(data) ? data : []);

  const sections = [
    { type: "books", icon: BookOpen, label: "References", data: safeArray(referenceBooks) },
    { type: "syllabus", icon: FileText, label: "Syllabus", data: safeArray(syllabusMapping) },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">

      <div className="p-4 cursor-pointer">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-2 flex-1">
            <h3 className="text-gray-900 font-medium line-clamp-2 leading-tight">{title}</h3>
            <div className="flex items-center">
              <span className="text-base font-semibold bg-blue-100 text-[#1e3a8a] px-3 py-1 rounded">{institution}</span>
            </div>
          </div>
          <div className="flex items-center text-[#1e3a8a] bg-blue-100 p-1.5 rounded-full">
            <ExternalLink size={16} />
          </div>
        </div>
      </div>

      <div className="flex border-t border-gray-100">
        {sections.map(({ type, icon: Icon, label }) => (
          <button
            key={type}
            onClick={toggleInfo(type)}
            className={`flex items-center gap-1 py-2 px-3 text-xs font-medium flex-1 justify-center transition-colors ${
              showInfo === type ? "bg-blue-100 text-[#1e3a8a]" : "text-gray-600 hover:bg-gray-50"
            }`}
            title={`Toggle ${label}`}
          >
            <Icon size={14} />
            <span>{label}</span>
            {showInfo === type ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        ))}
      </div>

      {sections.map(({ type, label, data }) =>
        showInfo === type ? (
          <div key={type} className="p-3 bg-gray-50 border-t border-gray-100 animate-fade-in">
            <div className="text-xs text-gray-700">
              <p className="font-semibold">{label}</p>
              {data.length > 0 ? (
                <ul className="pl-4 space-y-1 list-disc">
                  {data.map((item, i) => (
                    <li key={i}>{typeof item === "string" ? item : JSON.stringify(item)}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No {label.toLowerCase()} found in record.</p>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default LabCard;
