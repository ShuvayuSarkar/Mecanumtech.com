'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { 
  LightBulbIcon as LeafIcon, 
  CogIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

export default function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-green-800 font-sans"
          >
            About Mecanum Energitech
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-1 w-16 bg-emerald-500 mx-auto mt-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden shadow-lg h-full sticky top-24"
          >
            <div className="relative h-full aspect-[4/3]">
              <Image
                src="/images/projects/about-us.jpg" 
                alt="Mecanum Energitech Laboratory"
                className="object-cover rounded-lg"
                fill
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <p className="text-lg text-green-700 mb-8 font-sans">
              We are a leading manufacturer and supplier of cutting-edge lithium-based energy solutions, committed to driving the transition to clean, sustainable energy systems worldwide.
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {/* Feature 1 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-full">
                  <LeafIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-sans">Eco-Friendly Solutions</h3>
                  <p className="text-green-700 font-sans">
                    Our products are designed with environmental sustainability at their core, reducing carbon footprints and promoting renewable energy adoption.
                  </p>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-full">
                  <CogIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-sans">Advanced Technology</h3>
                  <p className="text-green-700 font-sans">
                    We leverage the latest advancements in battery technology to provide solutions that are efficient, reliable, and built to last.
                  </p>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="p-3 bg-green-50 rounded-full">
                  <ShieldCheckIcon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2 font-sans">Quality Assurance</h3>
                  <p className="text-green-700 font-sans">
                    Every product undergoes rigorous testing and quality control to ensure it meets international standards and exceeds customer expectations.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <Link
                href="/story"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white
                font-bold rounded-xl transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02]
                shadow-sm hover:shadow-md text-lg font-sans"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
