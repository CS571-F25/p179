import { Link } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap'
import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import TechTag from '../components/TechTag'
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
            <Col key={project.id} md={6} lg={4}>
              <Link 
                to={`/project/${project.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card title={project.title} className="h-100 project-card-link">
                  <div className="mb-2">
                    <ProjectStatus status={project.status} />
                  </div>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-3">
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index} technology={tech} />
                    ))}
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

