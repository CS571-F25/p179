// Centralized project data - easily editable in one place TODO: Finalize adding data
export const projectsData = {
  1: {
    id: 1,
    title: "Feedforward Error Correction for Pound-Drever-Hall Locking Servobumps",
    description: "Pound-Drever-Hall, a technique widely popularized for achieving hyper-narrow linewidths, produces phase noise (\"servo bumps\") due to the inherent limited bandwith caused by feedback loops. In this project, I aim to correct it! :)",
    fullDescription: "Pound-Drever-Hall, a technique widely popularized for achieving hyper-narrow linewidths, produces phase noise (\"servo bumps\") due to the inherent limited bandwith caused by feedback loops. I aim to correct it using a Feedforward correction technique",
    status: "in progress", // Options: "complete", "in progress", "ideating"
    technologies: ["React", "JavaScript", "CSS"],
    images: [
      { id: 1, alt: "Setup picture", placeholder: "Image 1 placeholder" },
      { id: 2, alt: "Feedforward and PDH locking diagrams", placeholder: "Image 2 placeholder" },
      { id: 3, alt: "Fitted data", placeholder: "Image 3 placeholder" },
      { id: 4, alt: "Herriott Cell", placeholder: "Image 4 placeholder" }
    ],
    sections: [
      { title: "Self-heterodyne Measurement", content: "In order to measure the servo bumps, we built a 4km delay self-heterodyne interferometer for our 638nm laser." },
      { title: "Noise fit", content: "We characterized the servo bumps to estimate error rates on pi rotation gates (see Figure 3)" },
      { title: "150ns delay ", content: "Producing the delay ought to be challenging. Passing >1W 638nm laser through a fiber risks major transmission constraints due to Broullin Scattering. Instead, I designed and simulated the behavior of a Herriott Cell. See Figure 4" }
    ]
  },
  2: {
    id: 2,
    title: "AI to diagnose Alzheimer's Disease on Brain Scans",
    description: "Our current predictive power for Alzheimer's Disease remains limited. We trained a CNN + RNN machine learning model on PET & MRI scans to diagnose Alzheimer's Disease, and attempted to implement interpretability techniques to understand the model's \"reasoning\" behind the results",
    fullDescription: "Our current predictive power for Alzheimer's Disease remains limited. We trained a CNN + RNN machine learning model on PET & MRI scans to diagnose Alzheimer's Disease, and attempted to implement interpretability techniques to understand the model's \"reasoning\" behind the results.",
    status: "complete", // Options: "complete", "in progress", "ideating"
    technologies: ["PyTorch", "Python", ""],
    images: [
      { id: 1, alt: "MRI scan as example", placeholder: "Image 1 placeholder" },
      { id: 2, alt: "Graph of training data", placeholder: "Image 2 placeholder" },
      { id: 3, alt: "More results", placeholder: "Image 3 placeholder" }
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

