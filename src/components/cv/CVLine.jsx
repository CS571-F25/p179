import { Row, Col } from 'react-bootstrap'

export default function CVLine({ date, title, subtitle, description, bullets, location, className = '' }) {
  // Helper function to render description with line breaks
  const renderDescription = (desc) => {
    if (!desc) return null;
    
    // Split by <br> or <br/> tags or newlines
    const parts = desc.split(/(<br\s*\/?>|\n)/i);
    
    return (
      <p className="cv-line-description">
        {parts.map((part, index) => {
          if (/<br\s*\/?>|\n/i.test(part)) {
            return <br key={index} />;
          }
          return <span key={index}>{part}</span>;
        })}
      </p>
    );
  };

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
          {bullets && bullets.length > 0 ? (
            <ul className="cv-line-bullets">
              {bullets.map((bullet, index) => (
                <li key={index} className="cv-line-bullet-item">{bullet}</li>
              ))}
            </ul>
          ) : description && renderDescription(description)}
        </Col>
      </Row>
    </div>
  )
}

