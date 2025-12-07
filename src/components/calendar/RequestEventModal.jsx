import { Modal, Form, Button, Row, Col } from 'react-bootstrap'

export default function RequestEventModal({ show, onHide, onSubmit }) {
    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const eventData = {
            title: formData.get('title'),
            day: formData.get('day'),
            startTime: formData.get('startTime'),
            endTime: formData.get('endTime'),
            description: formData.get('description'),
            requesterName: formData.get('requesterName'),
            requesterEmail: formData.get('requesterEmail')
        };
        
        // Submit to Formspree
        try {
            const response = await fetch('https://formspree.io/f/mgvgygpn', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Still call onSubmit to update the calendar with pending event
                onSubmit(eventData);
                e.target.reset();
                onHide();
            } else {
                // Handle error - could show an error message
                console.error('Form submission error:', response);
                // Still update calendar even if Formspree fails
                onSubmit(eventData);
                e.target.reset();
                onHide();
            }
        } catch (error) {
            console.error('Form submission error:', error);
            // Still update calendar even if Formspree fails
            onSubmit(eventData);
            e.target.reset();
            onHide();
        }
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', borderBottom: '1px solid rgba(168, 85, 247, 0.3)' }}>
                <Modal.Title style={{ color: '#a855f7' }}>Request a Meeting</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', color: 'rgba(255, 255, 255, 0.9)' }}>
                <Form action="https://formspree.io/f/mgvgygpn" method="POST" onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Event Title *</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="title" 
                                    placeholder="Meeting Title" 
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="day">
                                <Form.Label>Day *</Form.Label>
                                <Form.Control 
                                    type="date" 
                                    name="day" 
                                    defaultValue={today}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="startTime">
                                <Form.Label>Start Time *</Form.Label>
                                <Form.Control 
                                    type="time" 
                                    name="startTime" 
                                    defaultValue="12:00"
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="endTime">
                                <Form.Label>End Time *</Form.Label>
                                <Form.Control 
                                    type="time" 
                                    name="endTime" 
                                    defaultValue="13:00"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            name="description" 
                            placeholder="Brief description of the meeting..."
                        />
                    </Form.Group>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="requesterName">
                                <Form.Label>Your Name *</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="requesterName" 
                                    placeholder="John Doe" 
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="requesterEmail">
                                <Form.Label>Your Email *</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    name="requesterEmail" 
                                    placeholder="john@example.com" 
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-2">
                        <Button variant="outline-secondary" onClick={onHide}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit">
                            Submit Request
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

