import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-light">
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

