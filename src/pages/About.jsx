import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-white   pt-20">
      <div className="w-[] shadow-lg rounded-lg p-8 md:p-12">
        <nav className="text-sm  text-gray-500 mb-6">
          <span className="hover:text-blue-500 cursor-pointer">Home</span> » 
          <span className="text-blue-500"> About Us</span>
        </nav>
        <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left mb-6">
          Overview
        </h1>
        <div className="w-full flex justify-center mb-8">
          <img 
            src="https://www.vlab.co.in/images/about.png" 
            alt="About Virtual Labs" 
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>

        <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">
          Virtual Labs project is an initiative of <strong>Ministry of Education (MoE), Government of India</strong> under 
          the aegis of <strong>National Mission on Education through Information and Communication Technology (NMEICT)</strong>. 
          This project is a consortium activity of twelve participating institutes, with <strong>IIT Delhi</strong> as the 
          coordinating institute. It represents a paradigm shift in ICT-based education and introduces remote-experimentation 
          for the first time.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg text-center md:text-left">
          Under the Virtual Labs project, <strong>over 100 Virtual Labs</strong> consisting of approximately 
          <strong> 700+ web-enabled experiments</strong> were designed for remote-operation and viewing.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 text-center md:text-left">
          The intended beneficiaries of the project are:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Students and Faculty Members of Science & Engineering Colleges without access to good lab facilities.</li>
          <li>High-school students, triggering their inquisitiveness and motivating them for higher studies.</li>
          <li>Researchers across institutes who can collaborate and share resources.</li>
          <li>Engineering colleges benefiting from content and related teaching resources.</li>
        </ul>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg text-center md:text-left">
          <strong>Virtual Labs</strong> do not require any additional infrastructural setup for conducting experiments. 
          The simulation-based experiments can be accessed remotely via the internet, making high-quality education 
          more accessible.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
