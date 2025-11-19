import { Badge } from 'react-bootstrap'

export default function ProjectStatus({ status, className = '' }) {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'complete':
        return {
          text: 'Complete',
          bg: 'success',
          className: 'bg-success'
        }
      case 'in progress':
        return {
          text: 'In Progress',
          bg: 'warning',
          className: 'bg-warning text-dark'
        }
      case 'ideating':
        return {
          text: 'Ideating',
          bg: 'info',
          className: 'bg-info'
        }
      default:
        return {
          text: status || 'Unknown',
          bg: 'secondary',
          className: 'bg-secondary'
        }
    }
  }

  const config = getStatusConfig(status)

  return (
    <Badge className={`project-status ${config.className} ${className}`} style={{
      padding: '0.4rem 0.8rem',
      fontSize: '0.85rem',
      fontWeight: 500
    }}>
      {config.text}
    </Badge>
  )
}

