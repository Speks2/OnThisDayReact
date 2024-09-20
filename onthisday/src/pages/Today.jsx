import React from 'react'
import styles from '../pages/Today.module.scss';
import { useState, useEffect } from 'react';

export function Today() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Fetcheted data from API!!!
    fetch('https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/09/18')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data.events);
      })
      .catch((error) => {
        setError(error.toString());
      });
  }, []);

  {
    function DarkTheme() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
  }
  return (
    <div className={styles.Today}>
        <img src="/src/assets/images/Light.svg" alt="Light" />
      <h1>Today in History - September 20</h1>
      <button onclick="myFunction()">Toggle dark mode</button>
      {error && <p>Oops! {error}</p>}

      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.year}</strong>: {event.text}
          </li>
        ))}
      </ul>
      <img src="/src/assets/images/Upward Arrow.svg" alt="ArrowUp" />
    </div>
  );
}
