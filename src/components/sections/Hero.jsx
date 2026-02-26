import React, { useState } from "react"; // Added useState
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/hero3.png";
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false); // Track loading state

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly faster stagger for snappier feel
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-indigo-50/50 overflow-hidden min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - Text Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl z-10"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            Available for Opportunities
          </motion.div>

          <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] text-[#0A0B1E] tracking-tight">
            Building Modern <br />
            <span className="text-indigo-600">Web Experiences</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 text-gray-500 max-w-lg text-lg sm:text-xl leading-relaxed">
            I design and develop scalable web applications using modern frontend technologies and architectural precision.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 w-full shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700"
              >
                Get in touch 
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <a
                href="/abdullateef-resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 px-8 py-4 rounded-2xl text-sm font-bold text-center flex items-center justify-center gap-2 w-full bg-white text-[#0A0B1E] hover:border-indigo-600 transition-all shadow-sm"
              >
                View Resume
                <FileText size={18} className="text-gray-400" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Image with Loading Optimization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative flex justify-center md:justify-end"
        >
          {/* Decorative Background Element */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl -z-10" />
          
          <div className={`relative transition-all duration-1000 ${imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}>
            <img
              src={hero}
              alt="Abdullateef - Developer Workspace"
              loading="eager" // Load immediately
              fetchpriority="high" // Highest browser priority
              onLoad={() => setImageLoaded(true)}
              className="w-full max-w-md md:max-w-lg rounded-[2.5rem] shadow-[0_32px_64px_-15px_rgba(79,70,229,0.2)] border-8 border-white"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;