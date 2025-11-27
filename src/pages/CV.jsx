import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import CVSection from '../components/cv/CVSection'
import CVLine from '../components/cv/CVLine'
import CVSkill from '../components/cv/CVSkill'
import CVDivider from '../components/cv/CVDivider'
import CVContactInfo from '../components/cv/CVContactInfo'

export default function CV(props) {
    return (
        <div className="page-container">
            <Header />
            <Container className="py-5" style={{ maxWidth: '900px' }}>
                <PageTitle 
                    title="Interactive CV" 
                    subtitle="Professional Experience & Qualifications" 
                />
                
                {/* Contact Information */}
                <CVSection title="Contact Information">
                    <CVContactInfo 
                        email="schuurs@wisc.edu"
                        // phone=""
                        // location=""
                        linkedin="https://www.linkedin.com/in/ru-s"
                        // github=""
                    />
                </CVSection>

                <CVDivider />

                {/* Education */}
                <CVSection title="Education">
                    <CVLine 
                        date="Sep '22 – May '26"
                        title="B.S. in Physics (Honors) and Computer Sciences"
                        subtitle="University of Wisconsin–Madison"
                        description="GPA: 3.955/4.0. Thesis: Analyzing and Correcting Optical Phase Noise through Feedforward Cancellation for Neutral-Atom Quantum Computing."
                    />
                </CVSection>

                <CVDivider />

                {/* Experience */}
                <CVSection title="Experience">

                    <CVLine 
                        date="Jun '24 – Present"
                        title="Undergraduate Researcher — AQuA-1: One-Photon Atom Qubit Array"
                        subtitle="UW–Madison, Dept. of Physics (PI: Dr. Mark Saffman)"
                        description={
`• Implementing feedforward phase-noise cancellation in a 1-photon neutral atom quantum computing system, achieving error suppression down to ~10⁻⁵ on π-rotation gates.
• Designed PCB for PDH error-signal gain regulation; simulated Herriott Cell for 638 nm, 1 W laser delay.
• Assembled 4 km self-heterodyne linewidth measurement module and dual-species Rb/Cs MOT testbed.
• Developed auto-relock system for 918 nm laser using VISA protocols on Raspberry Pi (frequency tuning, piezo ramping, cavity temperature modulation).
• Engineered alumalite + HEPA positive-pressure enclosure with VGA/XLR interface panel.`
                        }
                    />

                    <CVLine 
                        date="Jun '23 – Aug '24"
                        title="Undergraduate Researcher — Alzheimer's Disease ML"
                        subtitle="UW–Madison, Dept. of Medical Physics"
                        description={
`• Redesigned CNN-based Alzheimer’s PET-scan classifier (TensorFlow → PyTorch), achieving 88% accuracy and 98.3% ROC–AUC.
• Implemented GuidedGradCAM to interpret model predictions and identify physiologically meaningful brain regions.`
                        }
                    />

                    <CVLine 
                        date="Nov '22 – Sep '23"
                        title="Undergraduate Researcher — Dual-Axis Heliostat"
                        subtitle="UW–Madison, Mechanical Engineering"
                        description={
`• Engineered Arduino firmware for dual-axis heliostat operated by closed-loop stepper motors with 180° azimuth and 90° altitude control.
• Implemented solar-tracking algorithm enabling automated reflector positioning for concentrated solar power applications.`
                        }
                    />

                    <CVLine 
                        date="May '24 – Aug '25"
                        title="Senior Building Manager"
                        subtitle="Wisconsin Union"
                        description={
`• Led team of 20 managers overseeing operations across 5 buildings serving ~4 million annual visitors.
• Conducted weekly team meetings, reinforced policies, mentored and trained new managers.`
                        }
                    />

                    <CVLine 
                        date="Sep '23 – May '24"
                        title="Building Manager"
                        subtitle="Wisconsin Union"
                        description={
`• Central decision-maker for complex patron interactions, emergency response, and conflict de-escalation.
• Managed openings/closings, crowd flow, safety enforcement, financial procedures, and facilities coordination.`
                        }
                    />

                </CVSection>

                <CVDivider />

                {/* Skills */}
                <CVSection title="Skills">
                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Programming Languages</h4>
                        <div>
                            <CVSkill skill="C" />
                            <CVSkill skill="Java" />
                            <CVSkill skill="Python" />
                            <CVSkill skill="SQL" />
                            <CVSkill skill="Arduino" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Frameworks & Technologies</h4>
                        <div>
                            <CVSkill skill="PyTorch" />
                            <CVSkill skill="TensorFlow" />
                            <CVSkill skill="Qiskit" />
                            <CVSkill skill="VISA Protocols" />
                        </div>
                    </div>

                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Tools & Software</h4>
                        <div>
                            <CVSkill skill="SolidWorks" />
                            <CVSkill skill="Raspberry Pi" />
                            <CVSkill skill="Linux" />
                            <CVSkill skill="RF PCB Design" />
                            <CVSkill skill="Optical Testbed Design" />
                        </div>
                    </div>
                </CVSection>

                <CVDivider />

                {/* Projects */}
                <CVSection title="Projects">
                    <CVLine 
                        date="Oct '23"
                        title="Password Unhasher (Winner)"
                        subtitle="Wisconsin Qiskit Fall Fest 2023"
                        description="Implemented Grover’s Algorithm to reverse a hashing algorithm in a test scenario, reducing effective cracking time from ~30 years to ~30 seconds."
                    />
                </CVSection>

                <CVDivider />

                {/* Certifications */}
                <CVSection title="Certifications">
                    <CVLine 
                        date="Jan '24"
                        title="IBM Certified Associate Developer – Quantum Computing (Qiskit 2.X)"
                        subtitle="IBM"
                    />
                    <CVLine 
                        date="Jul '23"
                        title="IBM Qiskit Quantum Excellence ’23"
                        subtitle="IBM"
                    />
                </CVSection>
            </Container>
        </div>
    )
}
