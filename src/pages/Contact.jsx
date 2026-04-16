import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa/index';

function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 lg:mb-12 text-center">
          Get In Touch
        </h1>

        <div className="max-w-xl mx-auto">
          <div className="bg-white dark:bg-[#161B22] rounded-xl border border-gray-200 dark:border-[#30363D] p-5 space-y-1">
            <a href="mailto:Linjing.rao@gmail.com" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0D1117] text-sm">
              <FaEnvelope className="w-4 h-4 text-[#FF5733] dark:text-[#FF6B47]" />
              <span>Send me an email</span>
            </a>
            <a href="https://linkedin.com/in/linjingrao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0D1117] text-sm">
              <FaLinkedin className="w-4 h-4 text-[#FF5733] dark:text-[#FF6B47]" />
              <span>linkedin.com/in/linjingrao</span>
            </a>
            <a href="https://github.com/lrao01-su" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-[#FF5733] dark:hover:text-[#FF6B47] transition-colors p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-[#0D1117] text-sm">
              <FaGithub className="w-4 h-4 text-[#FF5733] dark:text-[#FF6B47]" />
              <span>github.com/lrao01-su</span>
            </a>
          </div>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
            Open to Data Operations, Analytics Engineering, and Product Analyst roles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
