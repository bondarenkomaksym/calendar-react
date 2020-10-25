import React, { useEffect, useState } from 'react';
// import { deleteEvent } from '../../App';

import './deletePopUp.scss';

const DeletePopUp = ({ togglePopUp, openPopUp, id, deleteEvent, title }) => {

  if (!openPopUp) {
    return null;
  }

  // debugger;

  return (
    <div className="popup overlay">
      <div className="popup__content">
        <div className="popup__title">{title}</div>
        <button
          className="popup__delete_btn"
          onClick={() => deleteEvent(id)}
        >Delete event</button>
        <button className="popup__close-btn"
          onClick={togglePopUp}
        >+</button>
      </div>
    </div>
  )
}


export default DeletePopUp;