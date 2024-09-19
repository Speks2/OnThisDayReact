import styles from '../Header/Header.module.scss';
import { Link } from 'react-router-dom';


export function Header() {
  return (
      <header>
          <img src="/src/assets/images/headerImage.jpg" alt="headerImage" />
          <div className={styles.TitleBox}>
              <h1>ON THIS DAY</h1>
              <p>What happened on this day - historical events, deaths and births throughout time</p>
              {/* Circles near corners */}
              <div className={`${styles.circle} ${styles['top-left']}`}></div>
              <div className={`${styles.circle} ${styles['top-right']}`}></div>
              <div className={`${styles.circle} ${styles['bottom-left']}`}></div>
              <div className={`${styles.circle} ${styles['bottom-right']}`}></div>
          </div>

          {/* Navbar and buttons */}
          <nav className={styles.Navbar}>
              <Link to="/date">BY DATE</Link>
              <Link to="/today">TODAY</Link>
              <Link to="/since">SINCE</Link>
          </nav>
      </header>
  );
}


Header();