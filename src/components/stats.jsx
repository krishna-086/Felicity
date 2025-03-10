import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <a
              href="https://centraloutreach.vlabs.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.vlab.co.in/images/Outreach_logo_main_1000dpi.png"
                className="w-48 md:w-56 transition-transform duration-300 hover:scale-105"
                alt="Outreach Logo"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center w-full">
        
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-gray-600">Website PageViews</p>
              <p className="text-2xl font-semibold text-gray-800">81M+</p>
            </div>

 
            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-gray-600">Participants Attended</p>
              <p className="text-2xl font-semibold text-gray-800">8.5M+</p>
            </div>


            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-gray-600">Nodal Centers</p>
              <p className="text-2xl font-semibold text-gray-800">1,531</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all duration-300">
              <p className="text-sm text-gray-600">Usage</p>
              <p className="text-2xl font-semibold text-gray-800">4.6M+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
