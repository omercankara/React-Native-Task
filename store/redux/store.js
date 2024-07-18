import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./User"; // Redux Slice'ın bulunduğu yere göre import yolu ayarlanmalı

export const store = configureStore({
    reducer:{
        user: UserReducer  // Reducer'ın anahtar adının user olmasına dikkat edin
    }
});
