import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Today} from './pages/Today';
import {ByDate} from './pages/ByDate';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/date" element={<ByDate />} />
      <Route path="/today" element={<Today />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;