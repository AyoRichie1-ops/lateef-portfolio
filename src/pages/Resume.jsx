import React from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code2, Award, CheckCircle2 } from "lucide-react";

export default function Resume() {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { name: "Tools", items: ["Git", "Docker", "Figma", "AWS"] },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold text-[#0A0B1E] tracking-tighter"
            >
              RESUME<span className="text-indigo-600">.</span>
            </motion.h1>
            <p className="text-gray-500 mt-4 text-lg">Detailed overview of my professional journey.</p>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/path-to-your-pdf.pdf"
            download
            className="flex items-center gap-2 bg-[#0A0B1E] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 transition-all hover:bg-indigo-600"
          >
            <Download size={18} /> Download PDF
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* LEFT: Experience & Education */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Briefcase size={20}/></div>
                <h3 className="text-2xl font-bold text-[#0A0B1E]">Work Experience</h3>
              </div>
              
              <div className="space-y-12 border-l-2 border-gray-100 ml-4 pl-8 relative">
                {[
                  {
                    title: "Senior Web Architect",
                    company: "Tech Solutions Inc.",
                    period: "2022 - Present",
                    desc: "Leading the frontend development of high-traffic SaaS applications. Optimized performance by 40%."
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Creations",
                    period: "2020 - 2022",
                    desc: "Built custom e-commerce engines and integrated complex payment gateways for global clients."
                  }
                ].map((job, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-41px top-1 w-4 h-4 rounded-full bg-white border-4 border-indigo-600" />
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{job.period}</span>
                    <h4 className="text-xl font-bold text-[#0A0B1E] mt-1">{job.title}</h4>
                    <p className="text-gray-400 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-500 leading-relaxed max-w-xl">{job.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><GraduationCap size={20}/></div>
                <h3 className="text-2xl font-bold text-[#0A0B1E]">Education</h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-2rem border border-gray-100">
                <h4 className="text-xl font-bold text-[#0A0B1E]">B.Sc Computer Science</h4>
                <p className="text-indigo-600 font-medium">University of Excellence</p>
                <p className="text-gray-500 mt-2 italic text-sm">Graduated with Honors - Specialized in Software Engineering</p>
              </div>
            </section>
          </div>

          {/* RIGHT: Skills & Awards */}
          <div className="space-y-12">
            <section className="bg-[#0A0B1E] p-8 rounded-[2.5rem] text-white">
              <div className="flex items-center gap-3 mb-8">
                <Code2 size={20} className="text-indigo-400" />
                <h3 className="text-xl font-bold">Tech Stack</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{skill.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-medium border border-white/5 hover:bg-white/20 transition-all cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-8 border border-gray-100 rounded-[2.5rem]">
              <div className="flex items-center gap-3 mb-6">
                <Award size={20} className="text-indigo-600" />
                <h3 className="text-xl font-bold text-[#0A0B1E]">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {["AWS Certified Developer", "Meta Frontend Pro", "Google UX Design"].map(cert => (
                  <li key={cert} className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-indigo-600" /> {cert}
                  </li>
                ))}
              </ul>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}