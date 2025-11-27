import { Modal, Button } from 'react-bootstrap'

export default function ConfirmationModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', borderBottom: '1px solid rgba(168, 85, 247, 0.3)' }}>
                <Modal.Title style={{ color: '#a855f7' }}>Request Submitted</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', color: 'rgba(255, 255, 255, 0.9)' }}>
                <p style={{ fontSize: '1.1rem', margin: 0 }}>
                    Thanks for your request! I'll get in touch soon to confirm my availability.
                </p>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: 'rgba(20, 20, 20, 0.95)', borderTop: '1px solid rgba(168, 85, 247, 0.3)' }}>
                <Button variant="primary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

