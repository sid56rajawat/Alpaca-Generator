import { configureStore } from "@reduxjs/toolkit";
import alpacaReducer from './alpaca-state';

export const store = configureStore({
    reducer: {
        alpaca: alpacaReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;