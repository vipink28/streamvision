import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/apirequests";
const initialState = {
    headerVideo: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderVideo = createAsyncThunk(
    'common/fetchHeaderVideo',
    async (param) => {
        const response = await axios.get(requests.getVideo(param.type, param.id));
        return response.data;
    }
)

export const commonSlice = createSlice({
    initialState,
    name: 'common',
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderVideo.pending, (state, action) => {
                state.headerVideo.status = "loading";
            })
            .addCase(fetchHeaderVideo.fulfilled, (state, action) => {
                state.headerVideo.status = "success";
                state.headerVideo.data = action.payload;
            })
            .addCase(fetchHeaderVideo.rejected, (state, action) => {
                state.headerVideo.status = "error";
                state.headerVideo.error = action.error;
            })
    }
})

export const selectHeaderVideo = (state) => state.common.headerVideo;

export default commonSlice.reducer;