'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CalendarIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Globe from './Globe';
import { QuoteFormModal } from './QuoteFormModal'; // Import the form modal component

export default function Hero() {
  // State for controlling modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Typewriter effect for energy types
  const TypewriterText = () => {
    // Move words outside the effect dependency with useMemo
    const words = React.useMemo(() => ["Clean Fuel", "Green Energy"], []);
    const [currentWord, setCurrentWord] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      let timeout;
      const targetWord = words[currentIndex % words.length];
      
      if (!isDeleting) {
        // Typing effect
        timeout = setTimeout(() => {
          setCurrentWord(targetWord.slice(0, currentWord.length + 1)); // Add one more character
          if (currentWord.length === targetWord.length) {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000);
          }
        }, 150); // Typing speed
      } else {
        // Deleting effect
        timeout = setTimeout(() => {
          setCurrentWord(targetWord.slice(0, currentWord.length - 1)); // Remove one character
          if (currentWord.length === 0) {
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
          }
        }, 100); // Deleting speed
      }
      
      return () => clearTimeout(timeout); // Cleanup timeout on component unmount or when state changes
    }, [currentWord, currentIndex, isDeleting, words]);

    return (
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
        {currentWord}
        <span className="animate-pulse text-emerald-500">|</span>
      </span>
    );
  };

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
              Powering The Future With <TypewriterText />
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