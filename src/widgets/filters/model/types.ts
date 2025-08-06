import { ICity } from "@/src/entities/city";
import { ISpeciality } from "@/src/entities/speciality";

export interface IFilterSocial {
    name: string;
    slug: string;
}

export interface IFilter {
    cities: ICity[];
    specialities: ISpeciality[];
    filter_info: IFilterSocial[];
}