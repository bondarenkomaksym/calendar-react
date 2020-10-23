import React, { useEffect, useState } from 'react';

import './deletePopUp.scss';

const DeletePopUp = ({ isOpenPopUp }) => {

  if (!isOpenPopUp) {
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
        // onClick={closePopUp}
        >+</button>
      </div>

    </div>
  )
}


export default DeletePopUp;