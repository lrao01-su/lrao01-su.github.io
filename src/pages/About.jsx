import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa/index';

function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">About</h1>

        <div className="mb-8">
          <div className="w-28 h-28 rounded-xl relative overflow-hidden shadow-md">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5733] via-[#FF8F6B] to-[#FFB899] dark:from-[#FF6B47] dark:via-[#CC4527] dark:to-[#1A0A05]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white/90 tracking-tight select-none" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>LR</span>
            </div>
          </div>
        </div>

        <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Transit data operations analyst at Citymapper (Via Transportation), a transit app serving millions daily across 120+ cities. I build data systems and products for the cities people live in — pipelines, feeds, geospatial analysis, and user-facing tools.
        </p>

        <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Cornell Tech graduate (Master of Applied Information Science & Information System, Urban Tech Concentration, GPA 3.9). Syracuse University B.Arch with a minor in Economics, Magna Cum Laude. Hands-on expertise in urban mobility data, GTFS pipelines, transit agency partnerships, and applied AI/ML.
        </p>

        <h2 className="font-mono text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-wider mb-3">Technical Stack</h2>
        <div className="bg-white dark:bg-[#161B22] border border-gray-200 dark:border-[#30363D] rounded-xl p-5 mb-8">
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li><span className="font-medium text-gray-900 dark:text-gray-100">Languages:</span> Python, SQL, YAML, C#</li>
            <li><span className="font-medium text-gray-900 dark:text-gray-100">Analytics:</span> Operational metrics, KPI definition, A/B testing, statistical analysis, competitive benchmarking</li>
            <li><span className="font-medium text-gray-900 dark:text-gray-100">Tools:</span> Zendesk, PagerDuty, JIRA, Airtable, Grafana, AWS (S3, Athena, IAM), Jenkins CI/CD</li>
            <li><span className="font-medium text-gray-900 dark:text-gray-100">Data & Geospatial:</span> GTFS/GTFS-RT, ArcGIS, NYC OpenData, Streamlit, Google Maps API</li>
            <li><span className="font-medium text-gray-900 dark:text-gray-100">Engineering:</span> React, Next.js, Node.js, Git/GitHub</li>
          </ul>
        </div>

        {/* TODO: add work experience */}

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Open to Data Operations, Analytics Engineering, and Product Analyst roles — especially in civic tech, mobility, infrastructure, and urban data platforms.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:Linjing.rao@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
