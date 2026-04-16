import { useState, useCallback } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa/index';

const PROJECTS = [
  {
    title: "NYC Subway Analysis",
    subtitle: "Where is my F train?",
    description: "Real-time MTA GTFS feed pipeline and ridership visualization.",
    technologies: ["Python", "Streamlit", "GTFS / GTFS-RT"],
    link: "https://github.com/lrao01-su",
    linkLabel: "GitHub",
    icon: "🚇"
  },
  {
    title: "Flow of the Water",
    subtitle: "ArcGIS Story Map",
    description: "NYC water system mapping with spatial flood pattern analysis.",
    technologies: ["ArcGIS", "Python", "NYC OpenData"],
    link: "https://storymaps.arcgis.com/stories/31454ec7b346406da8a48c84bed3e496",
    linkLabel: "View Story Map",
    icon: "💧"
  },
  {
    title: "WikiChat",
    subtitle: "AI-powered Wikipedia chatbot",
    description: "RAG chatbot with vector search using LlamaIndex and OpenAI.",
    technologies: ["Python", "OpenAI", "LlamaIndex"],
    link: "https://github.com/lrao01-su/wikichat",
    linkLabel: "GitHub",
    icon: "🤖"
  },
  {
    title: "Solar Plan",
    subtitle: "Full-stack web application",
    description: "Solar potential assessment for any address via Google APIs.",
    technologies: ["Next.js", "React", "Google Maps API"],
    link: "https://milestone-3-lr534.vercel.app/",
    linkLabel: "Live Demo",
    icon: "☀️"
  },
  {
    title: "LLM Blog Platform",
    subtitle: "Full-stack AI blog generator",
    description: "AI-powered blog platform built in 48 hours with OpenAI integration.",
    technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
    link: "https://github.com/lrao01-su/llm-blog-platform",
    linkLabel: "GitHub",
    icon: "✍️"
  }
];

function ProjectShuffle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);

  const shuffle = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);

    let ticks = 0;
    const totalTicks = 12;
    const interval = setInterval(() => {
      setDisplayIndex(Math.floor(Math.random() * PROJECTS.length));
      ticks++;
      if (ticks >= totalTicks) {
        clearInterval(interval);
        // Land on a different project than current
        let next;
        do {
          next = Math.floor(Math.random() * PROJECTS.length);
        } while (next === currentIndex && PROJECTS.length > 1);
        setDisplayIndex(next);
        setCurrentIndex(next);
        setIsShuffling(false);
      }
    }, 100);
  }, [isShuffling, currentIndex]);

  const project = PROJECTS[displayIndex];
  const isGithub = project.linkLabel === "GitHub";

  return (
    <div className="w-full">
      {/* Card */}
      <div className={`bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] overflow-hidden transition-all duration-200 ${isShuffling ? 'scale-[0.98] opacity-80' : 'scale-100 opacity-100'}`}>
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#FF5733] to-[#FF8F6B] dark:from-[#FF6B47] dark:to-[#CC4527]"></div>

        <div className="p-5 sm:p-6">
          {/* Icon + title row */}
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl select-none" role="img">{project.icon}</span>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">{project.subtitle}</p>
            </div>
          </div>

          <p className="text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="font-mono bg-gray-100 dark:bg-[#0D1117] text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded text-sm border border-gray-200 dark:border-[#30363D]">{tech}</span>
            ))}
          </div>

          {/* Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base text-[#FF5733] dark:text-[#FF6B47] hover:underline font-medium"
          >
            {isGithub ? <FaGithub className="w-4 h-4" /> : <FaExternalLinkAlt className="w-3.5 h-3.5" />}
            {project.linkLabel}
          </a>
        </div>
      </div>

      {/* Shuffle button */}
      <button
        onClick={shuffle}
        disabled={isShuffling}
        className={`mt-4 w-full group rounded-lg border transition-all duration-200 ${
          isShuffling
            ? 'bg-gray-100 dark:bg-[#0D1117] border-gray-200 dark:border-[#30363D] cursor-not-allowed'
            : 'bg-white dark:bg-[#161B22] border-gray-200 dark:border-[#30363D] hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:shadow-md cursor-pointer active:scale-[0.98]'
        }`}
      >
        <div className="flex items-center justify-center gap-2.5 px-6 py-3.5">
          <span className={`text-base ${isShuffling ? 'animate-spin' : ''}`}>&#10024;</span>
          <span className={`font-medium text-base ${
            isShuffling
              ? 'text-gray-400 dark:text-gray-500'
              : 'text-gray-700 dark:text-gray-300 group-hover:text-[#FF5733] dark:group-hover:text-[#FF6B47]'
          }`}>
            {isShuffling ? 'Shuffling...' : 'Check out a random project'}
          </span>
          <span className={`text-base ${isShuffling ? 'animate-spin' : ''}`}>&#10024;</span>
        </div>
      </button>

      {/* Counter dots */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {PROJECTS.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === displayIndex
                ? 'w-6 bg-[#FF5733] dark:bg-[#FF6B47]'
                : 'w-1.5 bg-gray-300 dark:bg-[#30363D]'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectShuffle;
