export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-5 ${className}`}>
      <h2 className="display-5 mb-3">{title}</h2>
      {subtitle && <p className="lead text-muted">{subtitle}</p>}
    </div>
  )
}

