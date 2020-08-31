import React from 'react';
import './cssfiles/detailsmodal.css';
import { motion } from 'framer-motion';

function DetailsModal({ selectedMovie, setSelectedMovie, genre }) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original/"

    const handleExit = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedMovie(null);
        }
    }


    return (
        <motion.div
            className="backdrop"
            onClick={handleExit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.8 }}
        >
            <motion.div
                className="movie_card"
                id="bright"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ ease: 'easeOut', duration: 0.5 }}
            >
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={imageBaseUrl + selectedMovie.backdrop_path || selectedMovie.poster_path} alt="poster" />
                        <h1>{selectedMovie.title}</h1>
                        <h4>{selectedMovie.release_date || selectedMovie.first_air_date}</h4>
                        <span className="minutes">{selectedMovie.vote_count} Votes</span>
                        <p className="type">{genre}</p>
                    </div>
                    <div className="movie_desc">
                        <p className="text">
                            {selectedMovie.overview}
                        </p>
                    </div>
                </div>
                <div className="blur_back bright_back">
                    <img src={imageBaseUrl + selectedMovie.backdrop_path || selectedMovie.poster_path} alt="poster" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default DetailsModal
