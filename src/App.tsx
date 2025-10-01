import React, { useEffect, useState } from 'react';
import { Github, Terminal, Code, FileText, BarChart3, Brain, ChevronRight, Play, Star, GitBranch } from 'lucide-react';
import OnboardingModal from './components/OnboardingModal';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Analyze 30+ File Types",
      description: "Support for Python, JavaScript, HTML, CSS, JSON, YAML, and many more programming languages and formats."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Generate Markdown Reports",
      description: "Beautiful, structured reports in Markdown format with comprehensive analysis and insights."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Collect Static Metrics",
      description: "Detailed metrics including lines of code, functions, classes, imports, and comment ratios."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Explanations",
      description: "Get intelligent code analysis with LLM probability scores and actionable insights."
    }
  ];

  const fileTypes = [
    '.py', '.js', '.ts', '.jsx', '.tsx', '.html', '.css', '.scss', '.json', '.yaml', 
    '.yml', '.md', '.txt', '.xml', '.sql', '.sh', '.bash', '.go', '.rs', '.java', 
    '.c', '.cpp', '.php', '.rb', '.swift', '.kt', '.dart'
  ];

  const roadmapItems = [
    { title: ".insightignore Support", status: "completed", quarter: "Q1 2025" },
    { title: "HTML & PDF Export", status: "in-progress", quarter: "Q2 2025" },
    { title: "Local AI Engines", status: "planned", quarter: "Q3 2025" },
    { title: "Interactive Dashboard", status: "planned", quarter: "Q4 2025" },
    { title: "Cloud Sync & Collaboration", status: "planned", quarter: "Q1 2026" },
    { title: "VSCode Extension", status: "planned", quarter: "Q2 2026" }
  ];

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
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="w-8 h-8 text-cyan-400" />
              <a href="/">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
               Insight
               </span>
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors">Features</a>
              <a href="#installation" className="text-gray-300 hover:text-cyan-400 transition-colors">Installation</a>
              <a href="#roadmap" className="text-gray-300 hover:text-cyan-400 transition-colors">Roadmap</a>
            </nav>
            <a 
              href="https://github.com/XplnHUB/Insight-Py" 
              className="neon-button-subtle flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Analyze Your Codebases
                </span>
                <br />
                <span className="text-white">with AI-Powered Insights</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Insight is a Python CLI tool that generates detailed reports combining 
                static code analysis with AI explanations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setIsOnboardingOpen(true)}
                  className="neon-button group flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
<a href="https://github.com/XplnHUB/Insight-Py" target="_blank" rel="noopener noreferrer">
  <button className="neon-button-outline flex items-center space-x-2">
    <Github className="w-5 h-5" />
    <span>View on GitHub</span>
    <Star className="w-4 h-4" />
  </button>
</a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-gray-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Insight
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A next-generation code analysis tool that bridges the gap between traditional static analysis and AI-powered insights
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-400">What is Insight?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Insight is a powerful Python CLI tool designed to help developers understand their codebases better. 
                    It combines traditional static code analysis with cutting-edge AI technology to provide comprehensive, 
                    actionable insights about your code structure, quality, and complexity.
                  </p>
                </div>
                <div className="feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Why Insight?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Whether you're onboarding to a new project, conducting code reviews, or maintaining legacy systems, 
                    Insight provides the clarity you need. Get instant reports with metrics, visualizations, and AI-powered 
                    explanations that help you make informed decisions about your code.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="feature-card">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-400">Key Highlights</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Support for 30+ programming languages and file formats</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Detailed metrics including LOC, complexity, and code patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>AI-powered explanations with confidence scores</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Beautiful Markdown reports ready to share</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <ChevronRight className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span>Easy integration into your development workflow</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced code analysis capabilities powered by cutting-edge AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="feature-card group">
                  <div className="feature-icon-wrapper mb-6">
                    <div className="feature-icon">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section id="installation" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Quick Installation
              </h2>
              <p className="text-xl text-gray-300">
                Get started with Insight in seconds
              </p>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">Terminal</span>
              </div>
              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2 typewriter">pip install insight-cli-sarang</span>
                </div>
                <div className="terminal-line delay-1">
                  <span className="text-green-400">$</span>
                  <span className="text-white ml-2 typewriter">insight-cli-sarang .</span>
                </div>
                <div className="terminal-line delay-2">
                  <span className="text-cyan-400 typewriter">✓ Analysis complete! Report saved to insight_report.md</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supported File Types */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                30+ Supported File Types
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive support for modern development stacks
              </p>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9 gap-4">
              {fileTypes.map((type, index) => (
                <div key={index} className="file-type-badge group">
                  <span className="font-mono text-sm group-hover:text-cyan-400 transition-colors">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Future Roadmap
              </h2>
              <p className="text-xl text-gray-300">
                Exciting features coming soon
              </p>
            </div>
            <div className="roadmap-container">
              {roadmapItems.map((item, index) => (
                <div key={index} className={`roadmap-item ${item.status}`}>
                  <div className="roadmap-icon">
                    <GitBranch className="w-6 h-6" />
                  </div>
                  <div className="roadmap-content">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className={`status-badge ${item.status}`}>
                        {item.status.replace('-', ' ')}
                      </span>
                      <span className="text-gray-400 text-sm">{item.quarter}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-20 px-6 border-t border-cyan-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Analyze Your Code?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join the developers already using Insight to gain deeper understanding of their codebases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setIsOnboardingOpen(true)}
                className="neon-button group flex items-center space-x-2"
              >
                <Terminal className="w-5 h-5" />
                <span>Get Started with Insight</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="https://github.com/XplnHUB/Insight-Py" 
                className="neon-button-outline flex items-center space-x-2"
              >
                <Github className="w-5 h-5" />
                <span>Star on GitHub</span>
              </a>
            </div>
            <div className="text-gray-500 text-sm">
              <p>&copy; 2025 XplnHUB ~ CodeMaverick-143. Built with ❤️ for developers.</p>
            </div>
          </div>
        </footer>
      </div>
      
      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
      />
    </div>
  );
}

export default App;
