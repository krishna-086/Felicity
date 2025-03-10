import React from "react";

const Announcements = () => {
  const announcements = [
    {
      text: "Various projects/ICT initiatives of the Ministry of Education are available.",
      link: "https://www.education.gov.in/hi/ict-initiatives",
      boldText: " Click here for more details."
    },
    {
      text: "See the tutorial for using Flash-based Labs through Virtual Box.",
      link: "https://docs.google.com/document/d/1mX0YMtFk4Dxn_vQBJmUJ8pIOPE2hVf6AscJMdLWd9k8/edit#"
    },
    {
      text: "To enroll as a Nodal Center, kindly submit the Expression of Interest (EOI) Form 2025.",
      link: "https://drive.google.com/file/d/1FGJ21hQmJ40gtPh264ZS6QDtT11hSTTv/view?usp=sharing"
    }
  ];

  return (
    <div className="w-full md:w-1/3 p-6 bg-white rounded-2xl shadow-lg min-h-[360px] text-center transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">📢 Announcements</h2>
      <div className="w-4/5 mx-auto min-h-[290px] max-h-[290px] overflow-y-auto scrollbar-hidden">
        {announcements.length > 0 ? (
          <ul className="text-left list-disc list-inside space-y-4">
            {announcements.map((announcement, index) => (
              <li key={index} className="text-sm leading-relaxed">
                <a
                  href={announcement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline transition-all duration-200 hover:text-blue-800"
                >
                  {announcement.text}
                </a>
                {announcement.boldText && (
                  <span className="font-bold text-gray-900">{announcement.boldText}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No announcements at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Announcements;
