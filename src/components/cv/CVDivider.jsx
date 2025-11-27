export default function CVDivider({ className = '' }) {
  return (
    <div className={`cv-divider my-4 ${className}`}>
      <hr style={{ 
        border: 'none',
        height: '2px',
        background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.5), transparent)',
        margin: '2rem 0'
      }} />
    </div>
  )
}

