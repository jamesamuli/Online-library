import { configureStore } from "@reduxjs/toolkit";
import  spdrlblice  from "./slice";

export default configureStore({
    reducer:{
        spiderlib : spdrlblice,
    }
})