import React, { useEffect, useState } from 'react';
import axios from '../helper/axios';
import { requests } from '../helper/apirequests';
import EpisodeRow from './EpisodeRow';

function ShowDetails(props) {
    const { seasons, seriesId } = props;
    const [seasonDetails, setSeasonDetails] = useState(null);

    const fetchSeasonDetails = async (id, num) => {
        const response = await axios.get(requests.getSeasonDetails(id, num));
        setSeasonDetails(response.data.episodes);
    }

    useEffect(() => {
        if (seasons) {
            fetchSeasonDetails(seriesId, seasons[0].season_number)
        }
    }, [seasons])

    const onSeasonChange = (e) => {
        const { value } = e.target;
        fetchSeasonDetails(seriesId, value);
    }
    return (
        <div className='container-fluid py-4'>
            <div className='d-flex'>
                <div className='ms-auto'>
                    <select className='form-select' name="season" onChange={onSeasonChange}>
                        {seasons?.map((season) => (
                            <option value={season.season_number} >{season.name}</option>
                        ))
                        }
                    </select>
                </div>


            </div>
            <div className='py-3'>
                {
                    seasonDetails?.map((episode) => {
                        return (
                            <EpisodeRow key={episode?.id} episode={episode} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ShowDetails;