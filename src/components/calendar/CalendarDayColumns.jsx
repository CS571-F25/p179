export default function CalendarDayColumns({ weekDays, timeSlots }) {
    return (
        <>
            {weekDays.map((day, dayIndex) => (
                <div
                    key={dayIndex}
                    className="calendar-day-column"
                    style={{
                        position: 'absolute',
                        left: `${(dayIndex * (96 / 7))}%`,
                        width: `${96 / 7}%`,
                        height: '100%',
                        borderLeft: '1px solid rgba(168, 85, 247, 0.1)'
                    }}
                >
                    {/* Time slot dividers */}
                    {timeSlots.map((time, index) => (
                        <div
                            key={index}
                            style={{
                                height: '20px',
                                borderTop: '1px solid rgba(168, 85, 247, 0.05)'
                            }}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}

