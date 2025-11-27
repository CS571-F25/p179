import { Row, Col } from 'react-bootstrap'

export default function CVContactInfo({ email, phone, location, linkedin, github, website, className = '' }) {
  return (
    <div className={`cv-contact-info mb-4 ${className}`}>
      <Row className="g-3">
        {email && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">Email:</span>
            <a href={`mailto:${email}`} className="cv-contact-link">{email}</a>
          </Col>
        )}
        {phone && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">Phone:</span>
            <span className="cv-contact-text">{phone}</span>
          </Col>
        )}
        {location && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">Location:</span>
            <span className="cv-contact-text">{location}</span>
          </Col>
        )}
        {linkedin && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">LinkedIn:</span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="cv-contact-link">{linkedin}</a>
          </Col>
        )}
        {github && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">GitHub:</span>
            <a href={github} target="_blank" rel="noopener noreferrer" className="cv-contact-link">{github}</a>
          </Col>
        )}
        {website && (
          <Col xs={12} sm={6} md={4}>
            <span className="cv-contact-label">Website:</span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="cv-contact-link">{website}</a>
          </Col>
        )}
      </Row>
    </div>
  )
}

