import Header from '../components/Header'
import { Container, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import CalendarNavigation from '../components/calendar/CalendarNavigation'
import CalendarHeader from '../components/calendar/CalendarHeader'
import CalendarGrid from '../components/calendar/CalendarGrid'
import RequestEventModal from '../components/calendar/RequestEventModal'
import ConfirmationModal from '../components/calendar/ConfirmationModal'

export default function Calendar (props) {
    const [calendar, setCalendar] = useState(null);
    const [pendingEvents, setPendingEvents] = useState([]);
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [currentWeekStart, setCurrentWeekStart] = useState(() => {
        // Get Monday of current week
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        const monday = new Date(today);
        monday.setDate(today.getDate() - diffToMonday);
        monday.setHours(0, 0, 0, 0);
        return monday;
    });

    const key = "AIzaSyDAV9s_GMRQp2c96JKayMZuZiAoyM5Bi68";
    
    // Generate array of days for the week
    const getWeekDays = () => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(currentWeekStart);
            day.setDate(currentWeekStart.getDate() + i);
            days.push(day);
        }
        return days;
    };

    // Generate time slots (15-minute intervals)
    const generateTimeSlots = () => {
        const slots = [];
        const startHour = 7; // 7 AM
        const endHour = 24; // 12 AM
        
        for (let hour = startHour; hour < endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 15) {
                const time = new Date();
                time.setHours(hour, minute, 0, 0);
                slots.push(time);
            }
        }
        return slots;
    };

    const timeSlots = generateTimeSlots();
    const weekDays = getWeekDays();

    // Get time range for API request
    const getTimeRange = () => {
        const monday = new Date(currentWeekStart);
        monday.setHours(0, 0, 0, 0);
        
        const sunday = new Date(monday);
        sunday.setDate(monday.getDate() + 6);
        sunday.setHours(23, 59, 59, 999);
        
        return {
            timeMin: monday.toISOString(),
            timeMax: sunday.toISOString()
        };
    };

    function getCalendar() {
        const { timeMin, timeMax } = getTimeRange();
        return fetch(`https://www.googleapis.com/calendar/v3/calendars/rubenaguiloschuurs@gmail.com/events?key=${key}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`)
        .then(res => {
            if(res.status === 200) {
                return res.json();
            }
        }).then(res => {
            console.log('Calendar data:', res);
            setCalendar(res);
        }).catch(err => {
            console.error('Error fetching calendar:', err);
        });
    }

    useEffect(() => {
        getCalendar();
    }, [currentWeekStart]);

    // Navigation functions
    const goToPreviousWeek = () => {
        const newWeekStart = new Date(currentWeekStart);
        newWeekStart.setDate(currentWeekStart.getDate() - 7);
        setCurrentWeekStart(newWeekStart);
    };

    const goToNextWeek = () => {
        const newWeekStart = new Date(currentWeekStart);
        newWeekStart.setDate(currentWeekStart.getDate() + 7);
        setCurrentWeekStart(newWeekStart);
    };

    const goToCurrentWeek = () => {
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diffToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
        const monday = new Date(today);
        monday.setDate(today.getDate() - diffToMonday);
        monday.setHours(0, 0, 0, 0);
        setCurrentWeekStart(monday);
    };

    // Format date for display
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const formatDayName = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    };

    // Handle form submission from request modal
    const handleEventRequest = (eventData) => {
        // Create a date object from the day and start time
        const eventDate = new Date(eventData.day);
        const [startHours, startMinutes] = eventData.startTime.split(':').map(Number);
        const [endHours, endMinutes] = eventData.endTime.split(':').map(Number);
        
        const startDateTime = new Date(eventDate);
        startDateTime.setHours(startHours, startMinutes, 0, 0);
        
        const endDateTime = new Date(eventDate);
        endDateTime.setHours(endHours, endMinutes, 0, 0);
        
        // Create event object in the same format as API events
        const newPendingEvent = {
            summary: eventData.title,
            description: eventData.description || '',
            start: {
                dateTime: startDateTime.toISOString()
            },
            end: {
                dateTime: endDateTime.toISOString()
            },
            requesterName: eventData.requesterName,
            requesterEmail: eventData.requesterEmail
        };
        
        setPendingEvents([...pendingEvents, newPendingEvent]);
        
        // Close request modal and show confirmation modal
        setShowRequestModal(false);
        setShowConfirmationModal(true);
    };

    // Calculate event position and height
    const calculateEventStyle = (event) => {
        if (!event.start || !event.end) return {};
        
        const startTime = new Date(event.start.dateTime || event.start.date);
        const endTime = new Date(event.end.dateTime || event.end.date);
        
        // Find which day of the week (0 = Monday, 6 = Sunday)
        const eventDay = startTime.getDay();
        const dayIndex = eventDay === 0 ? 6 : eventDay - 1; // Convert Sunday=0 to Sunday=6
        
        // Calculate position from top (in pixels, assuming each 15-min slot is 20px)
        const slotHeight = 20; // Height of each 15-minute slot in pixels
        const startHour = startTime.getHours();
        const startMinute = startTime.getMinutes();
        const startSlot = (startHour - 7) * 4 + (startMinute / 15); // 7 AM is slot 0
        
        // Calculate duration in 15-minute slots
        const durationMs = endTime - startTime;
        const durationSlots = Math.max(1, durationMs / (15 * 60 * 1000)); // Minimum 1 slot
        
        // Calculate left position within the day columns area (after time column)
        const dayColumnWidth = 96 / 7; // 96% total width divided by 7 days
        
        return {
            top: `${startSlot * slotHeight}px`,
            height: `${durationSlots * slotHeight}px`,
            left: `calc(4% + ${dayIndex * dayColumnWidth}%)`,
            width: `calc(${dayColumnWidth}% - 4px)`,
            position: 'absolute',
            marginLeft: '2px',
            marginRight: '2px'
        };
    };

    return (
        <div className="page-container">
            <Header />
            <Container className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 style={{ color: 'rgba(255, 255, 255, 0.9)', margin: 0 }}>Calendar</h1>
                    <Button variant="primary" onClick={() => setShowRequestModal(true)}>
                        Request Event
                    </Button>
                </div>

                <CalendarNavigation
                    weekDays={weekDays}
                    formatDate={formatDate}
                    goToPreviousWeek={goToPreviousWeek}
                    goToNextWeek={goToNextWeek}
                    goToCurrentWeek={goToCurrentWeek}
                />

                <div className="calendar-week-view">
                    <CalendarHeader
                        weekDays={weekDays}
                        formatDayName={formatDayName}
                        formatDate={formatDate}
                    />

                    <CalendarGrid
                        timeSlots={timeSlots}
                        weekDays={weekDays}
                        calendar={calendar}
                        pendingEvents={pendingEvents.filter(event => {
                            // Filter pending events to only show those in the current week
                            if (!event.start?.dateTime) return false;
                            const eventDate = new Date(event.start.dateTime);
                            const weekStart = new Date(currentWeekStart);
                            weekStart.setHours(0, 0, 0, 0);
                            const weekEnd = new Date(weekStart);
                            weekEnd.setDate(weekStart.getDate() + 7);
                            return eventDate >= weekStart && eventDate < weekEnd;
                        })}
                        calculateEventStyle={calculateEventStyle}
                        formatTime={formatTime}
                    />
                </div>

                <RequestEventModal
                    show={showRequestModal}
                    onHide={() => setShowRequestModal(false)}
                    onSubmit={handleEventRequest}
                />

                <ConfirmationModal
                    show={showConfirmationModal}
                    onHide={() => setShowConfirmationModal(false)}
                />
            </Container>
        </div>
    )
}