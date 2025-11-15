export default function Projects() {
  // Placeholder project data - replace with real projects later
  const placeholderProjects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a placeholder for your first project. Add details about your work here.",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a placeholder for your second project. Showcase your skills and achievements.",
      technologies: ["Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a placeholder for your third project. Highlight your best work here.",
      technologies: ["Python", "Django", "PostgreSQL"]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A collection of my work and projects. More coming soon!
        </p>
        <div className="projects-grid">
          {placeholderProjects.map((project) => (
            <div key={project.id} className="card">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-content">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

