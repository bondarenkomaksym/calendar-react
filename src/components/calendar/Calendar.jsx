import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
// import events from '../../gateway/events';

import './calendar.scss';

class Calendar extends Component {

  // state = {
  //   events,
  // }

  render() {
    const { weekDates, events } = this.props;

    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={events} />
          </div>
        </div>
      </section>
    )
  }
}

export default Calendar;

// import React, { useState } from 'react';

// import Navigation from './../navigation/Navigation';
// import Week from '../week/Week';
// import Sidebar from '../sidebar/Sidebar';
// import events from '../../gateway/events';

// import './calendar.scss';

// const Calendar = ({ weekDates }) => {

//   // useState(events);

//   return (
//     <section className="calendar">
//       <Navigation weekDates={weekDates} />
//       <div className="calendar__body">
//         <div className="calendar__week-container">
//           <Sidebar />
//           <Week weekDates={weekDates} events={events} />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Calendar;
