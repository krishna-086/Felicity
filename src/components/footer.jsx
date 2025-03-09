import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="http://38.100.110.143/feedback/feedback.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-all"
                >
                  Lab Feedback Form
                </a>
              </li>
              <li>
                <a
                  href="http://38.100.110.143/labassessment/assessmentform.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-all"
                >
                  Lab Assessment Form
                </a>
              </li>
              <li>
                <a href="faq" className="hover:text-gray-400 transition-all">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="http://www.sakshat.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-all"
                >
                  Shakshat Portal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">About VLAB</h3>
            <ul className="space-y-2">
              <li>
                <a href="./" className="hover:text-gray-400 transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="about-us" className="hover:text-gray-400 transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact-us" className="hover:text-gray-400 transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* QR Code - Centers on small screens */}
          <div className="flex items-center justify-center sm:justify-start">
            <img
              src="https://www.vlab.co.in/images/qr-code.png"
              alt="QR Code"
              className="w-24 sm:w-28 rounded-lg shadow-md"
            />
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>support@vlab.co.in</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <span>Phone (L) - 011-26582050</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>
                  Wireless Research Lab <br />
                  Room No - 206/IIA <br />
                  Bharti School of Telecom <br />
                  IIT Delhi, Hauz Khas <br />
                  New Delhi - 110016
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Virtual Labs. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
