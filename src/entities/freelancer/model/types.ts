

export interface IFreelancerSpeciality {
    specialityId: number;
    specialityName: string;
}

export interface IPriceListItem {
    name: string;
    amount: number;
} 

interface ISocialNetworkItem {
    id: number;
    name: string;
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
    experienceWithDoctors: boolean;
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
    speciality: string;
    city: string;
    image: string;
    experienceWithDoctors: boolean;
    hasCommand: boolean;
    priceCategory: number;
    socialNetworks: ISocialNetworkItem[];
}