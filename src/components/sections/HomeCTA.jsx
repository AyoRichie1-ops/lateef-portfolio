import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-indigo-500 rounded-2rem p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Subtle Decorative Circles */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600 rounded-full opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-700 rounded-full opacity-50" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to build something <br /> extraordinary?
          </h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-xl mx-auto">
            I’m currently available for new projects and collaborations. 
            Let’s turn your vision into a high-performance reality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-indigo-50 transition-colors w-full sm:w-auto justify-center"
            >
              Get in Touch <Mail size={20} />
            </Link>
            <Link 
              to="/approach"
              className="text-white border border-indigo-400 px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors w-full sm:w-auto justify-center"
            >
              View My Process <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}