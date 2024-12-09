import React, { useState } from 'react'

function Event() {
    const mockEvents = [
        {
          id: 1,
          name: "React Workshop",
          date: "2024-12-15",
          location: "New Delhi",
          description: "Learn React from scratch.",
          category: "Workshop",
          capacity: 10,
          attendees: [],
        },
        {
          id: 2,
          name: "Tech Conference",
          date: "2024-12-20",
          location: "Mumbai",
          description: "Explore tech trends and innovations.",
          category: "Conference",
          capacity: 5,
          attendees: [],
        },
        {
          id: 3,
          name: "Sports Conference",
          date: "2024-12-26",
          location: "Hyderabad",
          description: "All Sports meeting.",
          category: "Conference",
          capacity: 5,
          attendees: [],
        },
        {
          id: 4,
          name: "Css Workshop",
          date: "2024-12-27",
          location: "Chennai",
          description: "Learning About css.",
          category: "Workshop",
          capacity: 5,
          attendees: [],
        },
      ];
      const [events, setEvents] = useState(mockEvents);
  return (
    <div>
       <h1>Event Management System</h1>
    </div>
  )
}

export default Event