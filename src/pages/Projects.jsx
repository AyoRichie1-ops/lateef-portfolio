import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projectData } from "../data/projectData"; // <--- Importing the data

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0B1E] tracking-tighter uppercase">
            Works<span className="text-indigo-600">.</span>
          </h1>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectData.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-gray-50 rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-[10px] font-black text-indigo-600 uppercase tracking-widest shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#0A0B1E] mb-3">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold text-gray-400 border border-gray-200 px-2.5 py-1 rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-[#0A0B1E] hover:text-indigo-600 transition-colors flex items-center gap-2 font-bold text-sm">
                    <Github size={18} /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noreferrer" className="bg-[#0A0B1E] text-white p-3 rounded-xl hover:bg-indigo-600 transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;