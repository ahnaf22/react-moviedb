import React from 'react';
import "./cssfiles/navbar.css";
import requests from './requests';

function Navbar({ setMovieType, setGenre }) {
    return (
        <div className="navbar">
            <h3 onClick={() => { setMovieType(requests.fetchTrending); setGenre("Trending"); }}>trending</h3>
            <h3 onClick={() => { setMovieType(requests.fetchComedyMovies); setGenre("Comedy"); }}>comedy</h3>
            <h3 onClick={() => { setMovieType(requests.fetchActionMovies); setGenre("Action"); }}>action</h3>
            <h3 onClick={() => { setMovieType(requests.fetchAnimationMovies); setGenre("Action"); }}>animation</h3>
            <h3 onClick={() => { setMovieType(requests.fetchHorrorMovies); setGenre("Horror"); }}>Horror</h3>
            <h3 onClick={() => { setMovieType(requests.fetchMysteryMovies); setGenre("Mystery"); }}>mystery</h3>
            <h3 onClick={() => { setMovieType(requests.fetchRomanceMovies); setGenre("Romance"); }}>romance</h3>
            <h3 onClick={() => { setMovieType(requests.fetchScifiMovies); setGenre("Sci-Fi"); }}>sci fi</h3>
            <h3 onClick={() => { setMovieType(requests.fetchTopRated); setGenre("Top Rated"); }}>Top Rated</h3>
            <h3 onClick={() => { setMovieType(requests.fetchTv); setGenre("TV Movie"); }}>Tv</h3>
            <h3 onClick={() => { setMovieType(requests.fetchWesternMovies); setGenre("Western"); }}>western</h3>
        </div >
    )
}

export default Navbar
