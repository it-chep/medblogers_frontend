import { ICity } from "@/src/entities/city";
import { IDoctorSearch } from "@/src/entities/doctor";
import { ISpeciality } from "@/src/entities/speciality";




export interface ISearchDoctors {
    cities: ICity[];
    specialities: ISpeciality[];
    data: IDoctorSearch[];
}