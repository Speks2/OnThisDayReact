import React from 'react'
import styles from '../pages/Today.module.scss';
import { useState, useEffect } from 'react';

export function ByDate() {
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

  return (
    <div className={styles.Today}>
      <h1>By Date</h1>

      {error && <p>Error: {error}</p>}

      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.year}</strong>: {event.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
