const baseUrl = "https://5f903ab5e0559c0016ad64ac.mockapi.io/events";

const fetch = () => fetch(baseUrl)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error("Internal Server Error. Can't display events")
  });

const createEvent = eventData => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(eventData)
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to create events")
  }
});


const deleteEvent = eventId => fetch(`${baseUrl}/${eventId}`, {
  method: 'DELETE'
}).then(res => {
  if (!res.ok) {
    throw new Error("Internal Server Error. Failed to delete events")
  }
});

export {
  fetch,
  createEvent,
  deleteEvent
}