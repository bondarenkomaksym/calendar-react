import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';

import './hour.scss';

const Hour = ({ dataHour, hourEvents, deleteEvent, dataDay }) => {

  const [height, setHeight] = useState(moment().format("mm"))

  useEffect(() => {
    const intervalId = setInterval(() =>
      setHeight(moment().format('mm')), 60000);

    return () => clearInterval(intervalId);
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>

      {`${dataDay} ${dataHour}` === moment().format('D HH')
        && <div className="calendar__redline" style={{ top: `${height}px` }}></div>}

      {hourEvents.map(({ id, dateFrom, dateTo, title, description }) => {
        const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
        const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

        return (
          <Event
            key={id}
            id={id}
            deleteEvent={deleteEvent}
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