import { useState, useMemo } from 'react';
import { FaGithub, FaExternalLinkAlt, FaFilter, FaTimes } from 'react-icons/fa/index';

function Projects() {
  const [activeFilters, setActiveFilters] = useState([]);

  const projects = [
    {
      title: "NYC Subway Analysis",
      subtitle: "Where is my F train?",
      problem: "NYC riders lack accessible, real-time visibility into subway performance and ridership trends across the system.",
      approach: "Built a data pipeline to ingest MTA GTFS static schedules and real-time feeds. Visualized monthly ridership patterns across subway lines using Streamlit.",
      impact: [
        "Real-time GTFS-RT feed ingestion and parsing",
        "Interactive ridership trend visualization",
        "Queryable by line, station, and time period"
      ],
      technologies: ["Python", "Streamlit", "GTFS / GTFS-RT", "Data Pipelines"],
      relevance: ["Data Ops", "Analytics Eng"],
      github: "https://github.com/lrao01-su",
      year: "2024"
    },
    {
      title: "Flow of the Water",
      subtitle: "ArcGIS Story Map",
      problem: "NYC's water system — from upstate reservoirs to coastal outfall points — is invisible to most residents, even during flood events.",
      approach: "Mapped the full water system end-to-end. Conducted spatial analysis correlating topographical data with 311 flood reports to identify high-risk urban flood patterns. Published as an interactive ArcGIS Story Map for public education.",
      impact: [
        "Cross-source spatial correlation (topo + 311 reports)",
        "Interactive public-facing story map",
        "End-to-end urban water system mapping"
      ],
      technologies: ["ArcGIS", "Python", "NYC OpenData", "Spatial Analysis"],
      relevance: ["Analytics Eng", "Data Ops"],
      link: "https://storymaps.arcgis.com/stories/31454ec7b346406da8a48c84bed3e496",
      linkLabel: "View Story Map",
      year: "2022"
    },
    {
      title: "WikiChat",
      subtitle: "AI-powered Wikipedia chatbot",
      problem: "Searching Wikipedia for specific answers requires reading full articles — slow and imprecise for targeted questions.",
      approach: "Built a RAG (retrieval-augmented generation) chatbot using LlamaIndex and OpenAI GPT models. Implemented vector-based document indexing and semantic search to surface precise answers from Wikipedia content via a Chainlit interface.",
      impact: [
        "Vector-indexed retrieval pipeline",
        "Semantic search over unstructured text",
        "Conversational interface via Chainlit"
      ],
      technologies: ["Python", "OpenAI", "LlamaIndex", "Chainlit", "RAG"],
      relevance: ["Data Ops", "Analytics Eng"],
      github: "https://github.com/lrao01-su/wikichat",
      year: "2024"
    },
    {
      title: "Solar Plan",
      subtitle: "Full-stack web application",
      problem: "Homeowners lack an easy way to assess whether solar makes financial sense for their specific property.",
      approach: "Built a full-stack Next.js application that integrates Google Maps and Solar APIs. Users input an address and receive solar potential analysis with financial ROI modeling based on their property's geometry and sun exposure.",
      impact: [
        "Address-level solar potential assessment",
        "Financial ROI modeling",
        "Google Maps + Solar API integration"
      ],
      technologies: ["Next.js", "React", "Google Maps API", "Solar API"],
      relevance: ["Product Analyst", "Full-Stack"],
      link: "https://milestone-3-lr534.vercel.app/",
      linkLabel: "Live Demo",
      year: "2024"
    },
    {
      title: "LLM Blog Platform",
      subtitle: "Full-stack AI blog generator",
      problem: "Content creation is time-consuming — writers need a tool to draft, organize, and search posts with AI assistance.",
      approach: "Built a full-stack platform with React frontend, Node.js/Express/TypeScript backend, and MongoDB. Integrated OpenAI API for AI-assisted post generation, search, and organization. Completed as a 48-hour take-home project.",
      impact: [
        "End-to-end full-stack implementation",
        "OpenAI API integration for content generation",
        "48-hour build — scoping and execution under pressure"
      ],
      technologies: ["React", "Node.js", "TypeScript", "MongoDB", "OpenAI API"],
      relevance: ["Full-Stack"],
      github: "https://github.com/lrao01-su/llm-blog-platform",
      year: "2024"
    }
  ];

  const allSkills = useMemo(() => {
    const skillSet = new Set();
    projects.forEach(p => p.technologies.forEach(t => skillSet.add(t)));
    return Array.from(skillSet).sort();
  }, []);

  const filteredProjects = activeFilters.length === 0
    ? projects
    : projects.filter(p => activeFilters.every(filter => p.technologies.includes(filter)));

  const toggleFilter = (skill) => {
    setActiveFilters(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">Projects</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Data pipelines, geospatial analysis, LLM applications, and full-stack tools — built for real urban and infrastructure problems.
        </p>

        {/* Skill filter bar */}
        <div className="mb-8 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <FaFilter className="w-3 h-3 text-gray-400 dark:text-gray-500" />
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">Filter by Skill</span>
            {activeFilters.length > 0 && (
              <button onClick={clearFilters} className="ml-auto inline-flex items-center gap-1 text-xs text-gray-500 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors font-medium">
                <FaTimes className="w-3 h-3" /> Clear all
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => {
              const isActive = activeFilters.includes(skill);
              const count = projects.filter(p => p.technologies.includes(skill)).length;
              return (
                <button
                  key={skill}
                  onClick={() => toggleFilter(skill)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-sm font-medium transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-[#FF5733] dark:bg-[#FF6B47] text-white border-[#FF5733] dark:border-[#FF6B47]'
                      : 'bg-gray-50 dark:bg-[#0D1117] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-[#30363D] hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:text-[#FF5733] dark:hover:text-[#FF6B47]'
                  }`}
                >
                  {skill}
                  <span className={`text-[10px] rounded px-1 py-0.5 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-200 dark:bg-[#30363D] text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter summary */}
        {activeFilters.length > 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Showing <span className="font-semibold text-gray-900 dark:text-gray-100">{filteredProjects.length}</span> of {projects.length} projects matching{' '}
            {activeFilters.map((f, i) => (
              <span key={f}>{i > 0 && ' + '}<span className="font-semibold text-[#FF5733] dark:text-[#FF6B47]">{f}</span></span>
            ))}
          </p>
        )}

        {/* Project list */}
        <div className="space-y-6 lg:space-y-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D]">
              <p className="text-gray-500 dark:text-gray-400 mb-3">No projects match that combination.</p>
              <button onClick={clearFilters} className="text-sm text-[#FF5733] dark:text-[#FF6B47] hover:underline font-medium">Clear filters</button>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <article key={index} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:shadow-lg transition-all overflow-hidden">
                <div className="p-6 lg:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{project.title}</h2>
                        <span className="font-mono text-sm text-gray-400 dark:text-gray-600">{project.year}</span>
                      </div>
                      <p className="text-base text-gray-500 dark:text-gray-400 italic">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:shrink-0">
                      {project.relevance.map((role, i) => (
                        <span key={i} className="font-mono text-xs font-medium px-2.5 py-0.5 rounded bg-[#FFF1ED] dark:bg-[#FF573320] text-[#FF5733] dark:text-[#FF6B47] border border-[#FFD5C8] dark:border-[#FF573340]">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-5">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Problem</p>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Approach</p>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Output</p>
                      <ul className="space-y-1.5">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-gray-700 dark:text-gray-300">
                            <span className="text-[#FF5733] dark:text-[#FF6B47] mt-0.5">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-[#30363D]">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => {
                        const isHighlighted = activeFilters.includes(tech);
                        return (
                          <button
                            key={i}
                            onClick={() => toggleFilter(tech)}
                            className={`font-mono px-2.5 py-1 rounded text-sm font-medium transition-all cursor-pointer border ${
                              isHighlighted
                                ? 'bg-[#FF5733] dark:bg-[#FF6B47] text-white border-[#FF5733] dark:border-[#FF6B47]'
                                : 'bg-gray-50 dark:bg-[#0D1117] text-gray-600 dark:text-gray-400 border-gray-200 dark:border-[#30363D] hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:text-[#FF5733] dark:hover:text-[#FF6B47]'
                            }`}
                          >
                            {tech}
                          </button>
                        );
                      })}
                    </div>
                    <div className="flex gap-3 sm:shrink-0">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base font-medium text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
                          <FaGithub className="w-5 h-5" /> Code
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-base font-medium text-[#FF5733] dark:text-[#FF6B47] hover:underline">
                          <FaExternalLinkAlt className="w-3.5 h-3.5" /> {project.linkLabel || 'Live'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Additional work */}
        <div className="mt-12 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">Other Work</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Product engineering and startup projects (2020–present): Realm Indoor Navigation (Cornell Tech Startup Studio), Flow Elder's Center Research, app prototypes.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 italic">
            {/* TODO: add Figma designs and case study links */}
            Figma designs and case studies coming soon.
          </p>
        </div>

        {/* Future Sections */}
        {/* TODO: Figma design showcase section */}
        {/* TODO: UX/product case studies */}
        {/* TODO: Blog or writing section */}
      </div>
    </div>
  );
}

export default Projects;
