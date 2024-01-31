import React, { useEffect, useState } from 'react';

function YouTubePlayer(props) {
    const { trailer } = props;
    const [trailerData, setTrailerData] = useState(null);

    useEffect(() => {
        if (trailer?.results.length > 0) {
            const trailerList = trailer?.results.filter((item) => {
                return item.type === "Trailer"
            })
            setTrailerData(trailerList[0]);
        }
    }, [trailer])



    return (
        <div class="ratio ratio-16x9 youtube-player">
            <iframe src={`https://www.youtube.com/embed/${trailerData?.key}?rel=0&autoplay=1&mute=1`} title="YouTube video" allowfullscreen></iframe>
        </div>
    );
}

export default YouTubePlayer;