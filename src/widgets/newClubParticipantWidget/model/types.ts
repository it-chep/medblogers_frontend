
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
    cityId: number;
    specialityId: number;
    telegramChannel: string;
    siteLink: string;
    mainBlogTheme: string;
    marketingPreferences: string;
    additionalCities: number[];
    additionalSpecialties: number[];
}

export interface IFormError {
    field: string;
    text: string;
}