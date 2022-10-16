import { configureStore } from "@reduxjs/toolkit";
import  crmSlice  from "./slice";

export default configureStore({
    reducer:{
        SPIDERLIB : crmSlice,
    }
})