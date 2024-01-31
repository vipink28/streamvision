import React from 'react';
import Ratings from './Ratings';

function EpisodeRow(props) {
    const { episode } = props;
    return (
        <div className='row py-3'>
            <div className='col-lg-3'>
                <img className='img-fluid' src={`https://image.tmdb.org/t/p/original${episode?.still_path}`} alt="" />
            </div>
            <div className='col-lg-7'>
                <h6>{episode?.name}</h6>
                <p>{episode?.overview}</p>
            </div>
            <div className="col-lg-2">
                <Ratings voteAverage={episode?.vote_average} voteCount={episode?.vote_count} />
            </div>
        </div>
    );
}

export default EpisodeRow;