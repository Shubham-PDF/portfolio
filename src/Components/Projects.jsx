const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      tech: ["React", "TailwindCSS", "Vite"],
      link: "#"
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack store with cart, checkout, and authentication.",
      tech: ["Next.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with markdown support and SEO.",
      tech: ["Node.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      title: "AI Chatbot",
      description: "Conversational AI chatbot using OpenAI API.",
      tech: ["React", "Node.js", "OpenAI API ", "Redux" , "Firefox"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/40 to-muted/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-hero">
            Projects
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-body max-w-2xl mx-auto">
            A collection of my recent works showcasing my skills in frontend, backend, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group bg-white/80 backdrop-blur border border-gray-200 
                         rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all 
                         duration-300 hover:-translate-y-2 hover:bg-gradient-to-tr 
                         hover:from-primary/10 hover:to-secondary/10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-hero mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="w-10 h-1 bg-primary rounded-full mb-4"></div>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-muted/60 rounded-full text-xs font-medium text-subtle"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-sm font-semibold text-primary px-4 py-2 rounded-full border border-primary hover:bg-primary hover:text-white transition"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
