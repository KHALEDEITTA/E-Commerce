import { createSlice } from '@reduxjs/toolkit'
import {sliderData} from '../../dataSlice/DataSlice'


export const  SliderSlice = createSlice({
    name : "Slider",
    initialState:{
        value: 0,
        length : sliderData.length,
    },
    reducers:{
        nextSlice (state ,action){
            // console.log("action next", action);
            // console.log("state next", state.value);
            state.value = action.payload > state.length -1 ? 0 : action.payload ;
        },
        prevSlice (state ,action){
            // console.log("action prev", action);
            // console.log("state prev", state);
            state.value = action.payload < state.length -1 ? 0 : action.payload ;
        },
        dotSlice (){},
    },
})

export const {nextSlice , prevSlice ,dotSlice} =SliderSlice.actions;
export default SliderSlice.reducer;