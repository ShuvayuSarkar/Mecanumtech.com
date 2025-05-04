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
              link.classList.remove('active', 'text-green-400');
              
              // Add active class to contact link
              if (link.getAttribute('href') === '#contact') {
                link.classList.add('active', 'text-green-400');
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
    <section id="contact" className="py-16 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 font-sans"
        >
          Ready to Power Your Business with Clean Energy?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto font-sans"
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
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-300 text-black font-medium rounded-full 
            hover:opacity-90 transition-all duration-300 text-lg font-sans"
          >
            Request a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}