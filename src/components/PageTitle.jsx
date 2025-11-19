import { Container } from 'react-bootstrap'

export default function PageTitle({ title, subtitle, className = '' }) {
  return (
    <Container className={`text-center mb-4 ${className}`}>
      <h1 className="display-4 mb-3">{title}</h1>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
    </Container>
  )
}

