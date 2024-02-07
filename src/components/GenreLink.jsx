import React from 'react';
import { Link } from 'react-router-dom';

function GenreLink(props) {
    const { genreList, streamType } = props;
    return (
        <div className='py-3'>
            <div className='d-flex gap-2'>
                {
                    genreList?.map((item) => {
                        return (
                            <Link to={`/browsebygenre/${streamType}/${item?.id}`} key={item?.id} className="badge text-bg-warning d-inline-block">{item?.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GenreLink;