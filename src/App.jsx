import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Modal from './components/modal/Modal.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {

  // const { getWeekStartDate, generateWeekRange } = props;
  // const [date, weekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(new Date()));

  return (
    <>
      <Header />
      {/* <Modal /> */}
      <Calendar weekDates={weekDates} />
    </>
  )

};
export default App;


// class App extends Component {

//   state = {
//     weekStartDate: new Date(),
//   }

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

//     return (<>
//       <Header />
//       <Modal />
//       <Calendar weekDates={weekDates} />
//     </>)
//   }
// };
// export default App;