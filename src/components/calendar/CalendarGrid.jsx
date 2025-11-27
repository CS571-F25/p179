import CalendarTimeColumn from './CalendarTimeColumn'
import CalendarDayColumns from './CalendarDayColumns'
import CalendarEvent from './CalendarEvent'

export default function CalendarGrid({ 
    timeSlots, 
    weekDays, 
    calendar, 
    pendingEvents,
    calculateEventStyle, 
    formatTime 
}) {
    return (
        <div className="calendar-grid-container" style={{ position: 'relative', minHeight: `${timeSlots.length * 20}px` }}>
            <CalendarTimeColumn timeSlots={timeSlots} formatTime={formatTime} />
            
            <div style={{ marginLeft: '4%', position: 'relative', height: '100%' }}>
                <CalendarDayColumns weekDays={weekDays} timeSlots={timeSlots} />
                
                {/* Confirmed event cards from API */}
                {calendar?.items?.map((event, index) => {
                    const style = calculateEventStyle(event);
                    return (
                        <CalendarEvent
                            key={`confirmed-${index}`}
                            event={event}
                            style={style}
                            formatTime={formatTime}
                            isPending={false}
                        />
                    );
                })}
                
                {/* Pending event cards */}
                {pendingEvents?.map((event, index) => {
                    const style = calculateEventStyle(event);
                    return (
                        <CalendarEvent
                            key={`pending-${index}`}
                            event={event}
                            style={style}
                            formatTime={formatTime}
                            isPending={true}
                        />
                    );
                })}
            </div>
        </div>
    )
}

