'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItems = [
  { name: 'About Us', href: '/#about' },
  //{ name: 'Services', href: '/#services' },
  { name: 'Our Products', href: '/#projects' },
  { name: 'Contact Us', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100; // Offset for header height
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveItem(`/#${sectionId}`);
        }
      });
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      setActiveItem(`/${window.location.hash}`);
    } else {
      setActiveItem('/');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (e, href) => {
    e.preventDefault();
    
    // Extract the section ID from the href
    const sectionId = href.split('#')[1];
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Smooth scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Update URL without causing page reload
        history.pushState({}, '', `/#${sectionId}`);
        
        // Update active item
        setActiveItem(`/#${sectionId}`);
      }
    } else {
      // If no section ID (home), scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState({}, '', '/');
      setActiveItem('/');
    }
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 px-4 ${
        isScrolled 
          ? 'mt-4' 
          : 'mt-6'
      }`}
    >
      {/* Increased max-width to 1600px */}
      <div 
        className={`max-w-[1600px] mx-auto rounded-xl transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl'
            : 'bg-white/50 backdrop-blur-lg'
        }`}
        style={{
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.1), 0 0 8px rgba(0, 0, 0, 0.06)'
        }}
      >
        <nav className="flex items-center justify-between px-8 py-3"> {/* Reduced vertical padding from py-4 to py-3 */}
          {/* Logo section with adjusted size */}
          <div className="flex-shrink-0 relative z-10 ml-4"> {/* Reduced left margin */}
            <Link 
              href="/"
              onClick={(e) => scrollToSection(e, '/')}
              className="block relative w-[160px] h-[55px]" /* Reduced height from 65px to 55px and width from 180px to 160px */
            >
              <Image
                src="/images/projects/logo.png"
                alt="Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation with increased spacing and INCREASED FONT SIZE */}
          <div className="hidden lg:flex items-center justify-center gap-6"> {/* Increased gap to 6 */}
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-5 py-2 text-lg font-bold rounded-lg transition-all duration-300 
                    ${activeItem === item.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                    }`}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          {/* Sign In Button Only */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="px-5 py-2 text-base font-bold text-gray-700 hover:text-gray-900 
                transition-all duration-300 rounded-lg hover:bg-gray-50/50"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu with INCREASED FONT SIZE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="flex flex-col py-4 px-6 bg-white/50 backdrop-blur-lg rounded-b-xl">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block px-4 py-3 text-lg font-bold rounded-lg transition-all duration-300
                        ${activeItem === item.href 
                          ? 'text-primary bg-primary/10' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                        }`}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href="/login"
                    className="px-4 py-2.5 text-base font-bold text-gray-700 hover:text-gray-900 
                      transition-all duration-300 rounded-lg hover:bg-gray-50/50 text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}