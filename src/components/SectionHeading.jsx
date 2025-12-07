export default function SectionHeading({ children, className = '', level = 2 }) {
  const HeadingTag = `h${Math.min(Math.max(level, 2), 6)}`;
  return (
    <HeadingTag className={`mb-3 ${className}`} style={{ 
      color: 'rgba(255, 255, 255, 0.95)', 
      fontWeight: 600,
      fontSize: '1.5rem'
    }}>
      {children}
    </HeadingTag>
  )
}

