import React, { useEffect, useState } from 'react';
import { requests } from '../helper/apirequests';
import axios from '../helper/axios';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function BrowseByGenre(props) {
    const [genreList, setGenreList] = useState(null);
    const { type, id } = useParams();

    const [collectionByGenre, setCollectionByGenre] = useState(null);
    const [currentType, setCurrentType] = useState('tv');

    const fetchVideoByGenre = async (type, id) => {
        const response = await axios.get(requests.getByGenre(type, id));
        setCollectionByGenre(response.data.results);
    }

    const fetchGenreList = async (type) => {
        const response = await axios.get(requests.getGenreList(type));
        setGenreList(response.data.genres);
    }

    useEffect(() => {
        if (type && id) {
            fetchGenreList(type);
            fetchVideoByGenre(type, id);
        }
    }, [type, id]);

    const handleTypeChange = (e) => {
        let { value } = e.target;
        fetchGenreList(value);
        setCurrentType(value);
    }

    const handleGenreChange = (e) => {
        let { value } = e.target;
        fetchVideoByGenre(currentType, value);
    }

    return (
        <div className='container-fluid py-5'>
            <div className='d-flex'>
                <div className='ms-auto'>
                    <select name="type" onChange={handleTypeChange}>
                        <option value="movie">Movie</option>
                        <option value="tv">Tv</option>
                    </select>
                    <select name='genre' onChange={handleGenreChange}>
                        {
                            genreList?.map((genre) => {
                                return <option key={genre?.id} value={genre?.id}>{genre?.name}</option>
                            })
                        }
                    </select>
                </div>
            </div>

            <div className='row gy-3'>
                {
                    collectionByGenre?.map((video) => {
                        return (
                            <div className='col-lg-3'>
                                <Card key={video.id} video={video} streamType={type} />
                            </div>
                        )

                    })
                }

            </div>

        </div>
    );
}

export default BrowseByGenre;