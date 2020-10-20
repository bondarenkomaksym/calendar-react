import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends React.Component {

  state = {
    day: 0,
  }

  nextMonth = () => {
    this.setState({
      day: this.state.day + 7,
    })
  }

  prevMonth = () => {
    this.setState({
      day: this.state.day - 7,
    })
  }

  render() {
    const currentDate = moment().add(this.state.day, 'days').toDate();
    const weekDates = generateWeekRange(getWeekStartDate(currentDate));

    return (<>
      <Header
        weekDates={weekDates}
        nextMonth={this.nextMonth}
        prevMonth={this.prevMonth}
      />
      {/* <Modal /> */}
      <Calendar weekDates={weekDates} />
    </>)
  }
};
export default App;



// const App = () => {

//   const weekDates = generateWeekRange(getWeekStartDate(new Date()));

//   return (
//     <>
//       <Header />
//       {/* <Modal /> */}
//       <Calendar weekDates={weekDates} />
//     </>
//   )

// };
// export default App;
