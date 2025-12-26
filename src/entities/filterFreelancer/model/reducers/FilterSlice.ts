import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterFreelancer, IFilterState } from "../types";


export const initialState: IFilterState = {
    filterFreelancer: {
        cities: [],
        specialities: [],
        priceCategories: [],
        societies: [],
    },
    isLoading: false,
    error: '',
}

export const FilterFreelancerSlice = createSlice({
    name: 'filterFreelancer',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setFilter(state, action: PayloadAction<IFilterFreelancer>){
            state.filterFreelancer = action.payload;
        },
       
        setSelected(state, action: PayloadAction<{field: keyof IFilterFreelancer, name: string, selected: boolean}>){
            const targetInd = state.filterFreelancer[action.payload.field].findIndex(item => item.name === action.payload.name)
            if(targetInd >= 0) {
                state.filterFreelancer[action.payload.field][targetInd].selected = action.payload.selected;
            }
        },
    }
})

export default FilterFreelancerSlice.reducer