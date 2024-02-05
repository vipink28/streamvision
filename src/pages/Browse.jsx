import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import Header from '../components/Header';
import { requests } from '../helper/apirequests';
import axios from '../helper/axios';
import Row from '../components/Row';
import { shuffle } from '../helper/utility';

function Browse(props) {
    const { type } = useParams();
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(type === 'tv' ? selectNetflixOriginals : selectUpcomingMovies);

    const [genreList, setGenreList] = useState(null);

    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type));
        setGenreList(shuffle(response.data.genres));
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
            <div className='container-fluid'>
                {
                    genreList !== null ?
                        genreList?.map((genre, index) => {
                            return (
                                index < 6 ?
                                    <Row key={genre.id} title={genre?.name} genre={genre} streamType={type} />
                                    : ""
                            )
                        }) : ""

                }
            </div>
        </>
    );
}

export default Browse;