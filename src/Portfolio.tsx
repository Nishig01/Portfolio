import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, Award, Briefcase, Calendar, ChevronRight, Code, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // CUSTOMIZE YOUR DATA HERE
  const portfolioData = {
    name: "Nishigandha Mali",
    title: "Full Stack Developer",
    email: "nishigandha.mali1111@gmail.com",
    github: "https://github.com/Nishig01",
    linkedin: "https://www.linkedin.com/in/nishigandha-mali-313751197/",
    location: "United States",

    about: "Graduate Computer Science student with 4 years of professional experience in the Information Technology industry, with expertise in building scalable applications. I love solving complex problems and creating elegant solutions that make a difference.",

    experience: [
      {
        company: "Siemens Digital Industries Software",
        role: "Software Engineer",
        period: "Jan 2022 - Jul 2025",
        location: "Pune, India",
        description: [
          "Led design and development of cloud-native microservices architecture powering industrial SaaS products used by tens of thousands of enterprise users globally, ensuring high availability and scalability.​",
          "Improved end-to-end application performance by 40% through profiling, refactoring critical paths, optimizing database queries, and introducing asynchronous, event-driven processing",
          "Mentored 5 junior developers via code reviews, design discussions, and pair programming, raising code quality and consistency across services.",
          "Implemented and maintained CI/CD pipelines with Docker and Kubernetes on cloud platforms, enabling reliable, low-downtime releases for distributed services.​",
          "Enhanced observability and reliability by instrumenting services with structured logging and metrics dashboards, reducing mean time to detect and resolve production issues."
        ]
      },
      {
        company: "Siemens Digital Industries Software",
        role: "Full Stack Developer",
        period: "Jun 2020 - Dec 2021",
        location: "Pune, India",
        description: [
          "Built responsive, production-grade web applications using React and Node.js for internal factory digitalization and analytics workflows, improving feature delivery speed for engineering teams.",
          "Developed RESTful APIs, integrated third-party and internal Siemens APIs, and implemented robust error handling and authentication for secure data flows.",
          "Collaborated with designers to ship pixel-perfect, accessible UIs and implemented reusable front-end components, improving UI consistency and reducing rework.",
          "Introduced automated testing practices (unit/integration) and linting to the front-end and back-end codebases, preventing regressions and supporting frequent deployments."
        ]
      }
    ],

    projects: [
      {
        "name": "ML Defense System",
        "description": "Multi-layered defense against adversarial & membership inference attacks in deep learning models",
        "technologies": ["Python", "PyTorch", "ResNet", "CIFAR-10/100"],
        "link": "https://github.com/Nishig01/TrustworthyML-Defense",
        "highlights": [
          "Developed Gaussian smoothing + randomized ensemble + temperature scaling defense",
          "Achieved 57% adversarial accuracy (from 6%) & 49.8% MIA (near-random)"
        ]
      },
      {
        "name": "Movie Suggestion AI",
        "description": "Movie recommendation system using collaborative filtering & content-based algorithms",
        "technologies": ["Python", "Streamlit", "Scikit-learn", "Surprise"],
        "link": "https://github.com/Nishig01/MovieSuggestionAI",
        "highlights": [
          "Built recommendation engine on MovieLens dataset with similarity scoring",
          "Deployed interactive Streamlit UI with personalized suggestions & metrics"
        ]
      },
      {
        "name": "AI Chat Assistant",
        "description": "Intelligent chatbot using NLP for customer support automation",
        "technologies": ["Python", "TensorFlow", "NLTK", "Flask"],
        "link": "https://github.com/Nishig01/AI-Chat-Assistant",
        "highlights": [
          "Built conversational AI with 92% intent recognition accuracy",
          "Deployed real-time system with context tracking & multi-turn dialogue"
        ]
      },
      {
        "name": "E-Commerce Platform",
        "description": "Full-stack e-commerce solution with payment integration & admin dashboard",
        "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
        "link": "https://github.com/Nishig01/ECommerce-Platform",
        "highlights": [
          "Built platform with Stripe payments & real-time inventory management",
          "Implemented cart persistence & 99.9% checkout success rate"
        ]
      },
      {
        "name": "Constrained Feed Recommendation",
        "description": "Greedy algorithm for NP-hard personalized feed optimization with diversity constraints",
        "technologies": ["Python", "NumPy", "Matplotlib"],
        "link": "https://github.com/Nishig01/Feed-Optimization",
        "highlights": [
          "Designed two-phase greedy selector for constraint satisfaction",
          "Simulated 1000s of posts achieving high-quality NP-hard solutions"
        ]
      },
      {
        "name": "Data Center Cooling Optimization",
        "description": "Greedy algorithm for optimal cooling resource allocation across server racks",
        "technologies": ["C++17", "Graph Algorithms", "Thermal Simulation"],
        "link": "https://github.com/Nishig01/datacenter-cooling-greedy-algorithm",
        "highlights": [
          "Formulated cooling as weighted graph optimization problem",
          "Achieved 21% peak temperature reduction with O(n²) algorithm"
        ]
      },
      {
        "name": "CDN Routing Optimization",
        "description": "Min-cost max-flow algorithm for CDN latency minimization under capacity constraints",
        "technologies": ["Python", "Network Flow", "GNUplot"],
        "link": "https://github.com/Nishig01/CDN-Optimization",
        "highlights": [
          "Modeled CDN as flow network with cost/capacity constraints",
          "Implemented min-cost max-flow reducing end-to-end latency"
        ]
      }
    ],

    skills: {
      "Frontend": ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
      "Backend": ["Node.js", "Python", "Express", "Django", "REST APIs"],
      "Database": ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
      "Tools": ["Git", "Docker", "AWS", "CI/CD", "Agile"]
    }
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderHome = () => (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 pt-16"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={staggerChildren}
    >
      <div className="max-w-4xl text-center relative">
        <motion.div variants={fadeInUp} className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-uf-orange to-uf-blue p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-uf-blue text-5xl font-bold border-4 border-white">
              {portfolioData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 relative inline-block">
            {portfolioData.name}
            <span className="hidden md:block absolute -top-8 -right-12 font-hand text-3xl text-uf-orange transform rotate-12">
              Hello!
            </span>
          </h1>
          <p className="text-2xl md:text-4xl text-uf-blue font-bold mb-6">
            {portfolioData.title}
          </p>
          <div className="flex items-center justify-center text-gray-600 mb-6 font-medium">
            <MapPin className="w-5 h-5 mr-2 text-uf-orange" />
            {portfolioData.location}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="relative">
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            {portfolioData.about}
            <span className="block mt-4 font-hand text-2xl text-uf-blue transform -rotate-2">
              - Ready to build something amazing!
            </span>
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center gap-6 mb-12">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
            className="p-4 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110 shadow-lg">
            <Github className="w-6 h-6" />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
            className="p-4 bg-uf-blue text-white rounded-full hover:bg-blue-800 transition transform hover:scale-110 shadow-lg">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${portfolioData.email}`} target="_blank"
            className="p-4 bg-uf-orange text-white rounded-full hover:bg-orange-600 transition transform hover:scale-110 shadow-lg">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveSection('experience')}
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-uf-blue to-blue-700 text-white rounded-full hover:shadow-xl transition font-bold text-lg">
          View My Work
          <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
        </motion.button>
      </div>
    </motion.div>
  );

  const renderExperience = () => (
    <motion.div
      key="experience"
      className="min-h-screen py-24 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center relative">
          Experience
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-uf-orange rounded-full"></span>
        </h2>

        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition border-l-8 border-uf-orange relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Briefcase size={120} />
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-xl text-uf-blue font-bold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600 font-medium bg-gray-100 px-4 py-2 rounded-lg inline-block">
                  <div className="flex items-center mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700 text-lg">
                    <ChevronRight className="w-6 h-6 mr-2 text-uf-orange flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderProjects = () => (
    <motion.div
      key="projects"
      className="min-h-screen py-24 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center relative">
          Projects
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-uf-blue rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition flex flex-col border-t-8 border-uf-blue group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-uf-blue group-hover:text-white transition-colors duration-300">
                  <Code className="w-8 h-8" />
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-uf-orange transition transform hover:rotate-12">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-uf-blue transition-colors">{project.name}</h3>
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{project.description}</p>

              <div className="mb-6 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-500 font-medium">
                    <Award className="w-4 h-4 mr-2 text-uf-orange" />
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderSkills = () => (
    <motion.div
      key="skills"
      className="min-h-screen py-24 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">Skills</h2>
        <p className="text-center text-xl text-gray-600 mb-16 font-hand text-uf-blue transform -rotate-1">
          My technical toolbox
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center pb-4 border-b border-gray-100">
                <div className={`p-2 rounded-lg mr-3 ${idx % 2 === 0 ? 'bg-orange-100 text-uf-orange' : 'bg-blue-100 text-uf-blue'}`}>
                  <Briefcase className="w-6 h-6" />
                </div>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm shadow-sm border transition cursor-default
                      ${idx % 2 === 0
                        ? 'bg-orange-50 text-orange-900 border-orange-100 hover:bg-uf-orange hover:text-white hover:border-uf-orange'
                        : 'bg-blue-50 text-blue-900 border-blue-100 hover:bg-uf-blue hover:text-white hover:border-uf-blue'}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContact = () => (
    <motion.div
      key="contact"
      className="min-h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl w-full text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-2xl text-uf-orange font-hand mb-10 transform -rotate-2">
          Let's work together!
        </p>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-uf-orange to-uf-blue"></div>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-6 max-w-md mx-auto">
            <a href={`mailto:${portfolioData.email}`} target="_blank"
              className="group flex items-center p-5 bg-gray-50 rounded-2xl hover:bg-uf-orange hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-white/20 transition">
                <Mail className="w-6 h-6 text-uf-orange group-hover:text-white" />
              </div>
              <span className="flex-grow text-lg font-medium ml-4 text-left">{portfolioData.email}</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
              className="group flex items-center p-5 bg-gray-50 rounded-2xl hover:bg-gray-900 hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-white/20 transition">
                <Github className="w-6 h-6 text-gray-900 group-hover:text-white" />
              </div>
              <span className="flex-grow text-lg font-medium ml-4 text-left">GitHub Profile</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
              className="group flex items-center p-5 bg-gray-50 rounded-2xl hover:bg-uf-blue hover:text-white transition duration-300 shadow-sm hover:shadow-md">
              <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-white/20 transition">
                <Linkedin className="w-6 h-6 text-uf-blue group-hover:text-white" />
              </div>
              <span className="flex-grow text-lg font-medium ml-4 text-left">LinkedIn Profile</span>
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-uf-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => setActiveSection('home')}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-uf-orange to-uf-blue hover:opacity-80 transition font-hand">
              {portfolioData.name}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-5 py-2.5 rounded-full font-medium transition duration-300 ${activeSection === section.id
                    ? 'text-white bg-uf-blue shadow-lg shadow-blue-200'
                    : 'text-gray-600 hover:text-uf-orange hover:bg-orange-50'
                    }`}>
                  {section.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-uf-orange transition">
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-b overflow-hidden"
            >
              <div className="px-4 py-4 space-y-2">
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition ${activeSection === section.id
                      ? 'text-uf-blue bg-blue-50'
                      : 'text-gray-700 hover:text-uf-orange hover:bg-orange-50'
                      }`}>
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && renderHome()}
          {activeSection === 'experience' && renderExperience()}
          {activeSection === 'projects' && renderProjects()}
          {activeSection === 'skills' && renderSkills()}
          {activeSection === 'contact' && renderContact()}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <img src="/gator-logo.png" alt="Gator" className="w-8 h-8" />
            <p className="text-gray-600 font-medium">
              Made with <span className="text-red-500">❤️</span> by {portfolioData.name.split(' ')[0]}
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-900 transition transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-uf-blue transition transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${portfolioData.email}`} target="_blank"
              className="text-gray-400 hover:text-uf-orange transition transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}