import { filterReducer } from "@/src/entities/filter";
import { filterFreelancerReducer } from "@/src/entities/filterFreelancer";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


const store = configureStore({
    reducer: {
        filterReducer,
        filterFreelancerReducer,
        
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store