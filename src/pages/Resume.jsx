import { FaBriefcase, FaGraduationCap, FaChartLine } from 'react-icons/fa/index';

function Resume() {
  const experience = [
    {
      type: 'experience',
      title: 'Data Analyst',
      company: 'Via – Citymapper',
      location: 'New York, NY',
      period: 'Oct 2024 – Present',
      description: [
        'Triaged 2,500+ user-reported escalations via Zendesk, Airtable, and PagerDuty; surfaced 248 high-priority issues that directly shaped Product and Engineering quarterly priorities while maintaining same-day SLA.',
        'Owned the NYC Citymapper App Data operations, managing 10–15+ vendor data feeds across daily pipeline builds and weekly production deployments, ensuring geospatial routing accuracy for 8M+ residents.',
        'Served as primary operational liaison for vendor partners across 7 geographic areas (Americas, UK/EMEA, APAC); coordinated project management and go-live execution for 50+ regional launches.',
        'Reduced manual QA overhead by 75% by identifying automation opportunities and developing a Python comparison tool; authored dashboard specifications monitoring operational health across 120+ production regions.',
        'Authored deployment guide standardizing in-app advertisement integration request handling, enabling consistent multi-timezone service delivery across teams in NYC, London, and APAC.',
        'Led the 2026 US Region Improvement Plan across 5 metropolitan regions: synthesized data quality assessments and competitive benchmarking into a prioritized program adopted by Product and Engineering for OKR planning.'
      ],
      skills: ['Python', 'SQL', 'GTFS / GTFS-RT', 'Zendesk', 'PagerDuty', 'Airtable', 'Grafana', 'AWS', 'Jenkins CI/CD']
    },
    {
      type: 'experience',
      title: 'Data Researcher',
      company: 'Urban Tech Hub',
      location: 'New York, NY',
      period: 'Sep 2022 – Aug 2023',
      subtitle: 'Multifamily Rezoning Visualization Project',
      description: [
        'Led problem definition and metric framing for a 0→1 product initiative, developing hypotheses and MVP success criteria through user interviews and survey-based analysis.',
        'Analyzed and visualized large-scale geospatial and demographic datasets (zoning layers, population, census indicators) using ArcGIS and Python; translated complex spatial data into actionable insights for cross-functional stakeholders.'
      ],
      skills: ['Python', 'ArcGIS', 'Geospatial Analysis', 'User Research', 'Data Visualization']
    },
    {
      type: 'experience',
      title: 'Teaching Assistant – INFO5410 Urban Systems',
      company: 'Cornell Tech',
      location: 'New York, NY',
      period: 'Fall 2023',
      description: [
        'Designed and taught urban data curriculum to 40+ master\'s students; led weekly workshops on ArcGIS and Python spatial analysis using live NYC Open Data.'
      ],
      skills: ['ArcGIS', 'Python', 'NYC Open Data', 'Teaching']
    }
  ];

  const education = [
    {
      type: 'education',
      title: 'Master of Applied Information Science and Information System',
      company: 'Cornell University – Cornell Tech',
      location: 'New York, NY',
      period: 'Aug 2022 – May 2024',
      subtitle: 'Urban Tech Concentration',
      description: [
        'GPA: 3.9 | Admitted with Merit Scholarship',
        'Coursework: Machine Learning, Statistical Analysis, Data Visualization, Product Management, UI/UX'
      ],
      skills: ['Machine Learning', 'Statistical Analysis', 'Data Visualization', 'Product Management']
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
    'Programming Languages': ['Python', 'SQL', 'YAML', 'C#'],
    'Analytics & Operations': [
      'Operational metrics',
      'KPI definition',
      'Trend analysis',
      'A/B testing',
      'Statistical analysis',
      'Competitive benchmarking',
      'User behavior analysis'
    ],
    'Tools & Platforms': [
      'Zendesk', 'PagerDuty', 'JIRA', 'Airtable',
      'Grafana', 'AWS (S3, Athena, IAM)',
      'Git/GitHub', 'Jenkins CI/CD',
      'GTFS / GTFS-RT', 'ArcGIS', 'Streamlit'
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
              Linjing Rao &middot; Data Analyst at <span className="font-semibold text-[#FF5733] dark:text-[#FF6B47]">Citymapper</span> (Via Transportation)
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Urban mobility data, GTFS pipelines, transit partnerships, applied AI/ML
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="text-gray-500 dark:text-gray-400">New York, NY</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <a href="mailto:Linjing.rao@gmail.com" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">Email</a>
              <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">LinkedIn</a>
              <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="text-[#FF5733] dark:text-[#FF6B47] hover:underline text-sm">GitHub</a>
            </div>
          </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
