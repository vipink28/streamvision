import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import YouTubePlayer from '../components/YouTubePlayer';
import Ratings from '../components/Ratings';
import GenreLink from '../components/GenreLink';
import Card from '../components/Card';

function Details(props) {
    const dispatch = useDispatch();
    const { type, id } = useParams();
    const { data, status, error } = useSelector(selectVideoDetails);

    useEffect(() => {
        if (id) {
            dispatch(fetchVideoDetails({ type: type, id: id }))
        }
    }, [id])

    return (
        <div className='py-5'>
            <div className="container">
                <YouTubePlayer trailer={data?.videos} />
            </div>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className='rounded-4 overflow-hidden'>
                            <img className='img-fluid' src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <h1 className='title display-3'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                        {
                            data?.tagline ?
                                <h3 className='tagline display-5 text-warning'>{data?.tagline}</h3> : ""
                        }
                        <div className='d-flex gap-3 align-items-center'>
                            <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count} />
                            <p className='mb-0'>{data?.release_date || data?.first_air_date}</p>
                        </div>
                        <GenreLink genreList={data?.genres} />
                        <p className='lead'>{data?.overview}</p>

                        <h1>{data?.similar.results.length > 0 ? `Similar ${type === 'tv' ? 'Shows' : 'Movies'}` : `Recommended ${type === 'tv' ? 'Shows' : 'Movies'}`}</h1>
                        <div className='row gy-4'>
                            {
                                data?.similar.results.length > 0 ?
                                    data?.similar.results.map((video, index) => {
                                        return (
                                            index < 4 ?
                                                <div className='col-lg-3'>
                                                    <Card video={video} streamType={type} isPoster={true} />
                                                </div>
                                                : ""
                                        )
                                    }) : data?.recommendations.results.map((video, index) => {
                                        return (
                                            index < 4 ?
                                                <div className='col-lg-3'>
                                                    <Card video={video} streamType={type} isPoster={true} />
                                                </div> : ""
                                        )
                                    })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;