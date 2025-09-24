import { IPriceListItem } from "@/src/entities/freelancer";


export interface IFreelancerForm {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    telegramUsername: string;
    agreePolicy: boolean;
    experienceWithDoctors: boolean;
    cityId: number;
    specialityId: number;
    additionalCities: number[];
    additionalSpecialties: number[];
    socialNetworks: number[];
    portfolioLink: string;
    hasCommand: boolean;
    workingExperience: number;
    priceList: IPriceListItem[];
}

export interface IFormError {
    field: string;
    text: string;
}