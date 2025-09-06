import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Nearby EV Charging Suggestion",
      description: "A web application to help users find nearby electric vehicle charging stations with real-time availability and status tracking.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "CSS", "JavaScript", "VS Code"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Word Converter",
      description: "A ReactJS-based application for performing multiple text operations and conversions with an interactive single-page interface.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["ReactJS", "VS Code"],
      github: "#",
      demo: "#"
    },
    {
      title: "Roll Dice App",
      description: "A cross-platform mobile application built with Flutter featuring realistic dice rolling animations and sound effects.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Flutter", "Dart"],
      github: "#",
      demo: null,
      status: "Ongoing"
    }
  ];

  const techColors: Record<string, string> = {
    "HTML": "bg-orange-500/20 text-orange-300",
    "CSS": "bg-blue-500/20 text-blue-300",
    "JavaScript": "bg-yellow-500/20 text-yellow-300",
    "ReactJS": "bg-cyan-500/20 text-cyan-300",
    "Flutter": "bg-blue-500/20 text-blue-300",
    "Dart": "bg-green-500/20 text-green-300",
    "VS Code": "bg-purple-500/20 text-purple-300",
    "Ongoing": "bg-orange-500/20 text-orange-300"
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              data-testid={`project-card-${index}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${techColors[tech] || 'bg-gray-500/20 text-gray-300'}`}
                      data-testid={`tech-tag-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.status && (
                    <span className={`px-3 py-1 rounded-full text-sm ${techColors[project.status]}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.a 
                    href={project.github}
                    className="text-primary hover:underline flex items-center"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`project-github-${index}`}
                  >
                    <Github className="mr-2" size={16} />
                    View Code
                  </motion.a>
                  
                  {project.demo ? (
                    <motion.a 
                      href={project.demo}
                      className="text-primary hover:underline flex items-center"
                      whileHover={{ scale: 1.05 }}
                      data-testid={`project-demo-${index}`}
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </motion.a>
                  ) : (
                    <span className="text-muted-foreground text-sm">In Development</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
