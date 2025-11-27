import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'

{/* <div className="d-flex gap-3 justify-content-center flex-wrap">
  # <Button as="a" href="#projects" variant="primary" size="lg">
    View Projects
  </Button>
  <Button as={Link} to="/cv" variant="outline-secondary" size="lg">
    View CV
  </Button>
</div> */}


export default function Hero() {
  return (
    <section className="py-5 mb-5 hero-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="display-3 mb-4">Ruben A.S.</h1>
            <p className="lead mb-3 hero-subtitle-text">
              "Towards becoming a quantum physicist and engineer"
            </p>
            <p className="mb-4 hero-description-text">
              I like fixing problems, and occasionally succeed!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

