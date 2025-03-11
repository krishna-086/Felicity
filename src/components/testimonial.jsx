import React, { useState } from "react";
import { testimonials } from "../assets/assets";



const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [expanded, setExpanded] = useState(false);

  const showMoreTestimonials = () => {
    setVisibleCount(testimonials.length);
    setExpanded(true);
  };

  const showLessTestimonials = () => {
    setVisibleCount(3);
    setExpanded(false);
  };

  return (
    <div className="py-12 px-6 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {testimonials.slice(0, visibleCount).map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 opacity-100 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <p className="text-gray-700 italic text-sm leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="mt-4">
              <p className="text-lg font-semibold text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-500">{testimonial.designation}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        {visibleCount < testimonials.length && (
          <button
            onClick={showMoreTestimonials}
            className="px-6 py-2 bg-[#085d90] text-white font-semibold rounded-lg shadow-md hover:bg-[#085d90] transition duration-300"
          >
            Show More
          </button>
        )}
        {expanded && (
          <button
            onClick={showLessTestimonials}
            className="ml-4 px-6 py-2 bg-[#085d90] text-white font-semibold rounded-lg shadow-md hover:bg-[#085d90] transition duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
