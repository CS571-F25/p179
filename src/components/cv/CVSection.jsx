import { Row, Col } from 'react-bootstrap'

export default function CVSection({ title, children, className = '' }) {
  return (
    <div className={`cv-section mb-4 ${className}`}>
      <Row>
        <Col md={12}>
          <h2 className="cv-section-title mb-3">{title}</h2>
          {children}
        </Col>
      </Row>
    </div>
  )
}

