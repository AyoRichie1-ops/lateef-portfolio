import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "text-sm font-medium text-gray-600 hover:text-indigo-600 transition";

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-900"
        >
          <Code2 size={20} className="text-indigo-600" />
          Abdullateef.dev
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/projects" className={linkStyle}>
            Projects
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>

          <NavLink to="/approach" className={linkStyle}>
            Approach
          </NavLink>

          {/* <NavLink to="/resume" className={linkStyle}>
            Resume
          </NavLink> */}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 space-y-6 bg-white text-center">
          <NavLink
            to="/projects"
            className="block text-sm font-medium text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/approach"
            className="block text-sm font-medium text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Approach
          </NavLink>

          {/* <NavLink
            to="/resume"
            className="block text-sm font-medium text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </NavLink> */}

          <NavLink
            to="/contact"
            className="block text-sm font-medium text-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;