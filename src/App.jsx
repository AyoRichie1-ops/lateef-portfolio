import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Approach from "./pages/Approach";
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorPage from './pages/Error';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;