
export interface IFilterSocial {
    name: string;
    slug: string;
}

export interface IFilterItem {
    id: number;
    name: string;
    doctors_count: number;
}

export interface IFilter {
    cities: IFilterItem[];
    specialities: IFilterItem[];
    filter_info: IFilterSocial[];
}