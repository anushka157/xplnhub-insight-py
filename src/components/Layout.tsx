import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, Github, Menu, X, ChevronRight } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  onOpenOnboarding: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onOpenOnboarding }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/implementation', label: 'Implementation' },
    { path: '/roadmap', label: 'Roadmap' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="cyber-grid"></div>
        <div className="particles"></div>
        <div 
          className="mouse-glow"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 200,
          }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Insight
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors ${
                      isActive(link.path)
                        ? 'text-cyan-400 font-semibold'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <a 
                  href="https://github.com/XplnHUB/Insight-Py" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button-subtle flex items-center space-x-2"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-cyan-500/20 pt-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`transition-colors ${
                        isActive(link.path)
                          ? 'text-cyan-400 font-semibold'
                          : 'text-gray-300 hover:text-cyan-400'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <a 
                    href="https://github.com/XplnHUB/Insight-Py" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-cyan-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Terminal className="w-8 h-8 text-cyan-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Insight
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  AI-powered code analysis tool that helps developers understand their codebases better. 
                  Combining static analysis with intelligent insights.
                </p>
                <button 
                  onClick={onOpenOnboarding}
                  className="neon-button group flex items-center space-x-2"
                >
                  <Terminal className="w-5 h-5" />
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link 
                        to={link.path}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py/blob/main/README.md" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py/issues" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Issues
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/XplnHUB/Insight-Py/discussions" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      Discussions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                <p>&copy; 2025 XplnHUB ~ CodeMaverick-143. Built with ❤️ for developers.</p>
              </div>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://github.com/XplnHUB/Insight-Py" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
