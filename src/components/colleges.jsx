import React, { useEffect, useRef } from "react";

const institutes = [
  { name: "NITK SURATHKAL", logo: "https://www.vlab.co.in/Inst_logo/nit-surathkal.png" },
  { name: "COEP TECHNOLOGICAL UNIVERSITY PUNE", logo: "https://www.vlab.co.in/Inst_logo/coe-pune-logo.png" },
  { name: "IIT KHARAGPUR", logo: "https://www.vlab.co.in/Inst_logo/iit-kharagpur.png" },
  { name: "IIT ROORKEE", logo: "https://www.vlab.co.in/Inst_logo/iit-roorkee.jpg" },
  { name: "IIT GUWAHATI", logo: "https://www.vlab.co.in/Inst_logo/iit-guwahati.png" },
  { name: "IIT DELHI", logo: "https://www.vlab.co.in/Inst_logo/iit-delhi.png" },
  { name: "IIT BOMBAY", logo: "https://www.vlab.co.in/Inst_logo/iit-bombay.png" },
  { name: "IIT KANPUR", logo: "https://www.vlab.co.in/Inst_logo/iit-kanpur.png" },
];

const ScrollingCarousel = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let index = 0;
    
    const scrollItems = () => {
      if (scrollContainer) {
        index++;
        scrollContainer.style.transition = "transform 1.2s ease-in-out";
        scrollContainer.style.transform = `translateX(-${index * 15}%)`;

        if (index >= institutes.length) {
          setTimeout(() => {
            scrollContainer.style.transition = "none";
            scrollContainer.style.transform = "translateX(0)";
            index = 0;
          }, 1400); 
        }
      }
    };

    const interval = setInterval(scrollItems, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[90%] mx-auto bg-white py-8 px-6 ">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Participating Institutes
      </h2>
      <div className="overflow-hidden w-full relative ">
        <div ref={scrollRef} className="flex whitespace-nowrap">
          {institutes.concat(institutes).map((institute, index) => (
            <div key={index} className="flex-shrink-0 mx-2 text-center w-48">
              <img
                src={institute.logo}
                alt={institute.name}
                className="h-24 w-auto mx-auto object-contain"
              />
              <a
                href={`https://www.vlab.co.in/participating-institute-${institute.name.toLowerCase().replace(/\s+/g, "-")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-gray-800 mt-2 block transition-all duration-300 hover:text-blue-600"
                style={{
                  maxWidth: "120%",
                  wordWrap: "break-word",
                  display: "inline-block",
                  whiteSpace: "normal",
                }}
              >
                {institute.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCarousel;
