import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { requests } from '../helper/apirequests';

function Row(props) {
    const { action, selector, title, streamType, genre } = props;
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(!genre ? selector : (state) => state.tv.netflixOriginals);
    const { status, data, error } = upcomingMovies;

    const [collectionByGenre, setCollectionByGenre] = useState(null);

    const fetchVideoByGenre = async (type, id) => {
        const response = await axios.get(requests.getByGenre(type, id));
        setCollectionByGenre(response.data.results);
    }


    useEffect(() => {
        if (!genre) {
            dispatch(action());
        } else {
            fetchVideoByGenre(streamType, genre.id);
        }
    }, [genre])

    return (
        <div className='py-3'>
            <h3 className='mb-3'>{title}</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
                {
                    status === "success" ?
                        data?.results.map((video) => {
                            return (
                                <SwiperSlide key={video?.id}>
                                    <Card video={video} streamType={streamType} />
                                </SwiperSlide>
                            )
                        })
                        : "...Loading"
                }
            </Swiper>
        </div>
    );
}

export default Row;