import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcomingMovies, selectUpcomingMovies } from '../features/movie/movieSlice';

function Row(props) {
    const { action, selector, title, streamType } = props;
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(selector);
    const { status, data, error } = upcomingMovies;
    useEffect(() => {
        dispatch(action());
    }, [])

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