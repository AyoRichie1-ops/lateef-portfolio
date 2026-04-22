import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Approach", path: "/approach" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full bg-white sticky top-0 z-50 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
          <NavLink to="/" className="font-display flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900">
          <Code2 size={20} className="text-indigo-600" />
          Abdullateef.dev
          </NavLink>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) =>
                `relative inline-flex items-center py-1 text-sm font-semibold transition after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-center after:rounded-full after:bg-indigo-600 after:transition-transform after:duration-300 ${
                  isActive
                    ? "text-indigo-600 after:scale-x-100"
                    : "text-gray-600 hover:text-indigo-600 after:scale-x-0 hover:after:scale-x-100"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Open Button */}
        <button 
          className="md:hidden p-1 text-gray-700" 
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Dark Overlay (Click to close) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-60 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button Inside Sidebar */}
        <div className="flex justify-end mb-6">
          <button 
            className="p-2 text-gray-500 hover:text-indigo-600 transition"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-semibold transition p-2 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-800 hover:text-indigo-600"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </aside>
    </motion.header>
  );
};

export default Navbar;
