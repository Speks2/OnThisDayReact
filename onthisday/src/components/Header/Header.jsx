import styles from '../Header/Header.module.scss';



export function Header() {



    return(

    <header>
        <img src="/src/assets/images/headerImage.jpg" alt="headerImage" />
        <div className={styles.TitleBox}>
        <h1>ON THIS DAY</h1>
        <p>What happened on this day - historical events, deaths and births thoughout time</p>

         {/* Cirkler nær hjørner */}
      <div className={styles.circle + ' ' + styles['top-left']}></div>
      <div className={styles.circle + ' ' + styles['top-right']}></div>
      <div className={styles.circle + ' ' + styles['bottom-left']}></div>
      <div className={styles.circle + ' ' + styles['bottom-right']}></div>
      </div>
   

    {/*Navbar og knapper*/}
    <nav className={styles.Navbar}>
      <a href="#date">BY DATE</a>
      <a href="#today">TODAY</a>
      <a href="#since">SINCE</a>
    </nav>
    </header>
    
    );
};

Header()