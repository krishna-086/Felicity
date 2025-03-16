import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/footer";


const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-white   mt-15">
      <div className="w-[] shadow-lg rounded-lg p-8 md:p-12">
        <h1 className="text-4xl m-4 font-bold text-gray-800 text-center sm:w-[95%] mb-8">
          Overview
        </h1>
        

        <p className="text-gray-700 leading-relaxed text-lg text-justify sm:w-[95%]">
          Virtual Labs project is an initiative of <strong>Ministry of Education (MoE), Government of India</strong> under 
          the aegis of <strong>National Mission on Education through Information and Communication Technology (NMEICT)</strong>. 
          This project is a consortium activity of twelve participating institutes, with <strong>IIT Delhi</strong> as the 
          coordinating institute. It represents a paradigm shift in ICT-based education and introduces remote-experimentation 
          for the first time.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg text-justify sm:w-[95%]">
          Under the Virtual Labs project, <strong>over 100 Virtual Labs</strong> consisting of approximately 
          <strong> 700+ web-enabled experiments</strong> were designed for remote-operation and viewing.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 text-justify sm:w-[95%]">
          The intended beneficiaries of the project are:
        </h2>
        <ul className="list-disc pl-6 text-gray-700 text-lg space-y-2">
          <li>Students and Faculty Members of Science & Engineering Colleges without access to good lab facilities.</li>
          <li>High-school students, triggering their inquisitiveness and motivating them for higher studies.</li>
          <li>Researchers across institutes who can collaborate and share resources.</li>
          <li>Engineering colleges benefiting from content and related teaching resources.</li>
        </ul>

        <p className="mt-6 text-gray-700 leading-relaxed text-lg text-justify sm:w-[95%]">
          <strong>Virtual Labs</strong> do not require any additional infrastructural setup for conducting experiments. 
          The simulation-based experiments can be accessed remotely via the internet, making high-quality education 
          more accessible.
        </p>
        <div className="w-full flex justify-center mb-8">
          <img 
            src="https://www.vlab.co.in/images/about.png" 
            alt="About Virtual Labs" 
            className="w-full max-w-3xl rounded-lg shadow-md"
          />
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
