import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Changed to your Deep Navy brand color
    <footer className="bg-[#0A0B1E] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
              ABDULLATEEF<span className="text-indigo-500">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-base leading-relaxed">
              Architecting digital excellence through clean code and intuitive design. 
              Currently pushing the boundaries of modern web experiences.
            </p>
            
            {/* Dark Mode Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-500 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/approach" className="text-sm text-gray-400 hover:text-white transition-colors">My Approach</Link></li>
              <li><Link to="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Teaser */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-[0.2em]">Let's Talk</h4>
            <p className="text-sm text-gray-400">Available for new opportunities.</p>
            <a href="mailto:onanusiabdullateef@gmail.com" className="group inline-flex flex-col gap-1">
  <span className="text-xs text-gray-500 font-medium">Email Me</span>
  <span className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors flex items-center gap-2">
    onanusiabdullateef@gmail.com
    <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
  </span>
</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 font-bold tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} ABDULLATEEF. Built for Digital Excellence.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs font-bold text-gray-400 hover:text-white transition-colors"
          >
            SCROLL TO TOP 
            <span className="p-2.5 bg-white/5 border border-white/10 rounded-full group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}