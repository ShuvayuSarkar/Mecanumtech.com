"use client";
import { useState } from "react";
import Image from "next/image";

export default function LiFePO4Section() {
  // State for controlling modal visibility (if needed)
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  return (
    <section className="w-full py-16 bg-slate-900">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-12 lg:mb-0">
            <div className="text-green-400 mb-4 text-base font-medium">ADVANCED ENERGY STORAGE</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              LiFePO4 IS THE <span className="block">BEST BATTERY TECHNOLOGY</span>
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Discover our revolutionary lithium iron phosphate batteries 
              that combine unmatched safety, efficiency, and longevity
              for all your energy storage needs.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Superior Safety Profile</h3>
                  <p className="text-blue-100">Thermal and chemical stability prevents fire hazards even under extreme conditions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Extended Cycle Life</h3>
                  <p className="text-blue-100">Over 4000 charge cycles at 80% depth of discharge, far outperforming traditional batteries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-900/30 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Environmentally Friendly</h3>
                  <p className="text-blue-100">Made with non-toxic, abundant materials that can be recycled at end-of-life.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <button
                onClick={() => setIsSpecsOpen(true)}
                className="px-8 py-3 text-base font-medium text-black bg-gradient-to-r from-green-500 to-blue-300 
                transition-all duration-300 rounded-full hover:opacity-90 cursor-pointer"
              >
                View Specifications
              </button>
            </div>
          </div>
          
          {/* Right Side - Battery Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/projects/Battery.png"
                alt="LiFePO4 Battery"
                width={500}
                height={500}
                className="object-contain mx-auto"
                onError={(e) => {
                  // Fallback if image doesn't load
                  e.target.src = "https://via.placeholder.com/500?text=LiFePO4+Battery";
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Technical Specifications Modal */}
      {isSpecsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-3xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">LiFePO4 Battery Specifications</h2>
              <button 
                onClick={() => setIsSpecsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-gray-800 mb-2">Technical Specs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Nominal Voltage:</span>
                    <span className="font-medium">12.8V / 25.6V</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Capacity Range:</span>
                    <span className="font-medium">50Ah - 300Ah</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Cycle Life:</span>
                    <span className="font-medium">≥4000 cycles</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Operating Temperature:</span>
                    <span className="font-medium">-20°C to 60°C</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Self-discharge Rate:</span>
                    <span className="font-medium">&lt;3% per month</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg text-gray-800 mb-2">Applications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Solar Energy Storage
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Backup Power Systems
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    RV and Marine Power
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Electric Vehicles
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Telecom Backup Systems
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button 
                onClick={() => setIsSpecsOpen(false)}
                className="px-6 py-2 text-base font-medium text-black bg-gradient-to-r from-green-500 to-blue-300 
                transition-all duration-300 rounded-full hover:opacity-90 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}