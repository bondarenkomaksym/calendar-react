import React, { useEffect, useState } from 'react';

import './modal.scss';

// const baseUrl = "https://crudcrud.com/api/c0cd89749247443bbf8124549c93c712/events";
// const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/events";

const Modal = ({ isOpen, closeModal }) => {

  if (!isOpen) {
    return null;
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  // debugger;

  // const submit = e => {
  //   fetch(baseUrl, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json; utc-8' },
  //     body: JSON.stringify({ title, description, date, startTime, endTime }),
  //   })
  // }

  // debugger;
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeModal}>+</button>
          <form className="event-form">
            <input type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
            <div className="event-form__time">
              <input type="date"
                name="date"
                className="event-form__field"
                onChange={e => setDate(e.target.value)}
                value={date}
              />
              <input type="time"
                name="startTime"
                className="event-form__field"
                onChange={e => setStartTime(e.target.value)}
                value={startTime}
              />
              <span>-</span>
              <input type="time"
                name="endTime"
                className="event-form__field"
                onChange={e => setEndTime(e.target.value)}
                value={endTime}
              />
            </div>
            <textarea name="description"
              placeholder="Description"
              className="event-form__field"
              onChange={e => setDescription(e.target.value)}
              value={description}
            >
            </textarea>
            <button
              type="submit"
              className="event-form__submit-btn"
              onClick={submit}
            >Create</button>
          </form>
        </div>
      </div>
    </div>)
}


export default Modal;