import Header from '../components/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import PageTitle from '../components/PageTitle'
import Card from '../components/Card'

export default function Contact() {

  return (
    <div className="page-container">
      <Header />
      <Container className="py-5">
        <PageTitle 
          title="Contact Me" 
          subtitle="This page is TBD. While I have an implementation, I'm not sure if I want to use it." 
        />
      
      </Container>
    </div>
  )


  return (
    <div className="page-container">
      <Header />
      <Container className="py-5">
        <PageTitle 
          title="Contact Me" 
          subtitle="Get in touch with me. I'd love to hear from you!" 
        />
        
        <Row className="g-4">
          <Col md={6}>
            <Card title="Contact Information">
              <div className="mb-3">
                <strong>Email:</strong>
                <br />
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
              <div className="mb-3">
                <strong>LinkedIn:</strong>
                <br />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
              <div>
                <strong>GitHub:</strong>
                <br />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
            </Card>
          </Col>

          <Col md={6}>
            <Card title="Send a Message">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="your.email@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message here..." />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

