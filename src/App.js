import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Genres from './pages/Genres';
import Recommendations from './pages/Recommendations';
import Login from './pages/Login';

function getHashParams(hash) {
  const strAfterHash = hash.substring(1);
  const paramsInURL = strAfterHash.split("&");
  const params = paramsInURL.reduce((acc, val) => {
    const [key, value] = val.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return params;
}

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (window.location.hash) {
      const res = getHashParams(window.location.hash);
      setToken(res.access_token);
    }
  }, []);
  return (
    <div className='App'>
      {(token === "") ? (
        <Login />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/features" element={<Features token={token} />}></Route>
            <Route path="/genres" element={<Genres />}></Route>
            <Route path="/recommendations" element={<Recommendations />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
