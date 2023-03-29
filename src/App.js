import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Landing from "./Landing/landing";
import Navbar from "./Navbar/Navbar";
import Instrument from "./Instruments/instruments";
import AboutUs from "./AboutUs/aboutUs";
import Stocks from "./Stocks1Component/stocks";

import Home from "./LoginComponents/Home/Home";
import Login from "./LoginComponents/Login/Login";
import Signup from "./LoginComponents/Signup/Signup";

import { auth } from "./firebase";
function App() {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar home={false} />
                <Landing />
              </>
            }
          />
          <Route
            path="/learn"
            element={
              <>
                <Instrument />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUs />
              </>
            }
          />
          <Route
            path="stocks"
            element={
              <>
                <Stocks />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signIn" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
