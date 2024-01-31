import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const { video, streamType, isPoster } = props;
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/details/${streamType}/${video.id}`);
    }
    return (
        <div className='card text-white' onClick={showDetails}>
            <img className='card-img-top' src={`https://image.tmdb.org/t/p/original${isPoster ? video?.poster_path : video?.backdrop_path}`} alt="" />
            <div className='card-body'>
                <h5 className='card-title'>{video?.name || video?.original_name || video?.title || video?.original_title}</h5>
            </div>
        </div>
    );
}

export default Card;