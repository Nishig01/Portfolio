import { Award, Briefcase, Calendar, ChevronRight, Code, ExternalLink, Github, Linkedin, Mail, MapPin, Menu, X } from 'lucide-react';
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
    
    about: "Passionate software developer with expertise in building scalable web applications. I love solving complex problems and creating elegant solutions that make a difference.",
    
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
        name: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        // link: "https://github.com/Nishig01/project1",
        highlights: ["Handles 10k+ daily transactions", "99.9% uptime"]
      },
      {
        name: "Data Center Cooling Load Balancing using Greedy Algorithm",
        description: "Priortizing cooling the hottest server rack to minimize peak temperature and achieve thermal stability within defined constraints",
        technologies: ["CPP", "Algorithm", "Data Structures", "gnuplot"],
        link: "https://github.com/Nishig01/datacenter-cooling-greedy-algorithm",
        highlights: ["Greedy Cooling Algorithm" , "Thermal Optimization Simulation"]
      },
      {
        name: "AI Chat Assistant",
        description: "Intelligent chatbot using natural language processing for customer support automation",
        technologies: ["Python", "TensorFlow", "Flask", "React"],
        // link: "https://github.com/Nishig01/project3",
        highlights: ["90% accuracy", "Multi-language support"]
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

  const renderHome = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
            {portfolioData.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {portfolioData.name}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-600 font-semibold mb-4">
            {portfolioData.title}
          </p>
          <div className="flex items-center justify-center text-gray-600 mb-6">
            <MapPin className="w-4 h-4 mr-2" />
            {portfolioData.location}
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.about}
        </p>
        
        <div className="flex justify-center gap-4 mb-8">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition">
            <Github className="w-6 h-6" />
          </a>
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
             className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${portfolioData.email}`} target="_blank"
             className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <button 
          onClick={() => setActiveSection('experience')}
          className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
          View My Work
          <ChevronRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Experience</h2>
        
        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 text-gray-600">
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
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <ChevronRight className="w-5 h-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <Code className="w-8 h-8 text-blue-600" />
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                   className="text-gray-600 hover:text-blue-600 transition">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              
              <div className="mb-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-center text-sm text-green-600 mb-1">
                    <Award className="w-4 h-4 mr-2" />
                    {highlight}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="space-y-4">
            <a href={`mailto:${portfolioData.email}`} target="_blank"
               className="flex items-center justify-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
              <Mail className="w-6 h-6 mr-3 text-purple-600" />
              <span className="text-lg text-gray-900">{portfolioData.email}</span>
            </a>
            
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
              <Github className="w-6 h-6 mr-3 text-gray-900" />
              <span className="text-lg text-gray-900">GitHub Profile</span>
            </a>
            
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
               className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
              <Linkedin className="w-6 h-6 mr-3 text-blue-600" />
              <span className="text-lg text-gray-900">LinkedIn Profile</span>
            </a>
          </div>
        </div>
        
        <p className="text-gray-600">
          Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return renderHome();
      case 'experience': return renderExperience();
      case 'projects': return renderProjects();
      case 'skills': return renderSkills();
      case 'contact': return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setActiveSection('home')}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition">
              {portfolioData.name.split(' ')[0]}
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-3 py-2 rounded-lg font-medium transition ${
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}>
                  {section.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-900">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-3 space-y-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActiveSection(section.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                    activeSection === section.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}>
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 {portfolioData.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition">
              <Github className="w-5 h-5" />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${portfolioData.email}`} target="_blank"
               className="hover:text-blue-400 transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}