import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa/index';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-[#010409] text-white mt-auto border-t border-gray-800 dark:border-[#30363D]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-[#FF5733] uppercase tracking-wider">About</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transit data operations analyst at Citymapper (Via). Building data systems and products for the cities people live in.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-[#FF5733] uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-1.5">
              <li><a href="#/" className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors">Home</a></li>
              <li><a href="#/projects" className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors">Projects</a></li>
              <li><a href="#/about" className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors">About</a></li>
              <li><a href="#/resume" className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors">Resume</a></li>
              <li><a href="#/contact" className="text-sm text-gray-400 hover:text-[#FF5733] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3 text-[#FF5733] uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4 mb-3">
              <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF5733] transition-colors">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF5733] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="mailto:Linjing.rao@gmail.com" className="text-gray-400 hover:text-[#FF5733] transition-colors">
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-500">Reach out via email or LinkedIn</p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-[#30363D] pt-5 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Linjing Rao &middot; Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
