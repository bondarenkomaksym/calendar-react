import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

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


class App extends React.Component {

  state = {
    // weekStartDate: new Date(Date.now() + 604800000),
    weekStartDate: moment().add(0, 'days').toDate(),
  }

  render() {
    const { weekStartDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (<>
      <Header weekDates={weekDates} />
      {/* <Modal /> */}
      <Calendar weekDates={weekDates} />
    </>)
  }
};
export default App;