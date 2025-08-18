import { bindActionCreators } from "@reduxjs/toolkit"
import { FilterSlice } from "../../model/reducers/FilterSlice"
import { useAppDispatch } from "@/src/app/store/store"




export const useFilterActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(FilterSlice.actions, dispatch)
}