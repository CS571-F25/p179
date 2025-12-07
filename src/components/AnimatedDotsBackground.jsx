import { useState, useEffect, useRef } from 'react'

export default function AnimatedDotsBackground({ 
  columns = 12, 
  rows = 8, 
  maxDistance = 150, 
  maxScale = 2.5,
  baseSize = 4 
}) {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [dots, setDots] = useState([])
  const containerRef = useRef(null)

  // Generate grid-based dot positions
  useEffect(() => {
    const newDots = []
    const totalDots = columns * rows
    
    for (let i = 0; i < totalDots; i++) {
      const col = i % columns
      const row = Math.floor(i / columns)
      
      // Calculate position as percentage for grid layout
      const xPercent = (col / (columns - 1)) * 100
      const yPercent = (row / (rows - 1)) * 100
      
      newDots.push({
        id: i,
        x: xPercent,
        y: yPercent,
        baseSize: baseSize,
      })
    }
    
    setDots(newDots)
  }, [columns, rows, baseSize])

  // Track mouse position - attach to parent hero section
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        // Use the container's bounding rect for accurate positioning
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    const handleMouseLeave = () => {
      // Reset mouse position when leaving the container
      setMousePosition({ x: -1000, y: -1000 })
    }

    // Attach to the parent hero section so it works even over text
    const heroSection = containerRef.current?.parentElement
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove, { passive: true })
      heroSection.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        heroSection.removeEventListener('mousemove', handleMouseMove)
        heroSection.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Calculate distance between two points
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }

  return (
    <div 
      ref={containerRef}
      className="animated-dots-background"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      {dots.map((dot) => {
        if (!containerRef.current) return null
        
        const container = containerRef.current
        const containerWidth = container.offsetWidth || 1
        const containerHeight = container.offsetHeight || 1
        
        // Convert percentage to pixel position
        const dotX = (dot.x / 100) * containerWidth
        const dotY = (dot.y / 100) * containerHeight
        
        // Calculate distance from mouse to dot
        const distance = getDistance(mousePosition.x, mousePosition.y, dotX, dotY)
        
        // Calculate scale based on distance (closer = bigger)
        let scale = 1
        if (distance < maxDistance && mousePosition.x > 0 && mousePosition.y > 0) {
          // Scale from 1 to maxScale as distance goes from maxDistance to 0
          const proximity = 1 - (distance / maxDistance)
          scale = 1 + (maxScale - 1) * proximity
        }
        
        // Calculate opacity based on distance (closer = more visible)
        let opacity = 0.4
        if (distance < maxDistance && mousePosition.x > 0 && mousePosition.y > 0) {
          const proximity = 1 - (distance / maxDistance)
          opacity = 0.4 + 0.6 * proximity
        }
        
        return (
          <div
            key={dot.id}
            className="animated-dot"
            style={{
              position: 'absolute',
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.baseSize}px`,
              height: `${dot.baseSize}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
              pointerEvents: 'none',
              willChange: 'transform, opacity'
            }}
          />
        )
      })}
    </div>
  )
}

