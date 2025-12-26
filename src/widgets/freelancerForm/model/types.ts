import { IPriceListItem } from "@/src/entities/freelancer";


export interface IFreelancerForm {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    telegramUsername: string;
    agreePolicy: boolean;
    cityId: number;
    specialityId: number;
    additionalCities: number[];
    additionalSpecialties: number[];
    socialNetworks: number[];
    portfolioLink: string;
    workingExperience: number;
    priceList: IPriceListItem[];
    agencyRepresentative: boolean;
}

export interface IFormError {
    field: string;
    text: string;
}