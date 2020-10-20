import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends React.Component {

  state = {
    weekStartDate: moment().add(0, 'days').toDate(),
  }

  nextMonth = () => {
    this.setState({
      weekStartDate: this.state.moment().add(7, 'days').toDate(),
    })
  }

  prevMonth = () => {
    this.setState({
      weekStartDate: this.state.moment().subtract(7, 'days').toDate(),
    })
  }

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (<>
      <Header weekDates={weekDates}
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
