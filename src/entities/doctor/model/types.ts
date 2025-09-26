

export interface IDoctorMiniatureResponse {
    doctors: IDoctorMiniature[];
    page: number;
    pages: number;
}

export interface IDoctorMiniature {
    image: string;
    city: string;
    instSubsCount: string;
    instSubsCountText: string;
    instLink: string;
    name: string;
    slug: string;
    speciality: string;
    tgLink: string;
    tgSubsCount: string;
    tgSubsCountText: string;
}


interface IItem {
    id: string;
    name: string;
}

export interface IDoctor {

    code?: number;
    
    name: string;
    slug: string;
    instUrl: string;
    vkUrl: string;
    dzenUrl: string;
    tgUrl: string;
    tgChannelUrl: string;
    youtubeUrl: string;
    tiktokUrl: string;
    siteLink: string;
    specialities: IItem[];
    mainCity: IItem;
    mainSpeciality: IItem;
    tgSubsCount: string;
    tgSubsCountText: string;
    tgLastUpdatedDate: string;
    instSubsCount: string;
    instSubsCountText: string;
    instLastUpdatedDate: string;
    mainBlogTheme: string;
    image: string;
    cities: IItem[],
}

export interface IDoctorSeo{
    title: string;
    description: string;
}


export interface ISearchDoctor {
    id: string;
    name: string;
    cityName: string;
    slug: string;
    specialityName: string;
    image: string;
}



export interface ICityDoctor {
    id: string;
    name: string;
    doctorsCount: string;
}

export interface ISpecialityDoctor {
    id: string;
    name: string;
    doctorsCount: string;
}

export interface ISearchDoctors {
    cities: ICityDoctor[];
    specialities: ISpecialityDoctor[];
    doctors: ISearchDoctor[];
}