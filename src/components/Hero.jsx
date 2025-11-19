import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="py-5 mb-5 hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 mb-4">Welcome</h1>
            <p className="lead mb-3 hero-subtitle-text">
              Physicist | Creative Problem Solver | Lifelong Learner
            </p>
            <p className="mb-4 hero-description-text">
              Exploring the intersection between Physics and Computer Sciences
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Button as="a" href="#projects" variant="primary" size="lg">
                View Projects
              </Button>
              <Button as={Link} to="/cv" variant="outline-secondary" size="lg">
                View CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

