import React, { useState } from 'react';
import moment from 'moment';


import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ weekDates }) => {
  // console.log(weekDates[6].toLocaleString('default', { month: 'long' }));
  // debugger;

  // let date = new Date().getMonth();
  // const [dateDefault, setDate] = useState(date);

  Date.prototype.toMonthString = function () {
    switch (this.getMonth()) {
      case 0: return months[0]; break;
      case 1: return months[1]; break;
      case 2: return months[2]; break;
      case 3: return months[3]; break;
      case 4: return months[4]; break;
      case 5: return months[5]; break;
      case 6: return months[6]; break;
      case 7: return months[7]; break;
      case 8: return months[8]; break;
      case 9: return months[9]; break;
      case 10: return months[10]; break;
      case 11: return months[11]; break;
    }
  }
  console.log(new Date().toMonthString());

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
        <span className="navigation__displayed-month" >{`${new Date().getMonth()} ${new Date().getFullYear()}`}</span>

      </div>
    </header>
  )
}

export default Header;

// {months.map((month, index) =>
//   <span className="navigation__displayed-month" key={index}>{month}</span>
// )}