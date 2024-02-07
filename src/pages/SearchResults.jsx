import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectQuery } from '../features/common/commonSlice';
import axios from '../helper/axios';
import { requests } from '../helper/apirequests';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

function SearchResults(props) {
    const queryString = useSelector(selectQuery);
    const [collection, setCollection] = useState(null);
    const { type } = useParams();

    const fetchBySearchQuery = async (type, query) => {
        const response = await axios.get(requests.getBySearch(type, query));
        setCollection(response.data.results);
    }

    useEffect(() => {
        if (type && queryString !== '') {
            fetchBySearchQuery(type, queryString);
        }
    }, [type, queryString])

    return (
        <div className='container-fluid py-5'>
            <div className='row gy-3'>
                {
                    collection?.map((video) => {
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

export default SearchResults;