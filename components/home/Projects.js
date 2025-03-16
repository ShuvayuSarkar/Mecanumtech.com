'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Solar Battery Installation',
      category: 'Residential',
      image: '/images/projects/solar-battery.jpg'
    },
    {
      title: 'Industrial UPS System',
      category: 'Industrial',
      image: '/images/projects/mini-ups.jpg'
    },
    {
      title: 'Custom Battery Pack',
      category: 'Commercial',
      image: '/images/projects/battery-pack.jpg'
    },
    {
      title: 'Grid Storage Solution',
      category: 'Utility',
      image: '/images/projects/grid-storage.jpg'
    }
  ];

  return (
    <section className="py-20 bg-white">
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
          <p className="text-xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent font-light italic drop-shadow-sm">
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
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden rounded-xl shadow-lg hover:shadow-green-300/50 hover:shadow-xl transition-all duration-500 border border-green-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-green-300 text-sm font-medium mb-2">{project.category}</p>
                    <h3 className="text-white text-xl font-semibold">{project.title}</h3>
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
          <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg hover:shadow-green-300/30">
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
