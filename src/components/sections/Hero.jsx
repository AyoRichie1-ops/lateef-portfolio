import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../../assets/hero3.png";
import { ArrowRight, FileText } from 'lucide-react'; // Added FileText icon

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - Text Content */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.p variants={item} className="text-sm text-indigo-600 font-medium mb-4">
            Available for Opportunities
          </motion.p>

          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Building Modern <span className="text-indigo-600">Web Experiences</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-gray-600 max-w-lg text-base sm:text-lg">
            I design and develop scalable web applications using modern frontend technologies.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Primary Button */}
            <motion.div whileHover="hover" className="w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 w-full shadow-lg shadow-indigo-100 transition-all hover:bg-indigo-700"
              >
                Get in touch 
                <motion.span 
                  variants={{ hover: { x: 5 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <ArrowRight size={16}/>
                </motion.span>
              </Link>
            </motion.div>

            {/* Resume Button - Changed to <a> for PDF handling */}
            <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
              <a
                href="#" // Ensure your PDF is in the 'public' folder
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 px-6 py-3 rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2 w-full bg-white text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
              >
                View Resume
                <FileText size={16} className="text-gray-400" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={hero}
            alt="Abdullateef - Developer Workspace"
            className="w-full max-w-md md:max-w-lg rounded-xl shadow-2xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;