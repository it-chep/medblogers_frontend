import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, IFilterState } from "../types";


export const initialState: IFilterState = {
    filter: {
        cities: [],
        specialities: [],
        filterInfo: [],
        maxSubscribers: '',
        minSubscribers: '',
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
        setSelected(state, action: PayloadAction<{field: keyof Omit<IFilter, 'minSubscribers' | 'maxSubscribers'>, name: string, selected: boolean}>){
            const targetInd = state.filter[action.payload.field].findIndex(item => item.name === action.payload.name)
            if(targetInd >= 0) {
                state.filter[action.payload.field][targetInd].selected = action.payload.selected;
            }
        },
        setCurrentMax(state, action: PayloadAction<number>){
            state.filter.maxSubscribers = String(action.payload);
        },
        setCurrentMin(state, action: PayloadAction<number>){
            state.filter.minSubscribers = String(action.payload);
        },
    }
})

export default FilterSlice.reducer