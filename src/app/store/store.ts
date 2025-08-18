import filterReducer from "@/src/entities/filter/model/reducers/FilterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";



const store = configureStore({
    reducer: {
        filterReducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store