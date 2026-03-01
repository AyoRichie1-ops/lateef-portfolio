import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj2.png";
import proj3 from "../../assets/proj3.avif";

const projects = [
  {
    title: "Jesuloba Electrical",
    description: "High-performance storefront featuring seamless transitions, motion-heavy interactions, and a headless CMS.",
    tags: ["Next.js", "Framer Motion", "Stripe", "Sanity"],
    image: proj1,
    live: "https://jesuloba.vercel.app/",
    source: "https://github.com/AyoRichie1-ops/Jesuloba"
  },
  {
    title: "Nexus Analytics Dashboard",
    description: "A comprehensive real-time data visualization platform for enterprise SaaS metrics with AI-driven insights.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind"],
    image: proj2,
    live: "http://task-web-amber.vercel.app/",
    source: "https://github.com/AyoRichie1-ops/Task-Web"
  },
  {
      title: "Dph Digital",
      category: "Digital Transformation",
      image: proj3,
      description: "A collaborative full-stack build developed with my team to empower SMEs. We engineered a scalable digital infrastructure to streamline client acquisition.",
      tags: ["Vite","React","Tailwind", "MongoDB", "Express", "Node.js"],
      live: "https://dph-frontend.vercel.app/",
      source: "#"
    },
];

export default function SelectedProjects() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9FAFB]">
      {/* Changed max-width to 7xl for a standard architectural container width */}
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0B1E] mt-4 uppercase tracking-tighter">
            Selected Projects<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            A curated collection of my most impactful work, ranging from complex enterprise dashboards to high-fidelity creative digital experiences.
          </p>
        </div>

        {/* UPDATED: Changed lg:grid-cols-4 to lg:grid-cols-3 for 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2rem border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-indigo-100/40 transition-all duration-500 group"
            >
              {/* Project Image Area - Switched to aspect-video for a cleaner 3-col look */}
              <div className="aspect-video bg-gray-100 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col grow">
                <h3 className="text-xl font-bold text-[#0A0B1E] mb-2">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-2.5 py-1 bg-gray-50 text-gray-400 border border-gray-100 rounded-md uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <a href={project.live} className="flex items-center gap-2 text-xs font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest" target="blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href={project.source} className="flex items-center gap-2 text-xs font-black text-gray-400 hover:text-[#0A0B1E] uppercase tracking-widest transition-colors" target="blank" rel="noopener noreferrer">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 bg-[#0A0B1E] text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 hover:-translate-y-1"
          >
            Explore Full Portfolio <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}