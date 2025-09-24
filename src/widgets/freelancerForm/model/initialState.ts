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
    experienceWithDoctors: false,
    portfolioLink: '',
    hasCommand: false,
    workingExperience: 0,
    priceList: [],
}