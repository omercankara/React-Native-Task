import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User"; 
export const store = configureStore({
    reducer:{
        Users: UserReducer  
    }
});
