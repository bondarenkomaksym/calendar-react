import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal.jsx';
import moment from 'moment';
// import { fetch } from './gateway/gateway.js';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/events";
// const baseUrl = "https://crudcrud.com/api/5078f136de6c4cb395dbee46517ecb8c/events";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0,
      isOpen: false,
      events: [
        // {
        //   id: 1,
        //   title: 'Go to the gym',
        //   description: 'some text here',
        //   dateFrom: new Date(2020, 9, 19, 2, 15),
        //   dateTo: new Date(2020, 9, 19, 3, 45),
        // },
      ],
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
    // console.log(dateFrom);
    const dateTo = new Date(`${date} ${endTime}`);


    // this.setState(
    //   (prevState) => {
    //     return {
    //       events: [...prevState.events, { id: Date.now(), title, description, dateFrom, dateTo }]
    //     }
    //   }
    // )
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
    const updatedEvents = this.state.events
      .filter(event => event.id !== id);
    this.setState({ events: updatedEvents })
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


