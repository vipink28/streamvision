import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNetflixOriginals } from '../features/tv/tvSlice';

function Homescreen(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>

        </>
    );
}

export default Homescreen;