import { Link } from 'react-router'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Header() {
  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className="custom-navbar mb-4"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="custom-navbar-brand">
          Your Name
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-navbar-toggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/cv" className="custom-nav-link">CV</Nav.Link>
            <Nav.Link as={Link} to="/calendar" className="custom-nav-link">Calendar</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact Me</Nav.Link>
            <Nav.Link as={Link} to="/ai-usage" className="custom-nav-link">AI Usage</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

