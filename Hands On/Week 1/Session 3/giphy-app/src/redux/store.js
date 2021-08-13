import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gifReducer";

export const store= configureStore({
    reducer:{
        gif:gifReducer,
    }
});