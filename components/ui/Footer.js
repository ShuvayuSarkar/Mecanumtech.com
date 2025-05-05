import React from 'react';

const MecanumFooter = () => {
  return (
    <div className="w-full font-sans">
      {/* Main Footer Section - Dark Slate background matching the LiFePO4 section */}
      <div className="bg-slate-900 text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between max-w-6xl">
          {/* Company Description */}
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Mecanum Energitech is committed to providing innovative, sustainable energy solutions that help businesses reduce their environmental impact while ensuring reliable power supply.
            </p>
            <button className="px-6 py-2 text-base font-medium text-black bg-gradient-to-r from-green-500 to-blue-300 transition-all duration-300 rounded-full hover:opacity-90 cursor-pointer flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </button>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4 text-white">Our Products</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Solar Battery Systems
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Mini UPS Systems
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Custom Battery Packs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Industrial UPS Battery
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="flex items-center text-blue-100 hover:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Advanced Lithium Battery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:w-1/5">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <ul>
              <li className="mb-4 flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-blue-100">UNIT NO.202, GLOBE ESTATE, PLOT NO.C-9,<br />MIDC, PH I KHAMBALPADA ROAD,
                Dombvili, THANE-421306.</span>
              </li>
              <li className="mb-4 flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-blue-100">+91 93215 42997</span>
              </li>
              <li className="mb-4 flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-blue-100">info@mecanumtech.com</span>
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 bg-green-900/30 rounded-full flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section - Darker Slate */}
      <div className="bg-slate-950 text-blue-100 py-4 text-center">
        <p>© 2025 Mecanum Energitech. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default MecanumFooter;