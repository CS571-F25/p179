export default function CalendarTimeColumn({ timeSlots, formatTime }) {
    return (
        <div className="calendar-time-column" style={{ 
            position: 'absolute', 
            left: 0, 
            width: '4%',
            height: '100%'
        }}>
            {timeSlots.map((time, index) => (
                index % 4 === 0 && (
                    <div 
                        key={index} 
                        className="calendar-time-slot"
                        style={{ 
                            height: '80px',
                            borderTop: '1px solid rgba(168, 85, 247, 0.2)',
                            paddingTop: '4px',
                            fontSize: '0.75rem',
                            color: 'rgba(255, 255, 255, 0.6)'
                        }}
                    >
                        {formatTime(time)}
                    </div>
                )
            ))}
        </div>
    )
}

