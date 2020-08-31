import React, { useState } from 'react';
import './App.css';
import Header from './comps/Header';
import Navbar from './comps/Navbar';
import MainContent from './comps/MainContent';
import requests from './comps/requests';
import DetailsModal from './comps/DetailsModal';

function App() {
  const [movieType, setMovieType] = useState(requests.fetchTrending);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genre, setGenre] = useState("Trending");
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* navbar */}
      <Navbar setMovieType={setMovieType} setGenre={setGenre} />
      {/* main content */}
      <MainContent movieType={movieType} setSelectedMovie={setSelectedMovie} />
      {/* show details of a  movie */}
      {selectedMovie && <DetailsModal
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        genre={genre} />}
    </div>
  );
}

export default App;
