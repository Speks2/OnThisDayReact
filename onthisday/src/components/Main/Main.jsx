import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.scss';

// ByDate component
const ByDate = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/02/14")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>By Date (February 14)</h1>
      {data ? (
        <ul>
          {data.events.map((event, index) => (
            <li key={index}>{event.year}: {event.text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Today component
const Today = () => {
  const [data, setData] = React.useState(null);
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  React.useEffect(() => {
    fetch(`https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/${month}/${day}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [month, day]);

  return (
    <div>
      <h1>Today ({month}/{day})</h1>
      {data ? (
        <ul>
          {data.events.map((event, index) => (
            <li key={index}>{event.year}: {event.text}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Since component (placeholder)
const Since = () => (
  <div>
    <h1>Since</h1>
    <p>This feature is not yet implemented.</p>
  </div>
);

// Welcome component
const Welcome = () => (
  <div>
    <h1>Welcome to the History App</h1>
    <p>Explore historical events by date or see what happened on this day in history!</p>
  </div>
);

// Main component
export function Main() {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/date" element={<ByDate />} />
        <Route path="/today" element={<Today />} />
        <Route path="/since" element={<Since />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </main>
  );
}

 Main();