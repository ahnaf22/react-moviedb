import React, { useState, useEffect } from 'react';
import "./cssfiles/maincontent.css";
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function MainContent({ movieType, setSelectedMovie }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(movieType);

            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [movieType]);


    return (
        <div className="maincontent">

            <FlipMove>
                {
                    movies.map((movie) => (
                        <VideoCard movie={movie} key={movie.id} setSelectedMovie={setSelectedMovie} />
                    ))
                }
            </FlipMove>

        </div>
    )
}

export default MainContent
