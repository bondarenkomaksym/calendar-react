import React from 'react';

import { days } from '../../utils/dateUtils.js';

const Navigation = ({ weekDates }) => {
  // debugger;
  //названия дней и номера дат над столбиками
  return (
    <header className="calendar__header">
      {weekDates.map((dayDate, index) =>
        <div className="calendar__day-label day-label" key={index}>
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      )}
    </header>
  )
}

export default Navigation;