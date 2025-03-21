'use client';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function ContactUs() {
  // Function to handle email click
  const handleConsultationRequest = (e) => {
    // You can customize the email subject and body here
    window.location.href = 'mailto:info@mecanumtech.com?subject=Consultation Request&body=I would like to request a consultation for my energy requirements.';
  };

  // Add intersection observer to handle highlighting in navbar
  useEffect(() => {
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          // When contact section is visible
          if (entry.isIntersecting) {
            // Find and update the navbar links
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
              // Remove active class from all links
              link.classList.remove('active', 'text-green-500');
              
              // Add active class to contact link
              if (link.getAttribute('href') === '#contact') {
                link.classList.add('active', 'text-green-500');
              }
            });
          }
        });
      }, { threshold: 0.3 }); // Adjust threshold as needed
      
      observer.observe(contactSection);
      
      return () => {
        observer.unobserve(contactSection);
      };
    }
  }, []);

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-teal-500 to-cyan-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Power Your Business with Clean Energy?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-lg mb-10 max-w-2xl mx-auto"
        >
          Contact our experts today for a customized solution that fits your
          specific energy requirements.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={handleConsultationRequest}
            className="px-8 py-4 bg-white text-teal-600 font-medium rounded-full hover:bg-gray-100 
            transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            Request a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}