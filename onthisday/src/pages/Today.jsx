import React, { useState, useEffect } from 'react';
import styles from '../pages/Today.module.scss';

export function Today() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  //Api fetching er her...
  useEffect(() => {
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

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark-mode');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
//HTML
  return (
    <div className={`${styles.Today} ${isDarkMode ? styles.darkMode : ''}`}>
      <img 
        src="/src/assets/images/Light.svg" 
        alt="Light" 
        onClick={toggleDarkMode}
        className={styles.themeToggle}
      />
      <h1>Today in History - September 20</h1>
      {error && <p>Oops! {error}</p>}
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.year}</strong>: {event.text}
          </li>
        ))}
      </ul>
      <img 
        src="/src/assets/images/Upward Arrow.svg" 
        alt="ArrowUp" 
        onClick={scrollToTop}
        className={styles.scrollToTop}
      />
    </div>
  );
}