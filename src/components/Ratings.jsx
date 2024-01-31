import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function Ratings(props) {
    const { voteAverage, voteCount } = props;
    let voteAvg = Math.floor(voteAverage / 2);
    const starLoop = [...Array(5)];


    return (
        <div className='py-3'>
            <div className='d-flex g-2 align-items-center'>
                {
                    starLoop.map((item, index) => {
                        return (
                            index < voteAvg ?
                                <FontAwesomeIcon key={index} icon={solidStar} />
                                : <FontAwesomeIcon key={index} icon={faStar} />
                        )
                    })
                }
                <p className='mb-0 ps-2'>({voteCount})</p>
            </div>
        </div>
    );
}

export default Ratings;