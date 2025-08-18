import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, IFilterState } from "../types";


export const initialState: IFilterState = {
    filter: {
        cities: [],
        specialities: [],
        filterInfo: [],
    },
    isLoading: true,
    error: '',
}

export const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setIsLoading(state, action: PayloadAction<boolean>){
            state.isLoading = action.payload;
        },
        setFilter(state, action: PayloadAction<IFilter>){
            state.filter = action.payload;
        },
        setSelected(state, action: PayloadAction<{field: keyof IFilter, index: number, selected: boolean}>){
            state.filter[action.payload.field][action.payload.index].selected = action.payload.selected;
        }
    }
})

export default FilterSlice.reducer