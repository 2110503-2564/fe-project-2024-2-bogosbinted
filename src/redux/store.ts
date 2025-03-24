import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/bookSlice";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "venue-explorer-bookings", 
    storage,                       
};
const persistedBookReducer = persistReducer(persistConfig, bookSlice);

export const store = configureStore({
    reducer:{
        bookSlice: persistedBookReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),

});

export const persistor = persistStore(store);
export type RootState= ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector