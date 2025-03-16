// components/home/Testimonials.js
'use client';
import { motion } from 'framer-motion';

export default function Testimonials() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent font-light italic drop-shadow-sm">
            Trusted by businesses and homeowners alike
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-green-300/50 hover:shadow-xl transition-all duration-500 border border-green-200 p-8"
          >
            <div className="mb-4">
              <p className="text-gray-600 italic">"The solar battery system has been a game-changer for our business. We've seen a significant reduction in energy costs."</p>
            </div>
            <div className="flex items-center">
              <div className="ml-4">
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-gray-500 text-sm">CEO, TechCorp</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-green-300/50 hover:shadow-xl transition-all duration-500 border border-green-200 p-8"
          >
            <div className="mb-4">
              <p className="text-gray-600 italic">"The UPS system saved our critical equipment during an unexpected power outage. Highly recommend!"</p>
            </div>
            <div className="flex items-center">
              <div className="ml-4">
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-gray-500 text-sm">IT Manager, DataSolutions</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold shadow-md hover:shadow-lg hover:shadow-green-300/30">
            View All Testimonials
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