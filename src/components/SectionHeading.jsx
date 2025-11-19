export default function SectionHeading({ children, className = '' }) {
  return (
    <h3 className={`mb-3 ${className}`} style={{ 
      color: 'rgba(255, 255, 255, 0.9)', 
      fontWeight: 600,
      fontSize: '1.5rem'
    }}>
      {children}
    </h3>
  )
}

