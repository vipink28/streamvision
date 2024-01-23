import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderVideo, selectHeaderVideo } from '../features/common/commonSlice';

function Header(props) {
    const { video } = props;
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(selectHeaderVideo);
    useEffect(() => {
        if (video) {
            dispatch(fetchHeaderVideo({ type: 'tv', id: video.id }))
        }
    }, [video])



    return (
        <div className='vh-100 relative'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`} alt="" />
            <div className='caption'>
                <h1 className='title display-2'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                <p className='lead'>{data?.overview}</p>
            </div>
            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;