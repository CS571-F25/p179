import Header from '../components/Header'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import CVSection from '../components/cv/CVSection'
import CVLine from '../components/cv/CVLine'
import CVSkill from '../components/cv/CVSkill'
import CVDivider from '../components/cv/CVDivider'
import Card from '../components/Card'
import AnimatedDotsBackground from '../components/AnimatedDotsBackground'

export default function CV(props) {
    return (
        <div className="page-container">
            {/* <AnimatedDotsBackground /> */}
            <Header />
            <Container className="py-5" style={{ maxWidth: '900px' }}>
                <PageTitle 
                    title="Interactive CV" 
                    // subtitle="Professional Experience & Qualifications" 
                />
                
                {/* Contact Information */}
                <div className="cv-contact-oneline">
                    <a href="mailto:schuurs@wisc.edu" className="cv-contact-link" aria-label="Email: schuurs at wisc.edu">schuurs (at) wisc.edu</a>
                    <span className="cv-contact-separator" aria-hidden="true"> | </span>
                    <a href="https://www.linkedin.com/in/ru-s" target="_blank" rel="noopener noreferrer" className="cv-contact-link" aria-label="LinkedIn profile, opens in new tab">LinkedIn</a>
                </div>

                {/* Education */}
                <CVSection title="Education">
                    <CVLine 
                        date="Sep '22 – May '26"
                        title="B.S. in Physics (Honors) and Computer Sciences"
                        subtitle="University of Wisconsin–Madison"
                        description="GPA: 3.955/4.0. <br>Thesis: Analyzing and Correcting Optical Phase Noise through Feedforward Cancellation for Neutral-Atom Quantum Computing."
                    />
                </CVSection>

                {/* Experience */}
                <CVSection title="Research Experience">

                    <CVLine 
                        date="Jun '24 – Present"
                        title="Undergraduate Researcher — AQuA-1: One-Photon Atom Qubit Array"
                        subtitle="UW–Madison, Dept. of Physics (PI: Dr. Mark Saffman)"
                        bullets={[
                            "Implementing feedforward phase-noise cancellation in a 1-photon neutral atom quantum computing system, achieving error suppression down to ~10⁻⁵ on π-rotation gates.",
                            "Designed PCB for PDH error-signal gain regulation; simulated Herriott Cell for 638 nm, 1 W laser delay.",
                            "Assembled 4 km self-heterodyne linewidth measurement module and dual-species Rb/Cs MOT testbed.",
                            "Developed auto-relock system for 918 nm laser using VISA protocols on Raspberry Pi (frequency tuning, piezo ramping, cavity temperature modulation).",
                            "Engineered alumalite + HEPA positive-pressure enclosure with VGA/XLR interface panel."
                        ]}
                    />

                    <CVLine 
                        date="Jun '23 – Aug '24"
                        title="Undergraduate Researcher — Alzheimer's Disease ML"
                        subtitle="UW–Madison, Dept. of Medical Physics"
                        bullets={[
                            "Redesigned CNN-based Alzheimer's PET-scan classifier (TensorFlow → PyTorch), achieving 88% accuracy and 98.3% ROC–AUC.",
                            "Implemented GuidedGradCAM to interpret model predictions and identify physiologically meaningful brain regions."
                        ]}
                    />

                    <CVLine 
                        date="Nov '22 – Sep '23"
                        title="Undergraduate Researcher — Dual-Axis Heliostat"
                        subtitle="UW–Madison, Mechanical Engineering"
                        bullets={[
                            "Engineered Arduino firmware for dual-axis heliostat operated by closed-loop stepper motors with 180° azimuth and 90° altitude control.",
                            "Implemented solar-tracking algorithm enabling automated reflector positioning for concentrated solar power applications."
                        ]}
                    />

                </CVSection>

                {/* Professional Experience */}
                <CVSection title="Professional Experience">
                    <CVLine 
                            date="May '24 – Aug '25"
                            title="Senior Building Manager"
                            subtitle="Wisconsin Union"
                            bullets={[
                                "Led team of 20 managers overseeing operations across 5 buildings serving ~4 million annual visitors.",
                                "Conducted weekly team meetings, reinforced policies, mentored and trained new managers."
                            ]}
                        />

                        <CVLine 
                            date="Sep '23 – May '24"
                            title="Building Manager"
                            subtitle="Wisconsin Union"
                            bullets={[
                                "Central decision-maker for complex patron interactions, emergency response, and conflict de-escalation.",
                                "Managed openings/closings, crowd flow, safety enforcement, financial procedures, and facilities coordination."
                            ]}
                        />
                </CVSection>

                {/* Skills */}
                <CVSection title="Skills">
                    <div className="mb-3">
                        <h3 className="cv-subsection-title mb-2">Programming Languages</h3>
                        <div>
                            <CVSkill skill="C" />
                            <CVSkill skill="Java" />
                            <CVSkill skill="Python" />
                            <CVSkill skill="SQL" />
                            <CVSkill skill="Arduino" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3 className="cv-subsection-title mb-2">Frameworks & Technologies</h3>
                        <div>
                            <CVSkill skill="PyTorch" />
                            <CVSkill skill="TensorFlow" />
                            <CVSkill skill="Qiskit" />
                            <CVSkill skill="VISA Protocols" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <h3 className="cv-subsection-title mb-2">Tools & Software</h3>
                        <div>
                            <CVSkill skill="SolidWorks" />
                            <CVSkill skill="Raspberry Pi" />
                            <CVSkill skill="Linux" />
                            <CVSkill skill="RF PCB Design" />
                            <CVSkill skill="Optical Testbed Design" />
                        </div>
                    </div>
                </CVSection>

                {/* Projects */}
                <CVSection title="Hackathon Projects">
                    <CVLine 
                        date="Oct '23"
                        title="Password Unhasher (Winner)"
                        subtitle="Wisconsin Qiskit Fall Fest 2023"
                        description="Implemented Grover’s Algorithm to reverse a hashing algorithm in a test scenario, reducing effective cracking time from ~30 years to ~30 seconds."
                    />
                </CVSection>

                {/* Certifications */}
                <CVSection title="Certifications">
                    <CVLine 
                        date="Jan '24"
                        title="IBM Certified Associate Developer – Quantum Computing (Qiskit 2.X)"
                        subtitle="IBM"
                    />
                    <CVLine 
                        date="Jul '23"
                        title="IBM Qiskit Quantum Excellence '23"
                        subtitle="IBM"
                    />
                </CVSection>

                <CVDivider />

                {/* Service & Mentoring */}
                <CVSection title="Service & Mentoring">
                    <CVLine 
                        date="Sept. '25 – Present"
                        title="Hackathon Planning Lead"
                        subtitle="Wisconsin Quantum Computing Club"
                        bullets={[
                            "Coordinated IBM-sponsored Qiskit Fall Fest '25 at UW-Madison, including an Intro to Qiskit Workshop and a 1-week-long hackathon with speakers, lab tours, and \"Quantum Office Hours\" to teach quantum computing to students from diverse technical backgrounds"
                        ]}
                    />
                    <CVLine 
                        date="Nov. '22 – Present"
                        title="International Peer Mentor"
                        subtitle="UW-Madison Dept. of International Student Services (Supervisor: Jay Stokes)"
                        bullets={[
                            "Mentored a total of 20 undergraduates and 6 graduate international students through 1-1 meetings, group activities and weekly check-ins to help adjust to university environment"
                        ]}
                    />
                    <CVLine 
                        date="Spring '23 – Present"
                        title="Physics Outreach Volunteer"
                        bullets={[
                            "Usher: Wonders of Physics 40th (2023), 41st (2024), and 42nd (2025) shows.",
                            "Presenter: 2023 & 2024 Physics Fair, Vortex Cannon demonstration"
                        ]}
                    />
                </CVSection>

                <div className="cv-pdf-link text-center mt-4">
                    <small style={{ color: 'rgba(255, 255, 255, 0.75)', fontStyle: 'italic' }}>
                        prefer to see my 100% non-ai latex skills instead?{' '}
                        <a href="/p179/RubenAguiloSchuurs_CV.pdf" target="_blank" rel="noopener noreferrer" className="cv-contact-link" style={{ fontSize: 'inherit' }}>
                            check the PDF version
                        </a>
                    </small>
                </div>
            </Container>
        </div>
    )
}
