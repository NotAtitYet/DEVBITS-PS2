import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/landing'
import Navbar from './Navbar/Navbar';
import Instrument from './Instruments/instruments';
import AboutUs from './AboutUs/aboutUs';
import Stocks from './Stocks/stocks';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar home={false} />
              <Landing />
            </>

          } />
          <Route path="/learn" element={
            <>
              <Instrument />
            </>
          } />
          <Route path="/about" element={
            <>
              <AboutUs/>
            </>
          }/>
          <Route path="stocks" element={
            <>
              <Stocks/>
            </>
          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
