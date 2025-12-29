
interface ICity {
    id: number;
    name: string;
}

interface ISpeciality {
    id: number;
    name: string;
}

export interface IFreelancerSpeciality {
    specialityId: number;
    specialityName: string;
}

export interface IFreelancerSeo{
    title: string;
    description: string;
    image: string;
}

export interface IFreelancerCity {
    cityId: number;
    cityName: string;
}

export interface IPriceListItem {
    name: string;
    amount: number;
} 

interface IPriceListItemRes {
    name: string;
    amount: string;
} 

interface ISocialNetworkItem {
    id: string;
    name: string;
    slug: string;
} 

export interface ICityFreelancer{
    id: string;
    name: string;
    freelancersCount: number;
} 

export interface ISpecialityFreelancer{
    id: string;
    name: string;
    freelancersCount: number;
} 

export interface ISearchFreelancer {
    id: string;
    name: string;
    cityName: string;
    slug: string;
    specialityName: string;
    image: string;
    priceCategory: number;
    socialNetworks: ISocialNetworkItem[];
}

export interface ISearchFreelancers {
    freelancers: ISearchFreelancer[];
    cities: ICityFreelancer[];
    specialities: ISpecialityFreelancer[];
}

export interface IStatisticFreelancers {
    freelancersCount: number; 
}

export interface IFreelancerMiniature {
    name: string;
    slug: string;
    speciality: ISpeciality[];
    city: ICity[];
    image: string;
    agencyRepresentative : boolean;
    priceCategory: string;
    socialNetworks: ISocialNetworkItem[];
}

export interface IFreelancer {

    code?: number;

    name: string;
    slug: string;
    tgUrl: string;
    priceCategory: string;
    portfolioLink: string;
    image: string;
    cities: ICityFreelancer[];
    specialities: ISpecialityFreelancer[];
    mainCity: ICityFreelancer;
    mainSpeciality: ISpecialityFreelancer;
    socialNetworks: ISocialNetworkItem[];
    priceList: IPriceListItemRes[];
    workingExperience: string;
    agencyRepresentative: boolean;
}

export interface IRecommendation {
    name: string;
    slug: string;
    speciality: string;
    city: string;
    image: string
}