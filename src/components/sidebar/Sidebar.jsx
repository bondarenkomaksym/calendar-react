import React from 'react';

import './sidebar.scss';

const Sidebar = (props) => {
  // console.log(props);
  const hours = Array(24).fill().map((val, index) => index);

  return (
    <div className="calendar__time-scale">
      {hours.map((hour, index) =>
        <div className="time-slot" key={index}>
          <span className="time-slot__time">{`${hour}:00`}</span>
        </div>
      )}
    </div>
  )
}

export default Sidebar;