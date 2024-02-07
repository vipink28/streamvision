import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, selectHeaderVideo } from '../features/common/commonSlice';
import Ratings from './Ratings';
import GenreLink from './GenreLink';
import YouTubePlayer from './YouTubePlayer';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const { video, streamType } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, error, status } = useSelector(selectHeaderVideo);
    const [showTrailer, setShowTrailer] = useState(false);
    const handleTrailer = () => {
        setShowTrailer(true);
    }


    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderVideo({ type: streamType, id: video.id }))
        }
    }, [video])

    const showDetails = () => {
        navigate(`/details/${streamType}/${data.id}`);
    }

    return (
        <div className='vh-100 relative'>
            {
                showTrailer ?
                    <YouTubePlayer trailer={data?.videos} />
                    :
                    <>
                        <img className='header-img' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
                        <div className='caption'>
                            <h1 className='title display-2'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                            <p className='lead'>{data?.overview}</p>
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                            <GenreLink genreList={data?.genres} streamType={streamType} />
                            <div className='d-flex gap-2'>
                                <button className='btn btn-danger' onClick={handleTrailer}>Play</button>
                                <button className='btn btn-warning' onClick={showDetails}>More Info</button>
                            </div>
                        </div>
                    </>
            }


            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;