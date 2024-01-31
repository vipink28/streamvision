import React from 'react';

function GenreLink(props) {
    const { genreList } = props;
    return (
        <div className='py-3'>
            <div className='d-flex gap-2'>
                {
                    genreList?.map((item) => {
                        return (
                            <span key={item?.id} className="badge text-bg-warning d-inline-block">{item?.name}</span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GenreLink;