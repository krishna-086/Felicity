import React from "react";
import { useParams } from "react-router-dom";
import { LabCategories } from "../assets/assets";
import CategorizedLabs from "../components/CategorizedLabs";
import Navbar from "../components/Navbar";
import { BookText } from "lucide-react";
import Announcements from "../components/annoncement";

const LabPage = () => {
  const { category } = useParams();
  const selectedCategory = LabCategories.find((lab) => lab.name === category);

  if (!selectedCategory) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2>Category not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 sm:p-10 bg-gradient-to-b from-blue-50 to-white mt-20">

        <nav className="text-sm text-gray-500 mb-6">
          <span className="hover:text-blue-500 cursor-pointer">Home</span> »
          <span className="text-blue-500">{selectedCategory.name}</span>
        </nav>

        <div className="flex items-center gap-2 mb-6">
          <div className="bg-[#1e3a8a] p-2 rounded-full">
            <BookText className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-gray-900">{selectedCategory.name}</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
          
            <CategorizedLabs categories={selectedCategory.labs} />
          </div>
          <div className="lg:w-1/3">
            <Announcements />
          </div>
        </div>
      </div>
    </>
  );
};

export default LabPage;
