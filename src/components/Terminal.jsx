import { useState, useEffect, useRef } from 'react';

const COMMANDS = [
  { prompt: '$ python gtfs_pipeline.py --feed mta-subway --mode realtime', output: '✓ Connected to MTA GTFS-RT feed\n✓ Parsing 472 active trips across 26 lines\n✓ Ridership data written to warehouse' },
  { prompt: '$ python spatial_analysis.py --source "311,topography"', output: '✓ Loaded 12,847 flood reports (NYC OpenData)\n✓ Correlating with elevation model\n✓ 23 high-risk zones identified → story map updated' },
  { prompt: '$ python qa_tool.py --compare prod staging --regions 120', output: '✓ Scanning 120 production regions\n✓ 3 routing discrepancies flagged\n✓ Dashboard updated — QA overhead reduced 75%' },
];

function Terminal() {
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typedChars, setTypedChars] = useState(0);
  const [showOutput, setShowOutput] = useState(false);
  const [phase, setPhase] = useState('typing'); // typing, output, pause
  const termRef = useRef(null);

  useEffect(() => {
    const cmd = COMMANDS[currentCmd];

    if (phase === 'typing') {
      if (typedChars < cmd.prompt.length) {
        const timer = setTimeout(() => setTypedChars(typedChars + 1), 35);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => { setShowOutput(true); setPhase('output'); }, 400);
        return () => clearTimeout(timer);
      }
    }

    if (phase === 'output') {
      const timer = setTimeout(() => setPhase('pause'), 2500);
      return () => clearTimeout(timer);
    }

    if (phase === 'pause') {
      const timer = setTimeout(() => {
        setCurrentCmd((currentCmd + 1) % COMMANDS.length);
        setTypedChars(0);
        setShowOutput(false);
        setPhase('typing');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [typedChars, phase, currentCmd]);

  const cmd = COMMANDS[currentCmd];

  return (
    <div ref={termRef} className="w-full rounded-xl overflow-hidden border border-gray-200 dark:border-[#30363D] shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-[#161B22] border-b border-gray-200 dark:border-[#30363D]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28CA41]"></div>
        </div>
        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono ml-2">terminal — data-ops</span>
      </div>
      {/* Terminal body */}
      <div className="bg-gray-900 dark:bg-[#0D1117] p-4 sm:p-5 min-h-[160px] font-mono text-sm leading-relaxed">
        <div className="text-green-400 dark:text-green-500">
          {cmd.prompt.substring(0, typedChars)}
          {phase === 'typing' && <span className="animate-pulse text-white">▊</span>}
        </div>
        {showOutput && (
          <div className="mt-2 text-gray-400 dark:text-gray-500 whitespace-pre-line text-xs sm:text-sm">
            {cmd.output}
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
