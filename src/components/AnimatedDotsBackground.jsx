import { useState, useEffect, useRef } from 'react'

export default function AnimatedDotsBackground({ 
  columns = 10, 
  rows = 15, 
  maxDistance = 200, 
  maxScale = 3,
  baseSize = 1.5 
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
      // Handle edge case when columns or rows is 1
      const xPercent = columns > 1 ? (col / (columns - 1)) * 100 : 50
      const yPercent = rows > 1 ? (row / (rows - 1)) * 100 : 50
      
      newDots.push({
        id: i,
        x: xPercent,
        y: yPercent,
        baseSize: baseSize,
      })
    }
    
    setDots(newDots)
  }, [columns, rows, baseSize])

  // Track mouse position - attach to document for full page coverage
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

    // Attach to document so it works across the entire page
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Calculate distance between two points
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }

  if (dots.length === 0) {
    return null // Don't render until dots are generated
  }

  return (
    <div 
      ref={containerRef}
      className="animated-dots-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'visible',
        pointerEvents: 'none',
        zIndex: 0,
        backgroundColor: 'transparent',
        isolation: 'isolate'
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
        // Only scale if mouse is within the container bounds
        if (distance < maxDistance && mousePosition.x >= 0 && mousePosition.y >= 0 && 
            mousePosition.x <= containerWidth && mousePosition.y <= containerHeight) {
          const proximity = 1 - (distance / maxDistance)
          scale = 1 + (maxScale - 1) * proximity
        }
        
        // Calculate opacity based on distance (closer = more visible)
        // Base opacity ensures dots are always visible - increased significantly for visibility behind Hero's dark background
        let opacity = 0.7 // Increased base opacity to compensate for Hero's dark background
        if (distance < maxDistance && mousePosition.x >= 0 && mousePosition.y >= 0 &&
            mousePosition.x <= containerWidth && mousePosition.y <= containerHeight) {
          const proximity = 1 - (distance / maxDistance)
          opacity = 0.7 + 0.3 * proximity // Max opacity 1.0 when proximity is 1
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
              minWidth: `${dot.baseSize}px`,
              minHeight: `${dot.baseSize}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 1)',
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity: Math.max(opacity, 0.6), // Increased minimum visibility to compensate for Hero background
              transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
              pointerEvents: 'none',
              willChange: 'transform, opacity',
              display: 'block',
              visibility: 'visible'
            }}
          />
        )
      })}
    </div>
  )
}

