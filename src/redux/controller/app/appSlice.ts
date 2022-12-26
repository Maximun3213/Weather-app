import {createSlice} from "@reduxjs/toolkit"

const app = createSlice({
    name: "app",
    initialState: {
        text: 1,
    },
    reducers:{
        getCurrentWeather(state, action){
            state.text = action.payload;
        }
    }
})

export const { getCurrentWeather } = app.actions;

export default app.reducer;