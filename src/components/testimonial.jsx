import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "One of the primary advantages associated with the utilization of Virtual Laboratory is the ability for students to engage in self-paced learning...",
    name: "Dr. Mohd Zubair Ansari",
    designation: "National Institute of Technology Srinagar",
  },
  {
    quote:
      "Virtual Labs are implemented in USAR, GGSIPU and are useful in understanding the theories and concepts of science...",
    name: "Dr. Khyati Chopra",
    designation: "USAR, GGSIPU",
  },
  {
    quote:
      "Virtual Labs is the knowledge seed for the students of the science and technology domain...",
    name: "Dr. Pankaj K. Goswami",
    designation: "Amity University Uttar Pradesh, Lucknow",
  },
  {
    quote:
      "Virtual Labs help bridge the gap between theoretical knowledge and practical application...",
    name: "Dr. A. K. Verma",
    designation: "IIT Delhi",
  },
  {
    quote:
      "With Virtual Labs, institutions can expand access to high-quality laboratory experiences...",
    name: "Prof. Suresh Kumar",
    designation: "Delhi University",
  },
];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreTestimonials = () => {
    setVisibleCount((prevCount) =>
      prevCount + 3 > testimonials.length ? testimonials.length : prevCount + 3
    );
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
            className="p-6 bg-white rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 opacity-100 animate-fadeInUp"
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
      {visibleCount < testimonials.length && (
        <div className="mt-6 text-center">
          <button
            onClick={showMoreTestimonials}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
