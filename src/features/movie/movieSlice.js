import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { endpoints, requests, streamTypes } from "../../helper/apirequests";
import axios from '../../helper/axios';

const initialState = {
    upcomingMovies: {
        status: "idle",
        data: null,
        error: null
    },
    nowPlayingMovies: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchUpcomingMovies = createAsyncThunk(
    'movie/fetchUpcomingMovies',
    async () => {
        const response = await axios.get(requests.getCollections(streamTypes.movie, endpoints.upcoming));
        return response.data;
    }
)

export const fetchNowPlayingMovies = createAsyncThunk(
    'movie/fetchNowPlayingMovies',
    async () => {
        const response = await axios.get(requests.getCollections(streamTypes.movie, endpoints.nowPlaying));
        return response.data;
    }
)



export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state, action) => {
                state.upcomingMovies.status = 'loading';
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.upcomingMovies.status = 'success';
                state.upcomingMovies.data = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.upcomingMovies.status = 'error';
                state.upcomingMovies.error = action.error;
            })
            .addCase(fetchNowPlayingMovies.pending, (state, action) => {
                state.nowPlayingMovies.status = 'loading';
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlayingMovies.status = 'success';
                state.nowPlayingMovies.data = action.payload;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.nowPlayingMovies.status = 'error';
                state.nowPlayingMovies.error = action.error;
            })
    }
});


export const selectUpcomingMovies = (state) => state.movies.upcomingMovies;
export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;

export default movieSlice.reducer;