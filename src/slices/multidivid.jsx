import { createSlice } from "@reduxjs/toolkit";

const muldiv=createSlice({
    name:'countermd',
    initialState:{value:1},
    reducers:{
        multiply:(state)=>{
            state.value *=2;
        },
        divide:(state)=>{
            state.value /=2;
        },
    },
});
export const {multiply,divide}=muldiv.actions;
export default muldiv.reducer;