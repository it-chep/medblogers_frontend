import { bindActionCreators } from "@reduxjs/toolkit"
import { useAppDispatch } from "@/src/app/store/store"
import { FilterFreelancerSlice } from "../../model/reducers/FilterSlice"




export const useFilterFreelancerActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(FilterFreelancerSlice.actions, dispatch)
}