import styles from '../Main/Main.module.scss';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';




export function Main() {




    return (

        <main>
        <Routes>
          <Route path="/date" element={<ByDate />} />
          <Route path="/today" element={<Today />} />
          <Route path="/since" element={<Since />} />
          <Route path="/" element={<h1>Welcome to the History App</h1>} />
        </Routes>
        </main>
    )
}
 Main()