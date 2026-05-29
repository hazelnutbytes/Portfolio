import { useState } from "react"
import ecommerceMockup from "../assets/ecommerce_mockup.png"
import dashboardMockup from "../assets/dashboard_mockup.png"
import apiAppMockup from "../assets/api_app_mockup.png"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projectsData = [
    {
      id: 1,
      title: "Hospital Management System",
      category: "Backend & APIs",
      description: "A system to manage patient records, appointments, and hospital operations with structured database handling and efficient data retrieval.",
      tech: "Python • MySQL",
      image: apiAppMockup,
      demoUrl: "#",
      githubUrl: "https://github.com/hazelnutbytes/hospital-management-system.git"
    },
    {
      id: 2,
      title: "Red Bull Website Clone",
      category: "Web Apps",
      description: "A group project replicating the Red Bull website UI, where I focused on implementing animations and interactive frontend elements.",
      tech: "HTML • CSS • JavaScript",
      image: ecommerceMockup,
      demoUrl: "#",
      githubUrl: "https://github.com/hazelnutbytes/mini-project-red-bull-clone.git"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      category: "Web Apps",
      description: "A responsive personal portfolio showcasing my projects, skills, and design style with a clean and minimal interface.",
      tech: "React.js • Tailwind CSS • JavaScript",
      image: dashboardMockup,
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  // Filtering Logic
  const filteredProjects = projectsData.filter(project => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="bg-black text-white px-6 md:px-12 lg:px-24 py-20 border-t border-zinc-900">
      
      {/* Header - Centered to match Skills */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-xs uppercase tracking-widest  font-semibold mb-2">
          Projects I've Built
        </h2>
        <p className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">
          Selected Applications
        </p>
      </div>

      {/* Category Filter Row */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {["All", "Web Apps", "Backend & APIs"].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-1.5 rounded-md text-xs font-semibold border transition duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-zinc-100 text-zinc-950 border-zinc-100"
                : "bg-zinc-900/40 border-zinc-850 text-zinc-400 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-zinc-900/10 border border-zinc-850 hover:border-zinc-800 rounded-lg overflow-hidden transition-all duration-350 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 overflow-hidden bg-zinc-950 border-b border-zinc-850/60 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 contrast-[1.02] group-hover:scale-[1.02] transition duration-500"
                />
              </div>

              <div className="p-5">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mb-2.5 inline-block">
                  {project.category}
                </span>
                
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white transition duration-200 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <p className="text-[11px] font-mono text-zinc-500 mb-5">
                  {project.tech}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 flex gap-3">
              <a
                href={project.demoUrl}
                className="flex-1 flex items-center justify-center gap-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 hover:bg-zinc-900/50 text-zinc-300 hover:text-white py-2 text-xs font-semibold rounded-md transition duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 hover:bg-zinc-900/50 text-zinc-300 hover:text-white py-2 text-xs font-semibold rounded-md transition duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.442 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
