import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import Header from '../components/Header';
import { fetchNowPlayingMovies, fetchUpcomingMovies, selectNowPlayingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Row from '../components/Row';
import { streamTypes } from '../helper/apirequests';

function Homescreen(props) {
    const dispatch = useDispatch();
    const { data, error, status } = useSelector(selectNetflixOriginals);

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
    }, [])
    const randomIndex = Math.floor(Math.random() * data?.results.length)

    return (
        <>
            {status === "success" ?
                <Header video={data.results[randomIndex]} streamType='tv' /> : "... Loading"
            }

            <div className='container-fluid'>
                <Row title="Now Playing" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} streamType={streamTypes.movie} />

                <Row title="Upcoming Movies" action={fetchUpcomingMovies} selector={selectUpcomingMovies} streamType={streamTypes.movie} />

                <Row title="Netflix Originals" action={fetchNetflixOriginals} selector={selectNetflixOriginals} streamType={streamTypes.tv} />
            </div>
        </>
    );
}

export default Homescreen;