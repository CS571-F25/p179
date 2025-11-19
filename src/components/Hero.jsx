import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="py-5 mb-5 hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 mb-4">Welcome to My Portfolio</h1>
            <p className="lead mb-3 hero-subtitle-text">
              Software Developer | Creative Problem Solver | Lifelong Learner
            </p>
            <p className="mb-4 hero-description-text">
              This is a placeholder for your personal introduction. 
              Add your bio, interests, and what makes you unique here.
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

