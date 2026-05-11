import { motion } from 'framer-motion';
import { ExternalLink, Github, Linkedin, Mail, MapPin, ChevronRight, Download, ArrowRight } from 'lucide-react';
import Background3D from './Background3D';

export default function App() {
  const portfolioData = {
    name: "Nishigandha Mali",
    title: "Software Engineer • AI/ML • Full Stack Developer",
    email: "nishigandha.mali1111@gmail.com",
    github: "https://github.com/Nishig01",
    linkedin: "https://www.linkedin.com/in/nishigandha-mali-313751197/",
    location: "United States",
    about: "I build scalable systems and polished digital experiences using modern frontend, backend, and AI technologies. Graduate Computer Science student with 4 years of professional experience in the Information Technology industry, including my journey at Siemens Digital Industries Software. I have architected and developed robust backend systems, scalable applications, and AI-driven optimizations. I thrive on translating complex technical challenges into tangible impact—whether it's reducing latency with network flows or building advanced recommendation algorithms.",
    experience: [
      {
        company: "Siemens Digital Industries Software",
        period: "2020-2025",
        description: "Architected microservices, full-stack enterprise applications, and fine-tuned GenAI LLM pipelines for manufacturing platforms."
      }
    ],
    projects: [
      {
        name: "Webhook Gateway",
        description: "Full-stack event ingestion platform with Spring Boot backend, Kafka fan-out, and React.js admin dashboard for live monitoring.",
        technologies: ["Spring Boot", "React", "Kafka", "Redis"],
        github: "https://github.com/Nishig01/Webhook-Gateway",
        type: "Website",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "DanceIQ",
        description: "Polyglot microservices platform extracting skeletal keypoints via YOLOv8/MediaPipe, scoring dance performance using Dynamic Time Warping.",
        technologies: ["Spring Boot", "FastAPI", "YOLOv8", "MediaPipe"],
        github: "https://github.com/Nishig01/DanceIQ",
        link: "https://teach-me-dance.vercel.app/",
        type: "Product",
        image: "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "BookMyGym",
        description: "Full-stack MERN gym-booking platform with real-time slot availability, owner analytics, and JWT authentication.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Nishig01/BookMyGym",
        link: "https://bookmygym.vercel.app/",
        type: "Website",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "CollabBoard",
        description: "Real-time collaborative whiteboard with multi-user sync, live cursor tracking, and undo/redo optimized for low-latency canvas rendering.",
        technologies: ["React", "Node.js", "WebSockets"],
        github: "https://github.com/Nishig01/CollabBoard",
        link: "https://collab-board-nine.vercel.app/",
        type: "Website",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Movie Suggestion AI",
        description: "AI-powered recommendation engine parsing natural-language prompts into genre, mood, and era filters, returning ranked results via TMDB API.",
        technologies: ["React", "Node.js", "Firebase", "OpenAI API"],
        github: "https://github.com/Nishig01/MovieSuggestionAI",
        link: "https://movie-suggestion-ai.vercel.app/",
        type: "Website",
        images: ["/movie-1.png", "/movie-2.png", "/movie-3.png", "/movie-4.png"]
      },
      {
        name: "Intelligent Medical Document RAG",
        description: "Built RAG pipeline with Claude API and LangChain for semantic QA and summarization over large PDF corpora.",
        technologies: ["Python", "Claude API", "LangChain"],
        github: "https://github.com/Nishig01/Intelligent-Medical-RAG",
        type: "Research",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Diabetic Retinopathy Detection",
        description: "Fine-tuned ResNet50 for 5-class DR severity classification using PyTorch and CLAHE preprocessing.",
        technologies: ["PyTorch", "ResNet50", "Deep Learning"],
        link: "https://huggingface.co/spaces/nismal1u/diabetic_retinopathy_detection",
        type: "Research",
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        name: "Constrained Feed Optimization",
        description: "Formulated robust models mimicking constrained animal feed requirements using Linear Programming algorithms.",
        technologies: ["Python", "NumPy", "Matplotlib"],
        github: "https://github.com/Nishig01/Feed-Optimization",
        type: "Research",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ],
    skills: {
      "Frontend & Frameworks": ["React", "Next.js", "Javascript", "Typescript", "Tailwind CSS", "HTML5", "CSS3"],
      "Backend Engineering": ["Node.js", "Java", "Python", "C++", "C", "Spring Boot", "Express", "RESTful APIs", "GraphQL"],
      "Databases & Cloud": ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS", "Google Cloud", "Docker", "Kubernetes"],
      "AI & Machine Learning": ["TensorFlow", "PyTorch", "Scikit-Learn", "HuggingFace", "Deep Learning", "NLP"]
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-200 selection:bg-[#4FD1C5]/30 selection:text-white">
      <Background3D />
      
      {/* Dynamic Grid Background for top sections overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-[#070B14]/70 backdrop-blur-xl border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4FD1C5] to-[#7C3AED] flex items-center justify-center text-sm shadow-[0_0_15px_rgba(79,209,197,0.3)]">N</span>
            {portfolioData.name.split(" ")[0]}
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#94A3B8]">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10 pt-24 pb-24">
        {/* HERO SECTION */}
        <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 lg:px-12 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl"
          >
            <motion.div variants={fadeUpVariant} className="mb-6 flex">
              <span className="px-4 py-1.5 rounded-full border border-[#4FD1C5]/30 bg-[#4FD1C5]/10 text-[#4FD1C5] text-sm font-semibold tracking-wide flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#4FD1C5] mr-2 animate-pulse"></span>
                {portfolioData.title}
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-8 leading-[1.1]">
              Building scalable systems <br className="hidden md:block"/>& polished digital experiences.
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-[#94A3B8] text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              I am {portfolioData.name}, a software engineer crafting highly performant applications via modern frontend, backend, and AI integration strategies.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <a href="#projects" className="px-6 py-3 bg-[#F8FAFC] text-[#070B14] font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 flex items-center">
                View Projects <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" className="px-6 py-3 border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 flex items-center">
                Contact Me
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <motion.div variants={fadeUpVariant} className="md:col-span-5 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4FD1C5] to-[#7C3AED] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt={portfolioData.name} 
                  className="w-full h-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="md:col-span-7 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineering mindset.<br/>Obsession with polish.</h2>
              <div className="text-[#94A3B8] text-lg leading-relaxed space-y-4">
                <p>{portfolioData.about}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: "Experience", value: "4+ Yrs" },
                  { label: "Projects Built", value: "15+" },
                  { label: "Commits", value: "1.2K+" },
                  { label: "Contributions", value: "Open Source" }
                ].map((stat, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl text-center border-t border-t-white/10">
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-[#94A3B8] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 px-6 lg:px-12 max-w-4xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Professional Experience</motion.h2>
            
            <div className="space-y-6 md:space-y-8 pl-4 md:pl-0">
              {portfolioData.experience.map((exp, idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="relative md:pl-10 ml-4 md:ml-0 md:border-l border-white/10 group">
                  <div className="hidden md:block absolute w-3 h-3 bg-[#94A3B8] rounded-full -left-[6.5px] top-1/2 -translate-y-1/2 group-hover:bg-[#4FD1C5] group-hover:shadow-[0_0_12px_#4FD1C5] group-hover:scale-125 transition-all duration-300"></div>
                  
                  <div className="glass-card p-6 md:p-8 rounded-2xl relative gradient-hover flex flex-col justify-center">
                    <div className="mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.company} <span className="text-[#94A3B8] font-medium ml-1">({exp.period})</span>
                      </h3>
                    </div>
                    <p className="text-[#94A3B8] text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant} className="flex justify-between items-end mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="text-[#4FD1C5] hover:text-white transition-colors flex items-center text-sm font-bold uppercase tracking-wider">
                View GitHub <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="glass-card rounded-2xl overflow-hidden flex flex-col group gradient-hover relative">
                   <div className="h-56 md:h-64 overflow-hidden relative border-b border-white/5">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent pointer-events-none z-10 transition-colors duration-500"></div>
                    {project.images ? (
                      <>
                        <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide relative z-20">
                          {project.images.map((img, i) => (
                            <div key={i} className="min-w-full h-full snap-center relative">
                              <img src={img} alt={`${project.name} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            </div>
                          ))}
                        </div>
                        {/* Pagination dots overlay */}
                        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-30 pointer-events-none">
                          {project.images.map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50 backdrop-blur-sm"></div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    )}
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 relative z-20">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#4FD1C5] transition-colors">{project.name}</h3>
                    <p className="text-[#94A3B8] text-sm md:text-base leading-relaxed mb-6 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs font-mono font-medium text-[#c4b5fd] bg-[#7C3AED]/10 border border-[#7C3AED]/20 px-3 py-1 rounded-full pointer-events-none">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex gap-2 justify-center items-center py-2.5 px-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold transition-all">
                          <Github className="w-4 h-4" /> Code
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 flex gap-2 justify-center items-center py-2.5 px-4 rounded-lg bg-[#4FD1C5]/10 hover:bg-[#4FD1C5]/20 border border-[#4FD1C5]/30 text-[#4FD1C5] text-sm font-semibold transition-all">
                          <ExternalLink className="w-4 h-4" /> {project.link.includes('huggingface') ? 'Model' : 'Live Demo'}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">Technical Arsenal</motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(portfolioData.skills).map(([category, skills], idx) => (
                <motion.div key={idx} variants={fadeUpVariant} className="glass-card p-6 rounded-2xl border-t border-t-[#7C3AED]/30 hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-lg font-bold mb-6 text-white">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 transition-colors text-sm text-[#94A3B8] hover:text-white cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6 lg:px-12 max-w-3xl mx-auto border-t border-white/5 text-center relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#7C3AED]/10 to-transparent pointer-events-none"></div>
            
            <motion.h2 variants={fadeUpVariant} className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Let's build something exceptional.</motion.h2>
            <motion.p variants={fadeUpVariant} className="text-[#94A3B8] text-lg mb-10 max-w-xl mx-auto relative z-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex justify-center gap-6 relative z-10">
               <a href={`mailto:${portfolioData.email}`} className="px-8 py-3 bg-white text-[#070B14] font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-all flex items-center">
                Send an Email <Mail className="w-5 h-5 ml-2" />
              </a>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex justify-center gap-6 border-t border-white/10 pt-10 mt-12 relative z-10">
              <a href={portfolioData.github} target="_blank" rel="noreferrer" className="flex items-center text-[#94A3B8] hover:text-white transition-colors border border-white/5 py-2 px-4 rounded-md hover:bg-white/5">
                <Github className="w-5 h-5 mr-3" /> GitHub
              </a>
              <a href={portfolioData.linkedin} target="_blank" rel="noreferrer" className="flex items-center text-[#94A3B8] hover:text-white transition-colors border border-white/5 py-2 px-4 rounded-md hover:bg-white/5">
                <Linkedin className="w-5 h-5 mr-3" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
      
      <footer className="text-center py-8 text-sm text-gray-600 border-t border-white/5 relative z-10 bg-[#070B14]">
        © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved. Designed with precision.
      </footer>
    </div>
  );
}
