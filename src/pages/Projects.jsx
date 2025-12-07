import { Link } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import ProjectStatus from '../components/ProjectStatus'
import { getAllProjects } from '../data/projectsData'

export default function Projects() {
  const projects = getAllProjects()

  return (
    <section id="projects" className="pt-3 pb-5">
      <Container>
        <SectionTitle 
          title="Projects" 
          // subtitle="My multidisciplinary background, as I explored multiple college opportunities to find a personal fit" 
        />
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} xs={12} md={6}>
              <Link 
                to={`/project/${project.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card title={project.title} className="h-100 project-card-link">
                  {project.images && project.images.length > 0 && project.images[0].src && (
                    <div className="project-card-image mb-3">
                      <img 
                        src={project.images[0].src} 
                        alt={project.images[0].alt || project.title}
                        className="w-100"
                        style={{
                          height: '200px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </div>
                  )}
                  <div className="mb-2">
                    <ProjectStatus status={project.status} />
                  </div>
                  <p className="card-text">{project.description}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

