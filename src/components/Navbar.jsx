import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#0D1117]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#30363D] px-4 py-3 sm:px-6 sm:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors tracking-tight">
          <span className="text-[#FF5733] dark:text-[#FF6B47]">L</span>injing Rao
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#161B22] focus:outline-none focus:ring-2 focus:ring-[#FF5733] transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-base text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] hover:bg-gray-100 dark:hover:bg-[#161B22] px-3 py-1.5 rounded-md transition-all font-medium"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-3 px-2">
          <div className="flex flex-col bg-white dark:bg-[#161B22] rounded-lg border border-gray-200 dark:border-[#30363D] p-2">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF5733] dark:hover:text-[#FF6B47] hover:bg-gray-50 dark:hover:bg-[#0D1117] px-3 py-2.5 rounded-md transition-all font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
