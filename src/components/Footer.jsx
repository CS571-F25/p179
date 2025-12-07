import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="footer-custom text-light mt-5 py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              © {new Date().getFullYear()} Ruben Aguilo Schuurs. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="https://github.com/BorudaX" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ru-s" target="_blank" rel="noopener noreferrer" className="text-light me-3">
              LinkedIn
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

