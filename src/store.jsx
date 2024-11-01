import { configureStore } from "@reduxjs/toolkit";
import muldiv from './slices/multidivid'
import plsmin from './slices/plusmins'

const countmd=configureStore({
    reducer: {
        muldivcount: muldiv,
        plsmincount: plsmin,
      }
})
export default countmd;