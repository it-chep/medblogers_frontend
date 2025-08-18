
interface ICity {
    id: string;
    name: string;
    doctorsCount: string;
    selected?: boolean;
}

interface ISpeciality {
    id: string;
    name: string;
    doctorsCount: string;
    selected?: boolean;
}


export interface IFilterSocial {
    name: string;
    slug: string;
    selected?: boolean;
}

export interface IFilter {
    cities: ICity[];
    specialities: ISpeciality[];
    filterInfo: IFilterSocial[];
    minSubscribers: string;
    maxSubscribers: string;
}

export interface IFilterState{
    filter: IFilter;
    isLoading: boolean;
    error: string;
}