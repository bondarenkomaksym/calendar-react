import React, { useState } from 'react';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = () => {

  // debugger;

  let date = new Date().getMonth();
  const [dateDefault, setDate] = useState(date);


  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
            </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => setDate(date)}>
          Today
          </button>
        <button className="icon-button navigation__nav-icon" onClick={() => setDate(dateDefault - 1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => setDate(dateDefault + 1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month" >{`${months[dateDefault]} ${new Date().getFullYear()}`}</span>

      </div>
    </header>
  )
}

export default Header;

// {months.map((month, index) =>
//   <span className="navigation__displayed-month" key={index}>{month}</span>
// )}