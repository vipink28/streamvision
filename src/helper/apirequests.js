const API_KEY = '0d8ab7cff2692bd014bb25fca16d7158';

export const requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&page=1`,
    getCollections: (streamType, endpoint) => `${streamType}/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    getVideo: (streamType, id) => `${streamType}/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos,credits,recommendations,similar,reviews`,
    getSeasonDetails: (seasonId, seasonNumber) => `tv/${seasonId}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`
}

export const streamTypes = {
    tv: 'tv',
    movie: 'movie'
}

export const endpoints = {
    topRated: 'top_rated',
    popular: 'popular',
    upcoming: 'upcoming',
    nowPlaying: 'now_playing',
    airingToday: 'airing_today',
    onTheAir: 'on_the_air'
}