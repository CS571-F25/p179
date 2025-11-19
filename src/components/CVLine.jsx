import { Row, Col } from 'react-bootstrap'

export default function CVLine({ date, title, subtitle, description, location, className = '' }) {
  return (
    <div className={`cv-line mb-4 ${className}`}>
      <Row>
        <Col md={3} className="cv-date">
          <span className="cv-date-text">{date || '[Date]'}</span>
        </Col>
        <Col md={9} className="cv-content">
          <h3 className="cv-line-title">{title || '[Title]'}</h3>
          {subtitle && (
            <p className="cv-line-subtitle">{subtitle}</p>
          )}
          {location && (
            <p className="cv-line-location">{location}</p>
          )}
          {description && (
            <p className="cv-line-description">{description}</p>
          )}
        </Col>
      </Row>
    </div>
  )
}

