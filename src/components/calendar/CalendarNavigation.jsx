import { Button } from 'react-bootstrap'

export default function CalendarNavigation({ weekDays, formatDate, goToPreviousWeek, goToNextWeek, goToCurrentWeek }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <Button variant="outline-secondary" onClick={goToPreviousWeek}>
                ← Previous Week
            </Button>

            <div className="text-center">
                <h2 className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1.25rem' }}>
                    {formatDate(weekDays[0])} - {formatDate(weekDays[6])}
                </h2>
                <Button variant="link" onClick={goToCurrentWeek} className="p-0" aria-label="Go to current week">
                    Go to Current Week
                </Button>
            </div>

            <Button variant="outline-secondary" onClick={goToNextWeek}>
                Next Week →
            </Button>
        </div>
    )
}

