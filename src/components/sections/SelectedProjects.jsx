import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Nexus Analytics Dashboard",
    description: "A comprehensive real-time data visualization platform for enterprise SaaS metrics with AI-driven insights.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    image: "/nexus.png", // Replace with your mockup
    live: "#",
    source: "#"
  },
  {
    title: "Ethereal E-Commerce",
    description: "High-performance storefront featuring seamless transitions, motion-heavy interactions, and a headless CMS.",
    tags: ["Next.js", "Framer Motion", "Stripe", "Sanity"],
    image: "/ethereal.png",
    live: "#",
    source: "#"
  },
  {
    title: "Lumina Task Manager",
    description: "Productivity application focused on deep work, featuring Kanban boards, time tracking, and team collaboration.",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "DragDrop"],
    image: "/lumina.png",
    live: "#",
    source: "#"
  },
  {
    title: "Arcane Weather Pro",
    description: "Weather forecasting app with beautiful hyper-local animations and detailed historical data analysis.",
    tags: ["React Native", "OpenWeather", "Lottie", "Redux"],
    image: "/arcane.png",
    live: "#",
    source: "#"
  }
];

export default function SelectedProjects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]">
      <div className="max-w-350 mx-auto">
        
        {/* Centered Header (Matches your Screenshot) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0B1E] mt-4">
            Selected Projects
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A curated collection of my most impactful work, ranging from complex enterprise dashboards to high-fidelity creative digital experiences.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image Area */}
              <div className="aspect-4/3 bg-gray-100 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold text-[#0A0B1E] mb-2">{project.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 grow">
                  {project.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 text-gray-400 border border-gray-100 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons (Side by Side) */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <a href={project.live} className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={project.source} className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-gray-600">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}