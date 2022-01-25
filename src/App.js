import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Playlists from './pages/Playlists';
import TopSongsArtists from './pages/TopSongsArtists';

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
            <Route path="/recently-played" element={<RecentlyPlayed token={token} />}></Route>
            <Route path="/playlists" element={<Playlists token={token} />}></Route>
            <Route path="/top-songs-artists" element={<TopSongsArtists token={token} />}></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
