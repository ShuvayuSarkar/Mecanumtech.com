"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

export default function Hero() {
  // State for controlling modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
    ssr: false,
  });
  
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 20.5937, lng: 78.9629 }, // Center on India
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  
  // Define major Indian cities with their coordinates
  const indianCities = [
    { name: "Delhi", lat: 28.6139, lng: 77.2090 },
    { name: "Mumbai", lat: 19.0760, lng: 72.8777 },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
    { name: "Chennai", lat: 13.0827, lng: 80.2707 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
    { name: "Hyderabad", lat: 17.3850, lng: 78.4867 },
    { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
    { name: "Pune", lat: 18.5204, lng: 73.8567 },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
    { name: "Lucknow", lat: 26.8467, lng: 80.9462 },
    { name: "Surat", lat: 21.1702, lng: 72.8311 },
    { name: "Kochi", lat: 9.9312, lng: 76.2673 },
    { name: "Goa", lat: 15.2993, lng: 74.1240 },
  ];
  
  // Global destinations
  const globalDestinations = [
    { name: "New York", lat: 40.7128, lng: -74.0060 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729 },
    { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
    { name: "Moscow", lat: 55.7558, lng: 37.6173 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 },
    { name: "Berlin", lat: 52.5200, lng: 13.4050 },
    { name: "Dubai", lat: 25.2048, lng: 55.2708 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
    { name: "Toronto", lat: 43.6532, lng: -79.3832 },
    { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
    { name: "Mexico City", lat: 19.4326, lng: -99.1332 },
    { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
    { name: "Nairobi", lat: -1.2921, lng: 36.8219 },
    { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
    { name: "Bangkok", lat: 13.7563, lng: 100.5018 },
    { name: "Cairo", lat: 30.0444, lng: 31.2357 },
    { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
    { name: "Johannesburg", lat: -26.2041, lng: 28.0473 },
    { name: "Stockholm", lat: 59.3293, lng: 18.0686 },
    { name: "Seoul", lat: 37.5665, lng: 126.9780 },
    { name: "Manila", lat: 14.5995, lng: 120.9842 },
    { name: "Amsterdam", lat: 52.3676, lng: 4.9041 },
    { name: "Rome", lat: 41.9028, lng: 12.4964 },
    { name: "Barcelona", lat: 41.3851, lng: 2.1734 },
    { name: "Zurich", lat: 47.3769, lng: 8.5417 },
    { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { name: "Vancouver", lat: 49.2827, lng: -123.1207 },
    { name: "Vienna", lat: 48.2082, lng: 16.3738 },
    { name: "Auckland", lat: -36.8485, lng: 174.7633 },
    { name: "Kuala Lumpur", lat: 3.1390, lng: 101.6869 },
    { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
    { name: "Lima", lat: -12.0464, lng: -77.0428 },
    { name: "Helsinki", lat: 60.1699, lng: 24.9384 },
    { name: "Santiago", lat: -33.4489, lng: -70.6693 },
    { name: "Athens", lat: 37.9838, lng: 23.7275 },
  ];
  
  // Generate arcs - all originating from Indian cities
  const sampleArcs = [];
  
  // Helper function to get random item from array
  const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];
  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  
  // Create arcs for each order group (1-14 as in original)
  for (let order = 1; order <= 14; order++) {
    // Create 3 arcs per order group
    for (let i = 0; i < 3; i++) {
      const sourceCity = getRandomItem(indianCities);
      const destCity = getRandomItem(globalDestinations);
      
      sampleArcs.push({
        order: order,
        startLat: sourceCity.lat,
        startLng: sourceCity.lng,
        endLat: destCity.lat,
        endLng: destCity.lng,
        arcAlt: Math.random() * 0.6 + 0.1, // Random altitude between 0.1 and 0.7
        color: getRandomColor(),
      });
    }
  }
  
  // Add connections between Indian cities (keeping lower altitude for these)
  for (let i = 0; i < indianCities.length - 1; i++) {
    const order = Math.floor(Math.random() * 14) + 1; // Random order between 1-14
    
    sampleArcs.push({
      order: order,
      startLat: indianCities[i].lat,
      startLng: indianCities[i].lng,
      endLat: indianCities[i + 1].lat,
      endLng: indianCities[i + 1].lng,
      arcAlt: 0.1, // Lower altitude for domestic connections
      color: getRandomColor(),
    });
  }
  
  // Connect the major Indian cities to multiple global destinations
  indianCities.slice(0, 5).forEach((city, idx) => {
    for (let i = 0; i < 3; i++) {
      const destIdx = (idx * 3 + i) % globalDestinations.length;
      const destCity = globalDestinations[destIdx];
      const order = Math.floor(Math.random() * 7) + 8; // Orders 8-14
      
      sampleArcs.push({
        order: order,
        startLat: city.lat,
        startLng: city.lng,
        endLat: destCity.lat,
        endLng: destCity.lng,
        arcAlt: 0.3 + (idx * 0.1), // Varying altitudes
        color: getRandomColor(),
      });
    }
  });

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full z-20 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            {/* Company logo or name could go here instead */}
          </div>
          <div className="space-x-6 text-sm">
            {/* Navigation links removed */}
          </div>
        </div>
      </nav>
      
      {/* Main Content - Split Layout */}
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side - Text Content */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-16 py-12">
          <div className="text-green-400 mb-8 text-base font-medium">The Future of Energy storage</div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-10">
            Powering The Future With <span className="block">Clean Energy</span>
          </h1>
          <p className="text-blue-100 mb-12 max-w-lg text-lg">
            Innovative lithium based-based ennergy solutions that are clean, effecient, and sustainable.
          </p>
          <div className="mt-5">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Right Side - Globe Visualization */}
        <div className="relative w-full lg:w-1/2 h-full">
          <div className="absolute inset-0 z-0">
            <World
              globeConfig={globeConfig}
              data={sampleArcs}
            />
          </div>
        </div>
      </div>
      
      {/* Modal Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md text-gray-800"
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-md text-gray-800"
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-md text-gray-800"
                  rows="4"
                  placeholder="How can we help you?" 
                ></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}