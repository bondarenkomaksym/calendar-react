import React, { useState } from 'react';
import moment from 'moment';

import { months } from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ weekDates, nextMonth, prevMonth }) => {
  // console.log(weekDates[6].toLocaleString('default', { month: 'long' }));
  // debugger;

  function ND(args) {
    if (weekDates[0].getFullYear() !== weekDates[6].getFullYear() && weekDates[0].getMonth() !== weekDates[6].getMonth()) {
      let FullName = (`${months[weekDates[0].getMonth()]} ${weekDates[0].getFullYear()} - ${months[weekDates[6].getMonth()]} ${weekDates[6].getFullYear()}`);
      return FullName;
    }
    if (weekDates[0].getMonth() !== weekDates[6].getMonth()) {
      let twoMonthNames = (`${months[weekDates[0].getMonth()]} - ${months[weekDates[6].getMonth()]} ${weekDates[6].getFullYear()}`);
      return twoMonthNames;
    }
    if (weekDates[0].getMonth() === weekDates[6].getMonth()) {
      let oneMonthName = `${months[weekDates[0].getMonth()]} ${weekDates[6].getFullYear()}`;
      return oneMonthName;
    }
  }

  let nameOfDate = ND({ weekDates });
  console.log(nameOfDate);

  // function NY(params) {
  //   if (weekDates[0].getFullYear() === weekDates[6].getFullYear()) {
  //     let oneYearName = weekDates[0].getFullYear();
  //     return oneYearName;
  //   } else {
  //     let twoYearNames = (`${weekDates[0].getFullYear()} - ${weekDates[6].getFullYear()}`);
  //     return twoYearNames;
  //   }
  // }

  // let nameOfYear = NY({ weekDates });
  // console.log(nameOfYear);

  // let nameOfDate = weekDates[0].getFullYear() === weekDates[6].getFullYear()
  //   ? `${nameOfMonth} - ${nameOfYear}`
  //   : `${nameOfMonth} - ${nameOfYear}`;

  // const [dateDefault, setDate] = useState(date);


  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
            </button>
      <div className="navigation">
        <button className="navigation__today-btn button" >
          Today
          </button>
        <button className="icon-button navigation__nav-icon" onClick={prevMonth}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextMonth}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month" >{nameOfDate}</span>

      </div>
    </header>
  )
}

export default Header;

// {months.map((month, index) =>
//   <span className="navigation__displayed-month" key={index}>{month}</span>
// )}