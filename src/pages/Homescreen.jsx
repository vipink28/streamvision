import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';

function Homescreen(props) {
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(selectNetflixOriginals);

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])

    return (
        <>
            {status === "success" ?
                <Header video={data.results[0]} /> : "... Loading"
            }
        </>
    );
}

export default Homescreen;