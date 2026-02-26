import React from "react";
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Palette, LayoutDashboard } from 'lucide-react';

const skills = [
  {
    title: "Frontend Engineering",
    description: "Seamless, high-performance interfaces built with React and Next.js.",
    icon: <Code2 className="w-7 h-7 text-indigo-600" /> 
  },
  {
    title: "Backend Engineering",
    description: "Scalable server-side logic, RESTful APIs, and secure database schemas.",
    icon: <ShieldCheck className="w-7 h-7 text-indigo-600" />
  },
  {
    title: "UI/UX Design",
    description: "Intuitive user journeys and pixel-perfect layouts designed for conversion.",
    icon: <Palette className="w-7 h-7 text-indigo-600" />
  },
  {
    title: "System Architecture",
    description: "Technical strategies ensuring long-term maintainability and performance.",
    icon: <LayoutDashboard className="w-7 h-7 text-indigo-600" />
  }
];

// 1. Define the Scroll Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card appearing
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto"> 
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of header is visible
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0B1E]">
            Technical Expertise
          </h2>
          <div className="h-1.5 w-12 bg-indigo-600 mt-4 rounded-full mx-auto" />
        </motion.div>

        {/* 4-Column Grid with Scroll Trigger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Starts when 20% of the grid is in view
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="p-8 rounded-2xl border border-gray-100 bg-white flex flex-col items-center text-center h-full group hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className="mb-6 bg-indigo-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-indigo-600 transition-colors duration-300">
                {/* The icon turns white when the card is hovered */}
                {React.cloneElement(skill.icon, { 
                  className: "w-7 h-7 text-indigo-600 group-hover:text-white transition-colors" 
                })}
              </div>
              
              <h3 className="text-lg font-bold text-[#0A0B1E] mb-3">
                {skill.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}