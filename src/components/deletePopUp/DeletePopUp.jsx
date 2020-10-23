import React, { useEffect, useState } from 'react';

import './deletePopUp.scss';

const DeletePopUp = ({ togglePopUp, openPopUp, title }) => {

  if (!openPopUp) {
    return null;
  }

  // debugger;

  return (
    <div className="popup overlay">
      <div className="popup__content">
        <button
          className="popup__delete_btn"
        >Delete event</button>
        <button className="popup__close-btn"
          onClick={togglePopUp}
        >+</button>
      </div>
    </div>
  )
}


export default DeletePopUp;