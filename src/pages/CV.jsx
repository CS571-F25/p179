import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import CVSection from '../components/CVSection'
import CVLine from '../components/CVLine'
import CVSkill from '../components/CVSkill'
import CVDivider from '../components/CVDivider'
import CVContactInfo from '../components/CVContactInfo'

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
                        email="your.email@example.com"
                        phone="[Phone Number]"
                        location="[City, State/Country]"
                        linkedin="https://linkedin.com/in/yourprofile"
                        github="https://github.com/yourusername"
                    />
                </CVSection>

                <CVDivider />

                {/* Education */}
                <CVSection title="Education">
                    <CVLine 
                        date="[Start Date] - [End Date]"
                        title="[Degree Name]"
                        subtitle="[University/Institution Name]"
                        location="[Location]"
                        description="[Description of studies, achievements, relevant coursework, GPA if applicable]"
                    />
                    <CVLine 
                        date="[Start Date] - [End Date]"
                        title="[Degree Name]"
                        subtitle="[University/Institution Name]"
                        location="[Location]"
                        description="[Description of studies, achievements, relevant coursework]"
                    />
                </CVSection>

                <CVDivider />

                {/* Experience */}
                <CVSection title="Experience">
                    <CVLine 
                        date="[Start Date] - [End Date]"
                        title="[Job Title]"
                        subtitle="[Company Name]"
                        location="[Location]"
                        description="[Job description, responsibilities, achievements, and impact. Use bullet points or paragraphs to describe your role and accomplishments.]"
                    />
                    <CVLine 
                        date="[Start Date] - [End Date]"
                        title="[Job Title]"
                        subtitle="[Company Name]"
                        location="[Location]"
                        description="[Job description, responsibilities, achievements, and impact.]"
                    />
                    <CVLine 
                        date="[Start Date] - [End Date]"
                        title="[Job Title]"
                        subtitle="[Company Name]"
                        location="[Location]"
                        description="[Job description, responsibilities, achievements, and impact.]"
                    />
                </CVSection>

                <CVDivider />

                {/* Skills */}
                <CVSection title="Skills">
                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Programming Languages</h4>
                        <div>
                            <CVSkill skill="[Language 1]" />
                            <CVSkill skill="[Language 2]" />
                            <CVSkill skill="[Language 3]" />
                            <CVSkill skill="[Language 4]" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Frameworks & Technologies</h4>
                        <div>
                            <CVSkill skill="[Framework 1]" />
                            <CVSkill skill="[Framework 2]" />
                            <CVSkill skill="[Technology 1]" />
                            <CVSkill skill="[Technology 2]" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <h4 className="cv-subsection-title mb-2">Tools & Software</h4>
                        <div>
                            <CVSkill skill="[Tool 1]" />
                            <CVSkill skill="[Tool 2]" />
                            <CVSkill skill="[Software 1]" />
                            <CVSkill skill="[Software 2]" />
                        </div>
                    </div>
                </CVSection>

                <CVDivider />

                {/* Projects */}
                <CVSection title="Projects">
                    <CVLine 
                        date="[Date]"
                        title="[Project Name]"
                        subtitle="[Project Type/Category]"
                        description="[Project description, technologies used, and key achievements or results.]"
                    />
                    <CVLine 
                        date="[Date]"
                        title="[Project Name]"
                        subtitle="[Project Type/Category]"
                        description="[Project description, technologies used, and key achievements or results.]"
                    />
                </CVSection>

                <CVDivider />

                {/* Certifications */}
                <CVSection title="Certifications">
                    <CVLine 
                        date="[Date]"
                        title="[Certification Name]"
                        subtitle="[Issuing Organization]"
                        description="[Certification details or credential ID]"
                    />
                    <CVLine 
                        date="[Date]"
                        title="[Certification Name]"
                        subtitle="[Issuing Organization]"
                        description="[Certification details or credential ID]"
                    />
                </CVSection>
            </Container>
        </div>
    )
}