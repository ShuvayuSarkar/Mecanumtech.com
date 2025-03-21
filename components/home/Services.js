'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Solar Battery Systems',
      description: 'High-capacity energy storage solutions for solar installations',
      icon: '⚡',
      href: '/products/solar'
    },
    {
      title: 'UPS Systems',
      description: 'Reliable power supply solutions for critical equipment',
      icon: '🔋',
      href: '/products/ups'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white font-inter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-400 drop-shadow-[0_2px_2px_rgba(0,128,0,0.3)] font-inter tracking-tight">Our Products</h2>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-300 drop-shadow-sm font-light italic font-inter">Innovative energy solutions for modern needs</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-green-200 hover:border-green-500 transition-all duration-300 font-inter"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500 font-inter">{service.title}</h3>
              <p className="text-green-700 mb-4 font-inter">{service.description}</p>
              <Link
                href={service.href}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium font-inter"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}