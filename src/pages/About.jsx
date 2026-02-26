import React from "react";
import { motion } from "framer-motion";
import { User, Code, Lightbulb, Coffee, Globe2 } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">The Architect</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#0A0B1E] tracking-tight">
            Behind the <span className="text-indigo-600">Blueprint.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Main Story Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600">
                <User size={24} />
              </div>
              <h4 className="text-xl font-bold text-[#0A0B1E]">My Story</h4>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              I am Abdullateef, a developer driven by the intersection of structure and creativity. 
              I don't just write lines of code; I architect digital environments that are 
              scalable, efficient, and user-centric. My approach is rooted in the belief 
              that every pixel serves a purpose.
            </p>
          </motion.div>

          {/* Philosophy Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-[#0A0B1E] p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-xl shadow-indigo-100/20"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl text-indigo-400">
                <Lightbulb size={24} />
              </div>
              <h4 className="text-xl font-bold">Philosophy</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "Simple is hard." I strive to take complex problems and turn them into 
              intuitive, clean interfaces. If it’s not functional, it’s not finished.
            </p>
          </motion.div>

          {/* Location Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-indigo-50 p-8 rounded-[2.5rem] flex items-center gap-6"
          >
            <div className="p-4 bg-white rounded-full text-indigo-600 shadow-sm">
              <Globe2 size={28} />
            </div>
            <div>
              <h4 className="font-bold text-[#0A0B1E]">Based in</h4>
              <p className="text-indigo-600 font-medium">Lagos, Nigeria</p>
              <p className="text-xs text-gray-400 uppercase font-bold mt-1">Working Worldwide</p>
            </div>
          </motion.div>

          {/* Quick Stats Block */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex justify-around items-center md:col-span-2"
          >
            <div className="text-center">
              <p className="text-4xl font-black text-[#0A0B1E]">3+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Years Exp.</p>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div className="text-center">
              <p className="text-4xl font-black text-[#0A0B1E]">20+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Projects</p>
            </div>
            <div className="w-px h-12 bg-gray-100" />
            <div className="text-center">
              <p className="text-4xl font-black text-[#0A0B1E]">∞</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Coffee</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}