import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Header from '../components/Header';
import { requests } from '../helper/apirequests';
import axios from '../helper/axios';
import Row from '../components/Row';

function Browse(props) {
    const { type } = useParams();
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(type === 'tv' ? selectNetflixOriginals : selectUpcomingMovies);

    const [genreList, setGenreList] = useState(null);

    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type));
        setGenreList(response.data.genres);
    }

    useEffect(() => {
        if (type === 'tv') {
            dispatch(fetchNetflixOriginals());
        } else {
            dispatch(fetchUpcomingMovies());
        }
    }, [type]);

    useEffect(() => {
        if (type) {
            fetchGenreList(type);
        }
    }, [type])

    const randomIndex = Math.floor(Math.random() * data?.results.length)
    return (
        <>
            {status === "success" ?
                <Header video={data.results[randomIndex]} streamType={type} /> : "... Loading"
            }
            {
                genreList !== null ?
                    <Row title={genreList[0]?.name} genre={genreList[0]} streamType={type} /> : ""
            }
        </>
    );
}

export default Browse;