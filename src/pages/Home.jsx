import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa/index';
import { SiPython, SiReact, SiJavascript, SiPostgresql, SiGit } from 'react-icons/si/index';

function Home() {
  const featuredProjects = [
    {
      title: "NYC Subway Analysis",
      hook: "Real-time transit feed pipeline for the busiest subway in North America",
      metric: "MTA GTFS-RT",
      metricLabel: "feed integration",
      description: "Built a pipeline to ingest and visualize MTA GTFS static and real-time feeds. Analyzed monthly ridership patterns across NYC subway lines.",
      technologies: ["Python", "Streamlit", "GTFS / GTFS-RT", "Data Pipelines"],
      relevance: ["Data Ops", "Analytics Eng"],
      github: "https://github.com/lrao01-su",
    },
    {
      title: "Flow of the Water",
      hook: "Spatial analysis of NYC's water infrastructure — reservoirs to outfall points",
      metric: "311 + topo data",
      metricLabel: "cross-source correlation",
      description: "Mapped NYC's complete water system. Correlated topographical data with 311 flood reports to identify urban flood patterns. Published as an interactive ArcGIS Story Map.",
      technologies: ["ArcGIS", "Python", "NYC OpenData", "Spatial Analysis"],
      relevance: ["Analytics Eng", "Data Ops"],
      link: "https://storymaps.arcgis.com/stories/31454ec7b346406da8a48c84bed3e496",
      linkLabel: "View Story Map",
    },
    {
      title: "WikiChat",
      hook: "RAG chatbot with vector search over Wikipedia",
      metric: "Vector-indexed",
      metricLabel: "retrieval pipeline",
      description: "Built a retrieval-augmented generation chatbot using LlamaIndex and OpenAI GPT. Implemented vector-based search to optimize query response accuracy and speed.",
      technologies: ["Python", "OpenAI", "LlamaIndex", "Chainlit", "RAG"],
      relevance: ["Data Ops", "Analytics Eng"],
      github: "https://github.com/lrao01-su/wikichat",
    },
    {
      title: "Solar Plan",
      hook: "Full-stack app: solar potential assessment for any US address",
      metric: "Google Solar API",
      metricLabel: "geospatial + financial modeling",
      description: "Full-stack Next.js application integrating Google Maps and Solar APIs. Users input an address and get solar potential analysis with financial ROI estimates.",
      technologies: ["Next.js", "React", "Google Maps API", "Solar API"],
      relevance: ["Product Analyst", "Full-Stack"],
      link: "https://milestone-3-lr534.vercel.app/",
      linkLabel: "Live Demo",
    }
  ];

  const skillGroups = {
    "Languages": [
      { name: "Python", icon: <SiPython /> },
      { name: "SQL", icon: <SiPostgresql /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ],
    "Analytics & Operations": [
      { name: "Operational metrics", icon: <SiPython /> },
      { name: "KPI definition", icon: <SiPython /> },
      { name: "A/B testing", icon: <SiPython /> },
      { name: "Statistical analysis", icon: <SiPython /> },
      { name: "Competitive benchmarking", icon: <SiPython /> }
    ],
    "Data & Geospatial": [
      { name: "GTFS / GTFS-RT", icon: <SiPython /> },
      { name: "ArcGIS", icon: <SiPython /> },
      { name: "NYC OpenData", icon: <SiPython /> },
      { name: "Streamlit", icon: <SiPython /> },
      { name: "LlamaIndex / RAG", icon: <SiPython /> }
    ],
    "Tools & Platforms": [
      { name: "Zendesk", icon: <SiReact /> },
      { name: "Grafana", icon: <SiReact /> },
      { name: "AWS (S3, Athena)", icon: <SiReact /> },
      { name: "Jenkins CI/CD", icon: <SiReact /> },
      { name: "JIRA / Airtable", icon: <SiReact /> },
      { name: "Git / GitHub", icon: <SiGit /> }
    ]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-24">
        <div className="w-full md:w-3/5 max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-[#FFF1ED] dark:bg-[#FF573320] text-[#FF5733] dark:text-[#FF6B47] border border-[#FFD5C8] dark:border-[#FF573340]">Data Ops</span>
            <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-[#FFF1ED] dark:bg-[#FF573320] text-[#FF5733] dark:text-[#FF6B47] border border-[#FFD5C8] dark:border-[#FF573340]">Analytics Engineering</span>
            <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-[#FFF1ED] dark:bg-[#FF573320] text-[#FF5733] dark:text-[#FF6B47] border border-[#FFD5C8] dark:border-[#FF573340]">Product</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            Linjing <span className="text-[#FF5733] dark:text-[#FF6B47]">Rao</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
            Transit data operations analyst at <span className="font-semibold text-[#FF5733] dark:text-[#FF6B47]">Citymapper</span> (Via Transportation) — a transit app serving millions daily across 120+ cities.
          </p>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-8">
            Cornell Tech &middot; Urban mobility data &middot; GTFS pipelines &middot; Applied AI/ML
          </p>

          <div className="flex items-center gap-4 mb-8">
            <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <a href="mailto:Linjing.rao@gmail.com" className="text-base text-gray-500 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">Email me</a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#/projects" className="inline-flex items-center justify-center gap-2 bg-[#FF5733] dark:bg-[#FF6B47] text-white px-6 py-3 rounded-lg hover:bg-[#E04E2D] dark:hover:bg-[#FF5733] transition font-medium text-base">
              View Projects <FaArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="#/resume" className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-[#30363D] text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition font-medium text-base">
              Resume
            </a>
          </div>
        </div>

        <div className="hidden md:flex w-2/5 justify-center items-start">
          {/* TODO: replace with actual profile photo */}
          <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-2xl shadow-lg bg-gray-100 dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
            Photo
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="mb-16 lg:mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <a href="#/projects" className="text-sm text-[#FF5733] dark:text-[#FF6B47] hover:underline font-medium flex items-center gap-1">
            View all <FaArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:shadow-lg transition-all p-5 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.relevance.map((role, i) => (
                    <span key={i} className="font-mono text-xs font-medium px-2.5 py-0.5 rounded bg-[#FFF1ED] dark:bg-[#FF573320] text-[#FF5733] dark:text-[#FF6B47] border border-[#FFD5C8] dark:border-[#FF573340]">
                      {role}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{project.title}</h3>
                <p className="text-base text-gray-500 dark:text-gray-400 mb-3">{project.hook}</p>

                <div className="bg-gray-50 dark:bg-[#0D1117] rounded-lg px-4 py-2.5 mb-3 border-l-2 border-[#FF5733] dark:border-[#FF6B47]">
                  <span className="font-mono text-base font-semibold text-gray-900 dark:text-gray-100">{project.metric}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{project.metricLabel}</span>
                </div>

                <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="font-mono bg-gray-100 dark:bg-[#0D1117] text-gray-600 dark:text-gray-400 px-2.5 py-1 rounded text-sm border border-gray-200 dark:border-[#30363D]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100 dark:border-[#30363D]">
                <a href={project.link || project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#FF5733] dark:text-[#FF6B47] hover:underline font-medium">
                  {project.linkLabel || 'View on GitHub'} <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16 lg:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(skillGroups).map(([category, categorySkills]) => (
            <div key={category} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5">
              <h3 className="font-mono text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-wider mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <span key={index} className="flex items-center gap-1.5 bg-gray-50 dark:bg-[#0D1117] border border-gray-200 dark:border-[#30363D] px-2.5 py-1 rounded text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#FF5733] dark:text-[#FF6B47] text-xs">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Placeholder */}
      <section className="mb-16 lg:mb-24">
        {/* TODO: add work experience */}
      </section>

      {/* CTA */}
      <section className="text-center bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-8">
        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">Looking for Data Ops, Analytics Engineering, or Product Analyst roles</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Civic tech, mobility, infrastructure, and urban data platforms.</p>
        <a href="#/contact" className="inline-flex items-center gap-2 bg-[#FF5733] dark:bg-[#FF6B47] text-white px-8 py-3 rounded-lg hover:bg-[#E04E2D] dark:hover:bg-[#FF5733] transition font-medium text-sm">
          Get In Touch <FaArrowRight className="w-3.5 h-3.5" />
        </a>
      </section>
    </div>
  );
}

export default Home;
