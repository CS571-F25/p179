import { Badge } from 'react-bootstrap'

export default function CVSkill({ skill, level, className = '' }) {
  return (
    <Badge 
      className={`cv-skill me-2 mb-2 ${className}`}
    >
      {skill || '[Skill]'}
      {level && <span className="ms-2 cv-skill-level">({level})</span>}
    </Badge>
  )
}

