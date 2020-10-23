import React, { useState } from 'react';
import DeletePopUp from '../deletePopUp/DeletePopUp';

import './event.scss';


const Event = ({ height, marginTop, title, time, id, deleteEvent }) => {

  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUp = () => {
    setOpenPopUp(!openPopUp);
    console.log();
  }

  const eventStyle = {
    height,
    marginTop
  }

  debugger;
  return (
    <>
      <div style={eventStyle} className="event" onClick={togglePopUp}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div >
      { console.log(id)}
      <DeletePopUp
        id={id}
        title={title}
        togglePopUp={togglePopUp}
        openPopUp={openPopUp}
        deleteEvent={deleteEvent}

      />
    </>
  )
}

export default Event;