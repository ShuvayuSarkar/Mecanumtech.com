'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Solar Battery Installation',
      category: 'Residential',
      image: '/images/projects/solar-battery.jpg',
      description: 'Reliable energy storage solution for residential solar systems.'
    },
    {
      title: 'Industrial UPS System',
      category: 'Industrial',
      image: '/images/projects/mini-ups.jpg',
      description: 'Uninterrupted power supply systems for critical industrial applications.'
    },
    {
      title: 'Custom Battery Pack',
      category: 'Commercial',
      image: '/images/projects/battery-pack.jpg',
      description: 'Tailored energy storage solutions for commercial buildings and facilities.'
    },
    {
      title: 'Grid Storage Solution',
      category: 'Utility',
      image: '/images/projects/grid-storage.jpg',
      description: 'Large-scale energy storage for grid stability and peak shaving.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent animate-gradient drop-shadow-[0_2px_2px_rgba(0,128,0,0.3)] font-sans tracking-tight">
            Featured Products
          </h2>
          <p className="text-xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent font-light italic drop-shadow-sm font-sans">
            Explore our successful energy solution implementations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300 overflow-hidden border border-green-100">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 m-2 rounded-full text-xs font-medium font-sans">
                    {project.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 font-sans">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 font-sans">{project.description}</p>
                  <div className="flex justify-end">
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center transition-colors duration-300 font-sans">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg hover:shadow-green-300/30 font-sans">
            View All Products
          </button>
        </motion.div>
      </div>
      
      <style jsx global>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
}