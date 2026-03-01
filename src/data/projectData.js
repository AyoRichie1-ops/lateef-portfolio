// src/data/projectsData.js
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.avif";
import proj4 from "../assets/proj4.avif";
import proj5 from "../assets/proj5.avif";
export const projectData = [
  {
    id: 1,
    title: "Jesuloba Electrical",
    category: "Frontend",
    image: proj1,
    description: "A high-performance retail engine built with Next.js and Stripe integration.",
    tags: ["React", "Node.js","Tailwind"],
    liveLink: "https://jesuloba.vercel.app/",
    githubLink: "https://github.com/AyoRichie1-ops/Jesuloba"
  },
  {
    id: 2,
    title: "Task Web Dashboard",
    category: "Fullstack",
    image: proj2,
    description:"A to do list web application with a sleek, modern design and real-time data visualization features.",
    tags: ["React", "Tailwind", "MongoDB", "Express", "Node.js",],
    liveLink: "http://task-web-amber.vercel.app/",
    githubLink: "https://github.com/AyoRichie1-ops/Task-Web"
  },
  {
    title: "Dph Digital",
    category: "Digital Transformation",
    image: proj3,
    description: "A collaborative full-stack build developed with my team to empower SMEs. We engineered a scalable digital infrastructure to streamline client acquisition.",
    tags: ["Vite","React","Tailwind", "MongoDB", "Express", "Node.js"],
    liveLink: "https://dph-frontend.vercel.app/",
    source: "#"
  },
  {
  title: "Beta Home Services",
  category: "Property Platform", // Emphasizes it's more than a website
  image: proj4,
  description: "A collaborative build for a property firm, featuring a high-conversion listing engine designed to showcase premium land and residential assets.",
  tags: ["Vite","React","MongoDB", "Express", "Node.js"],
  liveLink: "https://beta-home-pi.vercel.app/",
  githubLink: "#"
},
{
  title: "Hoodnas Energy (HNL)",
  category: "E-Commerce Infrastructure", 
  image: proj5,
  description: "A robust inventory system and digital storefront developed with me to streamline distribution for high-performance automotive power solutions.",
  tags: ["Node.js", "Express", "React", "Tailwind"],
  liveLink: "https://hoodnasnigerialimited.vercel.app/",
  githubLink: "https://github.com/AyoRichie1-ops/hoodnasnigerialimited"
}
]