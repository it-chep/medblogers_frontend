import { ICity } from "@/src/entities/city";
import { ISpeciality } from "@/src/entities/speciality";

export type IItem = {
    id: number;
    name: string;
}

export type IFilter = {
    cities: ICity[];
    specialities: ISpeciality[];
}