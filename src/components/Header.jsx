import React from 'react';

function Header(props) {
    const { video } = props;
    return (
        <div className='vh-100 relative'>
            <img className='header-img' src={`https://image.tmdb.org/t/p/original${video.backdrop_path}`} alt="" />
            <div className='caption'>
                <h1 className='title display-2'>{video?.name || video?.original_name || video?.title || video?.original_title}</h1>
                <p className='lead'>{video?.overview}</p>
            </div>
            <div className='header-vignette'></div>
            <div className='header-bottom-vignette'></div>
        </div>
    );
}

export default Header;