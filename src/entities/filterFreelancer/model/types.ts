
interface ICity {
    id: string;
    name: string;
    freelancersCount: number;
    selected?: boolean;
}

interface ISpeciality {
    id: string;
    name: string;
    freelancersCount: number;
    selected?: boolean;
}

interface IPriceCategoryItem {
    id: string;
    name: string;
    freelancersCount: number;
    selected?: boolean;
}

export interface ISocietyItem  {
    id: string;
    name: string;
    freelancersCount: number;
    selected?: boolean;
}

export interface IFilterFreelancer {
    societies: ISocietyItem[];
    cities: ICity[];
    specialities: ISpeciality[];
    priceCategories: IPriceCategoryItem[];
    experience_with_doctors: boolean;
}

export interface IFilterState{
    filterFreelancer: IFilterFreelancer;
    isLoading: boolean;
    error: string;
}

export type IItemFilterFreelancer = {
    id: string;
    name: string;
    freelancersCount: number;
    selected?: boolean;
}