import React from "react";
import { announcements } from "../assets/assets";

const Announcements = ({ className }) => {
  

  return (
    <div
      className={`bg-white rounded-xl shadow-soft overflow-hidden w-full max-w-xl mx-auto ${className}`}
    >
      <div className="bg-gray-700 text-white p-4 sm:p-5">
        <h2 className="text-lg font-medium">Announcements</h2>
      </div>

      <div className="p-4 sm:p-5 space-y-3">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <p className="text-blue-800 text-sm">
              {announcement.text}
              {announcement.link && (
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {announcement.boldText || " Click here"}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
