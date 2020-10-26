import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';


const Hour = ({ dataHour, hourEvents, deleteEvent }) => {

  // const todayRedLine = moment().format('YYYY-MM-DD HH');
  const todayRedLine = Date.now();

  console.log(todayRedLine);

  const [height, setHeight] = useState(moment().format("mm"))

  useEffect(() => {
    const intervalId = setInterval(() =>
      setHeight(moment().format('mm')), 60000);

    return () => clearInterval(intervalId);
  });

  const styleLine = {
    zIndex: 999,
    position: 'absolute',
    top: `${height}px`,
    color: 'red',
    fontWeight: 'bold'
  }

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>

      {<span style={styleLine}>RedLine</span>}

      {/* if no events in the current hour nothing will render here */}
      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            deleteEvent={deleteEvent}
            //calculating event height = duration of event in minutes
            height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
            marginTop={dateFrom.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
          />
        )
      })}
    </div>

  )
}

export default Hour;