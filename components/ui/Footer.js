'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="pr-6"
          >
            <p className="text-gray-300 mb-6">
              Mecanum Energitech is committed to providing innovative, sustainable energy solutions that help 
              businesses reduce their environmental impact while ensuring reliable power supply.
            </p>
            <Link 
              href="/brochure" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-teal-800 rounded-md hover:bg-teal-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Products */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/solar-battery" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Solar Battery Systems
                </Link>
              </li>
              <li>
                <Link href="/products/mini-ups" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Mini UPS Systems
                </Link>
              </li>
              <li>
                <Link href="/products/battery-packs" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Custom Battery Packs
                </Link>
              </li>
              <li>
                <Link href="/products/industrial-ups" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Industrial UPS Battery
                </Link>
              </li>
              <li>
                <Link href="/products/lithium-battery" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <span>›</span> Advanced Lithium Battery
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Us Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8"
        >
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">
                123 Energy Park, Tech District<br />
                Bangalore, Karnataka, India
              </p>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-6 w-6 text-teal-400 flex-shrink-0" />
              <p className="text-gray-300">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-6 w-6 text-teal-400 flex-shrink-0" />
              <p className="text-gray-300">info@mecanumenergitech.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <ClockIcon className="h-6 w-6 text-teal-400 flex-shrink-0" />
            <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 pt-8 border-t border-teal-800 text-center text-gray-400"
        >
          <p>© {new Date().getFullYear()} Mecanum Energitech. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}