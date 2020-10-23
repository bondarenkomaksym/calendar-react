import React, { useState } from 'react';
import DeletePopUp from '../deletePopUp/DeletePopUp';

import './event.scss';


const Event = ({ height, marginTop, title, time }) => {

  const [openPopUp, setOpenPopUp] = useState(false);

  const togglePopUp = () => {
    setOpenPopUp(!openPopUp);
  }

  const eventStyle = {
    height,
    marginTop
  }


  return (
    <>
      <div style={eventStyle} className="event" onClick={togglePopUp}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div >
      <DeletePopUp
        title={title}
        togglePopUp={togglePopUp}
        openPopUp={openPopUp}
      />
    </>
  )
}

export default Event;