import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';
// import { fetch } from './gateway/gateway.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/events";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0,
      isOpen: false,
      events: [],
    }
  }

  componentDidMount() {
    this.fetchEvetsList();
  }

  fetchEvetsList = () => {
    fetch(baseUrl).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(eventsList => {
      let dataFromServer = eventsList.map(event => ({
        id: event.id,
        title: event.title,
        description: event.description,
        dateFrom: new Date(event.dateFrom),
        dateTo: new Date(event.dateTo),
      }))

      this.setState({
        events: dataFromServer
      })
    })
  }

  onCreate = ({ title, description, date, startTime, endTime }) => {

    const dateFrom = new Date(`${date} ${startTime}`);
    const dateTo = new Date(`${date} ${endTime}`);

    fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, dateFrom, dateTo }),
    }).then(response => {
      if (response.ok) {
        this.fetchEvetsList();
      } else {
        throw new Error("Internal Server Error. Can't display events")
      }
    })
  }

  deleteEvent = (id) => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        this.fetchEvetsList();
      } else {
        throw new Error("Internal Server Error. Can't display events")
      }
    })
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

  render() {
    const weekStartDate = moment().add(this.state.week, 'days').toDate();
    const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

    const today = moment().add(this.state.week, 'days');
    const beginningWeek = today.startOf('isoWeek').format("MMMM");

    const endOfWeek = today.endOf('isoWeek').format("MMMM");

    const currentYear = today.startOf('isoWeek').format("YYYY");
    const nextYear = today.endOf('isoWeek').format("YYYY");


    let nameOfDate = beginningWeek !== endOfWeek && currentYear !== nextYear
      ? `${beginningWeek} ${currentYear} - ${endOfWeek} ${nextYear}`
      : beginningWeek !== endOfWeek ? `${beginningWeek} - ${endOfWeek} ${currentYear}`
        : `${beginningWeek} ${currentYear}`

    return (<>
      <Header
        nameOfDate={nameOfDate}
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
        events={this.state.events}
        deleteEvent={this.deleteEvent}
      />
    </>)
  }
};
export default App;