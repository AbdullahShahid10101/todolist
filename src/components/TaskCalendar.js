import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import '../Style/TaskCalendar.css'
import TaskStatus from './TaskStatus';
function TaskCalendar() {
  const [date, setDate] = useState(new Date());
 const day = new Date().toLocaleString('en-US', { weekday: 'long' }); // e.g., "Sunday"
  const dates = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }); 
  return (
    <>    
      <div className="dateAndday-container">
        <h1>Todo App</h1>
  <h2 className='DisplayDay'>{day}</h2>
  <h2 className='DisplayDate'>{dates}</h2>
</div>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          // Example: highlight today
          if (date.toDateString() === new Date().toDateString()) {
            return 'highlight';
          }
        }}
      />
      
  </>

  );
}

export default TaskCalendar;
