import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

class App extends React.Component {

  state = {
    week: 0,
    isOpenModal: false,
  }

  nextMonth = () => {
    this.setState({
      week: this.state.week + 7,
    })
  }

  prevMonth = () => {
    this.setState({
      week: this.state.week - 7,
    })
  }

  today = () => {
    this.setState({
      week: 0,
    })
  }

  openModal = () => {
    this.setState({
      isOpenModal: true,
    })
  }

  render() {
    const weekStartDate = moment().add(this.state.week, 'days').toDate();
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (<>
      <Header
        weekDates={weekDates}
        nextMonth={this.nextMonth}
        prevMonth={this.prevMonth}
        today={this.today}
      />
      <Modal isOpen={this.state.isOpenModal} />
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
