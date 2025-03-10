import React, { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Accordion Heading (capitalized, medium weight) */}
      <div
        className="flex justify-between items-center py-2 cursor-pointer text-base font-medium uppercase text-gray-700 hover:text-[#064a73] px-2"
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <span>
          {open ? (
            <i className="fas fa-chevron-up text-base"></i>
          ) : (
            <i className="fas fa-chevron-down text-base"></i>
          )}
        </span>
      </div>
      {/* Accordion Content */}
      {open && (
        <ul className="px-2 space-y-1">
          {children}
        </ul>
      )}
    </div>
  );
};

export default AccordionItem;
