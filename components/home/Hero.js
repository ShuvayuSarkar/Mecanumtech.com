'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Globe from './Globe';
import { QuoteFormModal } from './QuoteFormModal';

export default function Hero() {
  // State for controlling modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 leading-tight mb-6">
              Powering The Future With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Green Energy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-green-700 mb-8">
              Innovative lithium-based energy solutions that are clean, efficient, and sustainable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white
                font-bold rounded-xl transition-all duration-300 hover:from-green-600 hover:to-emerald-700 hover:scale-[1.02]
                shadow-sm hover:shadow-md text-lg"
              >
                <CalendarIcon className="w-5 h-5" />
                Get a Quote
              </button>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700
                font-bold rounded-xl transition-all duration-300 hover:bg-green-50 border-2 border-green-200
                hover:border-green-500 hover:text-emerald-600 text-lg"
              >
                Explore Products
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Space for Globe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[500px] relative"
          >
            <Globe />
          </motion.div>
        </div>
      </div>

      {/* Quote Form Modal */}
      <QuoteFormModal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
}