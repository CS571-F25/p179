import { useParams, Link } from 'react-router'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'
import TechTag from '../components/TechTag'
import SectionHeading from '../components/SectionHeading'
import ProjectStatus from '../components/ProjectStatus'
import { getProjectById } from '../data/projectsData'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(parseInt(id))

  if (!project) {
    return (
      <div className="page-container">
        <Header />
        <Container className="py-5 text-center">
          <PageTitle title="Project Not Found" subtitle="The project you're looking for doesn't exist." />
          <Button as={Link} to="/" variant="primary">
            Back to Home
          </Button>
        </Container>
      </div>
    )
  }

  return (
    <div className="page-container">
      <Header />
      <Container className="py-5">
        <Button as={Link} to="/" variant="outline-secondary" className="mb-4">
          ← Back to Projects
        </Button>
        
        <div className="mb-3">
          <ProjectStatus status={project.status} />
        </div>
        <PageTitle title={project.title} subtitle={project.fullDescription} />
        
        {/* Technologies */}
        <Row className="mb-5">
          <Col>
            <SectionHeading level={2}>Technologies Used</SectionHeading>
            <div>
              {project.technologies.map((tech, index) => (
                <TechTag key={index} technology={tech} />
              ))}
            </div>
          </Col>
        </Row>

        {/* Project Images */}
        <Row className="mb-5">
          <Col>
            <SectionHeading level={2} className="mb-4">Project Images</SectionHeading>
            <Row className="g-4">
              {project.images.map((image) => (
                <Col key={image.id} md={6} lg={4}>
                  <Card className="text-center">
                    {image.src ? (
                      <img 
                        src={image.src} 
                        alt={image.alt || image.placeholder}
                        className="img-fluid"
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          borderRadius: '8px',
                          marginBottom: '0.5rem',
                          objectFit: 'cover'
                        }}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          e.target.style.display = 'none';
                          const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                          if (placeholder) {
                            placeholder.style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div 
                      className="d-flex align-items-center justify-content-center image-placeholder" 
                      role="img"
                      aria-label={image.alt || image.placeholder}
                      style={{ 
                        minHeight: '200px', 
                        backgroundColor: 'rgba(168, 85, 247, 0.1)',
                        borderRadius: '8px',
                        border: '2px dashed rgba(168, 85, 247, 0.3)',
                        display: image.src ? 'none' : 'flex'
                      }}
                    >
                      <p className="text-muted mb-0">{image.placeholder}</p>
                    </div>
                    {image.alt && (
                      <p className="mt-2 mb-0 small text-muted">{image.alt}</p>
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Project Sections */}
        <Row className="g-4">
          {project.sections.map((section, index) => (
            <Col key={index} md={6} lg={4}>
              <Card title={section.title}>
                <p className="card-text">{section.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

