import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa/index';

const liveProject = 'https://residence-09-spaceplan.mary2jing.chatgpt.site/';

const flow = [
  { number: '01', title: 'Upload', copy: 'Start with the floor plan the roommates already have.' },
  { number: '02', title: 'Add', copy: 'Enter existing furniture or paste a product link to capture dimensions and price.' },
  { number: '03', title: 'Test', copy: 'Drag, rotate, and compare scaled furniture across layout options.' },
  { number: '04', title: 'Decide', copy: 'Comment, vote, and save the shared plan before buying or moving anything.' },
];

const decisions = [
  {
    title: 'Start with upload, not search',
    copy: 'The fastest path to value is the plan already on a lease or listing. Apartment lookup added complexity before solving the core job.',
  },
  {
    title: 'Warn without taking away control',
    copy: 'Walls and overlaps are hard placement checks. Airflow is advice: users can still place furniture near a vent when that tradeoff works for them.',
  },
  {
    title: 'Separate consideration from placement',
    copy: 'A pasted product first becomes a saved idea with price and dimensions. It reaches the plan only after the user chooses “Try on plan.”',
  },
];

function SpaceplanCaseStudy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <article className="max-w-5xl mx-auto">
        <a href="#/projects" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] mb-8 transition-colors">
          <FaArrowLeft className="w-3 h-3" /> All projects
        </a>

        <header className="mb-10 lg:mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-[#FF5733] dark:bg-[#FF6B47] text-white">Product case study</span>
            <span className="font-mono text-xs text-gray-500 dark:text-gray-400">2026 · Product design + full-stack prototype</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4">Spaceplan</h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">A collaborative planning tool that helps roommates decide what fits before they buy or move furniture.</p>
            </div>
            <a href={liveProject} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FF5733] dark:bg-[#FF6B47] text-white px-5 py-3 rounded-lg hover:bg-[#E04E2D] dark:hover:bg-[#FF5733] transition font-medium shrink-0">
              Open live project <FaExternalLinkAlt className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-[#30363D] bg-white dark:bg-[#161B22] shadow-sm">
            <img src="/spaceplan-overview.jpg" alt="Spaceplan showing a floor plan, furniture inventory, layout options, and roommate comments" className="w-full" />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 py-10 border-y border-gray-200 dark:border-[#30363D]">
          <div>
            <p className="font-mono text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-widest mb-2">The user pain</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Furniture decisions are expensive to get wrong.</h2>
          </div>
          <div className="space-y-5 text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>More young adults share apartments with roommates or partners, so one furniture purchase can affect circulation, storage, work, and how everyone uses the home.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  title: 'Shared decision',
                  text: 'One purchase changes how everyone moves, works, and stores things.',
                },
                {
                  title: 'Hard to visualize',
                  text: 'Product dimensions do not show how an item works inside this room.',
                },
                {
                  title: 'Costly to reverse',
                  text: 'Delivery, assembly, disassembly, and returns make a bad fit expensive.',
                },
              ].map((point) => (
                <div key={point.title} className="rounded-xl border border-gray-200 dark:border-[#30363D] bg-white dark:bg-[#161B22] p-4">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-2">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="font-medium text-gray-900 dark:text-gray-100">Spaceplan reduces that mental load by letting people test furniture at scale, compare options, and agree before buying.</p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mb-8">
            <p className="font-mono text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-widest mb-2">Core user flow</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">From floor plan to shared decision</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((step) => (
              <div key={step.number} className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5">
                <span className="font-mono text-sm font-semibold text-[#FF5733] dark:text-[#FF6B47]">{step.number}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-12 lg:pb-16">
          <div className="mb-8">
            <p className="font-mono text-xs font-semibold text-[#FF5733] dark:text-[#FF6B47] uppercase tracking-widest mb-2">Product thinking</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">Three decisions that shaped the experience</h2>
          </div>
          <div className="space-y-4">
            {decisions.map((decision, index) => (
              <div key={decision.title} className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-3 sm:gap-5 bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5 sm:p-6">
                <span className="font-mono text-2xl font-bold text-gray-300 dark:text-gray-600">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{decision.title}</h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{decision.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#182F29] dark:bg-[#142720] text-white rounded-2xl p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12">
            <div>
              <p className="font-mono text-xs font-semibold text-[#9ED1BB] uppercase tracking-widest mb-2">What shipped</p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">A working, persistent prototype</h2>
              <p className="text-[#D9E9E1] leading-relaxed">The app supports upload, scaled placement, rotation, layout options, product-link import, price comparison, comments, voting, and saved plans.</p>
            </div>
            <div className="flex flex-wrap content-start gap-2">
              {['React', 'TypeScript', 'Cloudflare Workers', 'D1', 'R2', 'JSON-LD'].map((tech) => (
                <span key={tech} className="font-mono text-sm px-3 py-1.5 rounded-md border border-white/20 bg-white/10 text-white">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4">
          <a href="#/projects" className="inline-flex items-center justify-center gap-2 border border-gray-300 dark:border-[#30363D] text-gray-700 dark:text-gray-300 px-5 py-3 rounded-lg hover:border-[#FF5733] dark:hover:border-[#FF6B47] hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition font-medium">
            <FaArrowLeft className="w-3.5 h-3.5" /> Back to projects
          </a>
          <a href={liveProject} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FF5733] dark:bg-[#FF6B47] text-white px-5 py-3 rounded-lg hover:bg-[#E04E2D] dark:hover:bg-[#FF5733] transition font-medium">
            Try Spaceplan <FaArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </article>
    </div>
  );
}

export default SpaceplanCaseStudy;
