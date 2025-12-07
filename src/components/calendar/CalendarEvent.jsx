export default function CalendarEvent({ event, style, formatTime, isPending = false }) {
    const startTime = event.start?.dateTime ? new Date(event.start.dateTime) : null;
    const endTime = event.end?.dateTime ? new Date(event.end.dateTime) : null;
    
    // Different styling for pending events
    const backgroundColor = isPending 
        ? 'rgba(255, 193, 7, 0.3)' // Yellow/amber for pending
        : 'rgba(168, 85, 247, 0.3)'; // Purple for confirmed
    
    const borderColor = isPending
        ? 'rgba(255, 193, 7, 0.5)'
        : 'rgba(168, 85, 247, 0.5)';
    
    return (
        <div
            className="calendar-event"
            style={{
                ...style,
                backgroundColor: backgroundColor,
                border: `1px solid ${borderColor}`,
                borderRadius: '4px',
                padding: '2px 4px',
                fontSize: '0.75rem',
                overflow: 'hidden',
                cursor: 'pointer',
                zIndex: 10
            }}
            title={event.summary || 'Event'}
        >
            <div className="fw-bold" style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 1)' }}>
                {event.summary || 'Busy'}
                {isPending && <span style={{ fontSize: '0.6rem', opacity: 0.8 }}> (Pending)</span>}
            </div>
            {startTime && (
                <div style={{ fontSize: '0.65rem', opacity: 0.9, color: 'rgba(255, 255, 255, 0.9)' }}>
                    {formatTime(startTime)}
                    {endTime && ` - ${formatTime(endTime)}`}
                </div>
            )}
        </div>
    )
}

