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
      { id: 1, alt: "Optical Circuit Setup", src: "/p179/images/project1/optical_circuit.jpg", description: "In progress optical circuit setup for the feedforward error correction system." },
      { id: 2, alt: "Custom Controlled Gain Amplifier", src: "/p179/images/project1/chip2.jpg", description: "Schematic diagrams showing the feedforward correction mechanism and Pound-Drever-Hall locking system." },
      { id: 3, alt: "Self-Heterodyne Setup", src: "/p179/images/project1/towards_self-het.jpg", description: "Printed and soldered PCB for voltage-controlled gain amplification." },
      { id: 4, alt: "Servo Bumps", src: "/p179/images/project1/servo_bumps.jpg", description: "Self-heterodyne data showing laser linewidth with servo bumps." },
      { id: 5, alt: "Herriott Cell 3D Simulation", src: "/p179/images/project1/Herriott_Cell_3D_Alpha_Updated.gif", description: "3D simulation of the Herriott Cell design used to produce the 150ns delay for the feedforward correction." },
      { id: 6, alt: "Herriott Cell Mirror Design", src: "/p179/images/project1/herriott_mirrors.png", description: "Mirror desigg for Herriott Cell." },
      { id: 7, alt: "MCAW 2025 Poster", src: "/p179/images/project1/PosterMCAW2025.JPG", description: "Presenting poster in MCAW 2025 conference with feedforward content and 1-photon lab results." },
      { id: 8, alt: "Cooling Towers", src: "/p179/images/project1/cool_towers.jpg", description: "Not feedforward, but cool towers we built for dual-species Rb Cs setup" },
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
      { id: 4, alt: "Presenting at 2024 UW-Madison Undergraduate Symposium", src: "/p179/images/project2/UndergradSymposium24.jpg", description: "Presenting at UW-Madisons 2024 Undergraduate Sympoosium, featuring Henrieta" },
      { id: 1, alt: "PET scans with & without Alzheimer's Disease", src: "/p179/images/project2/AD_vs_NoAD.png", description: "Examples of two PET scans used for training the model. The left one features Alzheimer's Disease, the right one does not." },
      { id: 2, alt: "Heatmap of model's true positive and negatives", src: "/p179/images/project2/Features.png", description: "Model's heatmap showing the featuers the model uses to make True Positive and True Negative predictions" },
      { id: 3, alt: "Model's ROC curve", src: "/p179/images/project2/ROC_Curve.png", description: "Model's ROC curve showing performance metrics" },
    ],
    sections: [
      { title: "Results", content: "Our model, built in PyTorch, achieved an accuracy of 88% and a ROC-AUC of 98.3% on the test set. The model was able to distinguish between Alzheimer's Disease and healthy individuals with a high degree of accuracy." },
      { title: "Alzheimer's Disease Diagnosis", content: "Alzheimer's Disease literature is complex. The source of the disease is not well understood, and diagnosis is still evolving and imperfect. A high acurracy model would not replace the need for doctor evaluation, but complement it at most" },
      { title: "Interpretability", content: "An interesting path to explore with the model was to implement interpretability techniques to attempt to increase the literature in the field. We attempted a few implementations, including Guided Grad-CAM." },
    ]
  },
  3: {
    id: 3,
    title: "Coupled Heliostat",
    description: "Project focused on improving the performance of a dual-axis coupled heliostat reflector for a concentrated solar power (CSP) field. The goal was to develop a functioning prototype to demonstrate the feasibility of the technology for large-scale implementation.",
    fullDescription: "Heliostats and concentrated solar power fields are expensive technologies to build. In this project, we designed and built a dual-axis coupled heliostat to demonstrate the feasibility of a cost-reduced implementation, using 2 stepper motors for 4 mirrors rather than 2 motors per mirror.",
    status: "complete", // Options: "complete", "in progress", "ideating"
    technologies: ["Python", "Django", "PostgreSQL"],
    images: [
      { id: 1, alt: "Heliostat", src: "/p179/images/project3/Heliostat.jpg", description: "Picture of the heliostat, featuring 4 mirrors controlled by 2 stepper motors." },
      { id: 2, alt: "Heliostat 2", src: "/p179/images/project3/Heliostat2.jpg", description: "A second perspective of the heliostat." },
      { id: 3, alt: "Objective Rack", src: "/p179/images/project3/Heliostat_Objective_Rack.jpg", description: "Objective rack used to test the heliostat positioning." },
      { id: 4, alt: "Observation Rack", src: "/p179/images/project3/Heliostat_Observation_Rack.jpg", description: "Observation rack to test the heliostat positioning." },
      { id: 5, alt: "Objective View", src: "/p179/images/project3/objective_perspective_view.jpg", description: "View from the observation rack showing the heliostat and the objective rack." },
      { id: 6, alt: "Motor Control System", src: "/p179/images/project3/motor_control.jpg", description: "Motor control system, including each stepper motor's control, the raspberry pi, and a LCD screen to check heliostat coordinates." },
      { id: 7, alt: "Stepper Motor", src: "/p179/images/project3/stepper_motor.jpg", description: "Stepper motor." }
    
    ],
    sections: [
      { title: "Stepper Motors", content: "This implementation features two stepper motors to control the azimuthal and altitute coordinates. The stepper motors are calibrated with physical buttons at both coordinate minima to define the home reference points." },
      { title: "Arduino Firmware", content: "The stepper motors are controlled by an Arduino Uno board, including the homing mechanism, manual coordinates and solar tracking algorithm" }
      ,{ title: "Manual Coordinates vs Solar Tracking algorithm", content: "The heliostat can be manually controlled by inputting manual coordinates, and has a solar tracking algorithm to reflect based on the solar position if given altitude and latitude coordinates of the heliostat." },
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

