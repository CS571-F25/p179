import { Row, Col } from 'react-bootstrap'

export default function CalendarHeader({ weekDays, formatDayName, formatDate }) {
    return (
        <Row className="calendar-header mb-2">
            <Col xs={1} className="calendar-time-column"></Col>
            {weekDays.map((day, index) => (
                <Col key={index} className="text-center calendar-day-header">
                    <div className="fw-bold">{formatDayName(day)}</div>
                    <div className="text-muted small">{formatDate(day)}</div>
                </Col>
            ))}
        </Row>
    )
}

