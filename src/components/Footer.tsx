import { useEffect, useState } from 'react';
import { ArrowUp, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="footer-section">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400 mb-4">
              FaceSwapAI
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transform yourself into a virtual avatar with cutting-edge AI technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 group"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-teal-400" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 hover:translate-x-1 inline-block">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 FaceSwapAI. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with passion for the future of digital communication
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-teal-500 to-amber-500 text-white rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-110 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
