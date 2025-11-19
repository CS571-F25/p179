import { Card as BootstrapCard } from 'react-bootstrap'

export default function Card({ title, children, className = '', ...props }) {
  return (
    <BootstrapCard 
      className={`custom-card ${className}`}
      bg="dark"
      text="light"
      border="secondary"
      {...props}
    >
      {title && (
        <BootstrapCard.Header className="custom-card-header">
          <BootstrapCard.Title className="custom-card-title">{title}</BootstrapCard.Title>
        </BootstrapCard.Header>
      )}
      <BootstrapCard.Body className="custom-card-body">
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  )
}

