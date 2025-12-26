import { IFreelancerForm } from "./types";




export const initialStateForm: IFreelancerForm = {
    email: '',
    firstName: '',
    lastName: '',
    middleName: '',
    telegramUsername: '',
    agreePolicy: false,
    additionalCities: [],
    additionalSpecialties: [],
    cityId: -1,
    socialNetworks: [],
    specialityId: -1,
    agencyRepresentative: false,
    portfolioLink: '',
    workingExperience: 0,
    priceList: [
        {
            name: '', amount: 0,
        },
        {
            name: '', amount: 0,
        }
    ],
}