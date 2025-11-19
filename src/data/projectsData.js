// Centralized project data - easily editable in one place
export const projectsData = {
  1: {
    id: 1,
    title: "Feedforward Error Correction for Pound-Drever-Hall Locking Servobumps",
    description: "Pound-Drever-Hall, a technique widely popularized for achieving hyper-narrow linewidths, produces phase noise (\"servo bumps\") due to the inherent limited bandwith caused by feedback loops. In this project, I aim to correct it! :)",
    fullDescription: "Pound-Drever-Hall, a technique widely popularized for achieving hyper-narrow linewidths, produces phase noise (\"servo bumps\") due to the inherent limited bandwith caused by feedback loops. I aim to correct it using a Feedforward correction technique",
    status: "in progress", // Options: "complete", "in progress", "ideating"
    technologies: ["React", "JavaScript", "CSS"],
    images: [
      { id: 1, alt: "Setup", placeholder: "Image 1 placeholder" },
      { id: 2, alt: "Setup", placeholder: "Image 2 placeholder" },
      { id: 3, alt: "Graph data", placeholder: "Image 3 placeholder" }
    ],
    sections: [
      { title: "Overview", content: "This section provides an overview of the project, its goals, and key features." },
      { title: "Technical Details", content: "Here you can describe the technical architecture, frameworks used, and implementation details." },
      { title: "Results", content: "Share the outcomes, metrics, or achievements of this project." }
    ]
  },
  2: {
    id: 2,
    title: "AI in Medical Physics",
    description: "This is a placeholder for your second project. Showcase your skills and achievements.",
    fullDescription: "This is a detailed description of Project 2. Here you can provide comprehensive information about the project, including the problem it solves, the approach taken, challenges faced, and results achieved.",
    status: "complete", // Options: "complete", "in progress", "ideating"
    technologies: ["Node.js", "Express", "MongoDB"],
    images: [
      { id: 1, alt: "Project 2 Screenshot 1", placeholder: "Image 1 placeholder" },
      { id: 2, alt: "Project 2 Screenshot 2", placeholder: "Image 2 placeholder" }
    ],
    sections: [
      { title: "Overview", content: "This section provides an overview of the project, its goals, and key features." },
      { title: "Technical Details", content: "Here you can describe the technical architecture, frameworks used, and implementation details." },
      { title: "Results", content: "Share the outcomes, metrics, or achievements of this project." }
    ]
  },
  3: {
    id: 3,
    title: "Coupled Heliostat",
    description: "This is a placeholder for your third project. Highlight your best work here.",
    fullDescription: "This is a detailed description of Project 3. Here you can provide comprehensive information about the project, including the problem it solves, the approach taken, challenges faced, and results achieved.",
    status: "ideating", // Options: "complete", "in progress", "ideating"
    technologies: ["Python", "Django", "PostgreSQL"],
    images: [
      { id: 1, alt: "Project 3 Screenshot 1", placeholder: "Image 1 placeholder" },
      { id: 2, alt: "Project 3 Screenshot 2", placeholder: "Image 2 placeholder" },
      { id: 3, alt: "Project 3 Screenshot 3", placeholder: "Image 3 placeholder" },
      { id: 4, alt: "Project 3 Screenshot 4", placeholder: "Image 4 placeholder" }
    ],
    sections: [
      { title: "Overview", content: "This section provides an overview of the project, its goals, and key features." },
      { title: "Technical Details", content: "Here you can describe the technical architecture, frameworks used, and implementation details." },
      { title: "Results", content: "Share the outcomes, metrics, or achievements of this project." }
    ]
  }
}

// Helper function to get all projects as an array
export const getAllProjects = () => {
  return Object.values(projectsData)
}

// Helper function to get a project by ID
export const getProjectById = (id) => {
  return projectsData[id]
}

