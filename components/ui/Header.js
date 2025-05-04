'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navItems = [
  { name: 'About Us', href: '/#about' },
  { name: 'Our Products', href: '/#projects' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Technology', href: '/#technology' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      if (window.scrollY < 100) {
        setActiveItem('/');
        return;
      }
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveItem(`/#${sectionId}`);
        }
      });
    };
  
    if (window.location.hash) {
      setActiveItem(`/${window.location.hash}`);
    } else {
      setActiveItem('/');
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    
    const sectionId = href.split('#')[1];
    
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        history.pushState({}, '', `/#${sectionId}`);
        setActiveItem(`/#${sectionId}`);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState({}, '', '/');
      setActiveItem('/');
    }
    
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadBrochure = (e) => {
    e.preventDefault();
    window.open('/images/brochure.pdf', '_blank');
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="fixed w-full z-50 transition-all duration-300 font-sans"
    >
      <div 
        className="w-full transition-all duration-300 bg-[#0f1a30]"
      >
        <nav className="max-w-[1600px] mx-auto flex items-center justify-between px-8 py-3">
          <div className="flex-shrink-0 relative z-10">
            <Link 
              href="/"
              onClick={(e) => scrollToSection(e, '/')}
              className="block relative w-[160px] h-[55px]"
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

          <div className="hidden lg:flex items-center justify-center gap-6">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2 text-base font-medium rounded-lg transition-all duration-300 
                    ${hoveredItem === item.name ? 'text-green-400' : 'text-white'}
                  `}
                >
                  {item.name}
                </a>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="/brochure.pdf"
              onClick={handleDownloadBrochure}
              className="px-5 py-2 text-base font-medium text-black bg-gradient-to-r from-green-500 to-blue-300 
                transition-all duration-300 rounded-full hover:opacity-90 cursor-pointer"
            >
              Download Brochure
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-green-400"
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
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-700"
            >
              <div className="flex flex-col py-4 px-6 bg-[#0f1a30]">
                {navItems.map((item) => (
                  <div 
                    key={item.name}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300
                        ${hoveredItem === item.name ? 'text-green-400' : 'text-white'}
                      `}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-700">
                  <a
                    href="/brochure.pdf"
                    onClick={handleDownloadBrochure}
                    className="px-4 py-2.5 text-base font-medium text-black bg-gradient-to-r from-green-500 to-blue-300 
                      transition-all duration-300 rounded-full hover:opacity-90 text-center cursor-pointer"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}