import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Hour from '../hour/Hour';

import './day.scss';


const Day = ({ dataDay, dayEvents, deleteEvent }) => {

  const hours = Array(24).fill().map((val, index) => index);
  // console.log({ ...dayEvents });
  return (
    <>
      <div className="calendar__day" data-day={dataDay}>
        {hours.map(hour => {
          //getting all events from the day we will render
          const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
          // console.log(hourEvents);
          return (
            <Hour
              key={dataDay + hour}
              dataHour={hour}
              hourEvents={hourEvents}
              deleteEvent={deleteEvent}
            />
          )
        })}
      </div>
    </>
  )
}

export default Day;