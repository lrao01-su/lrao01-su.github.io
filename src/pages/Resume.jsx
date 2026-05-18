import { FaBriefcase, FaGraduationCap, FaChartLine, FaDownload } from 'react-icons/fa/index';

function Resume() {
  const experience = [
    {
      type: 'experience',
      title: 'City Operations Data Analyst',
      company: 'Via – Citymapper',
      location: 'New York, NY',
      period: 'Oct 2024 – Present',
      description: [
        'NYC region owner for routing QA, go-live coordination, and transit agency partnerships (NJ Transit, Jersey City PATH). Shipped 50+ region expansions and native intermodal booking integration connecting on-demand rideshare with public transit.',
        'Built an agentic AI pipeline to automate MTA planned disruption processing, eliminating 2.5 hrs/week of manual work for 8M+ daily riders. Led geospatial audit correcting 1,000+ bus stop locations against OpenStreetMap.',
      ],
      skills: ['Python', 'SQL (AWS Athena)', 'GTFS / GTFS-RT', 'Grafana', 'Airtable', 'ArcGIS', 'Geospatial Analysis']
    },
    {
      type: 'experience',
      title: 'Strategy & Urban Research Analyst',
      company: 'Urban Tech Hub',
      location: 'New York, NY',
      period: 'Sep 2022 – Aug 2023',
      description: [
        'Led product development for Open Zoning, a multifamily rezoning visualization tool — defined MVP criteria through community interviews and transformed unstructured zoning code into structured datasets for city stakeholders.',
        'Analyzed geospatial and demographic datasets (zoning layers, census indicators) using ArcGIS and Python; insights published in the annual NYC Urban Tech Ecosystem Report.',
      ],
      skills: ['Python', 'ArcGIS', 'Geospatial Analysis', 'User Research', 'Data Visualization']
    },
    {
      type: 'experience',
      title: 'Intern, Computational Design',
      company: 'LWK+Partners',
      location: '',
      period: 'May 2021 – Jul 2021',
      description: [
        'Built a parametric design tool using geospatial analysis and 3D modeling for the Huya HQ project, reducing facade modeling time from days to minutes.',
      ],
      skills: ['Geospatial Analysis', '3D Modeling', 'Parametric Design']
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Master of Applied Information Science',
      company: 'Cornell University – Cornell Tech',
      location: 'New York, NY',
      period: 'Aug 2022 – May 2024',
      subtitle: 'Urban Tech Concentration',
      description: [
        'GPA: 3.9 | Admitted with Merit Scholarship',
        'Coursework: Urban Mobility Systems, Product Management, Data Visualization, Machine Learning, Operations Strategy'
      ],
      skills: ['Machine Learning', 'Data Visualization', 'Product Management', 'Urban Mobility']
    },
    {
      type: 'education',
      title: 'Bachelor of Architecture',
      company: 'Syracuse University',
      location: 'Syracuse, NY',
      period: 'Aug 2017 – May 2022',
      description: [
        'Minor in Economics | Graduated with Magna Cum Laude Honors'
      ],
      skills: ['Architecture', 'Economics']
    }
  ];

  const skills = {
    'Transit Operations': [
      'Transportation planning',
      'Ridership demand forecasting',
      'Intermodal routing integration',
      'Live vehicle traffic visualization',
      'Geospatial analysis',
      'Community impact assessment'
    ],
    'Data & Tools': [
      'Python', 'SQL (AWS Athena)',
      'Tableau', 'Grafana',
      'KPI monitoring', 'JIRA',
      'Airtable', 'ArcGIS', 'Figma'
    ]
  };

  const timeline = [...experience, ...education].sort((a, b) => {
    const getYear = (period) => {
      const match = period.match(/(\d{4})/);
      return match ? parseInt(match[1]) : 0;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 lg:mb-14">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Resume
            </h1>
            <p className="text-base text-gray-600 dark:text-gray-400 mb-1">
              Linjing Rao &middot; City Operations Data Analyst at <span className="font-semibold text-[#FF5733] dark:text-[#FF6B47]">Citymapper</span> (Via Transportation)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Urban mobility data, transit operations, intermodal integrations, geospatial analysis
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-gray-500 dark:text-gray-400">New York, NY</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a href="mailto:Linjing.rao@gmail.com" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">Email</a>
              <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">LinkedIn</a>
              <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">GitHub</a>
            </div>
          </div>
          <a
            href="/Linjing_Rao_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-[#FF5733] hover:bg-[#e04a2a] text-white text-sm font-semibold rounded-lg transition-colors shrink-0"
          >
            <FaDownload className="w-3.5 h-3.5" />
            Download PDF
          </a>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-[#30363D]"></div>

          <div className="space-y-8 lg:space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 sm:pl-20">
                <div className={`absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-[3px] ${
                  item.type === 'experience'
                    ? 'border-[#FF5733] dark:border-[#FF6B47] bg-white dark:bg-[#0D1117]'
                    : 'border-[#0066FF] bg-white dark:bg-[#0D1117]'
                }`}></div>

                <div className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5 sm:p-6 hover:border-[#FF5733] dark:hover:border-[#FF6B47] transition-all">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      item.type === 'experience' ? 'bg-[#FFF1ED] dark:bg-[#FF573315]' : 'bg-blue-50 dark:bg-[#0066FF15]'
                    }`}>
                      {item.type === 'experience' ? (
                        <FaBriefcase className="w-4 h-4 text-[#FF5733] dark:text-[#FF6B47]" />
                      ) : (
                        <FaGraduationCap className="w-4 h-4 text-[#0066FF]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-0.5">{item.title}</h2>
                      <p className="text-sm text-[#FF5733] dark:text-[#FF6B47] font-semibold">{item.company}</p>
                      {item.subtitle && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 italic">{item.subtitle}</p>
                      )}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 dark:text-gray-500 mt-1">
                        <span>{item.location}</span>
                        <span>&middot;</span>
                        <span>{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {item.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        <span className="text-[#FF5733] dark:text-[#FF6B47] mt-1 shrink-0">&bull;</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-[#30363D]">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="font-mono bg-gray-50 dark:bg-[#0D1117] text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded text-xs border border-gray-200 dark:border-[#30363D]">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <section className="mt-14">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <FaChartLine className="w-3.5 h-3.5 text-[#FF5733] dark:text-[#FF6B47]" />
                  <h3 className="text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-wider">{category}</h3>
                </div>
                <ul className="space-y-1">
                  {skillList.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
                      <span className="text-[#FF5733] dark:text-[#FF6B47]">&bull;</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
