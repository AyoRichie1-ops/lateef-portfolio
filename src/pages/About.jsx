import React from "react";
import { motion } from "framer-motion";
import { User, Lightbulb, Globe2, ArrowUpRight } from "lucide-react";
// Import your image here
import myProfile from "../assets/aboutpic.png"; 

export default function About() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="bg-white py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: Balanced Split */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.h2 initial="hidden" animate="visible" variants={itemVariants} className="text-sm font-black text-indigo-600 uppercase tracking-[0.4em] mb-6">
              The Architect
            </motion.h2>
            <motion.h3 initial="hidden" animate="visible" variants={itemVariants} className="text-5xl md:text-7xl font-bold text-[#0A0B1E] tracking-tighter leading-tight mb-8">
              BEHIND THE <span className="text-indigo-600">BLUEPRINT.</span>
            </motion.h3>
            <motion.p initial="hidden" animate="visible" variants={itemVariants} className="text-gray-500 text-xl leading-relaxed max-w-2xl relative z-10">
              I am Abdullateef, a developer driven by the intersection of structure and creativity. 
              I don't just write lines of code; I architect digital environments that are 
              <span className="text-[#0A0B1E] font-bold"> scalable, efficient, and user-centric.</span>
            </motion.p>
          </div>
          
          {/* THE IMAGE BLOCK: Chest-up crop & Static Overlay */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative group overflow-hidden rounded-[2.5rem] shadow-xl"
          >
            {/* Image: Now a wider aspect ratio (16:9) to create a chest-up crop */}
            <img 
              src={myProfile} 
              alt="Abdullateef" 
              className="w-full h-full aspect-square object-cover object-top grayscale"
            />
            {/* BLACK GRADIENT OVERLAY: Now static, always 60% dark at the bottom */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0A0B1E]/60 via-[#0A0B1E]/30 to-transparent flex flex-col justify-end p-8">
              <p className="text-white font-black text-xl uppercase tracking-tighter">Abdullateef</p>
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-[10px]">Lead Developer</p>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM GRID: Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Philosophy Block */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#0A0B1E] p-10 rounded-[2.5rem] text-white flex flex-col justify-center shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-2xl text-indigo-400">
                <Lightbulb size={24} />
              </div>
              <h4 className="text-xl font-bold italic">Philosophy</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              "Simple is hard." I take complex problems and forge them into 
              intuitive interfaces. If it’s not functional, it’s not finished.
            </p>
          </motion.div>

          {/* Quick Stats Block */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex justify-around items-center md:col-span-2 shadow-sm"
          >
            {[
              { val: "3+", lab: "Years Exp." },
              { val: "20+", lab: "Projects" },
              { val: "∞", lab: "Coffee" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black text-[#0A0B1E] tracking-tighter">{stat.val}</p>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{stat.lab}</p>
              </div>
            ))}
          </motion.div>

          {/* Location Block */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-indigo-50 p-8 rounded-[2.5rem] flex items-center justify-between md:col-span-3 group shadow-sm"
          >
            <div className="flex items-center gap-6">
              <div className="p-4 bg-white rounded-full text-indigo-600 shadow-sm">
                <Globe2 size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0A0B1E]">Based in</h4>
                <p className="text-indigo-600 font-bold text-lg">Lagos, Nigeria — Working Worldwide</p>
              </div>
            </div>
            <ArrowUpRight className="text-indigo-300 group-hover:text-indigo-600 transition-colors" size={24} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}