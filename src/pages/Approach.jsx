import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Research",
    icon: <Search className="w-8 h-8 text-indigo-600" />,
    description: "Every great project starts with questions. I dive into your business goals, target audience, and competition to define a clear roadmap for success.",
    details: ["User Personas", "Competitive Analysis", "Project Requirements"]
  },
  {
    id: "02",
    title: "Strategy & Design",
    icon: <PenTool className="w-8 h-8 text-indigo-600" />,
    description: "Architecture matters. I design intuitive user journeys and pixel-perfect interfaces while planning a technical stack built for long-term growth.",
    details: ["Wireframing", "UI/UX Design", "System Architecture"]
  },
  {
    id: "03",
    title: "Development",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    description: "Bringing the vision to life with clean, efficient code. I build using modern frameworks like React and Next.js, ensuring high performance and security.",
    details: ["Frontend/Backend Dev", "API Integration", "Mobile Optimization"]
  },
  {
    id: "04",
    title: "Launch & Growth",
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    description: "Launching is just the beginning. I handle the deployment process and perform speed audits to ensure your product is ready for the real world.",
    details: ["SEO & Analytics", "Performance Tuning", "Ongoing Support"]
  }
];

export default function Approach() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-[#0A0B1E] leading-tight">
            A Disciplined <span className="text-indigo-600">Process</span> for Digital Success.
          </h1>
          <p className="mt-6 text-gray-500 text-lg md:text-xl">
            I follow a structured methodology to transform complex problems into seamless digital experiences.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl border border-gray-100 bg-gray-50/30 hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-indigo-600 transition-colors duration-300">
                  {React.cloneElement(step.icon, { 
                    className: "w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" 
                  })}
                </div>
                <span className="text-5xl font-black text-indigo-100 group-hover:text-indigo-50 transition-colors">
                  {step.id}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-[#0A0B1E] mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {step.details.map((item) => (
                  <span key={item} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}