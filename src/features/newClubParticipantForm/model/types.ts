import { ICityData } from "@/src/entities/city";

export interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    middleName: string;
    birthDate: string;
    telegramUsername: string;
    instagramUsername: string;
    vkUsername: string;
    youtubeUsername: string;
    dzenUsername: string;
    agreePolicy: boolean;
    cityId: string;
    specialityId: string;
    telegramChannel: string;
    siteLink: string;
    mainBlogTheme: string;

    additionalCities: ICityData[];
    additionalSpecialities: string[];
}