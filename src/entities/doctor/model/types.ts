
interface ICity {
    id: number;
    name: string;
}

interface ISpeciality {
    id: number;
    name: string;
}

export interface IDoctorMiniatureResponse {
    doctors: IDoctorMiniature[];
    page: number;
    pages: number;
}

export interface IDoctorMiniature {
    image: string;
    city: ICity[];
    speciality: ISpeciality[];
    instSubsCount: string;
    instSubsCountText: string;
    instLink: string;
    name: string;
    slug: string;
    tgLink: string;
    tgSubsCount: string;
    tgSubsCountText: string;
    isKfDoctor: boolean;
}

export interface IDoctorMiniatureRes {
    image: string;
    city: string;
    speciality: string;
    instSubsCount: string;
    instSubsCountText: string;
    instLink: string;
    name: string;
    slug: string;
    tgLink: string;
    tgSubsCount: string;
    tgSubsCountText: string;
    isKfDoctor: boolean;
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

    isKfDoctor: boolean;
}

export interface IDoctorSeo{
    title: string;
    description: string;
    image: string;
}

export interface ISearchDoctor {
    id: string;
    name: string;
    cityName: string;
    slug: string;
    specialityName: string;
    image: string;
    isKfDoctor: boolean;
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