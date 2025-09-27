import { bindActionCreators } from "@reduxjs/toolkit"
import { FilterFreelancerSlice } from "../../model/reducers/FilterSlice"
import { useAppDispatch } from "@/src/app/store/store"




export const useFilterFreelancerActions = () => {
    const dispatch = useAppDispatch()
    return bindActionCreators(FilterFreelancerSlice.actions, dispatch)
}