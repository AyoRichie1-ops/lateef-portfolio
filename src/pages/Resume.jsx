import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code2, Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

// Sub-component for each experience item to manage its own "Read More" state
const ExperienceItem = ({ job }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Only show "Read More" if the text is long (e.g., > 160 characters)
  const isLong = job.desc.length > 160;
  const displayDesc = isExpanded || !isLong ? job.desc : `${job.desc.substring(0, 160)}...`;

  return (
    <div className="relative">
      {/* Fixed the left calculation for the timeline dot */}
      <div className="absolute -left-41px top-1.5 w-4 h-4 rounded-full bg-white border-4 border-indigo-600 shadow-sm" />
      
      <span className="font-display text-xs pl-5 font-bold text-indigo-600 uppercase tracking-[0.22em] leading-none">
        {job.period}
      </span>
      
      <h4 className="font-display text-xl font-bold text-[#0A0B1E] mt-2 tracking-tight">{job.title}</h4>
      <p className="text-gray-400 font-semibold mb-3">{job.company}</p>
      
      <div className="text-gray-500 leading-relaxed max-w-xl transition-all duration-300">
        <p className="inline">{displayDesc}</p>
        
        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-display ml-2 inline-flex items-center gap-1 text-indigo-600 font-bold text-sm hover:text-indigo-700 transition-colors focus:outline-none"
          >
            {isExpanded ? (
              <>Show Less <ChevronUp size={14} /></>
            ) : (
              <>Read More <ChevronDown size={14} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default function Resume() {
  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { name: "Tools", items: ["Git", "Docker", "Figma", "AWS"] },
  ];

  const experienceData = [
    {
      title: "FrontEnd Developer Intern",
      company: "Tech Studio Academy",
      period: "Sept 2024 - Nov 2024",
      desc: "Collaborated on building high-fidelity web interfaces, translating professional design mockups into responsive React applications using Tailwind CSS and Vite."
    },
    {
      title: "Full Stack Web Developer",
      company: "Tech Studio Academy",
      period: "Sept 2023 - March 2024",
      desc: "Completed intensive training focused on full stack web development, gaining hands-on experience in both frontend and backend technologies. Developed projects using HTML, CSS, JavaScript, and React.js to build responsive and functional interfaces. Learned backend development with Node.js, Express, and MongoDB, including RESTful API design, data modeling, and database integration. Practiced version control and collaboration through Git, working on code repositories and managing branches."
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
        >
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-display text-5xl md:text-7xl font-bold text-[#0A0B1E] tracking-tighter"
            >
              RESUME<span className="text-indigo-600">.</span>
            </motion.h1>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl leading-relaxed">Detailed overview of my professional journey.</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* LEFT: Experience & Education */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Experience Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><Briefcase size={20}/></div>
                <h3 className="font-display text-2xl font-bold text-[#0A0B1E] tracking-tight">Work Experience</h3>
              </div>
              
              <div className="space-y-12 border-l-2 border-gray-100 ml-4 pl-8 relative">
                {experienceData.map((job, index) => (
                  <ExperienceItem key={index} job={job} />
                ))}
              </div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><GraduationCap size={20}/></div>
                <h3 className="font-display text-2xl font-bold text-[#0A0B1E] tracking-tight">Education</h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-2rem border border-gray-100">
                <h4 className="font-display text-xl font-bold text-[#0A0B1E] tracking-tight">B.Sc Computer Science</h4>
                <p className="text-indigo-600 font-semibold">Crescent University</p>
                <p className="text-gray-500 mt-2 italic text-sm font-semibold">Currently in Yr 2</p>
              </div>
            </motion.section>
          </div>

          {/* RIGHT: Skills & Awards */}
          <div className="space-y-12">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="bg-[#0A0B1E] p-8 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-100/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <Code2 size={20} className="text-indigo-400" />
                <h3 className="font-display text-xl font-bold tracking-tight">Tech Stack</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <p className="font-display text-xs font-bold text-gray-400 uppercase tracking-[0.22em] mb-3">{skill.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map(item => (
                        <span key={item} className="px-3 py-1.5 bg-white/10 rounded-lg text-sm font-semibold border border-white/5 hover:bg-white/20 transition-all cursor-default">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              className="p-8 border border-gray-100 rounded-[2.5rem] bg-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award size={20} className="text-indigo-600" />
                <h3 className="font-display text-xl font-bold text-[#0A0B1E] tracking-tight">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {["AWS Certified Developer", "Meta Frontend Pro", "Google UX Design"].map(cert => (
                  <li key={cert} className="flex items-center gap-3 text-gray-500 text-sm font-medium">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0" /> {cert}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

        </div>
      </div>
    </div>
  );
}
