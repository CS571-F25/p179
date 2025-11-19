import { Badge } from 'react-bootstrap'

export default function TechTag({ technology, className = '' }) {
  return (
    <Badge bg="secondary" className={`me-2 mb-2 ${className}`}>
      {technology}
    </Badge>
  )
}

