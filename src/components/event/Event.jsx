import React, { useState } from 'react';
import DeletePopUp from '../deletePopUp/DeletePopUp';
// import { closePopUp } from '../deletePopUp/DeletePopUp';

import './event.scss';


const Event = ({ height, marginTop, title, time }) => {

  const [deletePopUp, setDeletePopUp] = useState(false);

  const eventStyle = {
    height,
    marginTop
  }


  return (
    <>
      <div style={eventStyle} className="event" onClick={() => setDeletePopUp(true)}>
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div >
      <DeletePopUp
        isOpenPopUp={deletePopUp}
      // onClick={closePopUp}
      />
    </>
  )
}


export default Event;