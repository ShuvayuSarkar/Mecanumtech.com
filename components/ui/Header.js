'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const navItems = [
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Project Management', href: '/services/project-management' },
      { name: 'Cost Management', href: '/services/cost-management' },
      { name: 'EHS Management', href: '/services/ehs-management' },
      { name: 'Quality Audits', href: '/services/quality-audits' },
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('/');
  const [openDropdown, setOpenDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    setActiveItem(window.location.pathname);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 px-4 ${
        isScrolled 
          ? 'mt-0' 
          : 'mt-2'
      }`}
    >
      {/* Increased max-width to 1600px */}
      <div className={`max-w-[1600px] mx-auto rounded-xl transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg'
          : 'bg-white/50 backdrop-blur-lg shadow-md'
      }`}>
        <nav className="flex items-center justify-between px-8 py-4"> {/* Increased horizontal padding */}
          {/* Logo section with adjusted size */}
          <div className="flex-shrink-0 relative z-10 ml-4"> {/* Reduced left margin */}
            <Link href="/" className="block relative w-[180px] h-[65px]"> {/* Increased logo size */}
              <Image
                src="/images/projects/logo.jpeg"
                alt="Logo"
                fill
                sizes="180px"
                className="object-contain object-left"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation with increased spacing */}
          <div className="hidden lg:flex items-center justify-center gap-6"> {/* Increased gap to 6 */}
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className={`px-5 py-2.5 text-base font-bold rounded-lg transition-all duration-300 inline-flex items-center gap-1
                        ${activeItem.startsWith(item.href)
                          ? 'text-primary bg-primary/10' 
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                        }`}
                      onClick={() => setOpenDropdown(openDropdown === item.name ? '' : item.name)}
                    >
                      {item.name}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-1 w-56 origin-top-left transition-all duration-200 opacity-0 translate-y-2 invisible 
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
                      <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden">
                        <div className="p-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300
                                ${activeItem === subItem.href
                                  ? 'text-primary bg-primary/10'
                                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                                }`}
                              onClick={() => {
                                setActiveItem(subItem.href);
                                setOpenDropdown('');
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-5 py-2.5 text-base font-bold rounded-lg transition-all duration-300 
                      ${activeItem === item.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                      }`}
                    onClick={() => setActiveItem(item.href)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons with increased spacing */}
          <div className="hidden lg:flex items-center gap-4"> {/* Increased gap to 4 */}
            <Link
              href="/login"
              className="px-5 py-2.5 text-base font-bold text-gray-700 hover:text-gray-900 
                transition-all duration-300 rounded-lg hover:bg-gray-50/50"
            >
              Sign In
            </Link>
            <Link
              href="/request-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200"
            >
              <CurrencyDollarIcon className="w-4 h-4" />
              Get Quote
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

        {/* Mobile Menu (no changes needed here) */}
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
                    {item.dropdown ? (
                      <>
                        <button
                          className={`w-full px-4 py-3 text-base font-bold rounded-lg transition-all duration-300 text-left
                            flex items-center justify-between
                            ${activeItem.startsWith(item.href)
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                            }`}
                          onClick={() => setOpenDropdown(openDropdown === item.name ? '' : item.name)}
                        >
                          {item.name}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.name ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-300
                                  ${activeItem === subItem.href
                                    ? 'text-primary bg-primary/10'
                                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                                  }`}
                                onClick={() => {
                                  setActiveItem(subItem.href);
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown('');
                                }}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-base font-bold rounded-lg transition-all duration-300
                          ${activeItem === item.href 
                            ? 'text-primary bg-primary/10' 
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50/50'
                          }`}
                        onClick={() => {
                          setActiveItem(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    )}
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
                  <Link
                    href="/request-quote"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white 
                      text-sm font-bold rounded-lg transition-all duration-300 hover:bg-primary-dark"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <CurrencyDollarIcon className="w-4 h-4" />
                    Request Quote
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