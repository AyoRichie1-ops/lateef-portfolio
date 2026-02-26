import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Map } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated 404 Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-indigo-600 font-black text-sm uppercase tracking-[0.3em] bg-indigo-50 px-4 py-2 rounded-full">
            Error 404
          </span>
          <h1 className="text-[12rem] md:text-[15rem] font-black text-[#0A0B1E] leading-none tracking-tighter select-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative -mt-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A0B1E] mb-4 pt-5">
            Lost in the Architecture?
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
            The page you're looking for has been moved, deleted, or never existed in the first place. Let's get you back on solid ground.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 bg-[#0A0B1E] text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 w-full sm:w-auto justify-center"
          >
            <Home size={18} /> Back to Home
          </Link>
          
          <Link 
            to="/approach" 
            className="flex items-center gap-2 bg-gray-50 text-gray-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all w-full sm:w-auto justify-center border border-gray-100"
          >
            <Map size={18} /> View My Process
          </Link>
        </motion.div>

        {/* Bottom Contact Link */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-sm text-gray-400"
        >
          Think this is a mistake? <Link to="/contact" className="text-indigo-600 font-bold hover:underline">Report it to Abdullateef</Link>
        </motion.p>
      </div>
    </div>
  );
}