import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';
// import events from './gateway/events.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/events";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0,
      isOpen: false,
      eventFormData: [{
        id: 1,
        title: 'Go to the gym',
        description: 'some text here',
        dateFrom: new Date(2020, 9, 23, 2, 15),
        dateTo: new Date(2020, 9, 23, 3, 45),
      },
      {
        id: 2,
        title: 'qqqqqqqqq',
        description: 'some text here',
        dateFrom: new Date(2020, 9, 24, 2, 15),
        dateTo: new Date(2020, 9, 24, 3, 45),
      },]
    }

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
      isOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  onCreate = ({ title, description, date, startTime, endTime }) => {

    const dateFrom = new Date(`${date} ${startTime}`);
    const dateTo = new Date(`${date} ${endTime}`);

    this.setState(
      (prevState) => {
        return {
          eventFormData: [...prevState.eventFormData, { id: Date.now(), title, description, dateFrom, dateTo }]
        }
      }
    )
    fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, dateFrom, dateTo }),
    }).then(response => { console.log(response) })
  }

  // debugger;
  deleteEvent = (id) => {
    // debugger;
    const updatedEvents = this.state.eventFormData
      .filter(event => event.id !== id);
    this.setState({ eventFormData: updatedEvents })
  }

  // debugger;

  render() {
    const weekStartDate = moment().add(this.state.week, 'days').toDate();
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    return (<>
      <Header
        weekDates={weekDates}
        nextMonth={this.nextMonth}
        prevMonth={this.prevMonth}
        today={this.today}
        openModal={this.openModal}
      />
      <Modal
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        onCreate={this.onCreate}
      />
      <Calendar
        weekDates={weekDates}
        events={this.state.eventFormData}
        deleteEvent={this.deleteEvent}
      />
    </>)
  }
};
export default App;


