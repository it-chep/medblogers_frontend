

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

export interface ISearchFreelancers {
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