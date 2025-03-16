'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : ''}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="relative w-40 h-16">
          <Image
            src="/images/projects/logo.jpeg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link href="/products" className="text-gray-700 hover:text-primary">Products</Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-white p-4"
          >
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/products" className="block py-2">Products</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}