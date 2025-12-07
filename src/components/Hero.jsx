import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import AnimatedDotsBackground from './AnimatedDotsBackground'

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
    <div className="hero-content-background" style={{ position: 'relative' }}>
      <AnimatedDotsBackground columns={15} rows={10} maxDistance={200} maxScale={3} baseSize={4} />
      <Container style={{ position: 'relative', zIndex: 1 }}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center hero-content-inner hero-text-backdrop">
              <h1 className="display-3 mb-4">Ruben A.S.</h1>
              <p className="lead mb-3 hero-subtitle-text">
                "Towards becoming a quantum physicist and engineer"
              </p>
              <p className="hero-description-text">
                I like fixing problems, and occasionally succeed!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

